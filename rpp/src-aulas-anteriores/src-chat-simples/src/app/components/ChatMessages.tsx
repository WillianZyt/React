import { useChat } from "../contexts/chatContext"
import { useUser } from "../contexts/userContext";

export const ChatMessages = () => {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col gap-1">
      {chatCtx?.chat.map(item => (
        <div
          key={item.id}
          className={`border border-white/20 rounded-md p-2 text-sm
          ${item.user === userCtx?.user ?
            'self-end bg-white/10' :
            'self-start bg-white/5'
            }
          `}
        >

          <div className="font-bold">{item.user}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}