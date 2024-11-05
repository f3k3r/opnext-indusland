'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  
import styles from "./1home.module.css"

export default function Home() {
    
    const router = useRouter();
    useEffect(()=>{
        setTimeout(function(){
            router.push("/1");
        },3000)
    }, [router])
   
  return (
    <>
   <div className={styles.startBorder}>
        <div className="mt-5 pt-5">
          <img src="/logo2.png" className={styles.imageStart}  />
        </div>
   </div>
</>
  );
}
