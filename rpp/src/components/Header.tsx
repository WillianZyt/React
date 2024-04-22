import { useDarkMode } from "@/contexts/DarkModeContext"

export const Header = () => {
const DarkMode = useDarkMode()

const handleThemeButton =()=>{
  DarkMode?.setDarkMode(!DarkMode)
}

  return (
    <header>
      <div className="flex justify-center">
        <h1 className="p-2 text-3xl font-bold">Título da pagina</h1>
        <button 
        onClick={handleThemeButton}
        className="rounded-lg bg-white font-bold text-black p-2"
        >Mudar para Tema Dark</button>
      </div>
      <p>Conteúdo da página</p>
      <button className="rounded-lg bg-white font-bold text-black p-2">Clique aqui</button>
    </header>
  )
}