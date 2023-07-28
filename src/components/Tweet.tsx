import { ITweet } from "./interfaces";

interface Props {
  tweet: ITweet;
}

export default function Tweet({ tweet }: Props) {
  return (
    <div className="Tweet grid justify-items-center gap-4">
      <h2 className="text-3xl text-cyan-700">{tweet.name}</h2>
      <h3>{tweet.message}</h3>
      <button className="btn">Delete</button>
      <button className="btn">Edit</button>
    </div>
  );
}
