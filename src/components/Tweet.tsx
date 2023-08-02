import { ITweet } from "./interfaces";

interface Props {
  tweet: ITweet;
  tweets: ITweet[];
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>;
}

export default function Tweet({ tweet, tweets, setTweets }: Props) {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t.id !== tweet.id));
  };

  return (
    <div className="Tweet grid justify-items-center gap-6 mb-6 border-2 border-bpiBlau shadow-lg rounded-md">
      <h2 className=" mt-6 text-3xl text-bpiOrange">{tweet.name}</h2>
      <h3>{tweet.message}</h3>
      <div className="flex space-x-4 mb-6">
        <button className="btn" onClick={deleteTweet}>
          Delete
        </button>
        <button className="btn">Edit</button>
      </div>
    </div>
  );
}
