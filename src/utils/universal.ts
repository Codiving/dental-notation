import {
  UNIVERSAL_PRIMARY_TEETH,
  UniversalBabyTeeth,
  UniversalPrimaryTeeth,
  UniversalTeeth
} from "../universal";
import {
  groupConsecutiveNumbers,
  mergeTeethIndividual,
  mergeTeethRange
} from "./common";

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

export const generateTeethGroup = (
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

export { getTeethString };
