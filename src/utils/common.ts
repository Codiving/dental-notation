import { FDI_TEETH, FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UNIVERSAL_TEETH, UniversalTeeth } from "../universal";

export const groupConsecutiveNumbers = <T extends number | FdiTeeth>(
  arr: T[]
): T[][] => {
  if (arr.length === 0) return [];

  const sortedArr = [...arr].sort((a, b) => a - b);

  const result: T[][] = [];
  let currentGroup: T[] = [sortedArr[0]];

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      currentGroup.push(sortedArr[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [sortedArr[i]];
    }
  }

  result.push(currentGroup);

  return result;
};

export const mergeTeethRange = <T extends UniversalTeeth | PalmerTeeth>(
  teeth: T[][],
  prefix: string = ""
) => {
  return teeth
    .map(group => {
      const startTooth = group[0];
      const endTooth = group[group.length - 1];
      return group.length >= 2
        ? `${prefix}${startTooth}-${endTooth}`
        : `${prefix}${startTooth}`;
    })
    .join(", ");
};

export const mergeTeethIndividual = <T extends UniversalTeeth | PalmerTeeth>(
  teeth: T[][],
  prefix: string = ""
) => {
  return teeth
    .flat()
    .map(tooth => `${prefix}${tooth}`)
    .join(", ");
};

export const isFdiTeeth = (tooth: any): tooth is FdiTeeth => {
  return FDI_TEETH.includes(tooth as FdiTeeth);
};

export const isUniversalTeeth = (tooth: any): tooth is UniversalTeeth => {
  return UNIVERSAL_TEETH.includes(tooth as UniversalTeeth);
};
