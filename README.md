# String Calculator – TDD Kata 🧪

This project is an implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** in **JavaScript** with **Jest**.

---

## 📌 Problem Statement

Create a method `add(numbers)` that takes a string of numbers separated by delimiters and returns their sum.

### Requirements

1. Return `0` for an empty string.
2. Return the number itself for a single number.
3. Return the sum of two or more numbers separated by commas (`,`) or new lines (`\n`).
4. Allow custom delimiters defined in the format: `//[delimiter]\n[numbers…]`  
   - Example: `"//;\n1;2"` should return `3`.
5. Throw an exception if any **negative numbers** are present.
   - The error message must include all negative numbers found.

---

## 🧪 Examples

| Input            | Output | Notes                                |
|------------------|--------|--------------------------------------|
| `""`             | `0`    | Empty input                          |
| `"1"`            | `1`    | Single number                        |
| `"1,2"`          | `3`    | Two numbers                          |
| `"1\n2,3"`       | `6`    | Handles new lines                    |
| `"//;\n1;2"`     | `3`    | Custom delimiter `;`                 |
| `"1,-2,3,-4"`    | Throws | `negative numbers not allowed: -2,-4` |

---

## ✅ How to Run the Tests

```bash
npm install
npm test
