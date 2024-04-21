'use client'

import { useState } from "react";

const Page = () => {
  const [showSecret, setShowSecret] = useState(false)

  const handleClickButton = () => {
    setShowSecret(!showSecret)
  }

  return (
    <div className="w-screen h-screen flex flex-col 
    justify-center items-center text-3xl">
      <button className="p-3 bg-blue-700 rounded-md" onClick=
        {handleClickButton}>{showSecret ? 'Ocultar' : 'Mostrar'}
      </button>

      {showSecret &&
        <div
          className="p-3 bg-blue-300 rounded-md mt-3">
          Àrea secreta
        </div>
      }
    </div>
  );
}

export default Page;
// onClick={()=> alert('funcionou')}