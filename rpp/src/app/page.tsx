'use client'

import { Chat } from "@/components/Chat";
import { PostProvider } from "@/contexts/PostContext";

const Page = () => {

  return (
    <PostProvider>
      <div>
        <Chat />
      </div>
    </PostProvider>

  );
}

export default Page;