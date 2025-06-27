const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator(); // Already correct with 'new'
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
  test("return numbers", () => {
    expect(calculator.add("1")).toBe(1);
  });
  test("returns sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });
});
