import { NotationType } from "..";
import { FDI_TEETH_WITH_TMP, FdiTeethWithTmp } from "../fdi";
import { PalmerTeethWithTmp } from "../palmer";
import { UNIVERSAL_TEETH_WITH_TMP, UniversalTeethWithTmp } from "../universal";
import { FDI_TO_PALMER_WITH_TMP, FDI_TO_UNIVERSAL_WITH_TMP } from "./fdi";
import { PALMER_TO_FDI_WITH_TMP, PALMER_TO_UNIVERSAL_WITH_TMP } from "./palmer";
import {
  UNIVERSAL_TO_FDI_WITH_TMP,
  UNIVERSAL_TO_PALMER_WITH_TMP
} from "./universal";

export function convertTeethWithTmp(
  teeth: FdiTeethWithTmp[],
  to: "fdi"
): FdiTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: FdiTeethWithTmp[],
  to: "universal"
): UniversalTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: FdiTeethWithTmp[],
  to: "palmer"
): PalmerTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: UniversalTeethWithTmp[],
  to: "fdi"
): FdiTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: UniversalTeethWithTmp[],
  to: "universal"
): UniversalTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: UniversalTeethWithTmp[],
  to: "palmer"
): PalmerTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: PalmerTeethWithTmp[],
  to: "fdi"
): FdiTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: PalmerTeethWithTmp[],
  to: "universal"
): UniversalTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: PalmerTeethWithTmp[],
  to: "palmer"
): PalmerTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[],
  to: NotationType
): FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[];
export function convertTeethWithTmp(
  teeth: FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[],
  to: NotationType
): FdiTeethWithTmp[] | UniversalTeethWithTmp[] | PalmerTeethWithTmp[] {
  if (!teeth.length) return [];

  const tooth = teeth[0];

  const fromNotation: NotationType = FDI_TEETH_WITH_TMP.includes(
    tooth as FdiTeethWithTmp
  )
    ? "fdi"
    : UNIVERSAL_TEETH_WITH_TMP.includes(tooth as UniversalTeethWithTmp)
    ? "universal"
    : "palmer";

  const isValidInput =
    fromNotation === "fdi"
      ? (teeth as FdiTeethWithTmp[]).every(tooth =>
          FDI_TEETH_WITH_TMP.includes(tooth)
        )
      : fromNotation === "universal"
      ? (teeth as UniversalTeethWithTmp[]).every(tooth =>
          UNIVERSAL_TEETH_WITH_TMP.includes(tooth)
        )
      : (teeth as PalmerTeethWithTmp[]).every(tooth =>
          Object.prototype.hasOwnProperty.call(PALMER_TO_FDI_WITH_TMP, tooth)
        );

  if (!isValidInput) {
    throw new Error(`Invalid mixed or unknown tooth notation`);
  }

  switch (fromNotation) {
    case "fdi":
      if (to === "universal") {
        return (teeth as FdiTeethWithTmp[]).map(tooth =>
          FDI_TO_UNIVERSAL_WITH_TMP[tooth]
        );
      }
      if (to === "palmer") {
        return (teeth as FdiTeethWithTmp[]).map(tooth =>
          FDI_TO_PALMER_WITH_TMP[tooth]
        );
      }
      return teeth;
    case "universal":
      if (to === "fdi") {
        return (teeth as UniversalTeethWithTmp[]).map(tooth => {
          return UNIVERSAL_TO_FDI_WITH_TMP[tooth];
        });
      }
      if (to === "palmer") {
        return (teeth as UniversalTeethWithTmp[]).map(tooth => {
          return UNIVERSAL_TO_PALMER_WITH_TMP[tooth];
        });
      }
      return teeth;
    case "palmer":
      if (to === "fdi") {
        return (teeth as PalmerTeethWithTmp[]).map(tooth => {
          return PALMER_TO_FDI_WITH_TMP[tooth];
        });
      }
      if (to === "universal") {
        return (teeth as PalmerTeethWithTmp[]).map(tooth => {
          return PALMER_TO_UNIVERSAL_WITH_TMP[tooth];
        });
      }
      return teeth;
  }
}
