'use client'
import { useState } from "react";

const Page = () => {
  const [nameInput, setNameInput] =  useState('');

  const handleBtnClick =()=>{
    alert(`Seu nome é: ${nameInput}`)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input type="text" className= "border border-black p-3 text-xl text-black rounded" 
      placeholder="Digite seu nome"
      value={nameInput}
      onChange={e=>setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>
      <button onClick={handleBtnClick}>Mostra valor do campo</button>
    </div>
  );
}

export default Page;
// onClick={()=> alert('funcionou')}