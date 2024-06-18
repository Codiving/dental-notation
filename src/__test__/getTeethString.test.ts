import { FdiTeeth } from "../fdi";
import { PalmerTeeth } from "../palmer";
import { UniversalTeeth } from "../universal";
import { getTeethString } from "../utils";
import { getTeethString as getTeethStringFdi } from "../utils/fdi";
import { getTeethString as getTeethStringPalmer } from "../utils/palmer";
import { getTeethString as getTeethStringUniversal } from "../utils/universal";

const fdi1: FdiTeeth[] = [
  18, 17, 16, 15, 53, 12, 11, 61, 62, 63, 65, 26, 48, 47, 46, 45, 43, 42, 41,
  31, 72, 73, 74, 37, 38
];
const fdiRange1 =
  "#18-15, #53-11, #61-63, #65-26, #48-45, #43-41, #31-74, #37-38";
const fdiIndividual1 =
  "#18, #17, #16, #15, #53, #12, #11, #61, #62, #63, #65, #26, #48, #47, #46, #45, #43, #42, #41, #31, #72, #73, #74, #37, #38";

const fdi2: FdiTeeth[] = [
  16, 13, 12, 51, 21, 22, 23, 64, 26, 27, 28, 48, 47, 46, 45, 44, 42, 31, 33,
  74, 35, 37, 38
];
const fdiRange2 =
  "#16, #13-51, #21-64, #26-28, #48-44, #42, #31, #33-35, #37-38";
const fdiIndividual2 =
  "#16, #13, #12, #51, #21, #22, #23, #64, #26, #27, #28, #48, #47, #46, #45, #44, #42, #31, #33, #74, #35, #37, #38";
const fdi3: FdiTeeth[] = [
  54, 13, 12, 11, 21, 22, 23, 64, 25, 26, 27, 48, 47, 46, 45, 43, 81, 32, 33,
  34, 36, 37, 38
];
const fdiIndividual3 =
  "#54, #13, #12, #11, #21, #22, #23, #64, #25, #26, #27, #48, #47, #46, #45, #43, #81, #32, #33, #34, #36, #37, #38";
const fdiRange3 = "#54-11, #21-27, #48-45, #43, #81, #32-34, #36-38";

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
const universalRange1 = "#1-4, #C-H, #J-14, #32-29, #27-L, #18-17";
const universalIndividual1 =
  "#1, #2, #3, #4, #C, #7, #8, #F, #G, #H, #J, #14, #32, #31, #30, #29, #27, #26, #25, #24, #N, #M, #L, #18, #17";
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
const universalRange2 = "#3, #6-I, #14-16, #32-28, #26, #24, #22-20, #18-17";
const universalIndividual2 =
  "#3, #6, #7, #E, #9, #10, #11, #I, #14, #15, #16, #32, #31, #30, #29, #28, #26, #24, #22, #L, #20, #18, #17";
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
const universalRange3 = "#B-15, #32-29, #27, #P, #23-21, #19-17";
const universalIndividual3 =
  "#B, #6, #7, #8, #9, #10, #11, #I, #13, #14, #15, #32, #31, #30, #29, #27, #P, #23, #22, #21, #19, #18, #17";

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
const palmerIndividual1 =
  "8UR, 7UR, 6UR, 5UR, CUR, 2UR, 1UR, AUL, BUL, CUL, EUL, 6UL, 8LR, 7LR, 6LR, 5LR, 3LR, 2LR, 1LR, 1LL, BLL, CLL, DLL, 7LL, 8LL";
const palmerIndividual2 =
  "6UR, 3UR, 2UR, AUR, 1UL, 2UL, 3UL, DUL, 6UL, 7UL, 8UL, 8LR, 7LR, 6LR, 5LR, 4LR, 2LR, 1LL, 3LL, DLL, 5LL, 7LL, 8LL";
const palmerIndividual3 =
  "DUR, 3UR, 2UR, 1UR, 1UL, 2UL, 3UL, DUL, 5UL, 6UL, 7UL, 8LR, 7LR, 6LR, 5LR, 3LR, ALR, 2LL, 3LL, 4LL, 6LL, 7LL, 8LL";

