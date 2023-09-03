'use client'
import React, { useEffect, useState } from "react";
import styles from './PredictRevenue.module.css'

const type = ["매우 높은", "높은", "보통", "매우 낮은", "낮은"];
const typeDesc = [
  '매우 높은 이익이 예측됩니다! \n 성공적인 작품이 될 것 같아요.',
  '높은 이익이 예측됩니다! \n 성공적인 작품이 될 것 같아요.',
  '시나리오 분석 결과, 해당 \n 평균 정도의 수익으로 예측됩니다.',
  '입력하신 예산에 비해 예상 수익이 \n 매우 낮을 것으로 예측됩니다.',
  '입력하신 예산에 비해 예상 수익이 \n 낮을 것으로 예측됩니다.',
];
export default function PredictRevenue({ data }) {
  const [graphType, setGraphType] = useState();
  useEffect(() => {
    for(let target of type) {
      if (data.includes(target)) {
        // 인덱스로 데이터 뿌려주기 -> 추후 변경 필요
        setGraphType(type.indexOf(target));
        break;
      }
    }
  }, []);
  return (
    <div className={styles.predictionSection}>
      <div className={styles.revenueTextWrapper}>
        <p className={styles.revenueTitleText}>
          A시나리오의 <br />예상 수익: {type[graphType]}
        </p>
        <p className={styles.revenueDescText}>
          {typeDesc[graphType]}
        </p>
      </div>
      <div className={styles.revenueGraph}>
        {graphType === 0 && <img src="/predictRevenue_img/0.png" alt="" />}
        {graphType === 1 && <img src="/predictRevenue_img/1.png" alt="" />}
        {graphType === 2 && <img src="/predictRevenue_img/2.png" alt="" />}
        {graphType === 3 && <img src="/predictRevenue_img/3.png" alt="" />}
        {graphType === 4 && <img src="/predictRevenue_img/4.png" alt="" />}
      </div>
    </div>
  );
}
 