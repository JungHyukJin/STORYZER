"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import BasicInfo from "../components/BasicInfo";
import ProgressBar from "../components/ProgressBar";
import CategoryGenre from "../components/CategoryGenre";
import CategoryAge from "../components/CategoryAge";
import CategoryRuntime from "../components/CategoryRuntime";
import CategoryScenario from "../components/CategoryScenario";
import { useRouter } from "next/navigation";
import LoadingPage from "../components/LoadingPage";

export default function AnalyzePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const stepHandler = (nowStep) => setStep(nowStep);
  const btnHandler = (state) => {
    if (state) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  const loadingHandler = (status) => {
    setIsLoading(status);
  }

  useEffect(()=>{
    // setLoading(true);
    // 로그인 사용자만 사용 가능 or 로그인 창으로 리다이렉트
    const isLoggedin = localStorage.getItem("userSession")
    if(isLoggedin){
        return;
    } else {
        router.push('/login');
    };
  },[])

  return (
    <>
      {!isStarted ? (
        <main className={`${styles.home} pageLoadEffect`}>
          <div className={styles.homeIntroText}>
            <p>시나리오 성공 예측!</p>
            <p>STORYZER</p>
            <p>당신의 이야기를 성공으로 이끌어내는 첫 걸음!</p>
            <p>시나리오 분석으로 예측 가능한 성공을 향해 나아갑니다</p>
          </div>
          <button className={styles.startBtn} onClick={()=>setIsStarted(true)}>
            시작하기
          </button>
        </main>
      ) : (
        <div className={`${styles.contents} contents`}>
          <div className={styles.category}>
            <p className={styles.active}>영화</p>
            <p className="">드라마</p>
            <p className="">소설</p>
          </div>
          <div className={styles.container}>
            {isLoading && <LoadingPage />}
            {step === 1 && <BasicInfo btnHandler={btnHandler} />}
            {step === 2 && <CategoryGenre btnHandler={btnHandler} />}
            {step === 3 && <CategoryAge btnHandler={btnHandler} />}
            {step === 4 && <CategoryRuntime btnHandler={btnHandler} />}
            {step === 5 && <CategoryScenario btnHandler={btnHandler} />}
            <ProgressBar stepHandler={stepHandler} btnState={isActive} loadingHandler={loadingHandler} />
          </div>
        </div>
      )}
    </>
  );
}
