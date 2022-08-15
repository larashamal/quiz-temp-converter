import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  // Given('I have a temperature of {float} Celsius', function (float) {
  // Write the code here that turns the phrase above into concrete actions
  // 'this' will not work properly when used in an arrow function.
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", function (units) {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {units}", function (expected, _) {
  expect(this.convertedTemp).toBe(expected.toString());
});
