const fizzBuzzCalculator = (currentNumber: number): number | string=> {
  let result = ''
  if(currentNumber % 3 === 0 && currentNumber % 5 ===  0){
     result = 'FizzBuzz' 
  }
  else if (currentNumber % 3 ===0) {
    result = 'Fizz'
  }
  else if (currentNumber % 5 ===0) {
    result = 'Buzz'
  }
  else {
    return currentNumber
  } 
  return result
} 


export {fizzBuzzCalculator}