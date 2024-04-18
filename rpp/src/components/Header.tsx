import { PostContext } from "@/app/contexts/PostContext"
import { useContext, useState } from "react"


type Lista={
  id: number;
  text: string;
}
export const Header = () => {
  const postCtx = useContext(PostContext);
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<Lista[]>([])

  const handleNewPost = () => {
    postCtx?.setPost(itemInput)
    setList([...list, {id: list.length + 1, text: postCtx?.post}])
    setItemInput('')
  } 

  return (
    <header>
      <h1 className="p-2 text-3xl font-bold">Título da pagina</h1>
      {postCtx?.post}
      <div className=" flex flex-col items-center">
        <p>Nova postagem</p>
        <input
          value={itemInput}
          onChange={e=> setItemInput(e.target.value)}
          className="p-2 rounded-md text-black mx-2"
          type="text"
          placeholder="Digite seu post" />
        <button
          onClick={handleNewPost}
          className="mx-2 my-2 p-2 rounded-md bg-white font-bold text-black">
          Enviar
        </button>
        
        <ul>{list.map(item=>(
          <li>{item.text}</li>
        ))}</ul>
      </div>
    </header>
  )
}