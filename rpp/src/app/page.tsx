'use client'

import { useEffect, useState } from "react";

const Page = () => {
  const [playing, setPlaying] = useState(false)


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="border border-white p-3 mb-3">
        <p className="text-2xl text-blue-400 mb-3" >{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={()=>setPlaying(!playing)}>Play/Pause</button>
      </div>

      
    </div>
  );
}

export default Page;