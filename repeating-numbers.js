const repeatNumbers = function(data) {
  let outputString = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      outputString += data[i][0];
    }
    if (i !== data.length - 1) {
      outputString += ', ';
    }
  }
  return outputString;
};

console.log(repeatNumbers([[1, 10]])); // => 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // => 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // => 10101010, 343434343434, 9292



