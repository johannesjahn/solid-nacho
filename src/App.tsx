import { Component, For, createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { BASE_PATH, PostApi, PostResponseDTO, UserApi } from "./api";
import PostComponent from "./posts/post";

const App: Component = () => {
  const api = new PostApi();

  const [posts, setPosts] = createStore<PostResponseDTO[]>([]);

  onMount(async () => {
    setPosts(await api.postControllerGetPosts());
  });

  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <For each={posts}>{(post) => <PostComponent post={post} />}</For>
      </div>
    </>
  );
};

export default App;
