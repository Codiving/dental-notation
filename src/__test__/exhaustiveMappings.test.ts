import {
  FDI_BABY_TEETH_WITH_TMP,
  FDI_PRIMARY_TEETH,
  PALMER_BABY_TEETH_WITH_TMP,
  PALMER_PRIMARY_TEETH,
  UNIVERSAL_BABY_TEETH_WITH_TMP,
  UNIVERSAL_PRIMARY_TEETH,
  convertTeeth,
  convertTeethWithPlaceholder
} from "..";
import { FdiTeeth } from "../fdi";

describe("complete clinical notation mappings", () => {
  it("round-trips all 32 permanent teeth through every notation", () => {
    const fdi = [...FDI_PRIMARY_TEETH];
    const universal = convertTeeth(fdi, "universal");
    const palmer = convertTeeth(universal, "palmer");

    expect(convertTeeth(palmer, "fdi")).toEqual(fdi);
    expect(convertTeeth(palmer, "universal")).toEqual(universal);
    expect(universal).toHaveLength(32);
    expect(palmer).toHaveLength(32);
  });

  it("round-trips all 20 deciduous teeth through every notation", () => {
    const fdi: FdiTeeth[] = [
      51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82,
      83, 84, 85
    ];
    const universal = convertTeeth(fdi, "universal");
    const palmer = convertTeeth(universal, "palmer");

    expect(convertTeeth(palmer, "fdi")).toEqual(fdi);
    expect(universal).toHaveLength(20);
    expect(palmer).toHaveLength(20);
  });
});

describe("complete placeholder mappings", () => {
  it("round-trips every FDI placeholder value", () => {
    const universal = convertTeethWithPlaceholder(
      [...FDI_BABY_TEETH_WITH_TMP],
      "universal"
    );
    const palmer = convertTeethWithPlaceholder(universal, "palmer");

    expect(convertTeethWithPlaceholder(palmer, "fdi")).toEqual([
      ...FDI_BABY_TEETH_WITH_TMP
    ]);
    expect(universal).toEqual([...UNIVERSAL_BABY_TEETH_WITH_TMP]);
    expect(palmer).toEqual([...PALMER_BABY_TEETH_WITH_TMP]);
  });

  it("covers every placeholder-inclusive notation list", () => {
    expect(FDI_BABY_TEETH_WITH_TMP).toHaveLength(32);
    expect(UNIVERSAL_BABY_TEETH_WITH_TMP).toHaveLength(32);
    expect(PALMER_BABY_TEETH_WITH_TMP).toHaveLength(32);
  });
});
