'use client'
import React, { useEffect, useState } from 'react'
import styles from './VoteAverage.module.css'

export default function VoteAverage({data}) {
  const [height, setHeight] = useState(0);
  useEffect(()=>{
    let score = data.toFixed(1);
    setHeight(score * 23);
  })
  return (
    <div className={styles.predictionSection}>
      <div className={styles.VoteAverageTextWrapper}>
        <p className={styles.VoteAverageTitleText}>
          A시나리오의
          <br />
          평점을 예측해 봤어요.
        </p>
        <p className={styles.VoteAverageDescText}>
          관객들의 평점을 예측한 결과에요
        </p>
        <p className={styles.VoteAverageDescText}>
          10점을 기준으로
        </p>
      </div>
      <div className={styles.VoteAverageGraph}>
        {/* 좌측 바 그래프 */}
        <div className={styles.wrap}>
          <p className={`${styles.textBlue} ${styles.votePredictScoreText}`}>예상 평점</p>
          <div className={styles.totalScoreGraph}>
            <div style={{ height: height && `${height}px` }}  className={styles.voteAverageScoreGraph}></div>
          </div>
          <div style={{ bottom: height && `${height}px` }} className={styles.voteAverageScoreWrapper}>
            <p className={`${styles.voteAverageScore}`}>{data.toFixed(1)}점</p>
            <div className={styles.tooltipArrow}></div>
          </div>
        </div>
        {/* 우측 장르별 평균 점수 */}
        <div className={styles.genreContainer}>
          <div className={styles.genreAverageWrapper}>
            <div className={styles.genreTextWrapper}>
              <p className={styles.textBlue}>가족 장르 평균</p>
            </div>
            <div className={styles.genreScoreWrapper}>
              <p className={styles.genreScore}>6.2점</p>
              <div className={styles.tooltipArrow}></div>
              </div>
          </div>
          <div className={styles.genreAverageWrapper}>
            <div className={styles.genreTextWrapper}>
              <p className={styles.textBlue}>공포 장르 평균</p>
            </div>
            <div className={styles.genreScoreWrapper}>
              <p className={styles.genreScore}>5.9점</p>
              <div className={styles.tooltipArrow}></div>
            </div>
          </div>
          <div className={styles.genreAverageWrapper}>
            <div className={styles.genreTextWrapper}>
              <p className={styles.textBlue}>로맨스 장르 평균</p>
            </div>
            <div className={styles.genreScoreWrapper}>
              <p className={styles.genreScore}>6.3점</p>
              <div className={styles.tooltipArrow}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
