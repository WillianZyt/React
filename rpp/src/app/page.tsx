'use client'

import { Item } from "@/types/Item";
import { useReducer, useState } from "react";
import { listReducer } from "./reducers/listReducer";

const Page = () => {
  const [list, dispatch]= useReducer(listReducer, []);

  return (
    <div className="">
      
    </div>
  );
}

export default Page;