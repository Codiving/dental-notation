import { FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UniversalTeeth } from "../universal";
import { convertTeeth } from "../utils/convertTeeth";

const fdi1: FdiTeeth[] = [
  18, 17, 16, 15, 53, 12, 11, 61, 62, 63, 65, 26, 48, 47, 46, 45, 43, 42, 41,
  31, 72, 73, 74, 37, 38
];
const fdi2: FdiTeeth[] = [
  16, 13, 12, 51, 21, 22, 23, 64, 26, 27, 28, 48, 47, 46, 45, 44, 42, 31, 33,
  74, 35, 37, 38
];
const fdi3: FdiTeeth[] = [
  54, 13, 12, 11, 21, 22, 23, 64, 25, 26, 27, 48, 47, 46, 45, 43, 81, 32, 33,
  34, 36, 37, 38
];
const fdiNotFound = [0] as unknown as FdiTeeth[];

const universal1: UniversalTeeth[] = [
  "1",
  "2",
  "3",
  "4",
  "C",
  "7",
  "8",
  "F",
  "G",
  "H",
  "J",
  "14",
  "32",
  "31",
  "30",
  "29",
  "27",
  "26",
  "25",
  "24",
  "N",
  "M",
  "L",
  "18",
  "17"
];
const universal2: UniversalTeeth[] = [
  "3",
  "6",
  "7",
  "E",
  "9",
  "10",
  "11",
  "I",
  "14",
  "15",
  "16",
  "32",
  "31",
  "30",
  "29",
  "28",
  "26",
  "24",
  "22",
  "L",
  "20",
  "18",
  "17"
];
const universal3: UniversalTeeth[] = [
  "B",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "I",
  "13",
  "14",
  "15",
  "32",
  "31",
  "30",
  "29",
  "27",
  "P",
  "23",
  "22",
  "21",
  "19",
  "18",
  "17"
];
const palmer1: PalmerTeeth[] = [
  "8UR",
  "7UR",
  "6UR",
  "5UR",
  "CUR",
  "2UR",
  "1UR",
  "AUL",
  "BUL",
  "CUL",
  "EUL",
  "6UL",
  "8LR",
  "7LR",
  "6LR",
  "5LR",
  "3LR",
  "2LR",
  "1LR",
  "1LL",
  "BLL",
  "CLL",
  "DLL",
  "7LL",
  "8LL"
];
const palmer2: PalmerTeeth[] = [
  "6UR",
  "3UR",
  "2UR",
  "AUR",
  "1UL",
  "2UL",
  "3UL",
  "DUL",
  "6UL",
  "7UL",
  "8UL",
  "8LR",
  "7LR",
  "6LR",
  "5LR",
  "4LR",
  "2LR",
  "1LL",
  "3LL",
  "DLL",
  "5LL",
  "7LL",
  "8LL"
];
const palmer3: PalmerTeeth[] = [
  "DUR",
  "3UR",
  "2UR",
  "1UR",
  "1UL",
  "2UL",
  "3UL",
  "DUL",
  "5UL",
  "6UL",
  "7UL",
  "8LR",
  "7LR",
  "6LR",
  "5LR",
  "3LR",
  "ALR",
  "2LL",
  "3LL",
  "4LL",
  "6LL",
  "7LL",
  "8LL"
];

describe("convertTeeth", () => {
  test("fdi to universal", () => {
    expect(convertTeeth(fdi1, "universal")).toEqual(universal1);
    expect(convertTeeth(fdi2, "universal")).toEqual(universal2);
    expect(convertTeeth(fdi3, "universal")).toEqual(universal3);
  });

  test("fdi to palmer", () => {
    expect(convertTeeth(fdi1, "palmer")).toEqual(palmer1);
    expect(convertTeeth(fdi2, "palmer")).toEqual(palmer2);
    expect(convertTeeth(fdi3, "palmer")).toEqual(palmer3);
  });

  test("universal to fdi", () => {
    expect(convertTeeth(universal1, "fdi")).toEqual(fdi1);
    expect(convertTeeth(universal2, "fdi")).toEqual(fdi2);
    expect(convertTeeth(universal3, "fdi")).toEqual(fdi3);
  });

  test("universal to palmer", () => {
    expect(convertTeeth(universal1, "palmer")).toEqual(palmer1);
    expect(convertTeeth(universal2, "palmer")).toEqual(palmer2);
    expect(convertTeeth(universal3, "palmer")).toEqual(palmer3);
  });

  test("palmer to fdi", () => {
    expect(convertTeeth(palmer1, "fdi")).toEqual(fdi1);
    expect(convertTeeth(palmer2, "fdi")).toEqual(fdi2);
    expect(convertTeeth(palmer3, "fdi")).toEqual(fdi3);
  });

  test("palmer to universal", () => {
    expect(convertTeeth(palmer1, "universal")).toEqual(universal1);
    expect(convertTeeth(palmer2, "universal")).toEqual(universal2);
    expect(convertTeeth(palmer3, "universal")).toEqual(universal3);
  });

  test("should return an empty array for an empty input array", () => {
    expect(convertTeeth([], "universal")).toEqual([]);
  });

  test("not found", () => {
    try {
      convertTeeth(fdiNotFound, "universal");
    } catch (error) {
      expect((error as any).message).toBe(
        `Not Found tooth : ${fdiNotFound[0]}`
      );
    }
  });
});
