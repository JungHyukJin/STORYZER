"use client";
import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { LoginContext } from "../context/LoginContext";

export default function Navbar() {
  const { isLoggedIn, logoutHandler } = useContext(LoginContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} pageLoadEffect`}>
        <div>
          <Link href="/">
            <img src="/Logo.png" alt="StoryzerLogo" />
          </Link>
          <Link href="/analyze">분석하기</Link>
          <Link href="/results">분석결과</Link>
          <div className={styles.divider}></div>
          <Link href="/about">서비스소개</Link>
        </div>
        <div>
          <Link href="#">
            <img src="/Vector.png" alt="notice" />
          </Link>
          {isLoggedIn ? (
            <Link
              onClick={() => logoutHandler()}
              className={styles.loginBtn}
              href="/"
            >
              로그아웃
            </Link>
          ) : (
            <Link className={styles.loginBtn} href="/login">
              로그인
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
