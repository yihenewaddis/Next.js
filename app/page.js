"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter()
  const [count,setCount] = useState(0)
  const handleClick = ()=>{
    setCount(c=>c+1)
    alert(count)
  }
  return (
    <>
      <button onClick={()=>handleClick()} type="">Home</button>
      {/* <button onClick={()=>router.push('signup')} type="">signup</button> */}
    </>
  );
}
