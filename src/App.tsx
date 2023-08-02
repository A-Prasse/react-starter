import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import { ITweet } from "./components/interfaces";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const initialTweet: ITweet[] = [
    {
      name: "Peter",
      message: "Heute ist ein richtig schöner Tag",
      id: uuidv4(),
    },
  ];
  const [tweets, setTweets] = useState<Array<ITweet>>(initialTweet);

  return (
    <>
      <div className="grid justify-items-center gap-6">
        <h1 className="text-bpiOrange text-6xl">Twitter</h1>
        <CreateTweet
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList tweets={tweets} setTweets={setTweets} />
      </div>
    </>
  );
}
