import {
  FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER,
  FDI_PERMANENT_TEETH,
  FDI_PERMANENT_TEETH_LOWER_LEFT,
  FDI_PERMANENT_TEETH_LOWER_RIGHT,
  FDI_PERMANENT_TEETH_UPPER_LEFT,
  FDI_PERMANENT_TEETH_UPPER_RIGHT,
  FDI_TEETH,
  FdiDeciduousTeethWithPlaceholder,
  FdiPermanentTeeth,
  FdiPermanentTeethLowerLeft,
  FdiPermanentTeethLowerRight,
  FdiPermanentTeethUpperLeft,
  FdiPermanentTeethUpperRight,
  FdiTeeth,
  FdiTeethWithPlaceholder
} from "../fdi";
import { PalmerTeethWithPlaceholder } from "../palmer";
import { UniversalTeethWithPlaceholder } from "../universal";
import { groupConsecutiveNumbers } from "./common";

const PERMANENT_TO_DECIDUOUS: {
  [key in FdiPermanentTeeth]: FdiDeciduousTeethWithPlaceholder;
} = {
  18: 58,
  17: 57,
  16: 56,
  15: 55,
  14: 54,
  13: 53,
  12: 52,
  11: 51,
  21: 61,
  22: 62,
  23: 63,
  24: 64,
  25: 65,
  26: 66,
  27: 67,
  28: 68,
  48: 88,
  47: 87,
  46: 86,
  45: 85,
  44: 84,
  43: 83,
  42: 82,
  41: 81,
  31: 71,
  32: 72,
  33: 73,
  34: 74,
  35: 75,
  36: 76,
  37: 77,
  38: 78
};
const DECIDUOUS_TO_PERMANENT: {
  [key in FdiDeciduousTeethWithPlaceholder]: FdiPermanentTeeth;
} = {
  58: 18,
  57: 17,
  56: 16,
  55: 15,
  54: 14,
  53: 13,
  52: 12,
  51: 11,
  61: 21,
  62: 22,
  63: 23,
  64: 24,
  65: 25,
  66: 26,
  67: 27,
  68: 28,
  88: 48,
  87: 47,
  86: 46,
  85: 45,
  84: 44,
  83: 43,
  82: 42,
  81: 41,
  71: 31,
  72: 32,
  73: 33,
  74: 34,
  75: 35,
  76: 36,
  77: 37,
  78: 38
};

export const FDI_TO_UNIVERSAL_WITH_PLACEHOLDER: {
  [key in FdiTeethWithPlaceholder]: UniversalTeethWithPlaceholder;
} = {
  18: "1",
  17: "2",
  16: "3",
  15: "4",
  14: "5",
  13: "6",
  12: "7",
  11: "8",
  21: "9",
  22: "10",
  23: "11",
  24: "12",
  25: "13",
  26: "14",
  27: "15",
  28: "16",
  48: "32",
  47: "31",
  46: "30",
  45: "29",
  44: "28",
  43: "27",
  42: "26",
  41: "25",
  31: "24",
  32: "23",
  33: "22",
  34: "21",
  35: "20",
  36: "19",
  37: "18",
  38: "17",
  58: "A2",
  57: "A1",
  56: "A0",
  55: "A",
  54: "B",
  53: "C",
  52: "D",
  51: "E",
  61: "F",
  62: "G",
  63: "H",
  64: "I",
  65: "J",
  66: "J0",
  67: "J1",
  68: "J2",
  88: "T2",
  87: "T1",
  86: "T0",
  85: "T",
  84: "S",
  83: "R",
  82: "Q",
  81: "P",
  71: "O",
  72: "N",
  73: "M",
  74: "L",
  75: "K",
  76: "K0",
  77: "K1",
  78: "K2"
};

