"use client";
import React, { useEffect, useState } from "react";
import styles from "./CategoryGenre.module.css";
const genreArray = [
  {
    id: "Romance",
    name: "로맨스",
    status: false,
    // img: "/genre_img/romance_icon.png",
    // selectedImg: "/genre_img/romance_checked_icon.png",
  },
  {
    id: "Horror",
    name: "공포",
    status: false,
    // img: "/genre_img/horror_icon.png",
    // selectedImg: "/genre_img/horror_checked_icon.png",
  },
  {
    id: "Science_Fiction",
    name: "SF",
    status: false,
    // img: "/genre_img/sf_icon.png",
    // selectedImg: "/genre_img/sf_checked_icon.png",
  },
  {
    id: "Thriller",
    name: "액션&스릴러",
    status: false,
    // img: "/genre_img/action_icon.png",
    // selectedImg: "/genre_img/action_checked_icon.png",
  },
  {
    id: "Comedy",
    name: "코미디",
    status: false,
    // img: "/genre_img/comedy_icon.png",
    // selectedImg: "/genre_img/comedy_checked_icon.png",
  },
  {
    id: "Documentary",
    name: "다큐멘터리",
    status: false,
    // img: "/genre_img/documentary_icon.png",
    // selectedImg: "/genre_img/documentary_checked_icon.png",
  },
  {
    id: "Fantasy",
    name: "판타지",
    status: false,
    // img: "/genre_img/fantasy_icon.png",
    // selectedImg: "/genre_img/fantasy_checked_icon.png",
  },
  {
    id: "Animation",
    name: "애니메이션",
    status: false,
    // img: "/genre_img/anime_icon.png",
    // selectedImg: "/genre_img/anime_checked_icon.png",
  },
  {
    id: "Mystery",
    name: "미스터리",
    status: false,
    // img: "/genre_img/mystery_icon.png",
    // selectedImg: "/genre_img/mystery_checked_icon.png",
  },
  {
    id: "Adventure",
    name: "모험",
    status: false,
    // img: "/genre_img/adventure_icon.png",
    // selectedImg: "/genre_img/adventure_checked_icon.png",
  },
  {
    id: "Family",
    name: "패밀리",
    status: false,
    // img: "/genre_img/family_icon.png",
    // selectedImg: "/genre_img/family_checked_icon.png",
  },
  {
    id: "War",
    name: "전쟁",
    status: false,
    // img: "/genre_img/etc_icon.png",
    // selectedImg: "/genre_img/etc_checked_icon.png",
  },
];

export default function CategoryGenre({ btnHandler }) {
  const [genreList, setGenreList] = useState(genreArray);
  const [productInfo, setProductInfo] = useState(() =>
  JSON.parse(localStorage.getItem("productInfo")));
  const [selectedGenre, setSelectedGenre] = useState([]);
  const toggleActive = (e) => {
    const targetId = e.target.id;
    if (selectedGenre.length < 3) {
      if (selectedGenre.includes(targetId)) {
        setSelectedGenre(selectedGenre.filter((e) => e != targetId));
      } else {
        setSelectedGenre([...selectedGenre, targetId]);
      }
    } else if (selectedGenre.length === 3) {
      if (selectedGenre.includes(targetId)) {
        setSelectedGenre(selectedGenre.filter((e) => e != targetId));
      } else {
        alert("최대 3개 까지만 중복 선택이 가능해요.");
        return;
      }
    }
    e.target.classList.toggle("genreSelected");
  };

  useEffect(()=>{
    localStorage.setItem('productInfo', JSON.stringify({...productInfo, genres:selectedGenre}))
    selectedGenre.length >= 1 ? btnHandler(true) : btnHandler(false);
  },[selectedGenre])

  return (
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.headerTextWrapper}>
          <p>더 자세히 알려주세요!</p>
          <img src="./search.png" alt="search" />
        </div>
        <p className={styles.noteText}>
          어떤 장르인가요? 최대 3개 까지 중복 선택이 가능해요.
        </p>
      </div>
      <div className={styles.genreList}>
        {genreArray.map((e, idx) => {
          return (
            <div
              key={idx}
              id={e.id}
              onClick={toggleActive}
              className={`genreBtn ${styles.list}`}
            >
              <img id={e.id} alt={e.name} />
              <p className={`${e.status ? styles.blueColor : styles.btnText}`}>
                {e.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
