export const UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
] as const;
export const UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16"
] as const;
export const UNIVERSAL_PRIMARY_TEETH_UPPER = [
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT
] as const;
export type UniversalPrimaryTeethUpperRight =
  (typeof UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT)[number];
export type UniversalPrimaryTeethUpperLeft =
  (typeof UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT)[number];
export type UniversalPrimaryTeethUpper =
  (typeof UNIVERSAL_PRIMARY_TEETH_UPPER)[number];

export const UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT = [
  "32",
  "31",
  "30",
  "29",
  "28",
  "27",
  "26",
  "25"
] as const;
export const UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT = [
  "24",
  "23",
  "22",
  "21",
  "20",
  "19",
  "18",
  "17"
] as const;
export const UNIVERSAL_PRIMARY_TEETH_LOWER = [
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT
] as const;
export type UniversalPrimaryTeethLowerRight =
  (typeof UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT)[number];
export type UniversalPrimaryTeethLowerLeft =
  (typeof UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT)[number];
export type UniversalPrimaryTeethLower =
  (typeof UNIVERSAL_PRIMARY_TEETH_LOWER)[number];

export const UNIVERSAL_PRIMARY_TEETH_RIGHT = [
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT
] as const;
export const UNIVERSAL_PRIMARY_TEETH_LEFT = [
  ...UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT,
  ...UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT
];
export type UniversalPrimaryTeethRight =
  (typeof UNIVERSAL_PRIMARY_TEETH_RIGHT)[number];
export type UniversalPrimaryTeethLeft =
  (typeof UNIVERSAL_PRIMARY_TEETH_LEFT)[number];

export const UNIVERSAL_PRIMARY_TEETH = [
  ...UNIVERSAL_PRIMARY_TEETH_UPPER,
  ...UNIVERSAL_PRIMARY_TEETH_LOWER
] as const;
export type UniversalPrimaryTeeth = (typeof UNIVERSAL_PRIMARY_TEETH)[number];

export const UNIVERSAL_BABY_TEETH_UPPER_RIGHT = [
  "A",
  "B",
  "C",
  "D",
  "E"
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_LEFT = [
  "F",
  "G",
  "H",
  "I",
  "J"
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT
] as const;
export type UniversalBabyTeethUpperRight =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_RIGHT)[number];
export type UniversalBabyTeethUpperLeft =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_LEFT)[number];
export type UniversalBabyTeethUpper =
  (typeof UNIVERSAL_BABY_TEETH_UPPER)[number];

export const UNIVERSAL_BABY_TEETH_UPPER_RIGHT_NON_EXIST = [
  "A2",
  "A1",
  "A0"
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_RIGHT_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT_NON_EXIST,
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_LEFT_NON_EXIST = [
  "J0",
  "J1",
  "J2"
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_LEFT_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT_NON_EXIST
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_NON_EXIST = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT_NON_EXIST,
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT_NON_EXIST
] as const;
export const UNIVERSAL_BABY_TEETH_UPPER_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT_WITH_TMP
] as const;
export type UniversalBabyTeethUpperRightNonExist =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_RIGHT_NON_EXIST)[number];
export type UniversalBabyTeethUpperRightWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_RIGHT_WITH_TMP)[number];
export type UniversalBabyTeethUpperLeftNonExist =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_LEFT_NON_EXIST)[number];
export type UniversalBabyTeethUpperLeftWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_LEFT_WITH_TMP)[number];
export type UniversalBabyTeethUpperNonExist =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_NON_EXIST)[number];
export type UniversalBabyTeethUpperWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_UPPER_WITH_TMP)[number];

export const UNIVERSAL_BABY_TEETH_LOWER_RIGHT = [
  "T",
  "S",
  "R",
  "Q",
  "P"
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_LEFT = [
  "O",
  "N",
  "M",
  "L",
  "K"
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER = [
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT
] as const;
export type UniversalBabyTeethLowerRight =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_RIGHT)[number];
export type UniversalBabyTeethLowerLeft =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_LEFT)[number];
export type UniversalBabyTeethLower =
  (typeof UNIVERSAL_BABY_TEETH_LOWER)[number];

export const UNIVERSAL_BABY_TEETH_LOWER_RIGHT_NON_EXIST = [
  "T2",
  "T1",
  "T0"
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_RIGHT_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT_NON_EXIST,
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_LEFT_NON_EXIST = [
  "K0",
  "K1",
  "k2"
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_LEFT_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT_NON_EXIST
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_NON_EXIST = [
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT_NON_EXIST,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT_NON_EXIST
] as const;
export const UNIVERSAL_BABY_TEETH_LOWER_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT_WITH_TMP
] as const;
export type UniversalBabyTeethLowerRightWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_RIGHT_WITH_TMP)[number];
export type UniversalBabyTeethLowerLeftWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_LEFT_WITH_TMP)[number];
export type UniversalBabyTeethLowerWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_WITH_TMP)[number];
export type UniversalBabyTeethLowerRightNonExist =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_RIGHT_NON_EXIST)[number];
export type UniversalBabyTeethLowerLeftNonExist =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_LEFT_NON_EXIST)[number];
export type UniversalBabyTeethLowerNonExist =
  (typeof UNIVERSAL_BABY_TEETH_LOWER_NON_EXIST)[number];

export const UNIVERSAL_BABY_TEETH_RIGHT = [
  ...UNIVERSAL_BABY_TEETH_UPPER_RIGHT,
  ...UNIVERSAL_BABY_TEETH_LOWER_RIGHT
] as const;
export const UNIVERSAL_BABY_TEETH_LEFT = [
  ...UNIVERSAL_BABY_TEETH_UPPER_LEFT,
  ...UNIVERSAL_BABY_TEETH_LOWER_LEFT
] as const;
export type UniversalBabyTeethRight =
  (typeof UNIVERSAL_BABY_TEETH_RIGHT)[number];
export type UniversalBabyTeethLeft = (typeof UNIVERSAL_BABY_TEETH_LEFT)[number];

export const UNIVERSAL_BABY_TEETH = [
  ...UNIVERSAL_BABY_TEETH_UPPER,
  ...UNIVERSAL_BABY_TEETH_LOWER
] as const;
export type UniversalBabyTeeth = (typeof UNIVERSAL_BABY_TEETH)[number];

export const UNIVERSAL_TEETH = [
  ...UNIVERSAL_PRIMARY_TEETH,
  ...UNIVERSAL_BABY_TEETH
] as const;
export type UniversalTeeth = (typeof UNIVERSAL_TEETH)[number];

export const UNIVERSAL_BABY_TEETH_WITH_TMP = [
  ...UNIVERSAL_BABY_TEETH_UPPER_WITH_TMP,
  ...UNIVERSAL_BABY_TEETH_LOWER_WITH_TMP
] as const;
export type UniversalBabyTeethWithTmp =
  (typeof UNIVERSAL_BABY_TEETH_WITH_TMP)[number];

export const UNIVERSAL_TEETH_NON_EXIST = [
  ...UNIVERSAL_BABY_TEETH_UPPER_NON_EXIST,
  ...UNIVERSAL_BABY_TEETH_LOWER_NON_EXIST
] as const;
export type UniversalTeethNonExist = (typeof UNIVERSAL_TEETH_NON_EXIST)[number];

export const UNIVERSAL_TEETH_WITH_TMP = [
  ...UNIVERSAL_PRIMARY_TEETH,
  ...UNIVERSAL_BABY_TEETH_WITH_TMP
] as const;
export type UniversalTeethWithTmp = (typeof UNIVERSAL_TEETH_WITH_TMP)[number];
