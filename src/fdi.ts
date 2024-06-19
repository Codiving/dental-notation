export const FDI_PRIMARY_TEETH_UPPER_LEFT = [
  18, 17, 16, 15, 14, 13, 12, 11
] as const;
export const FDI_PRIMARY_TEETH_UPPER_RIGHT = [
  21, 22, 23, 24, 25, 26, 27, 28
] as const;
export const FDI_PRIMARY_TEETH_UPPER = [
  ...FDI_PRIMARY_TEETH_UPPER_LEFT,
  ...FDI_PRIMARY_TEETH_UPPER_RIGHT
] as const;

export type FdiPrimaryTeethUpperLeft =
  (typeof FDI_PRIMARY_TEETH_UPPER_LEFT)[number];
export type FdiPrimaryTeethUpperRight =
  (typeof FDI_PRIMARY_TEETH_UPPER_RIGHT)[number];
export type FdiPrimaryTeethUpper = (typeof FDI_PRIMARY_TEETH_UPPER)[number];

export const FDI_PRIMARY_TEETH_LOWER_LEFT = [
  48, 47, 46, 45, 44, 43, 42, 41
] as const;
export const FDI_PRIMARY_TEETH_LOWER_RIGHT = [
  31, 32, 33, 34, 35, 36, 37, 38
] as const;
export const FDI_PRIMARY_TEETH_LOWER = [
  ...FDI_PRIMARY_TEETH_LOWER_LEFT,
  ...FDI_PRIMARY_TEETH_LOWER_RIGHT
] as const;

export type FdiPrimaryTeethLowerLeft =
  (typeof FDI_PRIMARY_TEETH_LOWER_LEFT)[number];
export type FdiPrimaryTeethLowerRight =
  (typeof FDI_PRIMARY_TEETH_LOWER_RIGHT)[number];
export type FdiPrimaryTeethLower = (typeof FDI_PRIMARY_TEETH_LOWER)[number];

export const FDI_PRIMARY_TEETH_LEFT = [
  ...FDI_PRIMARY_TEETH_UPPER_LEFT,
  ...FDI_PRIMARY_TEETH_LOWER_LEFT
] as const;
export const FDI_PRIMARY_TEETH_RIGHT = [
  ...FDI_PRIMARY_TEETH_UPPER_RIGHT,
  ...FDI_PRIMARY_TEETH_LOWER_RIGHT
] as const;
export type FdiPrimaryTeethLeft = (typeof FDI_PRIMARY_TEETH_LEFT)[number];
export type FdiPrimaryTeethRight = (typeof FDI_PRIMARY_TEETH_RIGHT)[number];

export const FDI_PRIMARY_TEETH = [
  ...FDI_PRIMARY_TEETH_UPPER,
  ...FDI_PRIMARY_TEETH_LOWER
] as const;
export type FdiPrimaryTeeth = (typeof FDI_PRIMARY_TEETH)[number];

export const FDI_BABY_TEETH_UPPER_LEFT = [55, 54, 53, 52, 51] as const;
export const FDI_BABY_TEETH_UPPER_RIGHT = [61, 62, 63, 64, 65] as const;
export const FDI_BABY_TEETH_UPPER = [
  ...FDI_BABY_TEETH_UPPER_LEFT,
  ...FDI_BABY_TEETH_UPPER_RIGHT
] as const;
export type FdiBabyTeethUpperLeft = (typeof FDI_BABY_TEETH_UPPER_LEFT)[number];
export type FdiBabyTeethUpperRight =
  (typeof FDI_BABY_TEETH_UPPER_RIGHT)[number];
export type FdiBabyTeethUpper = (typeof FDI_BABY_TEETH_UPPER)[number];

export const FDI_BABY_TEETH_UPPER_LEFT_NON_EXIST = [58, 57, 56] as const;
export const FDI_BABY_TEETH_UPPER_LEFT_TMP = [
  ...FDI_BABY_TEETH_UPPER_LEFT_NON_EXIST,
  ...FDI_BABY_TEETH_UPPER_LEFT
] as const;
export const FDI_BABY_TEETH_UPPER_RIGHT_NON_EXIST = [66, 67, 68] as const;
export const FDI_BABY_TEETH_UPPER_RIGHT_TMP = [
  ...FDI_BABY_TEETH_UPPER_RIGHT,
  ...FDI_BABY_TEETH_UPPER_RIGHT_NON_EXIST
] as const;
export const FDI_BABY_TEETH_UPPER_NON_EXIST = [
  ...FDI_BABY_TEETH_UPPER_LEFT_NON_EXIST,
  ...FDI_BABY_TEETH_UPPER_RIGHT_NON_EXIST
] as const;
export const FDI_BABY_TEETH_UPPER_TMP = [
  ...FDI_BABY_TEETH_UPPER_LEFT_TMP,
  ...FDI_BABY_TEETH_UPPER_RIGHT_TMP
] as const;
export type FdiBabyTeethUpperLeftNonExist =
  (typeof FDI_BABY_TEETH_UPPER_LEFT_NON_EXIST)[number];
export type FdiBabyTeethUpperLeftTmp =
  (typeof FDI_BABY_TEETH_UPPER_LEFT_TMP)[number];