export const FDI_TO_PALMER_WITH_PLACEHOLDER: {
  [key in FdiTeethWithPlaceholder]: PalmerTeethWithPlaceholder;
} = {
  18: "8UR",
  17: "7UR",
  16: "6UR",
  15: "5UR",
  14: "4UR",
  13: "3UR",
  12: "2UR",
  11: "1UR",
  21: "1UL",
  22: "2UL",
  23: "3UL",
  24: "4UL",
  25: "5UL",
  26: "6UL",
  27: "7UL",
  28: "8UL",
  48: "8LR",
  47: "7LR",
  46: "6LR",
  45: "5LR",
  44: "4LR",
  43: "3LR",
  42: "2LR",
  41: "1LR",
  31: "1LL",
  32: "2LL",
  33: "3LL",
  34: "4LL",
  35: "5LL",
  36: "6LL",
  37: "7LL",
  38: "8LL",
  58: "HUR",
  57: "GUR",
  56: "FUR",
  55: "EUR",
  54: "DUR",
  53: "CUR",
  52: "BUR",
  51: "AUR",
  61: "AUL",
  62: "BUL",
  63: "CUL",
  64: "DUL",
  65: "EUL",
  66: "FUL",
  67: "GUL",
  68: "HUL",
  88: "HLR",
  87: "GLR",
  86: "FLR",
  85: "ELR",
  84: "DLR",
  83: "CLR",
  82: "BLR",
  81: "ALR",
  71: "ALL",
  72: "BLL",
  73: "CLL",
  74: "DLL",
  75: "ELL",
  76: "FLL",
  77: "GLL",
  78: "HLL"
};

export const switchFdiDentition = (
  teeth: FdiTeethWithPlaceholder[]
): FdiTeethWithPlaceholder[] => {
  const permanentTeeth: FdiPermanentTeeth[] = teeth.filter(tooth =>
    FDI_PERMANENT_TEETH.includes(tooth as FdiPermanentTeeth)
  ) as FdiPermanentTeeth[];
  const deciduousTeeth: FdiDeciduousTeethWithPlaceholder[] = teeth.filter(
    tooth =>
      FDI_DECIDUOUS_TEETH_WITH_PLACEHOLDER.includes(
        tooth as FdiDeciduousTeethWithPlaceholder
      )
  ) as FdiDeciduousTeethWithPlaceholder[];

  const toPermanent = deciduousTeeth.map(
    tooth => DECIDUOUS_TO_PERMANENT[tooth]
  );
  const toDeciduous = permanentTeeth.map(
    tooth => PERMANENT_TO_DECIDUOUS[tooth]
  );

  return [...toPermanent, ...toDeciduous];
};

const toPermanentTooth = (tooth: FdiTeeth): FdiPermanentTeeth => {
  const permanentTooth = tooth as FdiPermanentTeeth;

  if (FDI_PERMANENT_TEETH.includes(permanentTooth)) return permanentTooth;
  return (permanentTooth - 40) as FdiPermanentTeeth;
};

const isRightUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethUpperRight => {
  return FDI_PERMANENT_TEETH_UPPER_RIGHT.includes(
    tooth as FdiPermanentTeethUpperRight
  );
};

const isRightLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethLowerRight => {
  return FDI_PERMANENT_TEETH_LOWER_RIGHT.includes(
    tooth as FdiPermanentTeethLowerRight
  );
};

const isLeftUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethUpperLeft => {
  return FDI_PERMANENT_TEETH_UPPER_LEFT.includes(
    tooth as FdiPermanentTeethUpperLeft
  );
};

const isLeftLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethLowerLeft => {
  return FDI_PERMANENT_TEETH_LOWER_LEFT.includes(
    tooth as FdiPermanentTeethLowerLeft
  );
};

const getOriginTooth = (originTeeth: FdiTeeth[], tooth: FdiTeeth): FdiTeeth => {
  if (originTeeth.includes(tooth)) return tooth;

  if (tooth > 50) return (tooth - 40) as FdiTeeth;
  return (tooth + 40) as FdiTeeth;
};

