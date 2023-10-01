import { expect, test, describe } from "bun:test";
import { maskPhoneNumber, unmaskPhoneNumber } from "../hooks";


describe("Given a masked phone number", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskPhoneNumber("(11) 98877-6655")).toBe("11988776655");
    expect(unmaskPhoneNumber("(11) 98877-66x3")).toBe("1198877663");
    expect(unmaskPhoneNumber("98Aa7766x3")).toBe("9877663");
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