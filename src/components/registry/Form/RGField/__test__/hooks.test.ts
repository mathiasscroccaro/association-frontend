import { expect, test, describe } from "bun:test";
import { maskRGNumber, unmaskRGNumber } from "../hooks";


describe("Given a masked rg", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskRGNumber("1122557-2")).toBe("11225572");
    expect(unmaskRGNumber("11x2a57-b")).toBe("11257");
    expect(unmaskRGNumber("766x3")).toBe("7663");
  });
});

describe("Given a raw rg", () => {
  test("Should mask it", () => {
    expect(maskRGNumber("11225544")).toBe("1122554-4");
  })
  test("Should remove the 9th", () => {
    expect(maskRGNumber("112255445")).toBe("1122554-4");
  })
})