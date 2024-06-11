const PALMER_PRIMARY_TEETH_UPPER_LEFT = [
  "8UR",
  "7UR",
  "6UR",
  "5UR",
  "4UR",
  "3UR",
  "2UR",
  "1UR"
] as const;
const PALMER_PRIMARY_TEETH_UPPER_RIGHT = [
  "1UL",
  "2UL",
  "3UL",
  "4UL",
  "5UL",
  "6UL",
  "7UL",
  "8UL"
] as const;
const PALMER_PRIMARY_TEETH_UPPER = [
  ...PALMER_PRIMARY_TEETH_UPPER_LEFT,
  ...PALMER_PRIMARY_TEETH_UPPER_RIGHT
] as const;

type PalmerPrimaryTeethUpperLeft =
  (typeof PALMER_PRIMARY_TEETH_UPPER_LEFT)[number];
type PalmerPrimaryTeethUpperRight =
  (typeof PALMER_PRIMARY_TEETH_UPPER_RIGHT)[number];
type PalmerPrimaryTeethUpper = (typeof PALMER_PRIMARY_TEETH_UPPER)[number];

const PALMER_PRIMARY_TEETH_LOWER_LEFT = [
  "8LR",
  "7LR",
  "6LR",
  "5LR",
  "4LR",
  "3LR",
  "2LR",
  "1LR"
] as const;
const PALMER_PRIMARY_TEETH_LOWER_RIGHT = [
  "1LL",
  "2LL",
  "3LL",
  "4LL",
  "5LL",
  "6LL",
  "7LL",
  "8LL"
] as const;
const PALMER_PRIMARY_TEETH_LOWER = [
  ...PALMER_PRIMARY_TEETH_LOWER_LEFT,
  ...PALMER_PRIMARY_TEETH_LOWER_RIGHT
] as const;

type PalmerPrimaryTeethLowerLeft =
  (typeof PALMER_PRIMARY_TEETH_LOWER_LEFT)[number];
type PalmerPrimaryTeethLowerRight =
  (typeof PALMER_PRIMARY_TEETH_LOWER_RIGHT)[number];
type PalmerPrimaryTeethLower = (typeof PALMER_PRIMARY_TEETH_LOWER)[number];

const PALMER_PRIMARY_TEETH_LEFT = [
  ...PALMER_PRIMARY_TEETH_UPPER_LEFT,
  ...PALMER_PRIMARY_TEETH_LOWER_LEFT
] as const;
type PalmerPrimaryTeethLeft = (typeof PALMER_PRIMARY_TEETH_LEFT)[number];

const PALMER_PRIMARY_TEETH_RIGHT = [
  ...PALMER_PRIMARY_TEETH_UPPER_RIGHT,
  ...PALMER_PRIMARY_TEETH_LOWER_RIGHT
] as const;
type PalmerPrimaryTeethRight = (typeof PALMER_PRIMARY_TEETH_RIGHT)[number];

const PALMER_PRIMARY_TEETH = [
  ...PALMER_PRIMARY_TEETH_UPPER,
  ...PALMER_PRIMARY_TEETH_LOWER
] as const;
export type PalmerPrimaryTeeth = (typeof PALMER_PRIMARY_TEETH)[number];

const PALMER_BABY_TEETH_UPPER_LEFT = [
  // "",
  // "",
  // "",
  "EUR",
  "DUR",
  "CUR",
  "BUR",
  "AUR"
] as const;
const PALMER_BABY_TEETH_UPPER_RIGHT = [
  "AUL",
  "BUL",
  "CUL",
  "DUL",
  "EUL"
  // "",
  // "",
  // "",
] as const;
const PALMER_BABY_TEETH_UPPER = [
  ...PALMER_BABY_TEETH_UPPER_LEFT,
  ...PALMER_BABY_TEETH_UPPER_RIGHT
] as const;

type PalmerBabyTeethUpperLeft = (typeof PALMER_BABY_TEETH_UPPER_LEFT)[number];
type PalmerBabyTeethUpperRight = (typeof PALMER_BABY_TEETH_UPPER_RIGHT)[number];
type PalmerBabyTeethUpper = (typeof PALMER_BABY_TEETH_UPPER)[number];

const PALMER_BABY_TEETH_LOWER_LEFT = [
  // "",
  // "",
  // "",
  "ELR",
  "DLR",
  "CLR",
  "BLR",
  "ALR"
] as const;
const PALMER_BABY_TEETH_LOWER_RIGHT = [
  "ALL",
  "BLL",
  "CLL",
  "DLL",
  "ELL"
  // "",
  // "",
  // "",
] as const;
const PALMER_BABY_TEETH_LOWER = [
  ...PALMER_BABY_TEETH_LOWER_LEFT,
  ...PALMER_BABY_TEETH_LOWER_RIGHT
] as const;

type PalmerBabyTeethLowerLeft = (typeof PALMER_BABY_TEETH_LOWER_LEFT)[number];
type PalmerBabyTeethLowerRight = (typeof PALMER_BABY_TEETH_LOWER_RIGHT)[number];
type PalmerBabyTeethLower = (typeof PALMER_BABY_TEETH_LOWER)[number];

const PALMER_BABY_TEETH_LEFT = [
  ...PALMER_BABY_TEETH_UPPER_LEFT,
  ...PALMER_BABY_TEETH_LOWER_LEFT
] as const;
type PalmerBabyTeethLeft = (typeof PALMER_BABY_TEETH_LEFT)[number];

const PALMER_BABY_TEETH_RIGHT = [
  ...PALMER_BABY_TEETH_UPPER_RIGHT,
  ...PALMER_BABY_TEETH_LOWER_RIGHT
] as const;
type PalmerBabyTeethRight = (typeof PALMER_BABY_TEETH_RIGHT)[number];

const PALMER_BABY_TEETH = [
  ...PALMER_BABY_TEETH_UPPER,
  ...PALMER_BABY_TEETH_LOWER
] as const;
export type PalmerBabyTeeth = (typeof PALMER_BABY_TEETH)[number];

export const PALMER_TEETH = [
  ...PALMER_PRIMARY_TEETH,
  ...PALMER_BABY_TEETH
] as const;
export type PalmerTeeth = (typeof PALMER_TEETH)[number];
