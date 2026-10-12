import { FDI_TEETH, FdiTeeth } from "../fdi";
import { PALMER_TEETH, PalmerTeeth } from "../palmer";
import type { NotationType, TeethByNotation } from "../types";
import { UNIVERSAL_TEETH, UniversalTeeth } from "../universal";
import { convertNotation } from "./convertNotation";

const NOTATION_TEETH = {
  fdi: FDI_TEETH,
  universal: UNIVERSAL_TEETH,
  palmer: PALMER_TEETH
};

/** Converts clinical teeth (permanent and deciduous) between notations. */
export function convertTeeth<To extends NotationType>(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  to: To
): TeethByNotation[To][] {
  return convertNotation(teeth, to, NOTATION_TEETH) as TeethByNotation[To][];
}
