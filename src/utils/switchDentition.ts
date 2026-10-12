import { FDI_TEETH_WITH_PLACEHOLDER, FdiTeethWithPlaceholder } from "../fdi";
import {
  PALMER_TEETH_WITH_PLACEHOLDER,
  PalmerTeethWithPlaceholder
} from "../palmer";
import {
  UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  UniversalTeethWithPlaceholder
} from "../universal";
import type { TeethWithPlaceholder } from "../types";
import { convertTeethWithPlaceholder } from "./convertTeethWithPlaceholder";
import { switchFdiDentition } from "./fdi";

/**
 * Switches permanent teeth to deciduous teeth and vice versa.
 */
export function switchDentition(
  teeth: FdiTeethWithPlaceholder[]
): FdiTeethWithPlaceholder[];

export function switchDentition(
  teeth: UniversalTeethWithPlaceholder[]
): UniversalTeethWithPlaceholder[];

export function switchDentition(
  teeth: PalmerTeethWithPlaceholder[]
): PalmerTeethWithPlaceholder[];

export function switchDentition(
  teeth:
    | FdiTeethWithPlaceholder[]
    | UniversalTeethWithPlaceholder[]
    | PalmerTeethWithPlaceholder[]
): TeethWithPlaceholder[] {
  if (!teeth.length) return [];

  const firstTooth = teeth[0];
  const isFdi = FDI_TEETH_WITH_PLACEHOLDER.includes(
    firstTooth as FdiTeethWithPlaceholder
  );
  const isUniversal = UNIVERSAL_TEETH_WITH_PLACEHOLDER.includes(
    firstTooth as UniversalTeethWithPlaceholder
  );
  const isPalmer = PALMER_TEETH_WITH_PLACEHOLDER.includes(
    firstTooth as PalmerTeethWithPlaceholder
  );

  if (!isFdi && !isUniversal && !isPalmer) {
    throw new Error(`Not Found tooth : ${firstTooth}`);
  }

  const fdiTeeth = convertTeethWithPlaceholder(teeth, "fdi");
  const switchedTeeth = switchFdiDentition(fdiTeeth);

  return convertTeethWithPlaceholder(
    switchedTeeth,
    isFdi ? "fdi" : isUniversal ? "universal" : "palmer"
  );
}
