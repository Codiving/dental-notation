import { FdiTeethWithTmp } from "../fdi";
import { PalmerTeethWithTmp } from "../palmer";
import {
  UNIVERSAL_PRIMARY_TEETH,
  UNIVERSAL_TEETH,
  UniversalBabyTeeth,
  UniversalPrimaryTeeth,
  UniversalTeeth,
  UniversalTeethWithTmp
} from "../universal";
import {
  groupConsecutiveNumbers,
  mergeTeethIndividual,
  mergeTeethRange
} from "./common";

export const UNIVERSAL_TO_FDI_WITH_TMP: {
  [key in UniversalTeethWithTmp]: FdiTeethWithTmp;
} = {
  "1": 18,
  "2": 17,
  "3": 16,
  "4": 15,
  "5": 14,
  "6": 13,
  "7": 12,
  "8": 11,
  "9": 21,
  "10": 22,
  "11": 23,
  "12": 24,
  "13": 25,
  "14": 26,
  "15": 27,
  "16": 28,
  "32": 48,
  "31": 47,
  "30": 46,
  "29": 45,
  "28": 44,
  "27": 43,
  "26": 42,
  "25": 41,
  "24": 31,
  "23": 32,
  "22": 33,
  "21": 34,
  "20": 35,
  "19": 36,
  "18": 37,
  "17": 38,
  A2: 58,
  A1: 57,
  A0: 56,
  A: 55,
  B: 54,
  C: 53,
  D: 52,
  E: 51,
  F: 61,
  G: 62,
  H: 63,
  I: 64,
  J: 65,
  J0: 66,
  J1: 67,
  J2: 68,
  T2: 88,
  T1: 87,
  T0: 86,
  T: 85,
  S: 84,
  R: 83,
  Q: 82,
  P: 81,
  O: 71,
  N: 72,
  M: 73,
  L: 74,
  K: 75,
  K0: 76,
  K1: 77,
  k2: 78
};

export const UNIVERSAL_TO_PALMER_WITH_TMP: {
  [key in UniversalTeethWithTmp]: PalmerTeethWithTmp;
} = {
  "1": "8UR",
  "2": "7UR",
  "3": "6UR",
  "4": "5UR",
  "5": "4UR",
  "6": "3UR",
  "7": "2UR",
  "8": "1UR",
  "9": "1UL",
  "10": "2UL",
  "11": "3UL",
  "12": "4UL",
  "13": "5UL",
  "14": "6UL",
  "15": "7UL",
  "16": "8UL",
  "32": "8LR",
  "31": "7LR",
  "30": "6LR",
  "29": "5LR",
  "28": "4LR",
  "27": "3LR",
  "26": "2LR",
  "25": "1LR",
  "24": "1LL",
  "23": "2LL",
  "22": "3LL",
  "21": "4LL",
  "20": "5LL",
  "19": "6LL",
  "18": "7LL",
  "17": "8LL",
  A2: "HUR",
  A1: "GUR",
  A0: "FUR",
  A: "EUR",
  B: "DUR",
  C: "CUR",
  D: "BUR",
  E: "AUR",
  F: "AUL",
  G: "BUL",
  H: "CUL",
  I: "DUL",
  J: "EUL",
  J0: "FUL",
  J1: "GUL",
  J2: "HUL",
  T2: "HLR",
  T1: "GLR",
  T0: "FLR",
  T: "ELR",
  S: "DLR",
  R: "CLR",
  Q: "BLR",
  P: "ALR",
  O: "ALL",
  N: "BLL",
  M: "CLL",
  L: "DLL",
  K: "ELL",
  K0: "FLL",
  K1: "GLL",
  k2: "HLL"
};

const BABY_TO_ADULT: { [key in UniversalBabyTeeth]: UniversalPrimaryTeeth } = {
  A: "4",
  B: "5",
  C: "6",
  D: "7",
  E: "8",
  F: "9",
  G: "10",
  H: "11",
  I: "12",
  J: "13",
  K: "20",
  L: "21",
  M: "22",
  N: "23",
  O: "24",
  P: "25",
  Q: "26",
  R: "27",
  S: "28",
  T: "29"
} as const;

const ADULT_TO_BABY: { [key in UniversalPrimaryTeeth]?: UniversalBabyTeeth } = {
  "4": "A",
  "5": "B",
  "6": "C",
  "7": "D",
  "8": "E",
  "9": "F",
  "10": "G",
  "11": "H",
  "12": "I",
  "13": "J",
  "20": "K",
  "21": "L",
  "22": "M",
  "23": "N",
  "24": "O",
  "25": "P",
  "26": "Q",
  "27": "R",
  "28": "S",
  "29": "T"
} as const;

const sortUniversal = (tooth1: number, tooth2: number) => {
  if (tooth1 < 17) {
    return tooth1 - tooth2;
  }
  return tooth2 - tooth1;
};

const convertAdultTooth = (tooth: UniversalTeeth): UniversalPrimaryTeeth => {
  const adultTooth = tooth as UniversalPrimaryTeeth;
  const babyTooth = tooth as UniversalBabyTeeth;

  if (UNIVERSAL_PRIMARY_TEETH.includes(adultTooth)) return adultTooth;

  const result = BABY_TO_ADULT[babyTooth];
  if (!result) throw Error("Error");
  return result;
};

const generateTeethGroup = (
  originTeeth: UniversalTeeth[],
  teethNumber: number[][]
) => {
  return teethNumber.map(group => {
    return group.map(_tooth => {
      const tooth = String(_tooth) as UniversalPrimaryTeeth;
      if (originTeeth.includes(tooth)) return tooth as UniversalTeeth;
      const result = ADULT_TO_BABY[tooth];

      if (!result) throw Error("Error");
      return result as UniversalTeeth;
    });
  });
};

const getTeethString = (
  teeth: UniversalTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) => {
  const sortedTeeth = teeth.map(convertAdultTooth).map(tooth => Number(tooth));

  const upperTeethNumber: number[] = sortedTeeth.filter(tooth => tooth < 17);
  const lowerTeethNumber: number[] = sortedTeeth.filter(tooth => tooth >= 17);

  const upperTeethGroup = groupConsecutiveNumbers(upperTeethNumber).map(
    teethGroup => teethGroup.sort(sortUniversal)
  );

  const lowerTeethGroup = groupConsecutiveNumbers(lowerTeethNumber)
    .map(teethGroup => teethGroup.sort(sortUniversal))
    .reverse();

  const originUpperTeeth = generateTeethGroup(teeth, upperTeethGroup);
  const originLowerTeeth = generateTeethGroup(teeth, lowerTeethGroup);

  if (type === "range") {
    return mergeTeethRange([...originUpperTeeth, ...originLowerTeeth], prefix);
  } else {
    return mergeTeethIndividual(
      [...originUpperTeeth, ...originLowerTeeth],
      prefix
    );
  }
};

const isExistTooth = (
  tooth: UniversalTeethWithTmp
): tooth is UniversalTeeth => {
  return UNIVERSAL_TEETH.includes(tooth as UniversalTeeth);
};

export { generateTeethGroup, getTeethString, isExistTooth };
