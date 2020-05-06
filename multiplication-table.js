const multiplicationTable = function(maxValue) {
  let output = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      if (j === maxValue) {
        output += `${i * j}\n`;
      } else {
        output += `${i * j} `;
      }
      
    }
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));