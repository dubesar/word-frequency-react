import "./input.css";
import Result from "./results";
import { useState } from "react";

export default function Input() {
  const [text, settext] = useState("");

  function handlechange(event) {
    let newtext = event.target.value;
    settext(newtext);
  }

  return (
    <div className="inp-section">
      <div>Just Start Typing Below</div>
      <textarea
        placholder="enter text"
        className="text-area"
        onChange={handlechange}
      />
      <Result text={text} />
    </div>
  );
}
