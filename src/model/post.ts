export type Comment = {
  comment: string;
  usename: string;
  image: string;
};

// 포스트 리스트 카드에 필요한 데이터
export type SimplePost = Omit<FullPost, "comments"> & { comments: number };

// 포스트 클릭 시 보여줄 화면에 필요한 데이터
export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes?: string[];
  comments: Comment[];
};
