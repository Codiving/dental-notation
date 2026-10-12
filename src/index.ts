import type {
  FdiTeeth,
  FdiTeethWithPlaceholder,
  PalmerTeeth,
  PalmerTeethWithPlaceholder,
  UniversalTeeth,
  UniversalTeethWithPlaceholder
} from "./naming";

export * from "./naming";
export * from "./slots";

export { convertTeeth } from "./utils/convertTeeth";
export { convertTeethWithPlaceholder } from "./utils/convertTeethWithPlaceholder";
export { formatTeeth } from "./utils/formatTeeth";
export { switchDentition } from "./utils/switchDentition";

export { isRealTooth as isFdiTooth } from "./utils/fdi";
export { isRealTooth as isPalmerTooth } from "./utils/palmer";
export { isRealTooth as isUniversalTooth } from "./utils/universal";

export type NotationType = "fdi" | "universal" | "palmer";
export type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;
export type TeethWithPlaceholder =
  | FdiTeethWithPlaceholder
  | UniversalTeethWithPlaceholder
  | PalmerTeethWithPlaceholder;
