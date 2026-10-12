import {
  FDI_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER,
  FDI_PERMANENT_TEETH_UPPER_RIGHT,
  FdiPermanentTeethUpperRight,
  convertTeethWithPlaceholder,
  formatTeeth,
  isFdiTooth,
  isPalmerTooth,
  isUniversalTooth,
  switchDentition
} from "..";

describe("canonical public naming", () => {
  it("exposes canonical dentition and placeholder names", () => {
    const permanent: FdiPermanentTeethUpperRight =
      FDI_PERMANENT_TEETH_UPPER_RIGHT[0];

    expect(permanent).toBe(18);
    expect(FDI_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER).toHaveLength(16);
  });

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
