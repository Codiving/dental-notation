export const UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
] as const;
export const UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16"
] as const;
export const UNIVERSAL_PERMANENT_TEETH_UPPER = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT
] as const;
export type UniversalPermanentTeethUpperRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT)[number];
export type UniversalPermanentTeethUpperLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT)[number];
export type UniversalPermanentTeethUpper =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER)[number];

export const UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT = [
  "32",
  "31",
  "30",
  "29",
  "28",
  "27",
  "26",
  "25"
] as const;
export const UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT = [
  "24",
  "23",
  "22",
  "21",
  "20",
  "19",
  "18",
  "17"
] as const;
export const UNIVERSAL_PERMANENT_TEETH_LOWER = [
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type UniversalPermanentTeethLowerRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT)[number];
export type UniversalPermanentTeethLowerLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT)[number];
export type UniversalPermanentTeethLower =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER)[number];

export const UNIVERSAL_PERMANENT_TEETH_RIGHT = [
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT
] as const;
export const UNIVERSAL_PERMANENT_TEETH_LEFT = [
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT,
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT
];
export type UniversalPermanentTeethRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_RIGHT)[number];
export type UniversalPermanentTeethLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_LEFT)[number];

export const UNIVERSAL_PERMANENT_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER
] as const;
export type UniversalPermanentTeeth =
  (typeof UNIVERSAL_PERMANENT_TEETH)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT = [
  "A",
  "B",
  "C",
  "D",
  "E"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT = [
  "F",
  "G",
  "H",
  "I",
  "J"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT
] as const;
export type UniversalDeciduousTeethUpperRight =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT)[number];
export type UniversalDeciduousTeethUpperLeft =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT)[number];
export type UniversalDeciduousTeethUpper =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER = [
  "A2",
  "A1",
  "A0"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER = [
  "J0",
  "J1",
  "J2"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER
] as const;
export type UniversalDeciduousTeethUpperRightPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_PLACEHOLDER)[number];
export type UniversalDeciduousTeethUpperRightWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER)[number];
export type UniversalDeciduousTeethUpperLeftPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_PLACEHOLDER)[number];
export type UniversalDeciduousTeethUpperLeftWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER)[number];
export type UniversalDeciduousTeethUpperPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_PLACEHOLDER)[number];
export type UniversalDeciduousTeethUpperWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT = [
  "T",
  "S",
  "R",
  "Q",
  "P"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT = [
  "O",
  "N",
  "M",
  "L",
  "K"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type UniversalDeciduousTeethLowerRight =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT)[number];
export type UniversalDeciduousTeethLowerLeft =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT)[number];
export type UniversalDeciduousTeethLower =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER = [
  "T2",
  "T1",
  "T0"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER = [
  "K0",
  "K1",
  "K2"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type UniversalDeciduousTeethLowerRightWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER)[number];
export type UniversalDeciduousTeethLowerLeftWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER)[number];
export type UniversalDeciduousTeethLowerWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER)[number];
export type UniversalDeciduousTeethLowerRightPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_PLACEHOLDER)[number];
export type UniversalDeciduousTeethLowerLeftPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_PLACEHOLDER)[number];
export type UniversalDeciduousTeethLowerPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LOWER_PLACEHOLDER)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_RIGHT = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LEFT = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type UniversalDeciduousTeethRight =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_RIGHT)[number];
export type UniversalDeciduousTeethLeft =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_LEFT)[number];

export const UNIVERSAL_DECIDUOUS_TEETH = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER
] as const;
export type UniversalDeciduousTeeth =
  (typeof UNIVERSAL_DECIDUOUS_TEETH)[number];

export const UNIVERSAL_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH,
  ...UNIVERSAL_DECIDUOUS_TEETH
] as const;
export type UniversalTeeth = (typeof UNIVERSAL_TEETH)[number];

export const UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_WITH_PLACEHOLDER
] as const;
export type UniversalDeciduousTeethWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

// Display-only slots for positions without a deciduous tooth; not clinical teeth.
export const UNIVERSAL_DECIDUOUS_TEETH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_PLACEHOLDER
] as const;
export type UniversalDeciduousTeethPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_PLACEHOLDER)[number];

export const UNIVERSAL_TEETH_WITH_PLACEHOLDER = [
  ...UNIVERSAL_PERMANENT_TEETH,
  ...UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type UniversalTeethWithPlaceholder =
  (typeof UNIVERSAL_TEETH_WITH_PLACEHOLDER)[number];
