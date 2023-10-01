import { expect, test, describe } from "bun:test";
import { maskCPFNumber, unmaskCPFNumber } from "../hooks";


describe("Given a masked cpf", () => {
  test("Should remove unwanted chars", () => {
    expect(unmaskCPFNumber("111.222.333-44")).toBe("11122233344");
    expect(unmaskCPFNumber("z11.2y2.33x-4a")).toBe("1122334");
    expect(unmaskCPFNumber("98Aa7766x3")).toBe("9877663");
  });
});

describe("Given a raw cpf", () => {
  test("Should mask it", () => {
    expect(maskCPFNumber("11122233344")).toBe("111.222.333-44");
  })
  test("Should remove the 11th", () => {
    expect(maskCPFNumber("111222333446")).toBe("111.222.333-44");
  })
})