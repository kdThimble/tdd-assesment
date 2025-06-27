class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers);
    return numbers
      .split(",")
      .map(Number)
      .reduce((a, b) => a + b, 0);


  }
}

module.exports = StringCalculator;
