const UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
] as const;
const UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16"
] as const;
const UNIVERSAL_PERMANENT_TEETH_UPPER = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT,
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT
] as const;

type UniversalPermanentTeethUpperLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT)[number];
type UniversalPermanentTeethUpperRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT)[number];
type UniversalPermanentTeethUpper =
  (typeof UNIVERSAL_PERMANENT_TEETH_UPPER)[number];

const UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT = [
  "32",
  "31",
  "30",
  "29",
  "28",
  "27",
  "26",
  "25"
] as const;
const UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT = [
  "24",
  "23",
  "22",
  "21",
  "20",
  "19",
  "18",
  "17"
] as const;
const UNIVERSAL_PERMANENT_TEETH_LOWER = [
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT
] as const;

type UniversalPermanentTeethLowerLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT)[number];
type UniversalPermanentTeethLowerRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT)[number];
type UniversalPermanentTeethLower =
  (typeof UNIVERSAL_PERMANENT_TEETH_LOWER)[number];

const UNIVERSAL_PERMANENT_TEETH_LEFT = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_LEFT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_LEFT
] as const;
type UniversalPermanentTeethLeft =
  (typeof UNIVERSAL_PERMANENT_TEETH_LEFT)[number];

const UNIVERSAL_PERMANENT_TEETH_RIGHT = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER_RIGHT
] as const;
type UniversalPermanentTeethRight =
  (typeof UNIVERSAL_PERMANENT_TEETH_RIGHT)[number];

const UNIVERSAL_PERMANENT_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH_UPPER,
  ...UNIVERSAL_PERMANENT_TEETH_LOWER
] as const;
type UniversalPermanentTeeth = (typeof UNIVERSAL_PERMANENT_TEETH)[number];

const UNIVERSAL_BABY_TEETH_UPPER_LEFT = [
  // "",
  // "",
  // "",
  "A",
  "B",
  "C",
  "D",
  "E"
] as const;
const UNIVERSAL_BABY_TEETH_UPPER_RIGHT = [
  "F",
  "G",
  "H",
  "I",
  "J"
  // "",
  // "",
  // "",
] as const;
const UNIVERSAL_BABY_TEETH_UPPER = [
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT
] as const;

type UniversalBabyTeethUpperLeft =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_LEFT)[number];
type UniversalBabyTeethUpperRight =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_RIGHT)[number];
type UniversalBabyTeethUpper = (typeof UNIVERSAL_BABY_TEETH_UPPER)[number];

const UNIVERSAL_BABY_TEETH_LOWER_LEFT = [
  // "",
  // "",
  // "",
  "T",
  "S",
  "R",
  "Q",
  "P"
] as const;
const UNIVERSAL_BABY_TEETH_LOWER_RIGHT = [
  "O",
  "N",
  "M",
  "L",
  "K"
  // "",
  // "",
  // "",
] as const;
const UNIVERSAL_BABY_TEETH_LOWER = [
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT,
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT
] as const;

type UniversalBabyTeethLowerLeft =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_LEFT)[number];
type UniversalBabyTeethLowerRight =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_RIGHT)[number];
type UniversalBabyTeethLower = (typeof UNIVERSAL_BABY_TEETH_LOWER)[number];

const UNIVERSAL_BABY_TEETH_LEFT = [
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT
] as const;
type UniversalBabyTeethLeft = (typeof UNIVERSAL_BABY_TEETH_LEFT)[number];

const UNIVERSAL_BABY_TEETH_RIGHT = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT
] as const;
type UniversalBabyTeethRight = (typeof UNIVERSAL_BABY_TEETH_RIGHT)[number];

const UNIVERSAL_BABY_TEETH = [
  ...UNIVERSAL_BABY_TEETH_UPPER,
  ...UNIVERSAL_BABY_TEETH_LOWER
] as const;
type UniversalBabyTeeth = (typeof UNIVERSAL_BABY_TEETH)[number];

export const UNIVERSAL_TEETH = [
  ...UNIVERSAL_PERMANENT_TEETH,
  ...UNIVERSAL_BABY_TEETH
] as const;
export type UniversalTeeth = (typeof UNIVERSAL_TEETH)[number];
