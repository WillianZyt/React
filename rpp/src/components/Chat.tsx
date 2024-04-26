import { usePosts } from "../../src-aulas-anteriores/context-e-reducer/src/contexts/PostContext"

export const Chat = () => {
  const postCtx = usePosts()

  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="">Chat Simples</h1>
      </div>
      <div className="w-[400px] h-[400px] border">
        {postCtx?.posts.map(item=>(
          item.body
        ))}
      </div>
      <div className="flex flex-col">
        <input
        value={}
          onChange={(e)=> e.target.value}
          className="w-[400px] h-[50px] border bg-black text-white"
          placeholder="pedro, digite uma mensagem (e aperte enter)"
          type="text" />
        <input
          className="w-[400px] h-[50px] border bg-black text-white"
          placeholder="bot, digite uma mensagem (e aperte enter)"
          type="text" />
      </div>
    </section>

  )
}