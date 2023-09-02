import React from "react";
import { RaceBy } from "@uiball/loaders";
import styles from "./Loading.module.css";

export default function LoadingPage() {
  return(
    <div className={styles.loadingBg}>
      <p>시나리오를 분석하고 있어요!</p>
      <RaceBy className={styles.gif} size={650} lineWeight={20} speed={1.4} color="#185CF9" />
    </div>
  )
}
