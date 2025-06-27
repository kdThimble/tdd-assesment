const StringCalculator = require("./stringCalculator").default;

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});
