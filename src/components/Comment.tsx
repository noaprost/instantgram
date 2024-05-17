
type Props = {
  username: string;
  text: string;
};

export default function Comment({ username, text }: Props) {
  return (
    <div className="px-4 py-1 flex gap-2 items-center">
      <p className="font-semibold text-sm">{username}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}
