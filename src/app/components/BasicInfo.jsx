"use client";
import React, { useState, useEffect } from "react";
import styles from "./BasicInfo.module.css";

const initialValue = {
  title: "",
  budget: "",
  original_language: "",
  runtime: "",
  genres: [],
  scenario: "",
  age: "",
};
const langs = [
  { lang: "선택해주세요.", code: "" },
  { lang: "한국", code: "ko" },
  { lang: "영어", code: "en" },
  { lang: "중국어", code: "zh" },
  { lang: "일본어", code: "ja" },
  { lang: "프랑스어", code: "fr" },
  { lang: "스페인어", code: "es" },
  { lang: "독일어", code: "de" },
  { lang: "러시아어", code: "ru" },
  { lang: "이탈리아어", code: "it" },
  { lang: "힌디어", code: "hi" },
  { lang: "기타", code: "etc" },
];

export default function BasicInfo({ btnHandler }) {
  const [productInfo, setProductInfo] = useState(
    JSON.parse(localStorage.getItem("productInfo")) || initialValue
  );
  const [titleInput, setTitleInput] = useState(productInfo.title || "");
  const [budgetInput, setBudgetInput] = useState(productInfo.budget || "");
  const [selectInput, setSelectInput] = useState(
    productInfo.original_language || ""
  );
  useEffect(() => {
    const info = {
      ...productInfo,
      title: titleInput,
      budget: budgetInput,
      original_language: selectInput,
    };
    localStorage.setItem("productInfo", JSON.stringify(info));
    titleInput && budgetInput && selectInput
      ? btnHandler(true)
      : btnHandler(false);
  }, [titleInput, budgetInput, selectInput]);

  return (
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.headerTextWrapper}>
          <p>입력한 정보를 바탕으로 분석해 드릴게요!</p>
          <img src="./pencil.png" alt="pencil" />
        </div>
      </div>
      <div className={styles.row_1}>
        <p className={styles.inputTitle}>제목</p>
        <div
          className={`${styles.inputWrapper} ${
            titleInput && styles.activeTitle
          }`}
        >
          <input
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            type="text"
            placeholder="입력해주세요."
          />
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles.row_2}>
        <div className={styles.selectWrapper}>
          <p className={styles.inputTitle}>작품 언어</p>
          <div className={styles.selectWrapper}>
            <select
              className={`${selectInput && styles.isSelected}`}
              onChange={(e) => setSelectInput(e.target.value)}
              value={selectInput}
              name=""
              id=""
            >
              {langs.map((e, idx)=>{return (
                <option key={idx} className={styles.option} value={e.code}>
                {e.lang}
              </option>
              )})}
            </select>
            <img className={styles.downBtnIcon} src="/downBtnIcon.png" alt="" />
          </div>
        </div>
        <div className={styles.budgetWrapper}>
          <p className={styles.inputTitle}>예상 예산</p>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
              placeholder="달러 단위로 입력해주세요."
            />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
