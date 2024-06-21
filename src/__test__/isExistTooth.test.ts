import { FdiTeethWithTmp, PalmerTeethWithTmp, UniversalTeethWithTmp } from "..";
import { isExistTooth as isExistFdiTooth } from "../utils/fdi";
import { isExistTooth as isExistPalmerTooth } from "../utils/palmer";
import { isExistTooth as isExistUniversalTooth } from "../utils/universal";

describe("isExistTooth function", () => {
  describe("fdi", () => {
    const fdiTooth: FdiTeethWithTmp = 18;
    const nonFdiTooth: FdiTeethWithTmp = 88;

    it("18 is fdi tooth.", () => {
      expect(isExistFdiTooth(fdiTooth)).toBeTruthy();
    });

    it("88 isn't fdi tooth.", () => {
      expect(isExistFdiTooth(nonFdiTooth)).toBeFalsy();
    });
  });

  describe("universal", () => {
    const universalTooth: UniversalTeethWithTmp = "K";
    const nonUniversalTooth: UniversalTeethWithTmp = "K0";

    it("K is universal tooth.", () => {
      expect(isExistUniversalTooth(universalTooth)).toBeTruthy();
    });

    it("K0 isn't universal tooth.", () => {
      expect(isExistUniversalTooth(nonUniversalTooth)).toBeFalsy();
    });
  });

  describe("palmer", () => {
    const palmerTooth: PalmerTeethWithTmp = "ELL";
    const nonPalmerTooth: PalmerTeethWithTmp = "FLL";

    it("ELL is palmer tooth.", () => {
      expect(isExistPalmerTooth(palmerTooth)).toBeTruthy();
    });

    it("FLL isn't palmer tooth.", () => {
      expect(isExistPalmerTooth(nonPalmerTooth)).toBeFalsy();
    });
  });
});
