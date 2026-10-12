import type { FdiTeeth, FdiTeethWithPlaceholder } from "./fdi";
import type { PalmerTeeth, PalmerTeethWithPlaceholder } from "./palmer";
import type {
  UniversalTeeth,
  UniversalTeethWithPlaceholder
} from "./universal";

export * from "./fdi";
export * from "./palmer";
export * from "./slots";
export * from "./universal";

export { convertTeeth } from "./utils/convertTeeth";
export { convertTeethWithPlaceholder } from "./utils/convertTeethWithPlaceholder";
export { formatTeeth } from "./utils/formatTeeth";
export { switchDentition } from "./utils/switchDentition";

export {
  FDI_TO_PALMER_WITH_PLACEHOLDER,
  FDI_TO_UNIVERSAL_WITH_PLACEHOLDER,
  isRealTooth as isFdiTooth
} from "./utils/fdi";
export {
  PALMER_TO_FDI_WITH_PLACEHOLDER,
  PALMER_TO_UNIVERSAL_WITH_PLACEHOLDER,
  isRealTooth as isPalmerTooth
} from "./utils/palmer";
export {
  UNIVERSAL_TO_FDI_WITH_PLACEHOLDER,
  UNIVERSAL_TO_PALMER_WITH_PLACEHOLDER,
  isRealTooth as isUniversalTooth
} from "./utils/universal";

export type NotationType = "fdi" | "universal" | "palmer";
export type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;
export type TeethWithPlaceholder =
  | FdiTeethWithPlaceholder
  | UniversalTeethWithPlaceholder
  | PalmerTeethWithPlaceholder;
