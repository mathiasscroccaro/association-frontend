import { expect, test, describe } from "bun:test";
import { maskCEPNumber, unmaskCEPNumber } from "../hooks";


describe("Given a masked cep", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskCEPNumber("11333-44")).toBe("1133344");
    expect(unmaskCEPNumber("z11.-22")).toBe("1122");
    expect(unmaskCEPNumber("98Aa7766x3")).toBe("9877663");
  });
});

describe("Given a raw cep", () => {
  test("Should mask it", () => {
    expect(maskCEPNumber("11122333")).toBe("11122-333");
  })
  test("Should remove the 9th", () => {
    expect(maskCEPNumber("111222339")).toBe("11122-233");
  })
})