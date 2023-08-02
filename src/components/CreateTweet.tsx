import { ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITweet } from "./interfaces";

interface Props {
  tweets: ITweet[];
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateTweet({
  tweets,
  setTweets,
  textInput,
  setTextInput,
}: Props) {
  const handleUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };
  const handleSubmitTweet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tweet: ITweet = { name: "Alex", message: textInput, id: uuidv4() };
    setTweets([...tweets, tweet]);
    setTextInput("");
  };
  return (
    <form onSubmit={handleSubmitTweet}>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Text hier eingeben..."
        value={textInput}
        onChange={handleUserInput}
        cols={50}
        rows={5}
      ></textarea>
      <button className="btn">Tweet it</button>
    </form>
  );
}
