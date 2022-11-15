function isPalindrome(word) {
 const reversedWord = reverseString(word);
 return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  // create an array from the input string
  // reverse the array
  // create a string from the reversed array
  // return the reversed string

  // reverse the input string
  // if the reversed string is the same as the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
