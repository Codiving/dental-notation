import {
  FDI_PRIMARY_TEETH,
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FdiPrimaryTeeth,
  FdiPrimaryTeethLowerLeft,
  FdiPrimaryTeethLowerRight,
  FdiPrimaryTeethUpperLeft,
  FdiPrimaryTeethUpperRight,
  FdiTeeth
} from "../fdi";
import { groupConsecutiveNumbers } from "./common";

const convertAdultTooth = (tooth: FdiTeeth): FdiPrimaryTeeth => {
  const adultTooth = tooth as FdiPrimaryTeeth;

  if (FDI_PRIMARY_TEETH.includes(adultTooth)) return adultTooth;
  return (adultTooth - 40) as FdiPrimaryTeeth;
};

const isRightUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPrimaryTeethUpperRight => {
  return FDI_PRIMARY_TEETH_UPPER_RIGHT.includes(
    tooth as FdiPrimaryTeethUpperRight
  );
};

const isRightLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPrimaryTeethLowerRight => {
  return FDI_PRIMARY_TEETH_LOWER_RIGHT.includes(
    tooth as FdiPrimaryTeethLowerRight
  );
};

const isLeftUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPrimaryTeethUpperLeft => {
  return FDI_PRIMARY_TEETH_UPPER_LEFT.includes(
    tooth as FdiPrimaryTeethUpperLeft
  );
};

const isLeftLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPrimaryTeethLowerLeft => {
  return FDI_PRIMARY_TEETH_LOWER_LEFT.includes(
    tooth as FdiPrimaryTeethLowerLeft
  );
};

export const getOriginTooth = (
  originTeeth: FdiTeeth[],
  tooth: FdiTeeth
): FdiTeeth => {
  if (originTeeth.includes(tooth)) return tooth;

  if (tooth > 50) return (tooth - 40) as FdiTeeth;
  return (tooth + 40) as FdiTeeth;
};

const getFormattingGroup = (
  originTeeth: FdiTeeth[],
  teeth: FdiTeeth[][],
  isLeft: boolean,
  prefix: string
): string => {
  const reverseTeeth = isLeft
    ? teeth.reverse().map(teeth => teeth.reverse())
    : teeth;

  const result = reverseTeeth.reduce((teethString, teeth) => {
    const _startTooth = teeth[0];

    const startTooth = getOriginTooth(originTeeth, _startTooth);

    if (teeth.length === 1) {
      if (teethString.length) {
        return `${teethString}, ${prefix}${startTooth}`;
      }
      return `${prefix}${startTooth}`;
    }

    const _endTooth = teeth[teeth.length - 1];
    const endTooth = getOriginTooth(originTeeth, _endTooth);

    if (teethString.length) {
      return `${teethString}, ${prefix}${startTooth}-${endTooth}`;
    }
    return `${prefix}${startTooth}-${endTooth}`;
  }, "");

  return result;
};

const getFormattingIndividual = (
  orginTeeth: FdiTeeth[],
  teeth: FdiTeeth[][],
  isLeft: boolean,
  prefix: string
) => {
  const reverseTeeth = isLeft
    ? teeth.reverse().map(teeth => teeth.reverse())
    : teeth;

  return reverseTeeth
    .flat()
    .map(tooth => `${prefix}${getOriginTooth(orginTeeth, tooth)}`);
};

const getTeethString = (
  teeth: FdiTeeth[],
  type: "range" | "individual" = "range",
  prefix: string = "#"
) => {
  const adultTeeth = teeth.map(convertAdultTooth).sort();

  const adultLeftUpperTeeth = adultTeeth.filter(isLeftUpperTooth);
  const adultRightUpperTeeth = adultTeeth.filter(isRightUpperTooth);
  const adultLeftLowerTeeth = adultTeeth.filter(isLeftLowerTooth);
  const adultRightLowerTeeth = adultTeeth.filter(isRightLowerTooth);

  const upperLeftTeeth = groupConsecutiveNumbers(adultLeftUpperTeeth);
  const upperRightTeeth = groupConsecutiveNumbers(adultRightUpperTeeth);
  const lowerLeftTeeth = groupConsecutiveNumbers(adultLeftLowerTeeth);
  const lowerRightTeeth = groupConsecutiveNumbers(adultRightLowerTeeth);

  if (type === "range") {
    const uLeftTeeth = getFormattingGroup(teeth, upperLeftTeeth, true, prefix);
    const uRightTeeth = getFormattingGroup(
      teeth,
      upperRightTeeth,
      false,
      prefix
    );
    const lLeftTeeth = getFormattingGroup(teeth, lowerLeftTeeth, true, prefix);
    const lRightTeeth = getFormattingGroup(
      teeth,
      lowerRightTeeth,
      false,
      prefix
    );

    return [uLeftTeeth, uRightTeeth, lLeftTeeth, lRightTeeth]
      .filter(el => el.length)
      .join(", ");
  } else {
    const uLeftTeeth = getFormattingIndividual(
      teeth,
      upperLeftTeeth,
      true,
      prefix
    );
    const uRightTeeth = getFormattingIndividual(
      teeth,
      upperRightTeeth,
      false,
      prefix
    );
    const lLeftTeeth = getFormattingIndividual(
      teeth,
      lowerLeftTeeth,
      true,
      prefix
    );
    const lRightTeeth = getFormattingIndividual(
      teeth,
      lowerRightTeeth,
      false,
      prefix
    );

    return [uLeftTeeth, uRightTeeth, lLeftTeeth, lRightTeeth].flat().join(", ");
  }
};

export { getTeethString };
