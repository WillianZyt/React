'use client'

import { Chat } from "./components/Chat";
import { ChatProvider } from "./contexts/chatContext";
import { UserProvider } from "./contexts/userContext";

const Page = () => {

  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl my-3 text-center">Chat simples</h1>

          <Chat/>
        </ChatProvider>
      </UserProvidegr>
    </div>
  );
}

export default Page;