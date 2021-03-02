import checkAlpha from "./CheckAlpha";

const CaeserEncoder = (input: string, key: number) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (!checkAlpha(input)) {
    return "Invalid Input";
  }
  let output = "";

  input = input.toLowerCase();

  for (let i = 0; i < input.length; i++) {
    let letter = input[i];

    if (alphabet.indexOf(letter) + key > 25) {
      output = output + alphabet[alphabet.indexOf(letter) + key - 26];
    } else if (letter === " ") {
      output = output + " ";
    } else if (alphabet.indexOf(letter) - key < 0) {
      output = output + alphabet[26 - key];
    } else {
      output = output + alphabet[alphabet.indexOf(letter) - key];
    }
  }
  return output;
};

export default CaeserEncoder;
