import { FDI_TEETH_WITH_PLACEHOLDER, FdiTeethWithPlaceholder } from "../fdi";
import {
  PALMER_TEETH_WITH_PLACEHOLDER,
  PalmerTeethWithPlaceholder
} from "../palmer";
import type { NotationType, TeethWithPlaceholderByNotation } from "../types";
import {
  UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  UniversalTeethWithPlaceholder
} from "../universal";
import { convertNotation } from "./convertNotation";

const NOTATION_TEETH = {
  fdi: FDI_TEETH_WITH_PLACEHOLDER,
  universal: UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  palmer: PALMER_TEETH_WITH_PLACEHOLDER
};

/** Converts teeth between notations, including display-only placeholders. */
export function convertTeethWithPlaceholder<To extends NotationType>(
  teeth:
    | FdiTeethWithPlaceholder[]
    | UniversalTeethWithPlaceholder[]
    | PalmerTeethWithPlaceholder[],
  to: To
): TeethWithPlaceholderByNotation[To][] {
  return convertNotation(
    teeth,
    to,
    NOTATION_TEETH
  ) as TeethWithPlaceholderByNotation[To][];
}
