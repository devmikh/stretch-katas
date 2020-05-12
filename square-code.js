const squareCode = function(message) {
  // remove all spaces
  const messageNoSpaces = message.split(' ').join('');

  // store length of a message
  const messageLength = messageNoSpaces.length;

  // calculate the length of a line
  const lineLength = Math.ceil(Math.sqrt(messageLength));

  // variable to store the square shaped string
  let squareString = '';

  // divide a string into equal pieces of a length calculated before
  for (let i = 0; i < messageLength; i++) {
    if ((i + 1) % lineLength === 0) {
      squareString += messageNoSpaces[i] + '\n';
    } else {
      squareString += messageNoSpaces[i];
    }
  }

  // convert previous square string into an array of strings
  let squareStringArr = squareString.split('\n');

  // transpose
  let reversedSquareStringArr = [];
  for (let i = 0; i < squareStringArr[0].length; i++) {
    reversedSquareStringArr.push([]);
  }

  for (let row = 0; row < squareStringArr.length; row++) {
    for (let col = 0; col < squareStringArr[row].length; col++) {
      reversedSquareStringArr[col].push(squareStringArr[row][col]);
    }
  }

  let output = '';

  // join into a single line
  for (let str of reversedSquareStringArr) {
    output += str.join("") + ' ';
  }

  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));