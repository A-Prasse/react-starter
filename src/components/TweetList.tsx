import Tweet from "./Tweet";
import { ITweet } from "./interfaces";

type TweetListProps = {
  tweets: ITweet[];
};

export default function TweetList({ tweets }: TweetListProps) {
  return (
    <div>
      {tweets.map((tweet: ITweet) => {
        return <Tweet key={tweet.name} tweet={tweet} />;
      })}
    </div>
  );
}
