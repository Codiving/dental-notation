import { convertTeethWithTmp } from "../utils/convertTeethWithTmp";
import { switchTeethWithTmp } from "../utils/switchTeethWithTmp";

describe("convertTeethWithTmp", () => {
  it("converts FDI placeholders without treating them as real teeth", () => {
    expect(convertTeethWithTmp([58, 55], "universal")).toEqual(["A2", "A"]);
    expect(convertTeethWithTmp([58, 55], "palmer")).toEqual(["HUR", "EUR"]);
  });

  it("rejects mixed or unknown notation values", () => {
    expect(() => convertTeethWithTmp([58, "A"] as any, "universal")).toThrow(
      "Invalid mixed or unknown tooth notation"
    );
    expect(() => convertTeethWithTmp(["unknown"] as any, "fdi")).toThrow(
      "Invalid mixed or unknown tooth notation"
    );
  });
});

describe("switchTeethWithTmp", () => {
  it("keeps the input notation when the first value is a placeholder", () => {
    expect(switchTeethWithTmp([58])).toEqual([18]);
    expect(switchTeethWithTmp(["A2"])).toEqual(["1"]);
    expect(switchTeethWithTmp(["HUR"])).toEqual(["8UR"]);
  });
});
