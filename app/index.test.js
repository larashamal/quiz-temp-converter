import { tryConvert } from "./index.js";

test("should convert 100 celsius to 212 fahrenheit", () => {
  const tempToFah = tryConvert(100, 212);
  expect(tempToFah((100 * 9) / 5 + 32)).toBe("212");
});

test("should convert 50 fahrenheit to 10 celsius", () => {
  const tempToCel = tryConvert(50, 10);
  expect(tempToCel((tryConvert - 32) * 5) / 9).toBe(10);
});
