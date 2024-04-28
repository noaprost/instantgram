"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useSWR from "swr";
import { SearchUser } from "@/model/user";
import GridSpinner from "./GridSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";

export default function UserSearch() {
  const [keyword, setKeword] = useState<string>("");
  const debouncedSearch = useDebounce(keyword);
  const { data, isLoading, error } = useSWR<SearchUser[]>(
    `api/search?keyword=${debouncedSearch}`
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeword(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <section className="w-full max-w-2xl flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          placeholder="Search for username or name"
          onChange={handleChange}
          value={keyword}
          className="p-3 text-xl w-full mb-6 border outline-none border-neutral-400 rounded-md"
        />
      </form>
      {isLoading && (
        <div className="mt-20">
          <GridSpinner />
        </div>
      )}
      {error && <p>fail to load..😢</p>}
      {!isLoading && !error && data?.length === 0 && (
        <p className="font-semibold mt-20 text-lg">
          {keyword}에 해당하는 사용자가 없습니다.
        </p>
      )}
      {data && data.map((user) => <UserCard key={user.name} user={user} />)}
    </section>
  );
}