const palmerRange1 = "8UR-5UR, CUR-CUL, EUL-6UL, 8LR-5LR, 3LR-DLL, 7LL-8LL";
const palmerRange2 =
  "6UR, 3UR-DUL, 6UL-8UL, 8LR-4LR, 2LR, 1LL, 3LL-5LL, 7LL-8LL";
const palmerRange3 = "DUR-7UL, 8LR-5LR, 3LR, ALR, 2LL-4LL, 6LL-8LL";

describe("getTeethString", () => {
  test("fdi range", () => {
    expect(getTeethString(fdi1)).toEqual(fdiRange1);
    expect(getTeethString(fdi2, "range")).toBe(fdiRange2);
    expect(getTeethString(fdi3, undefined, "#")).toEqual(fdiRange3);
  });

  test("fdi individual", () => {
    expect(getTeethString(fdi1, "individual")).toEqual(fdiIndividual1);
    expect(getTeethString(fdi2, "individual", undefined)).toEqual(
      fdiIndividual2
    );
    expect(getTeethString(fdi3, "individual", "#")).toEqual(fdiIndividual3);
  });

  test("universal range", () => {
    expect(getTeethString(universal1)).toEqual(universalRange1);
    expect(getTeethString(universal2)).toEqual(universalRange2);
    expect(getTeethString(universal3)).toEqual(universalRange3);
  });

  test("universal individual", () => {
    expect(getTeethString(universal1, "individual")).toEqual(
      universalIndividual1
    );
    expect(getTeethString(universal2, "individual")).toEqual(
      universalIndividual2
    );
    expect(getTeethString(universal3, "individual")).toEqual(
      universalIndividual3
    );
  });

  test("palmer range", () => {
    expect(getTeethString(palmer1)).toEqual(palmerRange1);
    expect(getTeethString(palmer2)).toEqual(palmerRange2);
    expect(getTeethString(palmer3)).toEqual(palmerRange3);
  });

  test("palmer individual", () => {
    expect(getTeethString(palmer1, "individual")).toEqual(palmerIndividual1);
    expect(getTeethString(palmer2, "individual")).toEqual(palmerIndividual2);
    expect(getTeethString(palmer3, "individual")).toEqual(palmerIndividual3);
  });

  test("should return an empty string for an empty input array", () => {
    expect(getTeethString([])).toBe("");
  });
});

describe("getTeethStringFdi", () => {
  expect(getTeethStringFdi(fdi1)).toEqual(fdiRange1);
  expect(getTeethStringFdi(fdi2, "range")).toBe(fdiRange2);
  expect(getTeethStringFdi(fdi3, undefined, "#")).toEqual(fdiRange3);
});

describe("getTeethStringUniversal", () => {
  expect(getTeethStringUniversal(universal1)).toEqual(universalRange1);
  expect(getTeethStringUniversal(universal2, "range")).toBe(universalRange2);
  expect(getTeethStringUniversal(universal3, undefined, "#")).toEqual(
    universalRange3
  );
});

describe("getTeethStringPalmer", () => {
  expect(getTeethStringPalmer(palmer1)).toEqual(palmerRange1);
  expect(getTeethStringPalmer(palmer2, "range")).toBe(palmerRange2);
  expect(getTeethStringPalmer(palmer3, undefined)).toEqual(palmerRange3);
});

describe("getTeethStringPalmer not found", () => {
  const palmer = ["1LL2"] as unknown as PalmerTeeth[];

  try {
    getTeethStringPalmer(palmer);
  } catch (error) {
    expect((error as any).message).toEqual("Error");
  }
});

describe("getTeethStringUniversal not found", () => {
  const universal = ["1LL2"] as unknown as UniversalTeeth[];

  try {
    getTeethStringUniversal(universal);
  } catch (error) {
    expect((error as any).message).toEqual("Error");
  }
});
