"use client";
import { useRef, useState, useContext } from "react";
import styles from "./page.module.css";
import { LoginContext } from "../context/LoginContext";

export default function LoginPage() {
  const { loginHandler } = useContext(LoginContext);
  const [isVisible, setIsVisible] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const login = (e) => {
    e.preventDefault();

    const userInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };
    fetch("http://34.64.248.207:7070/token/", options)
      .then((res) => res.json())
      .then((result) => {
        // console.log("loginSuccess : ", result);
        if (result.access === undefined) {
          alert("아이디와 비빌번호를 정확히 입력해주세요.");
        } else {
          localStorage.setItem("userSession", result.access);
          localStorage.setItem("sessionRefresh", result.refresh);
          loginHandler();
        }
      })
      .catch((err) => {
        console.error("로그인 에러:", err);
      });
  };

  const googleLogin = (e) => {
    e.preventDefault();
    console.log("1");
  };

  return (
      <form className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <p className={styles.headText}>로그인을 하면 저장이 가능해요!</p>
          <p className={styles.subText}>시나리오 분석 내용을 저장해드릴게요.</p>
          <div className={styles.inputId}>
            <input
              ref={emailRef}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className={styles.inputPw}>
            <input
              ref={passwordRef}
              type={`${isVisible ? "text" : "password"}`}
              placeholder="비밀번호를 입력해주세요."
            />
            <img
              src={`${isVisible ? "/eyeOpened.png" : "/eyeClosed.png"}`}
              alt=""
              onClick={() => setIsVisible(!isVisible)}
            />
          </div>
          <div className={styles.redirectWrapper}>
            <p>회원가입</p>
            <p>아이디 비밀번호 찾기</p>
          </div>
          <button type="button" onClick={login} className={styles.loginBtn}>
            로그인
          </button>
          <button
            onClick={googleLogin}
            className={styles.googleLoginBtn}
            disabled
          >
            <img src="/googleLogo.png" alt="googleLogo" />
            구글 로그인
          </button>
        </div>
      </form>
  );
}
