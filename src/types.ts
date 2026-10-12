import type { FdiTeeth, FdiTeethWithPlaceholder } from "./fdi";
import type { PalmerTeeth, PalmerTeethWithPlaceholder } from "./palmer";
import type {
  UniversalTeeth,
  UniversalTeethWithPlaceholder
} from "./universal";

export type NotationType = "fdi" | "universal" | "palmer";

export type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

export type TeethWithPlaceholder =
  | FdiTeethWithPlaceholder
  | UniversalTeethWithPlaceholder
  | PalmerTeethWithPlaceholder;
