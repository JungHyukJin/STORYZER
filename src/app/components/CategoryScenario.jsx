import React, { useEffect, useState } from 'react'
import styles from './CategoryScenario.module.css';

export default function CategorySummary({btnHandler}) {
  const [productInfo, setProductInfo] = useState(()=>JSON.parse(localStorage.getItem('productInfo')));

  const scenarioHandler = (e) => {
    const text = e.target.value;
    setProductInfo({...productInfo, scenario: text})
  }
  useEffect(()=>{
    localStorage.setItem('productInfo', JSON.stringify(productInfo));
    productInfo.scenario === "" ? btnHandler(false) : btnHandler(true);
  },[productInfo]);
  

  return (
    <div className={styles.infoWrapper}>
      <div >
        <div className={styles.headerTextWrapper}>
          <p>이제 줄거리를 알려주시면  분석해 드릴게요!</p>
          <img src="./starEffect.png" alt="starEffect" />
        </div>
        <div className={styles.textAreaWrapper}>
            <p>줄거리</p>
            <textarea value={productInfo ? productInfo.scenario: ""} onChange={scenarioHandler}>

            </textarea>
        </div>
      </div>
    </div>
  )
}