const getFormattingGroup = (
  originTeeth: FdiTeeth[],
  teeth: FdiTeeth[][],
  isLeft: boolean,
  prefix: string
): string => {
  const reverseTeeth = isLeft
    ? teeth
    : teeth.reverse().map(teeth => teeth.reverse());

  const result = reverseTeeth.reduce((teethString, teeth) => {
    const _startTooth = teeth[0];

    const startTooth = getOriginTooth(originTeeth, _startTooth);

    if (teeth.length === 1) {
      if (teethString.length) {
        return `${teethString}, ${prefix}${startTooth}`;
      }
      return `${prefix}${startTooth}`;
    }

    const _endTooth = teeth[teeth.length - 1];
    const endTooth = getOriginTooth(originTeeth, _endTooth);

    if (teethString.length) {
      return `${teethString}, ${prefix}${startTooth}-${endTooth}`;
    }
    return `${prefix}${startTooth}-${endTooth}`;
  }, "");

  return result;
};

const getFormattingIndividual = (
  orginTeeth: FdiTeeth[],
  teeth: FdiTeeth[][],
  isLeft: boolean,
  prefix: string
) => {
  const reverseTeeth = isLeft
    ? teeth
    : teeth.reverse().map(teeth => teeth.reverse());

  return reverseTeeth
    .flat()
    .map(tooth => `${prefix}${getOriginTooth(orginTeeth, tooth)}`);
};

const formatFdiTeeth = (
  teeth: FdiTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) => {
  const permanentTeeth = teeth.map(toPermanentTooth).sort();

  const permanentLeftUpperTeeth = permanentTeeth.filter(isLeftUpperTooth);
  const permanentRightUpperTeeth = permanentTeeth.filter(isRightUpperTooth);
  const permanentLeftLowerTeeth = permanentTeeth.filter(isLeftLowerTooth);
  const permanentRightLowerTeeth = permanentTeeth.filter(isRightLowerTooth);

  const upperLeftTeeth = groupConsecutiveNumbers(permanentLeftUpperTeeth);
  const upperRightTeeth = groupConsecutiveNumbers(permanentRightUpperTeeth);
  const lowerLeftTeeth = groupConsecutiveNumbers(permanentLeftLowerTeeth);
  const lowerRightTeeth = groupConsecutiveNumbers(permanentRightLowerTeeth);

  if (type === "range") {
    const uLeftTeeth = getFormattingGroup(teeth, upperLeftTeeth, true, prefix);
    const uRightTeeth = getFormattingGroup(
      teeth,
      upperRightTeeth,
      false,
      prefix
    );
    const lLeftTeeth = getFormattingGroup(teeth, lowerLeftTeeth, true, prefix);
    const lRightTeeth = getFormattingGroup(
      teeth,
      lowerRightTeeth,
      false,
      prefix
    );

    return [uRightTeeth, uLeftTeeth, lRightTeeth, lLeftTeeth]
      .filter(el => el.length)
      .join(", ");
  } else {
    const uLeftTeeth = getFormattingIndividual(
      teeth,
      upperLeftTeeth,
      true,
      prefix
    );
    const uRightTeeth = getFormattingIndividual(
      teeth,
      upperRightTeeth,
      false,
      prefix
    );
    const lLeftTeeth = getFormattingIndividual(
      teeth,
      lowerLeftTeeth,
      true,
      prefix
    );
    const lRightTeeth = getFormattingIndividual(
      teeth,
      lowerRightTeeth,
      false,
      prefix
    );

    return [uRightTeeth, uLeftTeeth, lRightTeeth, lLeftTeeth].flat().join(", ");
  }
};

const isFdiTooth = (tooth: unknown): tooth is FdiTeeth => {
  return FDI_TEETH.includes(tooth as FdiTeeth);
};

export { formatFdiTeeth, getOriginTooth, isFdiTooth };
