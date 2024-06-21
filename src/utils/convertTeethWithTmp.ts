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

  switch (fromNotation) {
    case "fdi":
      if (to === "universal") {
        return (teeth as FdiTeethWithTmp[]).map(tooth => {
          return FDI_TO_UNIVERSAL_WITH_TMP[tooth];
        });
      }
      if (to === "palmer") {
        return (teeth as FdiTeethWithTmp[]).map(tooth => {
          return FDI_TO_PALMER_WITH_TMP[tooth];
        });
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
