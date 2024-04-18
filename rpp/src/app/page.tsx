'use client'

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostProvider } from "./contexts/PostContext";

const Page = () => {

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <PostProvider>
        <Header />
      </PostProvider>
      <Footer />
    </div>
  );
}

export default Page;