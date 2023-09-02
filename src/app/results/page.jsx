"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const mockData = [
  {
    input: {
      title: "아 진짜 힘들다",
      budget: "100000000",
      genres: ["Horror", "Documentary", "War"],
      runtime: "142",
      scenario:
        "22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST",
      original_language: "ko",
    },
    output: {
      revenue: 285013312,
      scenario: {
        pred_type: 7,
        type_keyword: {
          new: 9,
          ford: 11,
          women: 12,
          queens: 15,
          hendrix: 11,
          champion: 7,
          saturday: 6,
          wrestling: 36,
          tournament: 8,
          championship: 15,
        },
      },
      vote_average: 6.965959548950195,
    },
    analyze:
      "입력하신 영화의 제목은 아 진짜 힘들다이고, \"22시간째 앉아서 밥도 안먹고 개발 중 TEST\"의 내용을 무수히 반복하여 분석한 결과를 담고 있는 영화입니다.\n예상 수익은 285,013,312달러이며, 입력하신 예산의 100,000,000달러와 비교하여 매우 높은 수익을 거둘 것으로 예상됩니다.\n예상되는 평점은 6.97점이며, 10점을 기준으로 훌륭한 시나리오로 판단됩니다. \n입력하신 시나리오와 유사한 타입의 영화들이 주로 사용한 키워드로는 {'wrestling': 36, 'queens': 15, 'championship': 15, 'women': 12, 'ford': 11, 'hendrix': 11, 'new': 9, 'tournament': 8, 'champion': 7, 'saturday': 6} 등이 있습니다. 더 나은 시나리오를 작성하기 위해서 위와 같은 키워드를 추가적으로 사용해 보시는 것을 추천드립니다.\n입력하신 영화의 장르는 ['Horror', 'Documentary', 'War']이며, 해당 장르 영화의 평균 수익과 평점은 Horror 장르의 평균 수익은 49,800,077달러, 평균 평점은 5.91점, Documentary 장르의 평균 수익은 17,454,494달러, 평균 평점은 7.0점, War 장르의 평균 수익은 78,008,788달러, 평균 평점은 6.78점과 같습니다. \n해당 장르와 비교하여 우수한 영화로 예상됩니다.",
    category: "movie",
  },
  {
    input: {
      title: "아 진짜 힘들다",
      budget: "100000000",
      genres: ["Horror", "Documentary", "War"],
      runtime: "142",
      scenario:
        "22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST22시간째 앉아서 밥도 안먹고 개발 중  TEST",
      original_language: "ko",
    },
    output: {
      revenue: 285013312,
      scenario: {
        pred_type: 7,
        type_keyword: {
          new: 9,
          ford: 11,
          women: 12,
          queens: 15,
          hendrix: 11,
          champion: 7,
          saturday: 6,
          wrestling: 36,
          tournament: 8,
          championship: 15,
        },
      },
      vote_average: 6.965959548950195,
    },
    analyze:
      "입력하신 영화의 제목은 아 진짜 힘들다이고, \"22시간째 앉아서 밥도 안먹고 개발 중 TEST\"의 내용을 무수히 반복하여 분석한 결과를 담고 있는 영화입니다.\n예상 수익은 285,013,312달러이며, 입력하신 예산의 100,000,000달러와 비교하여 매우 높은 수익을 거둘 것으로 예상됩니다.\n예상되는 평점은 6.97점이며, 10점을 기준으로 훌륭한 시나리오로 판단됩니다. \n입력하신 시나리오와 유사한 타입의 영화들이 주로 사용한 키워드로는 {'wrestling': 36, 'queens': 15, 'championship': 15, 'women': 12, 'ford': 11, 'hendrix': 11, 'new': 9, 'tournament': 8, 'champion': 7, 'saturday': 6} 등이 있습니다. 더 나은 시나리오를 작성하기 위해서 위와 같은 키워드를 추가적으로 사용해 보시는 것을 추천드립니다.\n입력하신 영화의 장르는 ['Horror', 'Documentary', 'War']이며, 해당 장르 영화의 평균 수익과 평점은 Horror 장르의 평균 수익은 49,800,077달러, 평균 평점은 5.91점, Documentary 장르의 평균 수익은 17,454,494달러, 평균 평점은 7.0점, War 장르의 평균 수익은 78,008,788달러, 평균 평점은 6.78점과 같습니다. \n해당 장르와 비교하여 우수한 영화로 예상됩니다.",
    category: "movie",
  },
];

export default function ResultPage() {
  const [data, setData] = useState();
  const [keywords, setKeywords] = useState([]);
  const router = useRouter();
  useEffect(() => {
    // setLoading(true);
    // 로그인 사용자만 사용 가능 or 로그인 창으로 리다이렉트
    const isLoggedin = localStorage.getItem("userSession");
    if (!isLoggedin){
      router.push("/login")
    } else {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userSession")}`,
        },
      };
  
      // fetch("http://34.64.248.207:7070/result/list?category=movie&page=1&user_id=0", options)
      fetch(
        "http://34.64.248.207:7070/result/list?category=movie&page=1",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log('res.results', res.results);
          setData(res.results);
        })
        .catch((err) => console.error("data get error:", err));
    }
  }, []);

  useEffect(() => {
    const keywordArray = [];
    const keywordData = data && data[0].output.scenario.type_keyword || {};
    for (let [key, value, idx] of Object.entries(keywordData)) {
      keywordArray.push({ name: key, number: value });
    };
    keywordArray.sort(function (a, b) {
      return b.number - a.number;
    });
    setKeywords(keywordArray.filter((item, index) => index <=8));
  }, [data]);

  return (
    <div className={`${styles.contents} contents`}>
      <div className={styles.header}>
        <p className={styles.active}>분석 결과</p>
        <p className="">전략 수립</p>
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContents}>
          <div className={styles.resultHistory}>
            {/* 분석 결과 히스토리 */}
            {data && data.map((ele, idx) => {
              return (
                <div key={idx} className={styles.list}>
                  <p className={`${styles.listType} ${ele.category}`}>
                    {ele.category}
                  </p>
                  <p className={styles.scenarioName}>{ele.input.title}</p>
                  <p className={styles.scenarioDesc}>{ele.input.scenario}</p>
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
                <div className={styles.typeBox}>
                  <p>줄거리</p>
                  <p>키워드 추천</p>
                </div>
                <div className={styles.typeBox}>
                  <p>예상 평점</p>
                </div>
                <div className={styles.typeBox}>
                  <p>예상 수익</p>
                </div>
              </div>
              <div className={styles.keywordWrapper}>
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
                  {keywords && keywords.map((ele, idx) => {
                    return (
                      <div key={idx} className={styles.circle}>
                        {ele.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.bottomSection}>
              <div className={styles.analyzeTextWrapper}>
                <p className={styles.analyzeText}>{data && data[0].analyze || ''}</p>
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
            <p className={styles.titleText}>시나리오 분석을 완료햇다면</p>
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
  );
}
