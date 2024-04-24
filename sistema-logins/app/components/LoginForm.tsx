'use client';

import { signIn } from "next-auth/react";

export default function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
  })
  }

  return (
    <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-3">
      <h2 className="font-bold text-lg">Faça seu Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-primary w-full bg-white text-black"
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        className="input input-primary w-full bg-white text-black"
      />
      <button className="btn btn-primary w-full" type="submit">Login</button>
    </form>
  )
}