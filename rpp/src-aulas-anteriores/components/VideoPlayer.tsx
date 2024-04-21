import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
}

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoTag.current?.play();
    } else {
      videoTag.current?.pause();
    }
    return(()=>{
      console.log('cleanUP rodou'); // cleanUP -> fim do use effect
    })
  })

  return (
    <video ref={videoTag} src={src} loop playsInline />
  )
}