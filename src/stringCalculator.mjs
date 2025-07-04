class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    if (numbers === "") return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter((n) => n < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return nums.reduce((a, b) => a + b, 0);


  }
}

module.exports = StringCalculator;
