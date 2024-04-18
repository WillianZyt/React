import { ReactNode, createContext, useState } from "react";

type ContextTypePost = {
  post: string;
  setPost: (n: string) => void;
}
type Post = {
  list: [];
  setList: (id: number, text: string) => void;
}
export const PostContext = createContext<ContextTypePost | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [post, setPost] = useState('');
  const [list, setList] = useState<Post[]>([]);
  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  )
}