import { FDI_TEETH_WITH_TMP, FdiTeethWithTmp } from "../fdi";
import { PALMER_TEETH_WITH_TMP, PalmerTeethWithTmp } from "../palmer";
import {
  UNIVERSAL_TEETH_WITH_TMP,
  UniversalTeethWithTmp
} from "../universal";
import { convertTeethWithTmp } from "./convertTeethWithTmp";
import { switchTeethWithTmp as switchTeethWithTmpFdi } from "./fdi";

/**
 * Switch Primary Teeth to Baby Teeth and Baby Teeth to Primary Teeth.
 */
export function switchTeethWithTmp(teeth: FdiTeethWithTmp[]): FdiTeethWithTmp[];

export function switchTeethWithTmp(
  teeth: UniversalTeethWithTmp[]
): UniversalTeethWithTmp[];

export function switchTeethWithTmp(
  teeth: PalmerTeethWithTmp[]
): PalmerTeethWithTmp[];

export function switchTeethWithTmp(
  teeth: FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[]
): FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[] {
  if (!teeth.length) return [];

  const firstTooth = teeth[0];
  const isFdi = FDI_TEETH_WITH_TMP.includes(firstTooth as FdiTeethWithTmp);
  const isUniversal = UNIVERSAL_TEETH_WITH_TMP.includes(
    firstTooth as UniversalTeethWithTmp
  );
  const isPalmer = PALMER_TEETH_WITH_TMP.includes(
    firstTooth as PalmerTeethWithTmp
  );

  if (!isFdi && !isUniversal && !isPalmer) {
    throw new Error(`Not Found tooth : ${firstTooth}`);
  }

  const fdiTeeth = convertTeethWithTmp(teeth, "fdi") as FdiTeethWithTmp[];
  const switchedTeeth = switchTeethWithTmpFdi(fdiTeeth);

  return convertTeethWithTmp(
    switchedTeeth,
    isFdi ? "fdi" : isUniversal ? "universal" : "palmer"
  );
}
