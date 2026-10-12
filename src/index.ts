export {
  FDI_DECIDUOUS_TEETH,
  FDI_PERMANENT_TEETH,
  FDI_TEETH,
  FDI_TEETH_WITH_PLACEHOLDER
} from "./fdi";
export type {
  FdiDeciduousTeeth,
  FdiPermanentTeeth,
  FdiTeeth,
  FdiTeethWithPlaceholder
} from "./fdi";
export {
  UNIVERSAL_DECIDUOUS_TEETH,
  UNIVERSAL_PERMANENT_TEETH,
  UNIVERSAL_TEETH,
  UNIVERSAL_TEETH_WITH_PLACEHOLDER
} from "./universal";
export type {
  UniversalDeciduousTeeth,
  UniversalPermanentTeeth,
  UniversalTeeth,
  UniversalTeethWithPlaceholder
} from "./universal";
export {
  PALMER_DECIDUOUS_TEETH,
  PALMER_PERMANENT_TEETH,
  PALMER_TEETH,
  PALMER_TEETH_WITH_PLACEHOLDER
} from "./palmer";
export type {
  PalmerDeciduousTeeth,
  PalmerPermanentTeeth,
  PalmerTeeth,
  PalmerTeethWithPlaceholder
} from "./palmer";
export type { NotationType, Teeth, TeethWithPlaceholder } from "./types";

export { convertTeeth } from "./utils/convertTeeth";
export { convertTeethWithPlaceholder } from "./utils/convertTeethWithPlaceholder";
export { formatTeeth } from "./utils/formatTeeth";
export { switchDentition } from "./utils/switchDentition";
export { isFdiTooth } from "./utils/fdi";
export { isPalmerTooth } from "./utils/palmer";
export { isUniversalTooth } from "./utils/universal";

export { getToothSlots } from "./slots";
export type { Dentition, ToothQuadrant, ToothSlot } from "./slots";
