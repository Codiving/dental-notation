const UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
] as const;
const UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16"
] as const;
const UNIVERSAL_PRIMARY_TEETH_UPPER = [
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT
] as const;

const UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT = [
  "32",
  "31",
  "30",
  "29",
  "28",
  "27",
  "26",
  "25"
] as const;
const UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT = [
  "24",
  "23",
  "22",
  "21",
  "20",
  "19",
  "18",
  "17"
] as const;
const UNIVERSAL_PRIMARY_TEETH_LOWER = [
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT,
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT
] as const;

export const UNIVERSAL_PRIMARY_TEETH = [
  ...UNIVERSAL_PRIMARY_TEETH_UPPER,
  ...UNIVERSAL_PRIMARY_TEETH_LOWER
] as const;
export type UniversalPrimaryTeeth = (typeof UNIVERSAL_PRIMARY_TEETH)[number];

const UNIVERSAL_BABY_TEETH_UPPER_LEFT = ["A", "B", "C", "D", "E"] as const;
const UNIVERSAL_BABY_TEETH_UPPER_RIGHT = ["F", "G", "H", "I", "J"] as const;
const UNIVERSAL_BABY_TEETH_UPPER = [
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT
] as const;

const UNIVERSAL_BABY_TEETH_LOWER_LEFT = ["T", "S", "R", "Q", "P"] as const;
const UNIVERSAL_BABY_TEETH_LOWER_RIGHT = ["O", "N", "M", "L", "K"] as const;
const UNIVERSAL_BABY_TEETH_LOWER = [
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT,
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT
] as const;

const UNIVERSAL_BABY_TEETH = [
  ...UNIVERSAL_BABY_TEETH_UPPER,
  ...UNIVERSAL_BABY_TEETH_LOWER
] as const;
export type UniversalBabyTeeth = (typeof UNIVERSAL_BABY_TEETH)[number];

export const UNIVERSAL_TEETH = [
  ...UNIVERSAL_PRIMARY_TEETH,
  ...UNIVERSAL_BABY_TEETH
] as const;
export type UniversalTeeth = (typeof UNIVERSAL_TEETH)[number];
