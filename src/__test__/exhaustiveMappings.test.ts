import {
  FDI_PERMANENT_TEETH,
  PALMER_PERMANENT_TEETH,
  UNIVERSAL_PERMANENT_TEETH,
  convertTeeth,
  convertTeethWithPlaceholder
} from "..";
import { FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER, FdiTeeth } from "../fdi";
import { PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER } from "../palmer";
import { UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER } from "../universal";

describe("complete clinical notation mappings", () => {
  it("round-trips all 32 permanent teeth through every notation", () => {
    const fdi = [...FDI_PERMANENT_TEETH];
    const universal = convertTeeth(fdi, "universal");
    const palmer = convertTeeth(universal, "palmer");

    expect(convertTeeth(palmer, "fdi")).toEqual(fdi);
    expect(convertTeeth(palmer, "universal")).toEqual(universal);
    expect(universal).toHaveLength(32);
    expect(palmer).toHaveLength(32);
  });

  it("round-trips all 20 deciduous teeth through every notation", () => {
    const fdi: FdiTeeth[] = [
      51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83,
      84, 85
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
      [...FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER],
      "universal"
    );
    const palmer = convertTeethWithPlaceholder(universal, "palmer");

    expect(convertTeethWithPlaceholder(palmer, "fdi")).toEqual([
      ...FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER
    ]);
    expect(universal).toEqual([...UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER]);
    expect(palmer).toEqual([...PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER]);
  });

  it("covers every placeholder-inclusive notation list", () => {
    expect(FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER).toHaveLength(32);
    expect(UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER).toHaveLength(32);
    expect(PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER).toHaveLength(32);
  });
});
