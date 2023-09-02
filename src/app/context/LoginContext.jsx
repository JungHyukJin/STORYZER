'use client'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useRouter } from "next/navigation";

export const LoginContext = createContext();

export function LoginProvider({children}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('userSession')){
      setIsLoggedIn((login)=>!login);
    }
  },[])
  const logoutHandler = () => {
    localStorage.removeItem('userSession');
    localStorage.removeItem('sessionRefresh');
    setIsLoggedIn((login)=>!login);
  }
  const loginHandler = () => {
    setIsLoggedIn((login)=>!login);
    router.push('/analyze');
  }
  return <LoginContext.Provider value={{isLoggedIn, logoutHandler, loginHandler}}>{children}</LoginContext.Provider>;

}