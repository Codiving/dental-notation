import { FdiTeeth } from "../fdi";
import { UniversalTeeth } from "../universal";
import { groupConsecutiveNumbers } from "../utils/common";
import { getOriginTooth } from "../utils/fdi";
import { generateTeethGroup } from "../utils/universal";

describe("groupConsecutiveNumbers", () => {
  test("should return an empty array for an empty input array", () => {
    expect(groupConsecutiveNumbers([])).toEqual([]);
  });

  test("should group consecutive numbers correctly", () => {
    expect(groupConsecutiveNumbers([1, 2, 3, 4])).toEqual([[1, 2, 3, 4]]);
  });

  test("should group non-consecutive numbers correctly", () => {
    expect(groupConsecutiveNumbers([1, 3, 5, 7])).toEqual([[1], [3], [5], [7]]);
  });

  test("should handle mixed consecutive and non-consecutive numbers correctly", () => {
    expect(groupConsecutiveNumbers([1, 2, 4, 5, 7, 8, 10])).toEqual([
      [1, 2],
      [4, 5],
      [7, 8],
      [10]
    ]);
  });

  test("should handle a single number correctly", () => {
    expect(groupConsecutiveNumbers([1])).toEqual([[1]]);
  });

  test("should handle negative and positive numbers correctly", () => {
    expect(groupConsecutiveNumbers([-3, -2, -1, 0, 1, 3, 4, 5])).toEqual([
      [-3, -2, -1, 0, 1],
      [3, 4, 5]
    ]);
  });
});

describe("getOriginTooth function", () => {
  const originTeeth: FdiTeeth[] = [11, 12, 13];

  it("should return the tooth itself if it exists in originTeeth", () => {
    const result = getOriginTooth(originTeeth, 11);
    expect(result).toBe(11);
  });

  it("should return the original tooth if it exists in originTeeth", () => {
    const result = getOriginTooth(originTeeth, 13);
    expect(result).toBe(13);
  });

  it("should adjust tooth greater than 50 to its original counterpart", () => {
    const result = getOriginTooth(originTeeth, 55);
    expect(result).toBe(15);
  });
});

describe("generateTeethGroup function", () => {
  const universalTeeth = ["99"] as unknown as UniversalTeeth[];

  try {
    generateTeethGroup(universalTeeth, [[123]]);
  } catch (error) {
    expect((error as any).message).toEqual("Error");
  }
});
