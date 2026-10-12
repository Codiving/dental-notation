export const FDI_PERMANENT_TEETH_UPPER_RIGHT = [
  18, 17, 16, 15, 14, 13, 12, 11
] as const;
export const FDI_PERMANENT_TEETH_UPPER_LEFT = [
  21, 22, 23, 24, 25, 26, 27, 28
] as const;
export const FDI_PERMANENT_TEETH_UPPER = [
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT,
  ...FDI_PERMANENT_TEETH_UPPER_LEFT
] as const;

export type FdiPermanentTeethUpperRight =
  (typeof FDI_PERMANENT_TEETH_UPPER_RIGHT)[number];
export type FdiPermanentTeethUpperLeft =
  (typeof FDI_PERMANENT_TEETH_UPPER_LEFT)[number];
export type FdiPermanentTeethUpper = (typeof FDI_PERMANENT_TEETH_UPPER)[number];

export const FDI_PERMANENT_TEETH_LOWER_RIGHT = [
  48, 47, 46, 45, 44, 43, 42, 41
] as const;
export const FDI_PERMANENT_TEETH_LOWER_LEFT = [
  31, 32, 33, 34, 35, 36, 37, 38
] as const;
export const FDI_PERMANENT_TEETH_LOWER = [
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT,
  ...FDI_PERMANENT_TEETH_LOWER_LEFT
] as const;

export type FdiPermanentTeethLowerRight =
  (typeof FDI_PERMANENT_TEETH_LOWER_RIGHT)[number];
export type FdiPermanentTeethLowerLeft =
  (typeof FDI_PERMANENT_TEETH_LOWER_LEFT)[number];
export type FdiPermanentTeethLower = (typeof FDI_PERMANENT_TEETH_LOWER)[number];

export const FDI_PERMANENT_TEETH_RIGHT = [
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT,
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT
] as const;
export const FDI_PERMANENT_TEETH_LEFT = [
  ...FDI_PERMANENT_TEETH_UPPER_LEFT,
  ...FDI_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type FdiPermanentTeethRight = (typeof FDI_PERMANENT_TEETH_RIGHT)[number];
export type FdiPermanentTeethLeft = (typeof FDI_PERMANENT_TEETH_LEFT)[number];

export const FDI_PERMANENT_TEETH = [
  ...FDI_PERMANENT_TEETH_UPPER,
  ...FDI_PERMANENT_TEETH_LOWER
] as const;
export type FdiPermanentTeeth = (typeof FDI_PERMANENT_TEETH)[number];

export const FDI_DECIDUOUS_TEETH_UPPER_RIGHT = [55, 54, 53, 52, 51] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_LEFT = [61, 62, 63, 64, 65] as const;
export const FDI_DECIDUOUS_TEETH_UPPER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT
] as const;
export type FdiDeciduousTeethUpperRight =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_RIGHT)[number];
export type FdiDeciduousTeethUpperLeft =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_LEFT)[number];
export type FdiDeciduousTeethUpper = (typeof FDI_DECIDUOUS_TEETH_UPPER)[number];

export const FDI_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER = [
  58, 57, 56
] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER = [66, 67, 68] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const FDI_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER
] as const;
export type FdiDeciduousTeethUpperRightPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER)[number];
export type FdiDeciduousTeethUpperRightWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER)[number];
export type FdiDeciduousTeethUpperLeftPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER)[number];
export type FdiDeciduousTeethUpperLeftWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER)[number];
export type FdiDeciduousTeethUpperPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_PLACEHOLDER)[number];
export type FdiDeciduousTeethUpperWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER)[number];

export const FDI_DECIDUOUS_TEETH_LOWER_RIGHT = [85, 84, 83, 82, 81] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_LEFT = [71, 72, 73, 74, 75] as const;
export const FDI_DECIDUOUS_TEETH_LOWER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type FdiDeciduousTeethLowerRight =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_RIGHT)[number];
export type FdiDeciduousTeethLowerLeft =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_LEFT)[number];
export type FdiDeciduousTeethLower = (typeof FDI_DECIDUOUS_TEETH_LOWER)[number];

export const FDI_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER = [
  88, 87, 86
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER = [76, 77, 78] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const FDI_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type FdiDeciduousTeethLowerRightWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER)[number];
export type FdiDeciduousTeethLowerLeftWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER)[number];
export type FdiDeciduousTeethLowerWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER)[number];
export type FdiDeciduousTeethLowerRightPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER)[number];
export type FdiDeciduousTeethLowerLeftPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER)[number];
export type FdiDeciduousTeethLowerPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_LOWER_PLACEHOLDER)[number];

export const FDI_DECIDUOUS_TEETH_RIGHT = [
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const FDI_DECIDUOUS_TEETH_LEFT = [
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type FdiDeciduousTeethRight = (typeof FDI_DECIDUOUS_TEETH_RIGHT)[number];
export type FdiDeciduousTeethLeft = (typeof FDI_DECIDUOUS_TEETH_LEFT)[number];

export const FDI_DECIDUOUS_TEETH = [
  ...FDI_DECIDUOUS_TEETH_UPPER,
  ...FDI_DECIDUOUS_TEETH_LOWER
] as const;
export type FdiDeciduousTeeth = (typeof FDI_DECIDUOUS_TEETH)[number];

export const FDI_TEETH = [
  ...FDI_PERMANENT_TEETH,
  ...FDI_DECIDUOUS_TEETH
] as const;
export type FdiTeeth = (typeof FDI_TEETH)[number];

export const FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER
] as const;
export type FdiDeciduousTeethWithPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

// Display-only slots for positions without a deciduous tooth; not clinical teeth.
export const FDI_DECIDUOUS_TEETH_PLACEHOLDER = [
  ...FDI_DECIDUOUS_TEETH_UPPER_PLACEHOLDER,
  ...FDI_DECIDUOUS_TEETH_LOWER_PLACEHOLDER
] as const;
export type FdiDeciduousTeethPlaceholder =
  (typeof FDI_DECIDUOUS_TEETH_PLACEHOLDER)[number];

export const FDI_TEETH_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH,
  ...FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type FdiTeethWithPlaceholder =
  (typeof FDI_TEETH_WITH_PLACEHOLDER)[number];

export const FDI_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER
] as const;
export type FdiTeethUpperRightWithPlaceholder =
  (typeof FDI_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER)[number];

export const FDI_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH_UPPER_LEFT,
  ...FDI_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER
] as const;
export type FdiTeethUpperLeftWithPlaceholder =
  (typeof FDI_TEETH_UPPER_LEFT_WITH_PLACEHOLDER)[number];

export const FDI_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT,
  ...FDI_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER
] as const;
export type FdiTeethLowerRightWithPlaceholder =
  (typeof FDI_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER)[number];

export const FDI_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...FDI_PERMANENT_TEETH_LOWER_LEFT,
  ...FDI_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type FdiTeethLowerLeftWithPlaceholder =
  (typeof FDI_TEETH_LOWER_LEFT_WITH_PLACEHOLDER)[number];
