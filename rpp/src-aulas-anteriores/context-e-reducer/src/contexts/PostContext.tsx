import { Post } from "@/types/Post";
import { PostActions, postReducer } from "../reducers/postReducer";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from "react";

const ESTORAGE_KEY = 'postContextContent';

type PostContextType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
}


export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(
    postReducer,
  JSON.parse(localStorage.getItem(ESTORAGE_KEY) || '[]')
  );

  useEffect(()=>{
    localStorage.setItem(ESTORAGE_KEY, JSON.stringify(posts))
  },[posts]);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePosts = () => useContext(PostContext)