import { FDI_TEETH_WITH_PLACEHOLDER, FdiTeethWithPlaceholder } from "../fdi";
import { PalmerTeethWithPlaceholder } from "../palmer";
import {
  UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  UniversalTeethWithPlaceholder
} from "../universal";
import type { NotationType, TeethWithPlaceholder } from "../types";
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

  // Validates every value and throws for unknown or mixed notation.
  const fdiTeeth = convertTeethWithPlaceholder(teeth, "fdi");
  const notation: NotationType = FDI_TEETH_WITH_PLACEHOLDER.includes(
    teeth[0] as FdiTeethWithPlaceholder
  )
    ? "fdi"
    : UNIVERSAL_TEETH_WITH_PLACEHOLDER.includes(
          teeth[0] as UniversalTeethWithPlaceholder
        )
      ? "universal"
      : "palmer";

  return convertTeethWithPlaceholder(switchFdiDentition(fdiTeeth), notation);
}
