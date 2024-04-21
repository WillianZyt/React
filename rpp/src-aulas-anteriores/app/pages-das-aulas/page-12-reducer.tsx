'use client'

import { Item } from "@/types/Item";
import { useReducer, useState } from "react";
import { listReducer } from "./reducers/listReducer";

const Page = () => {
  const [list, dispatch]= useReducer(listReducer, []);

const handleAddClick = ()=>{
  dispatch({
    type: 'add',
    payload:{
    text: 'Novo item'
    }
  });
  dispatch({
    type: 'toggleDone',
    payload: {id:2}
  })

  dispatch({
    type: 'editText',
    payload: {id:2, newText: 'Bla bla'}
  })
}

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  );
}

export default Page;