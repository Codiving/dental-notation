import { FdiTeethTmp, PalmerTeethTmp, UniversalTeethTmp } from "..";
import { isExistTooth as isExistFdiTooth } from "../utils/fdi";
import { isExistTooth as isExistUniversalTooth } from "../utils/universal";
import { isExistTooth as isExistPalmerTooth } from "../utils/palmer";

describe("isExistTooth function", () => {
  describe("fdi", () => {
    const fdiTooth: FdiTeethTmp = 18;
    const nonFdiTooth: FdiTeethTmp = 88;

    it("18 is fdi tooth.", () => {
      expect(isExistFdiTooth(fdiTooth)).toBeTruthy();
    });

    it("88 isn't fdi tooth.", () => {
      expect(isExistFdiTooth(nonFdiTooth)).toBeFalsy();
    });
  });

  describe("universal", () => {
    const universalTooth: UniversalTeethTmp = "K";
    const nonUniversalTooth: UniversalTeethTmp = "K0";

    it("K is universal tooth.", () => {
      expect(isExistUniversalTooth(universalTooth)).toBeTruthy();
    });

    it("K0 isn't universal tooth.", () => {
      expect(isExistUniversalTooth(nonUniversalTooth)).toBeFalsy();
    });
  });

  describe("palmer", () => {
    const palmerTooth: PalmerTeethTmp = "ELL";
    const nonPalmerTooth: PalmerTeethTmp = "FLL";

    it("ELL is palmer tooth.", () => {
      expect(isExistPalmerTooth(palmerTooth)).toBeTruthy();
    });

    it("FLL isn't palmer tooth.", () => {
      expect(isExistPalmerTooth(nonPalmerTooth)).toBeFalsy();
    });
  });
});
