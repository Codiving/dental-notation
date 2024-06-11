import { FdiTeeth } from "../fdi";

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
