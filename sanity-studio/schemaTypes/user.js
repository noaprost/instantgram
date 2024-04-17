export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      // 사용자의 아이디
      title: 'Username', // studio ui에서 보는 이름
      name: 'username', // 실제 DB에 접근할 때 쓰는 이름
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      // 사용자의 아바타 image url 주소
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array', // user를 참고하는 배열
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 위 배열에서 중복을 제거해줌
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
