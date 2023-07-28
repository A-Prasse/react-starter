import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import { ITweet } from "./components/interfaces";

export default function App() {
  let tweets: Array<ITweet> = [
    { name: "Alex", message: "Ich bin cool" },
    { name: "Kevin", message: "Ich habe gut geschlafen" },
  ];

  return (
    <>
      <div className="grid justify-items-center gap-6">
        <h1 className="text-emerald-800 text-6xl">Twitter</h1>
        <CreateTweet />
        <TweetList tweets={tweets} />
      </div>
    </>
  );
}