export type FdiBabyTeethUpperRightNonExist =
  (typeof FDI_BABY_TEETH_UPPER_RIGHT_NON_EXIST)[number];
export type FdiBabyTeethUpperRightTmp =
  (typeof FDI_BABY_TEETH_UPPER_RIGHT_TMP)[number];
export type FdiBabyTeethUpperNonExist =
  (typeof FDI_BABY_TEETH_UPPER_NON_EXIST)[number];
export type FdiBabyTeethUpperTmp = (typeof FDI_BABY_TEETH_UPPER_TMP)[number];

export const FDI_BABY_TEETH_LOWER_LEFT = [85, 84, 83, 82, 81] as const;
export const FDI_BABY_TEETH_LOWER_RIGHT = [71, 72, 73, 74, 75] as const;
export const FDI_BABY_TEETH_LOWER = [
  ...FDI_BABY_TEETH_LOWER_LEFT,
  ...FDI_BABY_TEETH_LOWER_RIGHT
] as const;
export type FdiBabyTeethLowerLeft = (typeof FDI_BABY_TEETH_LOWER_LEFT)[number];
export type FdiBabyTeethLowerRight =
  (typeof FDI_BABY_TEETH_LOWER_RIGHT)[number];
export type FdiBabyTeethLower = (typeof FDI_BABY_TEETH_LOWER)[number];

export const FDI_BABY_TEETH_LOWER_LEFT_NON_EXIST = [88, 87, 86] as const;
export const FDI_BABY_TEETH_LOWER_LEFT_TMP = [
  ...FDI_BABY_TEETH_LOWER_LEFT_NON_EXIST,
  ...FDI_BABY_TEETH_LOWER_LEFT
] as const;
export const FDI_BABY_TEETH_LOWER_RIGHT_NON_EXIST = [76, 77, 78] as const;
export const FDI_BABY_TEETH_LOWER_RIGHT_TMP = [
  ...FDI_BABY_TEETH_LOWER_RIGHT,
  ...FDI_BABY_TEETH_LOWER_RIGHT_NON_EXIST
] as const;
export const FDI_BABY_TEETH_LOWER_NON_EXIST = [
  ...FDI_BABY_TEETH_LOWER_LEFT_NON_EXIST,
  ...FDI_BABY_TEETH_LOWER_RIGHT_NON_EXIST
] as const;
export const FDI_BABY_TEETH_LOWER_TMP = [
  ...FDI_BABY_TEETH_LOWER_LEFT_TMP,
  ...FDI_BABY_TEETH_LOWER_RIGHT_TMP
] as const;
export type FdiBabyTeethLowerLeftTmp =
  (typeof FDI_BABY_TEETH_LOWER_LEFT_TMP)[number];
export type FdiBabyTeethLowerRightTmp =
  (typeof FDI_BABY_TEETH_LOWER_RIGHT_TMP)[number];
export type FdiBabyTeethLowerTmp = (typeof FDI_BABY_TEETH_LOWER_TMP)[number];
export type FdiBabyTeethLowerLeftNonExist =
  (typeof FDI_BABY_TEETH_LOWER_LEFT_NON_EXIST)[number];
export type FdiBabyTeethLowerRightNonExist =
  (typeof FDI_BABY_TEETH_LOWER_RIGHT_NON_EXIST)[number];
export type FdiBabyTeethLowerNonExist =
  (typeof FDI_BABY_TEETH_LOWER_NON_EXIST)[number];

export const FDI_BABY_TEETH_LEFT = [
  ...FDI_BABY_TEETH_UPPER_LEFT,
  ...FDI_BABY_TEETH_LOWER_LEFT
] as const;
export const FDI_BABY_TEETH_RIGHT = [
  ...FDI_BABY_TEETH_UPPER_RIGHT,
  ...FDI_BABY_TEETH_LOWER_RIGHT
] as const;
export type FdiBabyTeethLeft = (typeof FDI_BABY_TEETH_LEFT)[number];
export type FdiBabyTeethRight = (typeof FDI_BABY_TEETH_RIGHT)[number];

export const FDI_BABY_TEETH = [
  ...FDI_BABY_TEETH_UPPER,
  ...FDI_BABY_TEETH_LOWER
] as const;
export type FdiBabyTeeth = (typeof FDI_BABY_TEETH)[number];

export const FDI_TEETH = [...FDI_PRIMARY_TEETH, ...FDI_BABY_TEETH] as const;
export type FdiTeeth = (typeof FDI_TEETH)[number];

export const FDI_BABY_TEETH_TMP = [
  ...FDI_BABY_TEETH_UPPER_TMP,
  ...FDI_BABY_TEETH_LOWER_TMP
] as const;
export type FdiBabyTeethTmp = (typeof FDI_BABY_TEETH_TMP)[number];

export const FDI_TEETH_NON_EXIST = [
  ...FDI_BABY_TEETH_UPPER_NON_EXIST,
  ...FDI_BABY_TEETH_LOWER_NON_EXIST
] as const;
export type FdiTeethNonExist = (typeof FDI_TEETH_NON_EXIST)[number];

export const FDI_TEETH_TMP = [
  ...FDI_PRIMARY_TEETH,
  ...FDI_BABY_TEETH_TMP
] as const;
export type FdiTeethTmp = (typeof FDI_TEETH_TMP)[number];
