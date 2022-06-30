import wordBank from "../wordbank.txt";

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

// as we have a do many words it take time to match
// so we create a set here
export const generateWordSet = async () => { 
    let wordSet;
    let todaysWord; // random word
    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();
        wordSet = new Set(wordArr);
      });
    return { wordSet, todaysWord };
  };