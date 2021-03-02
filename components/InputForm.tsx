import "tailwindcss/tailwind.css";
import { useState } from "react";
import CaeserDecoder from "./CaeserDecoder";
import CaeserEncoder from "./CaeserEncoder";
import DisplayResponse from "./DisplayResponse";

const InputForm = () => {
  const [encodeInput, setEncodeInput] = useState("");
  const [decodeInput, setDecodeInput] = useState("");
  const [decodeKey, setDecodeKey] = useState(1);
  const [encodeKey, setEncodeKey] = useState(1);
  const [result, setResult] = useState("");

  const handleEncodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEncodeInput(e.target.value);
  };

  const handleEncodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(CaeserEncoder(encodeInput, encodeKey));
    let res = CaeserEncoder(encodeInput, encodeKey);
    setResult(res);
  };
  const handleDecodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecodeInput(e.target.value);
  };
  const handleDecodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let res = CaeserDecoder(decodeInput, decodeKey);
    console.log("hello: ", res);
    setResult(res);
  };

  const handleKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "encodeKey") {
      setEncodeKey(Number(e.target.value));
    } else {
      setDecodeKey(Number(e.target.value));
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleEncodeSubmit}>
          <label htmlFor="encodeKey">Key: </label>
          <input
            type="number"
            min="1"
            max="25"
            name="encodeKey"
            id="encodeKey"
            onChange={handleKeyInput}
          ></input>
          <label>Encode: </label>
          <input
            type="text"
            name="encodeInput"
            id="encodeInput"
            onChange={handleEncodeInput}
          ></input>
          <button type="submit">Encode</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleDecodeSubmit}>
          <label htmlFor="decodeKey">Key: </label>
          <input
            type="number"
            min="1"
            max="25"
            name="decodeKey"
            id="decodeKey"
            onChange={handleKeyInput}
          ></input>
          <label>Decode: </label>
          <input
            type="text"
            name="decodeInput"
            id="decodeInput"
            onChange={handleDecodeInput}
          ></input>
          <button type="submit">Decode</button>
        </form>
      </div>
      <div>
        <p>Result:</p>
        <div>
          <DisplayResponse response={result} />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
