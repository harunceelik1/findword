const sentence =
  "Smart people learn from everything and everyone, average people from their experience , stupid people already have all the answers";

function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

function findWordWithMostVowels(sentence) {
  let spl = sentence.split(" ");
  let wordWithMostVowels = "";

  for (let i = 0; i < spl.length; i++) {
    if (countVowels(spl[i]) > countVowels(wordWithMostVowels)) {
      wordWithMostVowels = spl[i];
    }
  }

  return wordWithMostVowels;
}

let wordWithMostVowels = findWordWithMostVowels(sentence);
console.log("Word with the most vowels:", wordWithMostVowels);
