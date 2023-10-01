import { expect, test, describe } from "bun:test";
import { maskPhoneNumber, unmaskPhoneNumber } from "../hooks";


describe("Given a maked phone number", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskPhoneNumber("(11) 98877-6655")).toBe("11988776655");
  });
});

describe("Given a raw phone number", () => {
  test("Should mask it", () => {
    expect(maskPhoneNumber("11988776655")).toBe("(11) 98877-6655");
  })
  test("Should remove the 11th", () => {
    expect(maskPhoneNumber("119887766551")).toBe("(11) 98877-6655");
  })
})