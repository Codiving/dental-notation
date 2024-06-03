const PALMER_PERMANENT_TEETH_UPPER_LEFT = [
  "UR8",
  "UR7",
  "UR6",
  "UR5",
  "UR4",
  "UR3",
  "UR2",
  "UR1"
] as const;
const PALMER_PERMANENT_TEETH_UPPER_RIGHT = [
  "UL1",
  "UL2",
  "UL3",
  "UL4",
  "UL5",
  "UL6",
  "UL7",
  "UL8"
] as const;
const PALMER_PERMANENT_TEETH_UPPER = [
  ...PALMER_PERMANENT_TEETH_UPPER_LEFT,
  ...PALMER_PERMANENT_TEETH_UPPER_RIGHT
] as const;

type PalmerPermanentTeethUpperLeft =
  (typeof PALMER_PERMANENT_TEETH_UPPER_LEFT)[number];
type PalmerPermanentTeethUpperRight =
  (typeof PALMER_PERMANENT_TEETH_UPPER_RIGHT)[number];
type PalmerPermanentTeethUpper = (typeof PALMER_PERMANENT_TEETH_UPPER)[number];

const PALMER_PERMANENT_TEETH_LOWER_LEFT = [
  "LR8",
  "LR7",
  "LR6",
  "LR5",
  "LR4",
  "LR3",
  "LR2",
  "LR1"
] as const;
const PALMER_PERMANENT_TEETH_LOWER_RIGHT = [
  "LL1",
  "LL2",
  "LL3",
  "LL4",
  "LL5",
  "LL6",
  "LL7",
  "LL8"
] as const;
const PALMER_PERMANENT_TEETH_LOWER = [
  ...PALMER_PERMANENT_TEETH_LOWER_LEFT,
  ...PALMER_PERMANENT_TEETH_LOWER_RIGHT
] as const;

type PalmerPermanentTeethLowerLeft =
  (typeof PALMER_PERMANENT_TEETH_LOWER_LEFT)[number];
type PalmerPermanentTeethLowerRight =
  (typeof PALMER_PERMANENT_TEETH_LOWER_RIGHT)[number];
type PalmerPermanentTeethLower = (typeof PALMER_PERMANENT_TEETH_LOWER)[number];

const PALMER_PERMANENT_TEETH_LEFT = [
  ...PALMER_PERMANENT_TEETH_UPPER_LEFT,
  ...PALMER_PERMANENT_TEETH_LOWER_LEFT
] as const;
type PalmerPermanentTeethLeft = (typeof PALMER_PERMANENT_TEETH_LEFT)[number];

const PALMER_PERMANENT_TEETH_RIGHT = [
  ...PALMER_PERMANENT_TEETH_UPPER_RIGHT,
  ...PALMER_PERMANENT_TEETH_LOWER_RIGHT
] as const;
type PalmerPermanentTeethRight = (typeof PALMER_PERMANENT_TEETH_RIGHT)[number];

const PALMER_PERMANENT_TEETH = [
  ...PALMER_PERMANENT_TEETH_UPPER,
  ...PALMER_PERMANENT_TEETH_LOWER
] as const;
type PalmerPermanentTeeth = (typeof PALMER_PERMANENT_TEETH)[number];

const PALMER_BABY_TEETH_UPPER_LEFT = [
  // "",
  // "",
  // "",
  "URE",
  "URD",
  "URC",
  "URB",
  "URA"
] as const;
const PALMER_BABY_TEETH_UPPER_RIGHT = [
  "ULA",
  "ULB",
  "ULC",
  "ULD",
  "ULE"
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
  "LRE",
  "LRD",
  "LRC",
  "LRB",
  "LRA"
] as const;
const PALMER_BABY_TEETH_LOWER_RIGHT = [
  "LLA",
  "LLB",
  "LLC",
  "LLD",
  "LLE"
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
type PalmerBabyTeeth = (typeof PALMER_BABY_TEETH)[number];

const PALMER_TEETH = [...PALMER_PERMANENT_TEETH, ...PALMER_BABY_TEETH] as const;
type PalmerTeeth = (typeof PALMER_TEETH)[number];
