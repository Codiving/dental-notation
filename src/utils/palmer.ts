import { FdiTeethWithTmp } from "../fdi";
import {
  PALMER_TEETH,
  PalmerBabyTeeth,
  PalmerTeeth,
  PalmerTeethWithTmp
} from "../palmer";
import { UniversalTeethWithTmp } from "../universal";
import {
  groupConsecutiveNumbers,
  mergeTeethIndividual,
  mergeTeethRange
} from "./common";

export const PALMER_TO_FDI_WITH_TMP: {
  [key in PalmerTeethWithTmp]: FdiTeethWithTmp;
} = {
  "8UR": 18,
  "7UR": 17,
  "6UR": 16,
  "5UR": 15,
  "4UR": 14,
  "3UR": 13,
  "2UR": 12,
  "1UR": 11,
  "1UL": 21,
  "2UL": 22,
  "3UL": 23,
  "4UL": 24,
  "5UL": 25,
  "6UL": 26,
  "7UL": 27,
  "8UL": 28,
  "8LR": 48,
  "7LR": 47,
  "6LR": 46,
  "5LR": 45,
  "4LR": 44,
  "3LR": 43,
  "2LR": 42,
  "1LR": 41,
  "1LL": 31,
  "2LL": 32,
  "3LL": 33,
  "4LL": 34,
  "5LL": 35,
  "6LL": 36,
  "7LL": 37,
  "8LL": 38,
  HUR: 58,
  GUR: 57,
  FUR: 56,
  EUR: 55,
  DUR: 54,
  CUR: 53,
  BUR: 52,
  AUR: 51,
  AUL: 61,
  BUL: 62,
  CUL: 63,
  DUL: 64,
  EUL: 65,
  FUL: 66,
  GUL: 67,
  HUL: 68,
  HLR: 88,
  GLR: 87,
  FLR: 86,
  ELR: 85,
  DLR: 84,
  CLR: 83,
  BLR: 82,
  ALR: 81,
  ALL: 71,
  BLL: 72,
  CLL: 73,
  DLL: 74,
  ELL: 75,
  FLL: 76,
  GLL: 77,
  HLL: 78
};

export const PALMER_TO_UNIVERSAL_WITH_TMP: {
  [key in PalmerTeethWithTmp]: UniversalTeethWithTmp;
} = {
  "8UR": "1",
  "7UR": "2",
  "6UR": "3",
  "5UR": "4",
  "4UR": "5",
  "3UR": "6",
  "2UR": "7",
  "1UR": "8",
  "1UL": "9",
  "2UL": "10",
  "3UL": "11",
  "4UL": "12",
  "5UL": "13",
  "6UL": "14",
  "7UL": "15",
  "8UL": "16",
  "8LR": "32",
  "7LR": "31",
  "6LR": "30",
  "5LR": "29",
  "4LR": "28",
  "3LR": "27",
  "2LR": "26",
  "1LR": "25",
  "1LL": "24",
  "2LL": "23",
  "3LL": "22",
  "4LL": "21",
  "5LL": "20",
  "6LL": "19",
  "7LL": "18",
  "8LL": "17",
  HUR: "A2",
  GUR: "A1",
  FUR: "A0",
  EUR: "A",
  DUR: "B",
  CUR: "C",
  BUR: "D",
  AUR: "E",
  AUL: "F",
  BUL: "G",
  CUL: "H",
  DUL: "I",
  EUL: "J",
  FUL: "J0",
  GUL: "J1",
  HUL: "J2",
  HLR: "T2",
  GLR: "T1",
  FLR: "T0",
  ELR: "T",
  DLR: "S",
  CLR: "R",
  BLR: "Q",
  ALR: "P",
  ALL: "O",
  BLL: "N",
  CLL: "M",
  DLL: "L",
  ELL: "K",
  FLL: "K0",
  GLL: "K1",
  HLL: "k2"
};

