export const FDI_PERMANENT_TEETH_UPPER_RIGHT = [
  18, 17, 16, 15, 14, 13, 12, 11
] as const;
export const FDI_PERMANENT_TEETH_UPPER_LEFT = [
  21, 22, 23, 24, 25, 26, 27, 28
] as const;
export const FDI_PERMANENT_TEETH_LOWER_RIGHT = [
  48, 47, 46, 45, 44, 43, 42, 41
] as const;
export const FDI_PERMANENT_TEETH_LOWER_LEFT = [
  31, 32, 33, 34, 35, 36, 37, 38
] as const;

export type FdiPermanentTeethUpperRight =
  (typeof FDI_PERMANENT_TEETH_UPPER_RIGHT)[number];
export type FdiPermanentTeethUpperLeft =
  (typeof FDI_PERMANENT_TEETH_UPPER_LEFT)[number];
export type FdiPermanentTeethLowerRight =
  (typeof FDI_PERMANENT_TEETH_LOWER_RIGHT)[number];
export type FdiPermanentTeethLowerLeft =
  (typeof FDI_PERMANENT_TEETH_LOWER_LEFT)[number];

export const FDI_PERMANENT_TEETH = [
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT,
  ...FDI_PERMANENT_TEETH_UPPER_LEFT,
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT,
  ...FDI_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type FdiPermanentTeeth = (typeof FDI_PERMANENT_TEETH)[number];

const FDI_DECIDUOUS_TEETH_UPPER_RIGHT = [55, 54, 53, 52, 51] as const;
const FDI_DECIDUOUS_TEETH_UPPER_LEFT = [61, 62, 63, 64, 65] as const;
const FDI_DECIDUOUS_TEETH_LOWER_RIGHT = [85, 84, 83, 82, 81] as const;
const FDI_DECIDUOUS_TEETH_LOWER_LEFT = [71, 72, 73, 74, 75] as const;

export const FDI_DECIDUOUS_TEETH = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type FdiDeciduousTeeth = (typeof FDI_DECIDUOUS_TEETH)[number];

// Placeholders are display-only slots for positions without a deciduous
// tooth. They keep the deciduous chart aligned with the permanent chart and
// are not clinical teeth.
export const FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  58,
  57,
  56,
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT,
  66,
  67,
  68
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  88,
  87,
  86,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT,
  76,
  77,
  78
] as const;

export const FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type FdiDeciduousTeethWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

export const FDI_TEETH = [
  ...FDI_PERMANENT_TEETH,
  ...FDI_DECIDUOUS_TEETH
] as const;
export type FdiTeeth = (typeof FDI_TEETH)[number];

export const FDI_TEETH_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH,
  ...FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type FdiTeethWithPlaceholder =
  (typeof FDI_TEETH_WITH_PLACEHOLDER)[number];
