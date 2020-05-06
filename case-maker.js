const camelCase = function(input) {
  const textLower = input.toLowerCase();
  const wordsArr = textLower.split(' ');
  for (let i = 1; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join("");
};

console.log(camelCase("this is a string")); // => thisIsAString
console.log(camelCase("loopy lighthouse")); // => loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // => supercalifragalisticexpialidocious