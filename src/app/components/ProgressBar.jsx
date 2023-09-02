"use client";
import { useRouter } from "next/navigation";
import styles from "./ProgressBar.module.css";
import React, { useEffect, useState } from "react";
// import Loading from "../components/Loading";

export default function ProgressBar({ stepHandler, btnState, loadingHandler }) {
  // 이전, 다음 버튼 상태 받아서 컴포넌트 변경해주기
  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const btnHandler = (e) => {
    const type = e.target.id;
    if (type === "prev" && step > 1) {
      setStep((step) => step - 1);
    } else if (type === "next" && step < 5) {
      setStep((step) => step + 1);
    }
  };

  // 완료 버튼 -> 제출
  // const router = useRouter();
  const submitHandler = () => {
    const savedData = JSON.parse(localStorage.getItem("productInfo"));
    const sendData = {
      title: savedData.title,
      scenario: savedData.scenario,
      budget: savedData.budget,
      original_language: savedData.original_language,
      runtime: savedData.runtime,
      genres: savedData.genres,
    };
    loadingHandler(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userSession")}`,
      },
      body: JSON.stringify(sendData),
    };
    fetch("http://34.64.248.207:7070/api/movie/prediction", options)
      .then((res) => res.json())
      .then((result) => {
        // console.log('result', result)
        localStorage.removeItem("productInfo");
        router.push("/results");
        loadingHandler(false);
      })
      .catch((err) => {
        console.error("data send error:", err)});
  };

  useEffect(() => {
    stepHandler(step);
  }, [step]);
  return (
    <>
      {/* {isLoading && <Loading />} */}
      <div className={styles.progressBarContainer}>
        {/* 우측 진행 상태 확인하는 창 */}
        <div className={styles.progressBarWrapper}>
          <p className={styles.headerText}>정보를 입력해주세요.</p>
          {/* 기본 정보 상태창 */}
          <div className={styles.row_1}>
            <div className={styles.step}>1</div>
            <div className={styles.barContainer}>
              <p className={styles.titleText}>기본 정보</p>
              <div className={styles.barWrapper}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            </div>
          </div>
          {/* 분류 상태창 */}
          <div className={styles.row_2}>
            <div className={styles.step}>2</div>
            <div className={styles.barContainer}>
              <p className={styles.titleText}>분류</p>
              <div className={styles.barWrapper}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            </div>
          </div>
          {/* 내용 상태창 */}
          <div className={styles.row_3}>
            <div className={styles.step}>3</div>
            <div className={styles.barContainer}>
              <p className={styles.titleText}>내용</p>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        {/* 이전, 다음, 완료 버튼 */}
        <div className={styles.btnWrapper}>
          <button
            type="button"
            id="prev"
            onClick={btnHandler}
            disabled={step === 1 ? true : false}
          >
            이전
          </button>
          {step === 5 ? (
            <button
              type="button"
              id="next"
              onClick={submitHandler}
              disabled={btnState}
            >
              완료
            </button>
          ) : (
            <button
              type="button"
              id="next"
              onClick={btnHandler}
              disabled={btnState}
            >
              다음
            </button>
          )}
        </div>
      </div>
    </>
  );
}
