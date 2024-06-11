import { FDI_TEETH, FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UNIVERSAL_TEETH, UniversalTeeth } from "../universal";
import { getTeethString as getTeethStringFdi } from "./fdi";
import { getTeethString as getTeethStringPalmer } from "./palmer";
import { getTeethString as getTeethStringUniversal } from "./universal";

export function getTeethString(
  teeth: FdiTeeth[],
  type: "range" | "individual",
  prefix?: string
): string;

export function getTeethString(
  teeth: UniversalTeeth[],
  type: "range" | "individual",
  prefix?: string
): string;

export function getTeethString(
  teeth: PalmerTeeth[],
  type: "range" | "individual"
): string;

export function getTeethString(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) {
  if (!teeth.length) return "";

  const tooth = teeth[0];

  // fdi
  if (FDI_TEETH.includes(tooth as FdiTeeth)) {
    return getTeethStringFdi(teeth as FdiTeeth[], type, prefix);
  }
  // universal
  else if (UNIVERSAL_TEETH.includes(tooth as UniversalTeeth)) {
    return getTeethStringUniversal(teeth as UniversalTeeth[], type, prefix);
  }
  // palmer
  else {
    return getTeethStringPalmer(teeth as PalmerTeeth[], type);
  }
}
