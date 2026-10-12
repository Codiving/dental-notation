import { FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UniversalTeeth } from "../universal";
import { formatFdiTeeth, isFdiTooth } from "./fdi";
import { formatPalmerTeeth } from "./palmer";
import { formatUniversalTeeth, isUniversalTooth } from "./universal";

export function formatTeeth(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) {
  if (!teeth.length) return "";

  const tooth = teeth[0];

  if (isFdiTooth(tooth)) {
    return formatFdiTeeth(teeth as FdiTeeth[], type, prefix);
  }
  if (isUniversalTooth(tooth)) {
    return formatUniversalTeeth(teeth as UniversalTeeth[], type, prefix);
  }
  return formatPalmerTeeth(teeth as PalmerTeeth[], type);
}
