import { HomeUser } from "@/model/user";
import useSWR from "swr";

async function updateBookmark(postId: string, bookmark: boolean) {
  return fetch("/api/bookmarks", {
    method: "PUT",
    body: JSON.stringify({ id: postId, bookmark }),
  }).then((res) => res.json());
}

export default function UseMe() {
  const {
    data: authuser,
    isLoading,
    error,
    mutate,
  } = useSWR<HomeUser>("/api/me");

  const setBookmark = (postId: string, bookmark: boolean) => {
    if (!authuser) return;
    const bookmarks = authuser.bookmarks ?? [];
    const newUser = {
      ...authuser,
      bookmarks: bookmark
        ? [...bookmarks, postId]
        : bookmarks.filter((item) => item !== postId),
    };

    return mutate(updateBookmark(postId, bookmark), {
      optimisticData: newUser,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  return { authuser, isLoading, error, setBookmark };
}
