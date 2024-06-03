const FDI_PERMANENT_TEETH_UPPER_LEFT = [
  18, 17, 16, 15, 14, 13, 12, 11
] as const;
const FDI_PERMANENT_TEETH_UPPER_RIGHT = [
  21, 22, 23, 24, 25, 26, 27, 28
] as const;
const FDI_PERMANENT_TEETH_UPPER = [
  ...FDI_PERMANENT_TEETH_UPPER_LEFT,
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT
] as const;

type FdiPermanentTeethUpperLeft =
  (typeof FDI_PERMANENT_TEETH_UPPER_LEFT)[number];
type FdiPermanentTeethUpperRight =
  (typeof FDI_PERMANENT_TEETH_UPPER_RIGHT)[number];
type FdiPermanentTeethUpper = (typeof FDI_PERMANENT_TEETH_UPPER)[number];

const FDI_PERMANENT_TEETH_LOWER_LEFT = [
  48, 47, 46, 45, 44, 43, 42, 41
] as const;
const FDI_PERMANENT_TEETH_LOWER_RIGHT = [
  31, 32, 33, 34, 35, 36, 37, 38
] as const;
const FDI_PERMANENT_TEETH_LOWER = [
  ...FDI_PERMANENT_TEETH_LOWER_LEFT,
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT
] as const;

type FdiPermanentTeethLowerLeft =
  (typeof FDI_PERMANENT_TEETH_LOWER_LEFT)[number];
type FdiPermanentTeethLowerRight =
  (typeof FDI_PERMANENT_TEETH_LOWER_RIGHT)[number];
type FdiPermanentTeethLower = (typeof FDI_PERMANENT_TEETH_LOWER)[number];

const FDI_PERMANENT_TEETH_LEFT = [
  ...FDI_PERMANENT_TEETH_UPPER_LEFT,
  ...FDI_PERMANENT_TEETH_LOWER_LEFT
] as const;
type FdiPermanentTeethLeft = (typeof FDI_PERMANENT_TEETH_LEFT)[number];

const FDI_PERMANENT_TEETH_RIGHT = [
  ...FDI_PERMANENT_TEETH_UPPER_RIGHT,
  ...FDI_PERMANENT_TEETH_LOWER_RIGHT
] as const;
type FdiPermanentTeethRight = (typeof FDI_PERMANENT_TEETH_RIGHT)[number];

const FDI_PERMANENT_TEETH = [
  ...FDI_PERMANENT_TEETH_UPPER,
  ...FDI_PERMANENT_TEETH_LOWER
] as const;
type FdiPermanentTeeth = (typeof FDI_PERMANENT_TEETH)[number];

const FDI_BABY_TEETH_UPPER_LEFT = [
  // 58, 57, 56,
  55, 54, 53, 52, 51
] as const;
const FDI_BABY_TEETH_UPPER_RIGHT = [
  61, 62, 63, 64, 65
  //  66, 67, 68
] as const;
const FDI_BABY_TEETH_UPPER = [
  ...FDI_BABY_TEETH_UPPER_LEFT,
  ...FDI_BABY_TEETH_UPPER_RIGHT
] as const;

type FdiBabyTeethUpperLeft = (typeof FDI_BABY_TEETH_UPPER_LEFT)[number];
type FdiBabyTeethUpperRight = (typeof FDI_BABY_TEETH_UPPER_RIGHT)[number];
type FdiBabyTeethUpper = (typeof FDI_BABY_TEETH_UPPER)[number];

const FDI_BABY_TEETH_LOWER_LEFT = [
  // 88, 87, 86,
  85, 84, 83, 82, 81
] as const;
const FDI_BABY_TEETH_LOWER_RIGHT = [
  71, 72, 73, 74, 75
  // 76, 77, 78
] as const;
const FDI_BABY_TEETH_LOWER = [
  ...FDI_BABY_TEETH_LOWER_LEFT,
  ...FDI_BABY_TEETH_LOWER_RIGHT
] as const;

type FdiBabyTeethLowerLeft = (typeof FDI_BABY_TEETH_LOWER_LEFT)[number];
type FdiBabyTeethLowerRight = (typeof FDI_BABY_TEETH_LOWER_RIGHT)[number];
type FdiBabyTeethLower = (typeof FDI_BABY_TEETH_LOWER)[number];

const FDI_BABY_TEETH_LEFT = [
  ...FDI_BABY_TEETH_UPPER_LEFT,
  ...FDI_BABY_TEETH_LOWER_LEFT
] as const;
type FdiBabyTeethLeft = (typeof FDI_BABY_TEETH_LEFT)[number];

const FDI_BABY_TEETH_RIGHT = [
  ...FDI_BABY_TEETH_UPPER_RIGHT,
  ...FDI_BABY_TEETH_LOWER_RIGHT
] as const;
type FdiBabyTeethRight = (typeof FDI_BABY_TEETH_RIGHT)[number];

const FDI_BABY_TEETH = [
  ...FDI_BABY_TEETH_UPPER,
  ...FDI_BABY_TEETH_LOWER
] as const;
type FdiBabyTeeth = (typeof FDI_BABY_TEETH)[number];

const FDI_TEETH = [...FDI_PERMANENT_TEETH, ...FDI_BABY_TEETH] as const;
type FdiTeeth = (typeof FDI_TEETH)[number];
