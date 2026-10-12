import * as publicApi from "..";
import {
  FDI_DECIDUOUS_TEETH,
  FDI_PERMANENT_TEETH,
  FdiPermanentTeeth,
  convertTeethWithPlaceholder,
  formatTeeth,
  isFdiTooth,
  isPalmerTooth,
  isUniversalTooth,
  switchDentition
} from "..";

describe("public API", () => {
  it("exports only the supported runtime values", () => {
    expect(Object.keys(publicApi).sort()).toEqual([
      "FDI_DECIDUOUS_TEETH",
      "FDI_PERMANENT_TEETH",
      "FDI_TEETH",
      "FDI_TEETH_WITH_PLACEHOLDER",
      "PALMER_DECIDUOUS_TEETH",
      "PALMER_PERMANENT_TEETH",
      "PALMER_TEETH",
      "PALMER_TEETH_WITH_PLACEHOLDER",
      "UNIVERSAL_DECIDUOUS_TEETH",
      "UNIVERSAL_PERMANENT_TEETH",
      "UNIVERSAL_TEETH",
      "UNIVERSAL_TEETH_WITH_PLACEHOLDER",
      "convertTeeth",
      "convertTeethWithPlaceholder",
      "formatTeeth",
      "getToothSlots",
      "isFdiTooth",
      "isPalmerTooth",
      "isUniversalTooth",
      "switchDentition"
    ]);
  });

  it("exposes permanent and deciduous teeth", () => {
    const permanent: FdiPermanentTeeth = FDI_PERMANENT_TEETH[0];

    expect(permanent).toBe(18);
    expect(FDI_PERMANENT_TEETH).toHaveLength(32);
    expect(FDI_DECIDUOUS_TEETH).toHaveLength(20);
  });

  it("converts placeholder values", () => {
    expect(convertTeethWithPlaceholder([58], "universal")).toEqual(["A2"]);
  });

  it("switches dentition", () => {
    expect(switchDentition([18])).toEqual([58]);
  });

  it("formats and validates teeth", () => {
    expect(formatTeeth([18])).toBe("#18");
    expect(isFdiTooth(18)).toBe(true);
    expect(isUniversalTooth("1")).toBe(true);
    expect(isPalmerTooth("8UR")).toBe(true);
  });
});
