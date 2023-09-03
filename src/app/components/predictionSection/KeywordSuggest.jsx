'use client'
import { useEffect, useState } from 'react';
import styles from './KeywordSuggest.module.css'

export default function KeywordSuggest({data}) {
  const [keywordData, setKeywordData] = useState();

  useEffect(()=> {
    // 줄거리 키워드 추천 데이터
    const keywordArray = [];
    const keywords = data[0].output.scenario.type_keyword;
    for (let [key, value, idx] of Object.entries(keywords)) {
      keywordArray.push({ name: key, number: value });
    };
    keywordArray.sort(function (a, b) {
      return b.number - a.number;
    });
    setKeywordData(keywordArray.filter((item, index) => index <=8));
  console.log('aassass', keywordData)
  },[])

  return (
    <div className={styles.predictionSection}>
      <div className={styles.keywordTextWrapper}>
        <p className={styles.keywordTitleText}>
          A시나리오에
          <br />
          어울리는 추천 키워드에요!
        </p>
        <p className={styles.keywordDescText}>
          데이터를 토대로 키워드를 뽑아봤어요.
        </p>
        <p className={styles.keywordDescText}>
          시나리오에 다양하게 활용해 보세요.
        </p>
      </div>
      <div className={styles.keywordGraph}>
        {keywordData && keywordData.map((ele, idx) => {
          return (
            <div key={idx} className={styles.circle}>
              {ele.name}
            </div>
          );
        })}
      </div>
    </div>
  )
}
