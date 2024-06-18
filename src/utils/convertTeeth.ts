import { NotationType, Teeth } from "..";
import { FDI_TEETH, FdiTeeth } from "../fdi";
import { PALMER_TEETH, PalmerTeeth } from "../palmer";
import { UNIVERSAL_TEETH, UniversalTeeth } from "../universal";
import { isFdiTeeth, isUniversalTeeth } from "./common";

export function convertTeeth(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  to: NotationType
): FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[] {
  if (!teeth.length) return [];

  const tooth = teeth[0];

  const fromTeeth = (isFdiTeeth(tooth)
    ? FDI_TEETH
    : isUniversalTeeth(tooth)
    ? UNIVERSAL_TEETH
    : PALMER_TEETH) as unknown as Teeth[];

  const toTeeth = (to === "fdi"
    ? FDI_TEETH
    : to === "universal"
    ? UNIVERSAL_TEETH
    : PALMER_TEETH) as unknown as Teeth[];

  const result = teeth.map(tooth => {
    const index = fromTeeth.indexOf(tooth as Teeth);

    if (index === -1) {
      throw new Error(`Not Found tooth : ${tooth}`);
    }

    return toTeeth[index];
  }) as FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[];

  return result;
}
