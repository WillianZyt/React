import { CountContext } from "@/app/contexts/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
  const countCtx = useContext(CountContext);

  const handleBanAll = () => {
    countCtx?.setOnlineCount(0)
  }
  return (
    <>
      <p>Online: {countCtx?.onlineCount}</p>
      <button
        className="my-2 p-2 border border-white rounded-md bg-gray-600"
        onClick={handleBanAll}
      >Banir usuários</button>
    </>
  )
}