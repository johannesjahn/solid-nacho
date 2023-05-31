import {
  Component,
  ComponentProps,
  JSXElement,
  Signal,
  createContext,
  createSignal,
  onMount,
  useContext,
} from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { PostApi, PostResponseDTO } from "../../api";

const PostContext =
  createContext<[PostResponseDTO[], SetStoreFunction<PostResponseDTO[]>]>();

export const PostProvider: Component<{
  children?: JSXElement;
  initial: PostResponseDTO[];
}> = (props) => {
  const store = createStore<PostResponseDTO[]>(props.initial);

  onMount(async () => {
    const posts = await new PostApi().postControllerGetPosts();
    store[1](posts);
  });

  return (
    <PostContext.Provider value={store}>{props.children}</PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};
