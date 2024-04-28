import { useUser } from "../contexts/userContext"
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { NameImput } from "./NameInput";

export const Chat = () => {
  const userCtx = useUser();
  if (!userCtx) return null;
  if (!userCtx.user) return <NameImput />

  return (
    <div className="border border-white/30 rounded-md">
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatMessages/>
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name='bot' />
        
      </div>
    </div>
  )
}