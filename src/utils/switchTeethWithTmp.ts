import { FDI_TEETH_WITH_PLACEHOLDER, FdiTeethWithPlaceholder } from "../fdi";
import { PALMER_TEETH_WITH_PLACEHOLDER, PalmerTeethWithPlaceholder } from "../palmer";
import {
  UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  UniversalTeethWithPlaceholder
} from "../universal";
import { convertTeethWithTmp } from "./convertTeethWithTmp";
import { switchTeethWithTmp as switchTeethWithTmpFdi } from "./fdi";

/**
 * Switch Primary Teeth to Baby Teeth and Baby Teeth to Primary Teeth.
 */
export function switchTeethWithTmp(teeth: FdiTeethWithPlaceholder[]): FdiTeethWithPlaceholder[];

export function switchTeethWithTmp(
  teeth: UniversalTeethWithPlaceholder[]
): UniversalTeethWithPlaceholder[];

export function switchTeethWithTmp(
  teeth: PalmerTeethWithPlaceholder[]
): PalmerTeethWithPlaceholder[];

export function switchTeethWithTmp(
  teeth: FdiTeethWithPlaceholder[] | UniversalTeethWithPlaceholder[] | PalmerTeethWithPlaceholder[]
): FdiTeethWithPlaceholder[] | UniversalTeethWithPlaceholder[] | PalmerTeethWithPlaceholder[] {
  if (!teeth.length) return [];

  const firstTooth = teeth[0];
  const isFdi = FDI_TEETH_WITH_PLACEHOLDER.includes(firstTooth as FdiTeethWithPlaceholder);
  const isUniversal = UNIVERSAL_TEETH_WITH_PLACEHOLDER.includes(
    firstTooth as UniversalTeethWithPlaceholder
  );
  const isPalmer = PALMER_TEETH_WITH_PLACEHOLDER.includes(
    firstTooth as PalmerTeethWithPlaceholder
  );

  if (!isFdi && !isUniversal && !isPalmer) {
    throw new Error(`Not Found tooth : ${firstTooth}`);
  }

  const fdiTeeth = convertTeethWithTmp(teeth, "fdi") as FdiTeethWithPlaceholder[];
  const switchedTeeth = switchTeethWithTmpFdi(fdiTeeth);

  return convertTeethWithTmp(
    switchedTeeth,
    isFdi ? "fdi" : isUniversal ? "universal" : "palmer"
  );
}
