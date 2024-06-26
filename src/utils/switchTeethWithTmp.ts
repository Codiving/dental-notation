import { isExistFdiTooth, isExistUniversalTooth } from "..";
import { FdiTeethWithTmp } from "../fdi";
import { PalmerTeethWithTmp } from "../palmer";
import { UniversalTeethWithTmp } from "../universal";
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
  teeth: UniversalTeethWithTmp[]
): UniversalTeethWithTmp[];

export function switchTeethWithTmp(
  teeth: FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[]
): FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[] {
  if (!teeth.length) return [];

  const isFdi = isExistFdiTooth(teeth[0] as FdiTeethWithTmp);
  const isUniversal = isExistUniversalTooth(teeth[0] as UniversalTeethWithTmp);

  const fdiTeeth = convertTeethWithTmp(teeth, "fdi") as FdiTeethWithTmp[];
  const switchedTeeth = switchTeethWithTmpFdi(fdiTeeth);

  return convertTeethWithTmp(
    switchedTeeth,
    isFdi ? "fdi" : isUniversal ? "universal" : "palmer"
  );
}
