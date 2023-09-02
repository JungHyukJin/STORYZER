import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={`${styles.container} pageLoadEffect`}>
      <div className={styles.bgImg}>
        <div className={styles.wrapper}>
          <p>영화 소설 웹툰</p>
          <p>시나리오는 스토라이저에서!</p>
          <Link className={styles.startBtn} href="/analyze">
            시작하기
          </Link>
        </div>
        <img
          className={styles.arrowDownBtn}
          src="/aboutPage_img/arrowDownBtn.png"
          alt=""
        />
      </div>
      <div className={styles.secondWrapper}>
        <p>
          관객들의 반응을 예측하고 잠재적 인기 요소를 파악해 볼까요?
          <br />
          이야기의 강점과 약점을 기반으로 제공되는
          <br />
          피드백을 통해 멋진 시나리오를 완성하실 거예요.
        </p>
      </div>
      <div className={styles.thirdWrapper}>
        <Link href="/analyze">
          <img src="/aboutPage_img/analyzeImg.png" alt="" />
        </Link>
        <Link href="/results">
          <img src="/aboutPage_img/feedbackImg.png" alt="" />
        </Link>
        <Link href="#">
          <img src="/aboutPage_img/promotionImg.png" alt="" />
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  );
}
