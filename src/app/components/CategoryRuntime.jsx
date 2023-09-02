import React, { useEffect, useState } from "react";
import styles from "./CategoryRuntime.module.css";

export default function CategoryRuntime({ btnHandler }) {
  const [productInfo, setProductInfo] = useState(() =>
    JSON.parse(localStorage.getItem("productInfo"))
  );

  const runtimeHandler = (e) => {
    const text = e.target.value;
    setProductInfo({ ...productInfo, runtime: text });
  };
  useEffect(() => {
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
    productInfo.runtime === "" ? btnHandler(false) : btnHandler(true);
  }, [productInfo]);
  
  return (
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.headerTextWrapper}>
          <p>마지막으로 필요한 정보예요!</p>
          <img src="./clap.png" alt="clap" />
        </div>
        <p className={styles.noteText}>영화의 길이를 예상해서 입력해주세요.</p>
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="예시: 120분" value={productInfo ? productInfo.runtime: ""}  onChange={runtimeHandler}/>
        <img src="/check.png" alt="check" />
      </div>
    </div>
  );
}
