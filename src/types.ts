import type { FdiTeeth, FdiTeethWithPlaceholder } from "./fdi";
import type { PalmerTeeth, PalmerTeethWithPlaceholder } from "./palmer";
import type {
  UniversalTeeth,
  UniversalTeethWithPlaceholder
} from "./universal";

export type NotationType = "fdi" | "universal" | "palmer";

export type TeethByNotation = {
  fdi: FdiTeeth;
  universal: UniversalTeeth;
  palmer: PalmerTeeth;
};

export type TeethWithPlaceholderByNotation = {
  fdi: FdiTeethWithPlaceholder;
  universal: UniversalTeethWithPlaceholder;
  palmer: PalmerTeethWithPlaceholder;
};

export type Teeth = TeethByNotation[NotationType];

export type TeethWithPlaceholder = TeethWithPlaceholderByNotation[NotationType];
