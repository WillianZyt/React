'use client'

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    setLoading(true);

    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    setUsers(json);
  } catch (err) {
    console.log('DEU ALGO ERRADO')
  }
  setLoading(false);
}

  useEffect(() => {
  getUsers();
  }, []);

  const handleAddNewPost = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers:{
        'Content-type': 'aplication/json; charset=UTF-8' 
        //charset=UTF-8 -> para formatar com cidilha ou acentos
      },
      body:JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo do teste',
        userID: 99
      })
    });
    const json = await res.json();

    console.log(json);
  }

  return (
    <div className="container mx-auto">
      <button className="p-2 flex items-center bg-blue-500 rounded-md" onClick={handleAddNewPost}>Adicionar Novo POST</button>
      <h1 className="p-2 text-3xl">Lista de usuários</h1>

      {loading && "Carregando..."}
      {!loading && users.length > 0 &&
        <ul>
          {users.map(item => (
            <li key={item.id}>{item.name} ({item.email}) {item.address.city}</li>
          ))}
        </ul>
      }
      {!loading && users.length === 0 && "Não há usuários  para exibir."}
    </div>

  );
}

export default Page;