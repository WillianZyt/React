
export const Header = () => {

  return (
    <header>
      <div className="flex justify-center">
        <h1 className="p-2 text-3xl font-bold">Título da pagina</h1>
        <button className="">Mudar para Light</button>
      </div>
      <p>Conteúdo da página</p>
      <button className="rounded-lg bg-white font-bold text-black p-2">Clique aqui</button>
    </header>
  )
}