import React, { useState } from "react";

export default function CreateTweet() {
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <form>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Text hier eingeben..."
        onChange={userInputHandler}
        cols={50}
        rows={5}
      ></textarea>
      <button className="btn">Submit</button>
    </form>
  );
}
