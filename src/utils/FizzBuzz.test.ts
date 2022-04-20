import {fizzBuzzCalculator} from "./FizzBuzz";

test("fizzBuzzCalculator returns a string, fizzBuzzCalculatoring the passed name", () => {
  expect(fizzBuzzCalculator(1)).toBe(1);
  expect(fizzBuzzCalculator(2)).toBe(2);
  expect(fizzBuzzCalculator(3)).toBe("Fizz");
  expect(fizzBuzzCalculator(4)).toBe(4);
  expect(fizzBuzzCalculator(5)).toBe("Buzz");
  expect(fizzBuzzCalculator(6)).toBe("Fizz");
  expect(fizzBuzzCalculator(7)).toBe(7);
  expect(fizzBuzzCalculator(8)).toBe(8);
  expect(fizzBuzzCalculator(9)).toBe("Fizz");
  expect(fizzBuzzCalculator(15)).toBe("FizzBuzz");
});
