'use client'

import { useState } from "react";

const Page = () => {
const [count, setCount] = useState(0);

const handleClickButton =()=>{
  setCount(count + 1);
    // setCount(c=> c + 1);
}

  return (
    <div className="w-screen h-screen flex flex-col 
    justify-center items-center text-3xl">
      <p>{count}</p>
      <button className="p-3 bg-blue-500" onClick=
      {handleClickButton}>+1</button>
    </div>
  );
}

export default Page;
// onClick={()=> alert('funcionou')