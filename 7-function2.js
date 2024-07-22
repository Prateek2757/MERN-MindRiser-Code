function calculateSum(a, b) {
  // let number1 = a;
  // let number2 = b;
  //let sum = number1 + number2;
  console.log(` The sum of 2 number is ${a + b} `);
  console.log(` The multiple of 2 number is ${a * b} `);
}
calculateSum(2, 6);
calculateSum(8, 9);
calculateSum(88, 9);

//arrow Function

let calculateSumm = (a, b) => {
  return a + b;
};
//  console.log(calculateSumm(8,9));



let number = (...args) => {
  let value = 0;
  for (let assign of args) value += assign;

  return value;
};
console.log(number(7, 8, 5, 6, 7));
console.log(number(7, 8, 5));




