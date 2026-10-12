import { convertTeethWithPlaceholder } from "../utils/convertTeethWithPlaceholder";
import { switchDentition } from "../utils/switchDentition";
import { FdiTeethWithPlaceholder } from "../fdi";
import { PalmerTeethWithPlaceholder } from "../palmer";
import { UniversalTeethWithPlaceholder } from "../universal";

describe("convertTeethWithPlaceholder", () => {
  it("infers the target array type", () => {
    const universal: UniversalTeethWithPlaceholder[] =
      convertTeethWithPlaceholder([58], "universal");
    const palmer: PalmerTeethWithPlaceholder[] = convertTeethWithPlaceholder(
      universal,
      "palmer"
    );
    const fdi: FdiTeethWithPlaceholder[] = convertTeethWithPlaceholder(
      palmer,
      "fdi"
    );

    expect(fdi).toEqual([58]);
  });

  it("converts FDI placeholders without treating them as real teeth", () => {
    expect(convertTeethWithPlaceholder([58, 55], "universal")).toEqual([
      "A2",
      "A"
    ]);
    expect(convertTeethWithPlaceholder([58, 55], "palmer")).toEqual([
      "HUR",
      "EUR"
    ]);
  });

  it("rejects mixed or unknown notation values", () => {
    expect(() =>
      convertTeethWithPlaceholder([58, "A"] as any, "universal")
    ).toThrow("Invalid mixed or unknown tooth notation");
    expect(() =>
      convertTeethWithPlaceholder(["unknown"] as any, "fdi")
    ).toThrow("Invalid mixed or unknown tooth notation");
  });
});

describe("switchDentition", () => {
  it("keeps the input notation when the first value is a placeholder", () => {
    expect(switchDentition([58])).toEqual([18]);
    expect(switchDentition(["A2"])).toEqual(["1"]);
    expect(switchDentition(["HUR"])).toEqual(["8UR"]);
  });
});
