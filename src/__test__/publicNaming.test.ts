import {
  convertTeethWithPlaceholder,
  formatTeeth,
  isFdiTooth,
  isPalmerTooth,
  isUniversalTooth,
  switchDentition
} from "..";

describe("public naming aliases", () => {
  it("exposes descriptive names for placeholder conversion", () => {
    expect(convertTeethWithPlaceholder([58], "universal")).toEqual(["A2"]);
  });

  it("exposes descriptive names for dentition switching", () => {
    expect(switchDentition([18])).toEqual([58]);
  });

  it("exposes descriptive names for formatting and validation", () => {
    expect(formatTeeth([18])).toBe("#18");
    expect(isFdiTooth(18)).toBe(true);
    expect(isUniversalTooth("1")).toBe(true);
    expect(isPalmerTooth("8UR")).toBe(true);
  });
});
