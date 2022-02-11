function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
      console.log(result)
    }
    return result;
  } 

function generateObject(str) {
  let enumeration = {};
  for (let index = 1; index <= str.length; index++) {
    let key = getRandomString(index)
    enumeration[key] = {
      value: str.slice(0, index)
    }
  }
  return enumeration;
}

let result = generateObject('Test')
console.log(result)

function getStringFromObject(obj) {
  let str = '';
  for (let key in obj) {
    if (obj[key].value.length > str.length) {
      str = obj[key].value;
    }
  }
  return str;
}

let reverseResult = getStringFromObject(result)
console.log(reverseResult)