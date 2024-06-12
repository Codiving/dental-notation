import { NotationType, Teeth } from "..";
import { FDI_TEETH, FdiTeeth } from "../fdi";
import { PALMER_TEETH, PalmerTeeth } from "../palmer";
import { UNIVERSAL_TEETH, UniversalTeeth } from "../universal";

export function convertTooth(
  teeth: FdiTeeth[],
  from: "fdi",
  to: "universal"
): UniversalTeeth[];

export function convertTooth(
  teeth: FdiTeeth[],
  from: "fdi",
  to: "palmer"
): PalmerTeeth[];

export function convertTooth(
  teeth: UniversalTeeth[],
  from: "universal",
  to: "fdi"
): FdiTeeth[];

export function convertTooth(
  teeth: UniversalTeeth[],
  from: "universal",
  to: "palmer"
): PalmerTeeth[];

export function convertTooth(
  teeth: PalmerTeeth[],
  from: "palmer",
  to: "fdi"
): FdiTeeth[];

export function convertTooth(
  teeth: PalmerTeeth[],
  from: "palmer",
  to: "universal"
): UniversalTeeth[];

export function convertTooth(
  teeth: FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[],
  from: NotationType,
  to: NotationType
): FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[] {
  if (!teeth.length) return [];

  const toTeeth = (to === "fdi"
    ? FDI_TEETH
    : to === "universal"
    ? UNIVERSAL_TEETH
    : PALMER_TEETH) as unknown as Teeth[];

  const fromTeeth = (from === "fdi"
    ? FDI_TEETH
    : from === "universal"
    ? UNIVERSAL_TEETH
    : PALMER_TEETH) as unknown as Teeth[];

  const result = teeth.map(tooth => {
    const index = fromTeeth.indexOf(tooth as Teeth);

    if (index === -1) {
      throw new Error(`Not Found tooth : ${tooth}`);
    }

    return toTeeth[index];
  }) as FdiTeeth[] | UniversalTeeth[] | PalmerTeeth[];

  return result;
}
