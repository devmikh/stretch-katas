const calculateChange = function(total, cash) {
  const result = {};
  let change = cash - total;
  
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  
  for (let denom in denominations) {
    result[denom] = Math.floor(change / denominations[denom]);
    change = change % denominations[denom];
  }

  for (let key in result) {
    if (result[key] === 0) {
      delete result[key];
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));