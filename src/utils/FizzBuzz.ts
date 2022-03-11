export default function isFizzBuzz(num: number): string|number {
  let result 
    if (num % 3 === 0 && num % 5 === 0) {
      result = "FizzBuzz"      
    }
    else if (num % 3 ===0) {
      result = "Fizz"
    }
    else if (num % 5 ===0) {
      result = "Buzz"
    }
    else {
      return result=num
    }
    return result
} 

