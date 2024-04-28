import { SearchUser } from "@/model/user";
import { client, urlFor } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

// user 정보를 받고, 그 정보가 존재하지 않다면 새로 추가해줌
export async function addUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username=="${username}"][0]{
    ...,
    "id":_id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->_id
  }`);
}

export async function searchUsers(keyword: string | null) {
  const query = keyword
    ? `&& (name match "*${keyword}*") || (username match "*${keyword}*")`
    : ``;
  return client
    .fetch(
      `
    *[_type == "user" ${query}]{
      ...,
      "following" : count(following),
      "followers" : count(followers)
    }
  `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}

export function getUserInfoByUsername(username: string) {
  return client
    .fetch(
      `
    *[_type == "user" && username=="${username}"][0]{
      ...,
      "id":_id,
      "following" : count(following),
      "followers" : count(followers),
      "posts" : count(*[_type == "post" && author->username == "${username}"])
    }
  `
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      followers: user.followers ?? 0,
      posts: user.posts ?? 0,
    }));
}
