'use client'

import { Header } from "@/components/Header";
import { DarkModeProvider, ThemeProvider } from "@/contexts/DarkModeContext";

const Page = () => {

  return (
    <DarkModeProvider>
      <div className="container mx-auto">
        <Header />
      </div>
    </DarkModeProvider>

  );
}

export default Page;