import { SimplePost } from "@/model/post";
import useSWR from "swr";

async function updateLike(id: string, like: boolean) {
  return fetch("api/likes", {
    method: "PUT",
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json()); // 글로벌 fetch를 사용하는 것이 아니기 때문에 response 처리를 직접해줘야함
}

export default function UsePosts() {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<SimplePost[]>("/api/post");

  const setLike = (post: SimplePost, username: string, like: boolean) => {
    const newPost = {
      ...post,
      likes: like
        ? [...post.likes, username]
        : post.likes.filter((item) => item !== username),
    };

    const newPosts = posts?.map((p) => (p.id === newPost.id ? newPost : p));

    return mutate(updateLike(post.id, like), {
      optimisticData: newPosts,
      populateCache: false, // 업데이트시 모든 업데이트된 post를 가져올게 아니라서 false
      revalidate: false, // 이미 보내줄 데이터를 잘 만들어두었기 때문에 벡에서 다시 받아올 필요가 없으므로 false
      rollbackOnError: true,
    });
  };
  return { posts, isLoading, error, setLike };
}
