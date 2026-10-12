import { convertTeethWithTmp } from "../utils/convertTeethWithTmp";
import { switchTeethWithTmp } from "../utils/switchTeethWithTmp";
import { FdiTeethWithPlaceholder } from "../fdi";
import { PalmerTeethWithPlaceholder } from "../palmer";
import { UniversalTeethWithPlaceholder } from "../universal";

describe("convertTeethWithTmp", () => {
  it("infers the target array type", () => {
    const universal: UniversalTeethWithPlaceholder[] = convertTeethWithTmp(
      [58],
      "universal"
    );
    const palmer: PalmerTeethWithPlaceholder[] = convertTeethWithTmp(
      universal,
      "palmer"
    );
    const fdi: FdiTeethWithPlaceholder[] = convertTeethWithTmp(palmer, "fdi");

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
