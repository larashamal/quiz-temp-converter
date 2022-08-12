import tryConvert from "./index.js";

it("converts 100 celsius to 212 fahrenheit", () => {
  // Arrange
  const temp2Convert = 100;
  const conversion = "toFahrenheit";

  // Act
  const result = tryConvert(temp2Convert, conversion);

  // Assert
  expect(result).toBe("212");
});

it("converts 50 fahrenheit to 10 celsius", () => {
  // Arrange
  const temp2Convert2 = 50;
  const conversion2 = "toCelsius";

  // Act
  const result2 = tryConvert(temp2Convert2, conversion2);

  // Assert
  expect(result2).toBe("10");
});