const PALMER_TO_NUMBER: { [key in PalmerTeeth]: number } = {
  "8UR": 0,
  "7UR": 1,
  "6UR": 2,
  "5UR": 3,
  "4UR": 4,
  "3UR": 5,
  "2UR": 6,
  "1UR": 7,
  "1UL": 8,
  "2UL": 9,
  "3UL": 10,
  "4UL": 11,
  "5UL": 12,
  "6UL": 13,
  "7UL": 14,
  "8UL": 15,
  //
  "8LR": 20,
  "7LR": 21,
  "6LR": 22,
  "5LR": 23,
  "4LR": 24,
  "3LR": 25,
  "2LR": 26,
  "1LR": 27,
  "1LL": 28,
  "2LL": 29,
  "3LL": 30,
  "4LL": 31,
  "5LL": 32,
  "6LL": 33,
  "7LL": 34,
  "8LL": 35,
  //
  EUR: 3,
  DUR: 4,
  CUR: 5,
  BUR: 6,
  AUR: 7,
  AUL: 8,
  BUL: 9,
  CUL: 10,
  DUL: 11,
  EUL: 12,
  //
  ELR: 23,
  DLR: 24,
  CLR: 25,
  BLR: 26,
  ALR: 27,
  ALL: 28,
  BLL: 29,
  CLL: 30,
  DLL: 31,
  ELL: 32
};

const NUMBER_TO_PALMER: { [key in number]: PalmerTeeth } = {
  0: "8UR",
  1: "7UR",
  2: "6UR",
  3: "5UR",
  4: "4UR",
  5: "3UR",
  6: "2UR",
  7: "1UR",
  8: "1UL",
  9: "2UL",
  10: "3UL",
  11: "4UL",
  12: "5UL",
  13: "6UL",
  14: "7UL",
  15: "8UL",
  20: "8LR",
  21: "7LR",
  22: "6LR",
  23: "5LR",
  24: "4LR",
  25: "3LR",
  26: "2LR",
  27: "1LR",
  28: "1LL",
  29: "2LL",
  30: "3LL",
  31: "4LL",
  32: "5LL",
  33: "6LL",
  34: "7LL",
  35: "8LL"
};

const ADULT_TO_BABY: { [key in PalmerTeeth]?: PalmerBabyTeeth } = {
  "5UR": "EUR",
  "4UR": "DUR",
  "3UR": "CUR",
  "2UR": "BUR",
  "1UR": "AUR",
  "1UL": "AUL",
  "2UL": "BUL",
  "3UL": "CUL",
  "4UL": "DUL",
  "5UL": "EUL",
  "5LR": "ELR",
  "4LR": "DLR",
  "3LR": "CLR",
  "2LR": "BLR",
  "1LR": "ALR",
  "1LL": "ALL",
  "2LL": "BLL",
  "3LL": "CLL",
  "4LL": "DLL",
  "5LL": "ELL"
};

const getUpperLowerTeethNumber = (teethNumber: number[]) => {
  const upperTeeth: number[] = [];
  const lowerTeeth: number[] = [];

  teethNumber.forEach(toothNumber => {
    if (toothNumber < 20) upperTeeth.push(toothNumber);
    else lowerTeeth.push(toothNumber);
  });

  return {
    upperTeeth,
    lowerTeeth
  };
};

const generateTeethGroup = (
  originTeeth: PalmerTeeth[],
  teethNumber: number[]
) => {
  return groupConsecutiveNumbers(teethNumber).map(group => {
    return group.map(_tooth => {
      const tooth = NUMBER_TO_PALMER[_tooth];
      if (originTeeth.includes(tooth)) {
        return tooth;
      } else {
        const babyTooth = ADULT_TO_BABY[tooth];
        if (!babyTooth) throw Error("Error");
        return babyTooth;
      }
    });
  });
};

const getTeethString = (
  teeth: PalmerTeeth[],
  type: "range" | "individual" = "range"
) => {
  const numberTeeth = teeth.map(tooth => PALMER_TO_NUMBER[tooth]);
  const { upperTeeth, lowerTeeth } = getUpperLowerTeethNumber(numberTeeth);
  const sortedUpperTeeth = upperTeeth.sort((tooth1, tooth2) => tooth1 - tooth2);
  const sortedLowerTeeth = lowerTeeth.sort((tooth1, tooth2) => tooth2 - tooth1);

  const upperTeethGroup = generateTeethGroup(teeth, sortedUpperTeeth);
  const lowerTeethGroup = generateTeethGroup(teeth, sortedLowerTeeth);

  if (type === "range") {
    return mergeTeethRange([...upperTeethGroup, ...lowerTeethGroup]);
  } else {
    return mergeTeethIndividual([...upperTeethGroup, ...lowerTeethGroup]);
  }
};

const isExistTooth = (tooth: any): tooth is PalmerTeeth => {
  return PALMER_TEETH.includes(tooth as PalmerTeeth);
};

export { getTeethString, isExistTooth };
