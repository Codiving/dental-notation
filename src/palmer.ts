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
export const PALMER_PERMANENT_TEETH_UPPER = [
  ...PALMER_PERMANENT_TEETH_UPPER_RIGHT,
  ...PALMER_PERMANENT_TEETH_UPPER_LEFT
] as const;
export type PalmerPermanentTeethUpperRight =
  (typeof PALMER_PERMANENT_TEETH_UPPER_RIGHT)[number];
export type PalmerPermanentTeethUpperLeft =
  (typeof PALMER_PERMANENT_TEETH_UPPER_LEFT)[number];
export type PalmerPermanentTeethUpper =
  (typeof PALMER_PERMANENT_TEETH_UPPER)[number];

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
export const PALMER_PERMANENT_TEETH_LOWER = [
  ...PALMER_PERMANENT_TEETH_LOWER_RIGHT,
  ...PALMER_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type PalmerPermanentTeethLowerRight =
  (typeof PALMER_PERMANENT_TEETH_LOWER_RIGHT)[number];
export type PalmerPermanentTeethLowerLeft =
  (typeof PALMER_PERMANENT_TEETH_LOWER_LEFT)[number];
export type PalmerPermanentTeethLower =
  (typeof PALMER_PERMANENT_TEETH_LOWER)[number];

export const PALMER_PERMANENT_TEETH_RIGHT = [
  ...PALMER_PERMANENT_TEETH_UPPER_RIGHT,
  ...PALMER_PERMANENT_TEETH_LOWER_RIGHT
] as const;
export const PALMER_PERMANENT_TEETH_LEFT = [
  ...PALMER_PERMANENT_TEETH_UPPER_LEFT,
  ...PALMER_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type PalmerPermanentTeethRight =
  (typeof PALMER_PERMANENT_TEETH_RIGHT)[number];
export type PalmerPermanentTeethLeft =
  (typeof PALMER_PERMANENT_TEETH_LEFT)[number];

export const PALMER_PERMANENT_TEETH = [
  ...PALMER_PERMANENT_TEETH_UPPER,
  ...PALMER_PERMANENT_TEETH_LOWER
] as const;
export type PalmerPermanentTeeth = (typeof PALMER_PERMANENT_TEETH)[number];

export const PALMER_DECIDUOUS_TEETH_UPPER_RIGHT = [
  "EUR",
  "DUR",
  "CUR",
  "BUR",
  "AUR"
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_LEFT = [
  "AUL",
  "BUL",
  "CUL",
  "DUL",
  "EUL"
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT
] as const;
export type PalmerDeciduousTeethUpperRight =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_RIGHT)[number];
export type PalmerDeciduousTeethUpperLeft =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_LEFT)[number];
export type PalmerDeciduousTeethUpper =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER)[number];

export const PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER = [
  "HUR",
  "GUR",
  "FUR"
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER = [
  "FUL",
  "GUL",
  "HUL"
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const PALMER_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER
] as const;
export type PalmerDeciduousTeethUpperRightPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER)[number];
export type PalmerDeciduousTeethUpperRightWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER)[number];
export type PalmerDeciduousTeethUpperLeftPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER)[number];
export type PalmerDeciduousTeethUpperLeftWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER)[number];
export type PalmerDeciduousTeethUpperPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_PLACEHOLDER)[number];
export type PalmerDeciduousTeethUpperWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER)[number];

export const PALMER_DECIDUOUS_TEETH_LOWER_RIGHT = [
  "ELR",
  "DLR",
  "CLR",
  "BLR",
  "ALR"
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_LEFT = [
  "ALL",
  "BLL",
  "CLL",
  "DLL",
  "ELL"
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type PalmerDeciduousTeethLowerRight =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_RIGHT)[number];
export type PalmerDeciduousTeethLowerLeft =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_LEFT)[number];
export type PalmerDeciduousTeethLower =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER)[number];

export const PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER = [
  "HLR",
  "GLR",
  "FLR"
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER = [
  "FLL",
  "GLL",
  "HLL"
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const PALMER_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type PalmerDeciduousTeethLowerRightWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER)[number];
export type PalmerDeciduousTeethLowerLeftWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER)[number];
export type PalmerDeciduousTeethLowerWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER)[number];
export type PalmerDeciduousTeethLowerRightPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER)[number];
export type PalmerDeciduousTeethLowerLeftPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER)[number];
export type PalmerDeciduousTeethLowerPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_LOWER_PLACEHOLDER)[number];

export const PALMER_DECIDUOUS_TEETH_RIGHT = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const PALMER_DECIDUOUS_TEETH_LEFT = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_LEFT,
  ...PALMER_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type PalmerDeciduousTeethRight =
  (typeof PALMER_DECIDUOUS_TEETH_RIGHT)[number];
export type PalmerDeciduousTeethLeft =
  (typeof PALMER_DECIDUOUS_TEETH_LEFT)[number];

export const PALMER_DECIDUOUS_TEETH = [
  ...PALMER_DECIDUOUS_TEETH_UPPER,
  ...PALMER_DECIDUOUS_TEETH_LOWER
] as const;
export type PalmerDeciduousTeeth = (typeof PALMER_DECIDUOUS_TEETH)[number];

export const PALMER_TEETH = [
  ...PALMER_PERMANENT_TEETH,
  ...PALMER_DECIDUOUS_TEETH
] as const;
export type PalmerTeeth = (typeof PALMER_TEETH)[number];

export const PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER
] as const;
export type PalmerDeciduousTeethWithPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

// Display-only slots for positions without a deciduous tooth; not clinical teeth.
export const PALMER_DECIDUOUS_TEETH_PLACEHOLDER = [
  ...PALMER_DECIDUOUS_TEETH_UPPER_PLACEHOLDER,
  ...PALMER_DECIDUOUS_TEETH_LOWER_PLACEHOLDER
] as const;
export type PalmerDeciduousTeethPlaceholder =
  (typeof PALMER_DECIDUOUS_TEETH_PLACEHOLDER)[number];

export const PALMER_TEETH_WITH_PLACEHOLDER = [
  ...PALMER_PERMANENT_TEETH,
  ...PALMER_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type PalmerTeethWithPlaceholder =
  (typeof PALMER_TEETH_WITH_PLACEHOLDER)[number];
