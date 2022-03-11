import isFizzBuzz from "./FizzBuzz";

test("isFizzBuzz returns a string, isFizzBuzzing the passed name", () => {
  expect(isFizzBuzz(1)).toBe(1);
  expect(isFizzBuzz(2)).toBe(2);
  expect(isFizzBuzz(3)).toBe("Fizz");
  expect(isFizzBuzz(4)).toBe(4);
  expect(isFizzBuzz(5)).toBe("Buzz");
  expect(isFizzBuzz(6)).toBe("Fizz");
  expect(isFizzBuzz(7)).toBe(7);
  expect(isFizzBuzz(8)).toBe(8);
  expect(isFizzBuzz(9)).toBe("Fizz");
  expect(isFizzBuzz(15)).toBe("FizzBuzz");
});
