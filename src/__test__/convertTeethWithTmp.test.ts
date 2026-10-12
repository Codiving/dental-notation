import { convertTeethWithTmp } from "../utils/convertTeethWithTmp";
import { switchTeethWithTmp } from "../utils/switchTeethWithTmp";
import { FdiTeethWithTmp } from "../fdi";
import { PalmerTeethWithTmp } from "../palmer";
import { UniversalTeethWithTmp } from "../universal";

describe("convertTeethWithTmp", () => {
  it("infers the target array type", () => {
    const universal: UniversalTeethWithTmp[] = convertTeethWithTmp(
      [58],
      "universal"
    );
    const palmer: PalmerTeethWithTmp[] = convertTeethWithTmp(
      universal,
      "palmer"
    );
    const fdi: FdiTeethWithTmp[] = convertTeethWithTmp(palmer, "fdi");

    expect(fdi).toEqual([58]);
  });

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
