const makeCase = function(input, cases) {
  let result = input;
  let casesArr = [];
  if (!Array.isArray(cases)) {
    casesArr.push(cases);
  } else {
    casesArr = cases;
  }
  for (let c of casesArr) {
    switch (c) {
    case 'camel':
      result = camelCase(result);
      break;
    case 'pascal':
      result = pascalCase(result);
      break;
    case 'snake':
      result = snakeCase(result);
      break;
    case 'kebab':
      result = kebabCase(result);
      break;
    case 'title':
      result = titleCase(result);
      break;
    case 'vowel':
      result = vowelCase(result);
      break;
    case 'consonant':
      result = consonantCase(result);
      break;
    case 'upper':
      result = result.toUpperCase();
      break;
    case 'lower':
      result = result.toUpperCase();
      break;
    }
  }
  return result;
};

const camelCase = (input) => {
  const wordsArr = input.split(' ');
  for (let i = 1; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join("");
};

const pascalCase = (input) => {
  const wordsArr = input.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join("");
};

const snakeCase = (input) => {
  return input.split(' ').join("_");
};

const kebabCase = (input) => {
  return input.split(' ').join("-");
};

const titleCase = (input) => {
  const wordsArr = input.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join(" ");
};

const vowelCase = (input) => {
  const wordsArr = input.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < wordsArr.length; i++) {
    if (vowels.includes(wordsArr[i])) {
      wordsArr[i] = wordsArr[i].toUpperCase();
    }
  }
  return wordsArr.join("");
};

const consonantCase = (input) => {
  const wordsArr = input.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < wordsArr.length; i++) {
    if (!vowels.includes(wordsArr[i])) {
      wordsArr[i] = wordsArr[i].toUpperCase();
    }
  }
  return wordsArr.join("");
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));