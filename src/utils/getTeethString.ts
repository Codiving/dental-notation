import { FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UniversalTeeth } from "../universal";
import { isFdiTeeth, isUniversalTeeth } from "./common";
import { getTeethString as getTeethStringFdi } from "./fdi";
import { getTeethString as getTeethStringPalmer } from "./palmer";
import { getTeethString as getTeethStringUniversal } from "./universal";

export function getTeethString(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) {
  if (!teeth.length) return "";

  const tooth = teeth[0];

  // fdi
  if (isFdiTeeth(tooth)) {
    return getTeethStringFdi(teeth as FdiTeeth[], type, prefix);
  }
  // universal
  else if (isUniversalTeeth(tooth)) {
    return getTeethStringUniversal(teeth as UniversalTeeth[], type, prefix);
  }
  // palmer
  else {
    return getTeethStringPalmer(teeth as PalmerTeeth[], type);
  }
}
