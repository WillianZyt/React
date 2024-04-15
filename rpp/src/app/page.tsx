'use client'

import { subtle } from "crypto";
import { title } from "process";

const Subtitle =({label}: {label:string})=>{
  return(
    <p>{label}</p>
  )
}

const Title =({label}: {label:string})=>{
  return(
    <h1 className="text-4xl font-bold my-4">{label}</h1>
  )
}

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header>
      <Title label={title}/>
      <Subtitle label={subtitle}/>
    </header>
  )
}

const Page = () => {
  const pageInfo = {
    title: 'Título',
    subtitle: 'Subtitulo'
  }

  return (
    <div className="container mx-auto">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}

export default Page;