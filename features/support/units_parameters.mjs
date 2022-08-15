import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /\s?C|F|Celsius|Fahrenheit/,
  transformer(name) {
    return name.startsWith("C") ? "toCelsius" : "toFahrenheit";
  },
});
