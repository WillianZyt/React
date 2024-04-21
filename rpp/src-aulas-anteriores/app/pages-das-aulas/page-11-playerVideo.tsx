'use client'

import { VideoPlayer } from "@/components/VideoPlayer";
import { useEffect, useState } from "react";

const Page = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="border border-white p-3 mb-3">
        <p className="text-2xl text-blue-400 mb-3" >{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={()=>setPlaying(!playing)}>Play/Pause</button>
      </div>

      <VideoPlayer
      src="http://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      isPlaying={playing}
      />

    </div>
  );
}

export default Page;