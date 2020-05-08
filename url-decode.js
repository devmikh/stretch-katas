const urlDecode = function(text) {
  const result = {};
  const keyValueArr = text.split('&');
  for (let keyValue of keyValueArr) {
    let keyValueArr = keyValue.split("=");
    let key = keyValueArr[0];
    let value = keyValueArr[1].split("%20").join(" ");
    result[key] = value;
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);