import { expect, test, describe } from "bun:test";
import { maskCEPNumber, unmaskCEPNumber } from "../hooks";


describe("Given a masked cpf", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskCEPNumber("111.222.333-44")).toBe("11122233344");
    expect(unmaskCEPNumber("z11.2y2.33x-4a")).toBe("1122334");
    expect(unmaskCEPNumber("98Aa7766x3")).toBe("9877663");
  });
});

describe("Given a raw cpf", () => {
  test("Should mask it", () => {
    expect(maskCEPNumber("11122233344")).toBe("111.222.333-44");
  })
  test("Should remove the 11th", () => {
    expect(maskCEPNumber("111222333446")).toBe("111.222.333-44");
  })
})