"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import KeywordSuggest from "../components/predictionSection/keywordSuggest";
import VoteAverage from "../components/predictionSection/VoteAverage";
import PredictRevenue from "../components/predictionSection/PredictRevenue";

export default function ResultPage() {
  const [data, setData] = useState('');
  const [voteAverage, setVoteAverage] = useState();
  const [revenuePredict, setRevenuePredict] = useState();
  const [predictionPart, setPredictionPart] = useState("1");
  const router = useRouter();

  useEffect(() => {
    // setLoading(true);
    // 로그인 사용자만 사용 가능 or 로그인 창으로 리다이렉트
    const isLoggedin = localStorage.getItem("userSession");
    if (!isLoggedin) {
      router.push("/login");
    } else {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userSession")}`,
        },
      };

      fetch(
        "http://34.64.248.207:7070/result/list?category=movie&page=1",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          dataHandler(res.results);
        })
        .catch((err) => console.error("data get error:", err));
    }
    // setData(fetchData);
  }, []);

  const dataHandler = (resultData) => {
    console.log("진입");
    setData(resultData)
    // 예상 평점
    setVoteAverage(resultData[0].output.vote_average);
    // 예상 수익
    setRevenuePredict(resultData[0].analyze);
  };

  const predictionPartHandler = (e) => {
    const target = e.currentTarget.id;
    setPredictionPart(target);
    dataHandler(data);
  };

  return (
    <>
      {data != '' && (
        <div className={`${styles.contents} contents`}>
          <div className={styles.header}>
            <p className={styles.active}>분석 결과</p>
            <p className="">전략 수립</p>
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.mainContents}>
              <div className={styles.resultHistory}>
                {/* 분석 결과 히스토리 */}
                {data &&
                  data.map((ele, idx) => {
                    return (
                      <div key={idx} className={styles.list}>
                        <p className={`${styles.listType} ${ele.category}`}>
                          {ele.category}
                        </p>
                        <p className={styles.scenarioName}>{ele.input.title}</p>
                        <p className={styles.scenarioDesc}>
                          {ele.input.scenario}
                        </p>
                      </div>
                    );
                  })}
              </div>
              {/* 분석 결과 메인 정보 */}
              <div className={styles.resultBody}>
                <div className={styles.topSection}>
                  <div className={styles.banner}></div>
                </div>
                <div className={styles.middleSection}>
                  <div className={styles.typeBoxWrapper}>
                    <div
                      id="1"
                      className={styles.typeBox}
                      onClick={predictionPartHandler}
                    >
                      <p>줄거리</p>
                      <p>키워드 추천</p>
                    </div>
                    <div
                      id="2"
                      className={styles.typeBox}
                      onClick={predictionPartHandler}
                    >
                      <p>예상 평점</p>
                    </div>
                    <div
                      id="3"
                      className={styles.typeBox}
                      onClick={predictionPartHandler}
                    >
                      <p>예상 수익</p>
                    </div>
                  </div>
                  {/* 키워드 추천, 예상 평점, 예상 수익 */}
                  {predictionPart === "1" && <KeywordSuggest data={data} />}
                  {predictionPart === "2" && <VoteAverage data={voteAverage} />}
                  {predictionPart === "3" && (
                    <PredictRevenue data={revenuePredict} />
                  )}
                </div>
                <div className={styles.bottomSection}>
                  <div className={styles.analyzeTextWrapper}>
                    <p className={styles.analyzeText}>{revenuePredict || ""}</p>
                  </div>
                </div>
              </div>
              <div className={styles.bottomBanner}>
                <img src="/graphImg.png"></img>
                <div className={styles.descWrapper}>
                  <p>
                    시나리오 분석 결과를 잘 확인하셨나요?
                    <br />
                    성공 확률을 높이고 싶다면 솔루션을 통해 보완해보세요!
                  </p>
                  <Link className={styles.btn} href="#">
                    바로 가기
                  </Link>
                </div>
              </div>
            </div>
            {/* 우측 사이드 네비 */}
            <div className={styles.sideNav}>
              <div className={styles.topPart}>
                <div className={styles.imgDiv}></div>
              </div>
              <div className={styles.bottomPart}>
                <p className={styles.titleText}>시나리오 분석을 완료했다면</p>
                <p className={styles.descText}>
                  체계적인 통합 솔루션으로 완성도와 성공확률을 높여보세요!
                </p>
                <Link className={styles.btn} href="#">
                  바로 가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
