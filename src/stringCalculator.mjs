class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers);
    const normalized = numbers.replace(/\n/g, ",");
    return normalized
      .split(",")
      .map(Number)
      .reduce((a, b) => a + b, 0);


  }
}

module.exports = StringCalculator;
