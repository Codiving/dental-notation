export const PALMER_PERMANENT_TEETH_UPPER_RIGHT = [
  "8UR",
  "7UR",
  "6UR",
  "5UR",
  "4UR",
  "3UR",
  "2UR",
  "1UR"
] as const;
export const PALMER_PERMANENT_TEETH_UPPER_LEFT = [
  "1UL",
  "2UL",
  "3UL",
  "4UL",
  "5UL",
  "6UL",
  "7UL",
  "8UL"
] as const;
export const PALMER_PERMANENT_TEETH_LOWER_RIGHT = [
  "8LR",
  "7LR",
  "6LR",
  "5LR",
  "4LR",
  "3LR",
  "2LR",
  "1LR"
] as const;
export const PALMER_PERMANENT_TEETH_LOWER_LEFT = [
  "1LL",
  "2LL",
  "3LL",
  "4LL",
  "5LL",
  "6LL",
  "7LL",
  "8LL"
] as const;

export const PALMER_PERMANENT_TEETH = [
  ...PALMER_PERMANENT_TEETH_UPPER_RIGHT,
  ...PALMER_PERMANENT_TEETH_UPPER_LEFT,
  ...PALMER_PERMANENT_TEETH_LOWER_RIGHT,
  ...PALMER_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type PalmerPermanentTeeth = (typeof PALMER_PERMANENT_TEETH)[number];

const PALMER_DECIDUOUS_TEETH_UPPER_RIGHT = [
  "EUR",
  "DUR",
  "CUR",
  "BUR",
  "AUR"
] as const;
const PALMER_DECIDUOUS_TEETH_UPPER_LEFT = [
  "AUL",
  "BUL",
  "CUL",
  "DUL",
  "EUL"
] as const;
const PALMER_DECIDUOUS_TEETH_LOWER_RIGHT = [
  "ELR",
  "DLR",
  "CLR",
  "BLR",
  "ALR"
] as const;
const PALMER_DECIDUOUS_TEETH_LOWER_LEFT = [
  "ALL",
  "BLL",
  "CLL",
  "DLL",
  "ELL"
] as const;

export const PALMER_DECIDUOUS_TEETH = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type PalmerDeciduousTeeth = (typeof PALMER_DECIDUOUS_TEETH)[number];

// Placeholders are display-only slots for positions without a deciduous
// tooth. They keep the deciduous chart aligned with the permanent chart and
// are not clinical teeth.
export const PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  "HUR",
  "GUR",
  "FUR",
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT,
  "FUL",
  "GUL",
  "HUL"
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  "HLR",
  "GLR",
  "FLR",
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT,
  "FLL",
  "GLL",
  "HLL"
] as const;

export const PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type PalmerDeciduousTeethWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

export const PALMER_TEETH = [
  ...PALMER_PERMANENT_TEETH,
  ...PALMER_DECIDUOUS_TEETH
] as const;
export type PalmerTeeth = (typeof PALMER_TEETH)[number];

export const PALMER_TEETH_WITH_PLACEHOLDER = [
  ...PALMER_PERMANENT_TEETH,
  ...PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type PalmerTeethWithPlaceholder =
  (typeof PALMER_TEETH_WITH_PLACEHOLDER)[number];
