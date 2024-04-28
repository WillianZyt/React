import { KeyboardEvent, useState } from "react";
import { useChat } from "../contexts/chatContext";

type Props = {
  name: string;
}

export const ChatInput = ({ name }: Props) => {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState('');

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter') {
      if (textInput.trim() !== '') {
        chatCtx?.addMessage(name, textInput.trim())
        setTextInput('');
      }
    }
  }
  return (
    <div>
      <input
        className="w-full bg-transparent text-white text-md outline-none"
        placeholder={`${name}, digite uma mensagem (e aperte enter)`}
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
        onKeyUp={handleKeyUpAction}
      />
    </div>
  )
}