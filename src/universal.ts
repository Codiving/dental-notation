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

export const UNIVERSAL_PERMANENT_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT
] as const;
export type UniversalPermanentTeeth =
  (typeof UNIVERSAL_PERMANENT_TEETH)[number];

const UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT = [
  "A",
  "B",
  "C",
  "D",
  "E"
] as const;
const UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT = ["F", "G", "H", "I", "J"] as const;
const UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT = [
  "T",
  "S",
  "R",
  "Q",
  "P"
] as const;
const UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT = ["O", "N", "M", "L", "K"] as const;

export const UNIVERSAL_DECIDUOUS_TEETH = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT
] as const;
export type UniversalDeciduousTeeth =
  (typeof UNIVERSAL_DECIDUOUS_TEETH)[number];

// Placeholders are display-only slots for positions without a deciduous
// tooth. They keep the deciduous chart aligned with the permanent chart and
// are not clinical teeth.
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER = [
  "A2",
  "A1",
  "A0",
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT,
  "J0",
  "J1",
  "J2"
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER = [
  "T2",
  "T1",
  "T0",
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT
] as const;
export const UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT,
  "K0",
  "K1",
  "K2"
] as const;

export const UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER = [
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_RIGHT_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_UPPER_LEFT_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_RIGHT_WITH_PLACEHOLDER,
  ...UNIVERSAL_DECIDUOUS_TEETH_LOWER_LEFT_WITH_PLACEHOLDER
] as const;
export type UniversalDeciduousTeethWithPlaceholder =
  (typeof UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER)[number];

export const UNIVERSAL_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH,
  ...UNIVERSAL_DECIDUOUS_TEETH
] as const;
export type UniversalTeeth = (typeof UNIVERSAL_TEETH)[number];

export const UNIVERSAL_TEETH_WITH_PLACEHOLDER = [
  ...UNIVERSAL_PERMANENT_TEETH,
  ...UNIVERSAL_DECIDUOUS_TEETH_WITH_PLACEHOLDER
] as const;
export type UniversalTeethWithPlaceholder =
  (typeof UNIVERSAL_TEETH_WITH_PLACEHOLDER)[number];
