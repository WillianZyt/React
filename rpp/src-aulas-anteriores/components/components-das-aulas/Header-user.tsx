import { LoggedUserContext } from "@/app/contexts/LoggedUser"
import { useContext } from "react"

export const Header = () => {
  const handleLogout = () => {
    loggedUserCtx?.setName('');
  }

  const loggedUserCtx = useContext(LoggedUserContext)
  return (
    <header>
      <h1 className="text-3xl">Título da página</h1>
      {loggedUserCtx?.name &&
        <>
          <p>Usuário logado: {loggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </>
      }
      {!loggedUserCtx || loggedUserCtx?.name === '' &&
        <>
          <p>Usuário DESLOGADO</p>
          <button onClick={handleLogout}>Login</button>
        </>
      }
    </header>
  )
}