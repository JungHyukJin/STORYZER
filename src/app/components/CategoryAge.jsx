"use client";
import React, { useEffect, useState } from "react";
import styles from "./CategoryAge.module.css";

const ageArray = [
  { name: "전 연령", id: "all", isActive: false },
  { name: "12세 이상", id: "aboveTwelve", isActive: false },
  { name: "성인", id: "adult", isActive: false },
];

export default function CategoryAge({ btnHandler }) {
  const [age, setAge] = useState(ageArray);
  const [productInfo, setProductInfo] = useState(() =>
    JSON.parse(localStorage.getItem("productInfo"))
  );

  const ageHandler = (e) => {
    const target = e.target.id;
    setAge(
      age.map((ele) => {
        if (ele.id === target) {
          ele.isActive = true;
        } else {
          ele.isActive = false;
        }
        return ele;
      })
    );
    localStorage.setItem('productInfo', JSON.stringify({...productInfo, age:target}))
  };
  
  // 첫 진입 시만 확인
  useEffect(()=>{
    const productInfo = JSON.parse(localStorage.getItem('productInfo'));
    if(productInfo.age === ''){
      setAge(ageArray)
    }
  },[])

  // 버튼 활성화/비활성화
  useEffect(()=>{
    const productInfo = JSON.parse(localStorage.getItem('productInfo'));
    productInfo.age != '' ? btnHandler(true) : btnHandler(false);
  },[ageHandler])

  return (
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.headerTextWrapper}>
          <p>어느 연령층을 생각하고 계세요?</p>
          <img src="./speechBubble.png" alt="speechBubble" />
        </div>
        <p className={styles.noteText}>
          어떤 장르인가요? 중복 선택이 가능해요.
        </p>
      </div>
      <div className={styles.genreList}>
        {ageArray.map((e, idx) => {
          return (
            <div
              key={idx}
              id={e.id}
              className={`${!e.isActive ? '' : styles.active} ${styles.list}`}
              value={e.name}
              onClick={ageHandler}
            >
              {e.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
