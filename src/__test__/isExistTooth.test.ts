import {
  FdiTeethWithPlaceholder,
  PalmerTeethWithPlaceholder,
  UniversalTeethWithPlaceholder,
  isFdiTooth,
  isPalmerTooth,
  isUniversalTooth
} from "..";

describe("notation tooth validation", () => {
  describe("fdi", () => {
    const fdiTooth: FdiTeethWithPlaceholder = 18;
    const nonFdiTooth: FdiTeethWithPlaceholder = 88;

    it("18 is fdi tooth.", () => {
      expect(isFdiTooth(fdiTooth)).toBeTruthy();
    });

    it("88 isn't fdi tooth.", () => {
      expect(isFdiTooth(nonFdiTooth)).toBeFalsy();
    });
  });

  describe("universal", () => {
    const universalTooth: UniversalTeethWithPlaceholder = "K";
    const nonUniversalTooth: UniversalTeethWithPlaceholder = "K0";

    it("K is universal tooth.", () => {
      expect(isUniversalTooth(universalTooth)).toBeTruthy();
    });

    it("K0 isn't universal tooth.", () => {
      expect(isUniversalTooth(nonUniversalTooth)).toBeFalsy();
    });
  });

  describe("palmer", () => {
    const palmerTooth: PalmerTeethWithPlaceholder = "ELL";
    const nonPalmerTooth: PalmerTeethWithPlaceholder = "FLL";

    it("ELL is palmer tooth.", () => {
      expect(isPalmerTooth(palmerTooth)).toBeTruthy();
    });

    it("FLL isn't palmer tooth.", () => {
      expect(isPalmerTooth(nonPalmerTooth)).toBeFalsy();
    });
  });
});
