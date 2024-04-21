'use client'
import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState<Person>({
    name: 'Willian', lastname: 'Zytkoski'
  });

  const handleClearButton =()=>{
    setFullName({...fullName, name: ''})
  }

  return (
    <div className="w-screen h-screen flex flex-col 
    justify-center items-center text-3xl">
      <input 
      type="text" 
      placeholder="Nome"
      className="border border-black p-3 text-2xl 
      text-black rounded-md mb-3"
      value={fullName.name}
      onChange={e=>setFullName({...fullName , name: e.target.value})}
      />
      <input type="text" 
      placeholder="Sobrenome"
      className="border border-black p-3 text-2xl 
      text-black rounded-md mb-3"
      value={fullName.lastname}
      onChange={e=>setFullName({...fullName , lastname: e.target.value})}
      />
      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastname}</p>
      <button onClick={handleClearButton}>Limpar nome</button>
    </div>
  );
}

export default Page;
// onClick={()=> alert('funcionou')}