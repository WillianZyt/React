'use client'

import { User } from "@/types/User";
import { title } from "process";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      setUsers(json);

    } catch (err) {
      console.log('DEU ALGO ERRADO');
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    });
    const json = await res.json();
    console.log(json)
  }

  return (
    <div className="container mx-auto max-w-lg px-2">
      <button
        className="bg-white/30 my-1 p-1 rounded-md"
        onClick={handleAddNewPost}
      >Adicionar Novo Post</button>
      <h1 className="text-3xl">Lista de usuários</h1>
      {loading && 'Carregando...'}
      {users.length > 0 &&
        <ul>
          {users.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
      }
      {users.length === 0 && 'Não há usuários para exibir'}
    </div>
  );
}

export default Page;

// useEffect(() => {
//   setLoading(true);
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => {
//       setLoading(false);
//       setUsers(json);
//     })
//     .catch(()=>{
//       setLoading(false);
//       console.log('DEU ALGUM ERRO');
//     })
// }, []);