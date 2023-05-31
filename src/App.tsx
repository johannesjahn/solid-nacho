import { For, onMount } from "solid-js";
import { Configuration, DefaultConfig } from "./api";
import { MeProvider } from "./components/context/me";
import { PostProvider } from "./components/context/post";
import HeaderComponent from "./components/header";
import PostsContainerComponent from "./components/postsContainer";

const TestComponent = () => {
  onMount(async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken != null) {
      DefaultConfig.config = new Configuration({ accessToken });
    }
  });

  return (
    <MeProvider>
      <PostProvider initial={[]}>
        <HeaderComponent />
        <PostsContainerComponent />
      </PostProvider>
    </MeProvider>
  );
};

export default TestComponent;
