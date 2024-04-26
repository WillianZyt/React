'use client'

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TheSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {

  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Título da página</h1>
        </header>
        <section>
          <p className="my-5">Conteúdo da Página</p>
          <Button label="Clique aqui" onClick={() => { }} />
        </section>
        <TheSwitch />
      </Container>
    </ThemeProvider>


  );
}

export default Page;