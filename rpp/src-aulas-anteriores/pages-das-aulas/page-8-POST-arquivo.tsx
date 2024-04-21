'use client'

import { useEffect, useRef, useState } from "react";

const Page = () => {

  const [legendInput, setLegendInput]= useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () =>{
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
      const fileItem = fileInputRef.current.files[0]

      console.log(fileItem)
    } else {
      alert('Selecione um arquivo')
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mt-4">Upload Imagem</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input 
        ref={fileInputRef}
        type="file" 
        />
        <input 
         type="text" 
         placeholder="Digite uma legenda"
         className="p-3 bg-white rounded-md text-black"
         value={legendInput}
         onChange={e=> setLegendInput(e.target.value)}
        />
        <button onClick={handleFileSend}>Enviar Imagem</button>
      </div>
    </div>
  );
}

export default Page;