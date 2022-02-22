// create basic input
let input = 'you dey mad!';
// vowels array
const vowels = ['a', 'i', 'e', 'o', 'u'];
// resuslt
let resultArray = [];
// loop
for (let i = 0; i < input.length; i++) {
  console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    }
    }
  }
}
// answer
console.log(resultArray.join('').toUpperCase());