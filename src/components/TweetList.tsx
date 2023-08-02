import Tweet from "./Tweet";
import { ITweet } from "./interfaces";

interface Props {
  tweets: ITweet[];
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>;
}

export default function TweetList({ tweets, setTweets }: Props) {
  return (
    <div className="mb-6">
      {tweets.map((tweet: ITweet) => {
        return (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            tweets={tweets}
            setTweets={setTweets}
          />
        );
      })}
    </div>
  );
}
