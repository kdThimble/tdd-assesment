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
  test("returns sum of multiple comma-separated numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
  test("handles newline as delimiter", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test("supports custom delimiter defined at start", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  test("throws error with all negative numbers listed", () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2,-4"
    );
  });
  
  
  
});
