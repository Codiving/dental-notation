import {
  FDI_PERMANENT_TEETH,
  FDI_PERMANENT_TEETH_LOWER_LEFT,
  FDI_PERMANENT_TEETH_LOWER_RIGHT,
  FDI_PERMANENT_TEETH_UPPER_LEFT,
  FDI_PERMANENT_TEETH_UPPER_RIGHT,
  FdiPermanentTeeth,
  FdiPermanentTeethLowerLeft,
  FdiPermanentTeethLowerRight,
  FdiPermanentTeethUpperLeft,
  FdiPermanentTeethUpperRight,
  FdiTeeth
} from "../fdi";

const groupConsecutiveNumbers = (arr: FdiTeeth[]): FdiTeeth[][] => {
  if (arr.length === 0) return [];

  const sortedArr = [...arr].sort((a, b) => a - b);

  const result: FdiTeeth[][] = [];
  let currentGroup: FdiTeeth[] = [sortedArr[0]];

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

const convertAdultTooth = (tooth: FdiTeeth): FdiPermanentTeeth => {
  const adultTooth = tooth as FdiPermanentTeeth;

  if (FDI_PERMANENT_TEETH.includes(adultTooth)) return adultTooth;
  return (adultTooth - 40) as FdiPermanentTeeth;
};

const isRightUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethUpperRight => {
  return FDI_PERMANENT_TEETH_UPPER_RIGHT.includes(
    tooth as FdiPermanentTeethUpperRight
  );
};

const isRightLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethLowerRight => {
  return FDI_PERMANENT_TEETH_LOWER_RIGHT.includes(
    tooth as FdiPermanentTeethLowerRight
  );
};

const isLeftUpperTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethUpperLeft => {
  return FDI_PERMANENT_TEETH_UPPER_LEFT.includes(
    tooth as FdiPermanentTeethUpperLeft
  );
};

const isLeftLowerTooth = (
  tooth: FdiTeeth
): tooth is FdiPermanentTeethLowerLeft => {
  return FDI_PERMANENT_TEETH_LOWER_LEFT.includes(
    tooth as FdiPermanentTeethLowerLeft
  );
};

const getOriginTooth = (originTeeth: FdiTeeth[], tooth: FdiTeeth): FdiTeeth => {
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

    return [uLeftTeeth, uRightTeeth, lLeftTeeth, lRightTeeth].join(", ");
  } else if (type === "individual") {
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
