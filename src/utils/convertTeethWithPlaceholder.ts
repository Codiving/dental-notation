import { NotationType } from "..";
import { FDI_TEETH_WITH_PLACEHOLDER, FdiTeethWithPlaceholder } from "../fdi";
import { PalmerTeethWithPlaceholder } from "../palmer";
import {
  UNIVERSAL_TEETH_WITH_PLACEHOLDER,
  UniversalTeethWithPlaceholder
} from "../universal";
import {
  FDI_TO_PALMER_WITH_PLACEHOLDER,
  FDI_TO_UNIVERSAL_WITH_PLACEHOLDER
} from "./fdi";
import {
  PALMER_TO_FDI_WITH_PLACEHOLDER,
  PALMER_TO_UNIVERSAL_WITH_PLACEHOLDER
} from "./palmer";
import {
  UNIVERSAL_TO_FDI_WITH_PLACEHOLDER,
  UNIVERSAL_TO_PALMER_WITH_PLACEHOLDER
} from "./universal";

export function convertTeethWithPlaceholder(
  teeth: FdiTeethWithPlaceholder[],
  to: "fdi"
): FdiTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: FdiTeethWithPlaceholder[],
  to: "universal"
): UniversalTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: FdiTeethWithPlaceholder[],
  to: "palmer"
): PalmerTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: UniversalTeethWithPlaceholder[],
  to: "fdi"
): FdiTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: UniversalTeethWithPlaceholder[],
  to: "universal"
): UniversalTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: UniversalTeethWithPlaceholder[],
  to: "palmer"
): PalmerTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: PalmerTeethWithPlaceholder[],
  to: "fdi"
): FdiTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: PalmerTeethWithPlaceholder[],
  to: "universal"
): UniversalTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth: PalmerTeethWithPlaceholder[],
  to: "palmer"
): PalmerTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth:
    | FdiTeethWithPlaceholder[]
    | UniversalTeethWithPlaceholder[]
    | PalmerTeethWithPlaceholder[],
  to: NotationType
):
  | FdiTeethWithPlaceholder[]
  | UniversalTeethWithPlaceholder[]
  | PalmerTeethWithPlaceholder[];
export function convertTeethWithPlaceholder(
  teeth:
    | FdiTeethWithPlaceholder[]
    | UniversalTeethWithPlaceholder[]
    | PalmerTeethWithPlaceholder[],
  to: NotationType
):
  | FdiTeethWithPlaceholder[]
  | UniversalTeethWithPlaceholder[]
  | PalmerTeethWithPlaceholder[] {
  if (!teeth.length) return [];

  const tooth = teeth[0];

  const fromNotation: NotationType = FDI_TEETH_WITH_PLACEHOLDER.includes(
    tooth as FdiTeethWithPlaceholder
  )
    ? "fdi"
    : UNIVERSAL_TEETH_WITH_PLACEHOLDER.includes(
          tooth as UniversalTeethWithPlaceholder
        )
      ? "universal"
      : "palmer";

  const isValidInput =
    fromNotation === "fdi"
      ? (teeth as FdiTeethWithPlaceholder[]).every(tooth =>
          FDI_TEETH_WITH_PLACEHOLDER.includes(tooth)
        )
      : fromNotation === "universal"
        ? (teeth as UniversalTeethWithPlaceholder[]).every(tooth =>
            UNIVERSAL_TEETH_WITH_PLACEHOLDER.includes(tooth)
          )
        : (teeth as PalmerTeethWithPlaceholder[]).every(tooth =>
            Object.prototype.hasOwnProperty.call(
              PALMER_TO_FDI_WITH_PLACEHOLDER,
              tooth
            )
          );

  if (!isValidInput) {
    throw new Error(`Invalid mixed or unknown tooth notation`);
  }

  switch (fromNotation) {
    case "fdi":
      if (to === "universal") {
        return (teeth as FdiTeethWithPlaceholder[]).map(
          tooth => FDI_TO_UNIVERSAL_WITH_PLACEHOLDER[tooth]
        );
      }
      if (to === "palmer") {
        return (teeth as FdiTeethWithPlaceholder[]).map(
          tooth => FDI_TO_PALMER_WITH_PLACEHOLDER[tooth]
        );
      }
      return teeth;
    case "universal":
      if (to === "fdi") {
        return (teeth as UniversalTeethWithPlaceholder[]).map(tooth => {
          return UNIVERSAL_TO_FDI_WITH_PLACEHOLDER[tooth];
        });
      }
      if (to === "palmer") {
        return (teeth as UniversalTeethWithPlaceholder[]).map(tooth => {
          return UNIVERSAL_TO_PALMER_WITH_PLACEHOLDER[tooth];
        });
      }
      return teeth;
    case "palmer":
      if (to === "fdi") {
        return (teeth as PalmerTeethWithPlaceholder[]).map(tooth => {
          return PALMER_TO_FDI_WITH_PLACEHOLDER[tooth];
        });
      }
      if (to === "universal") {
        return (teeth as PalmerTeethWithPlaceholder[]).map(tooth => {
          return PALMER_TO_UNIVERSAL_WITH_PLACEHOLDER[tooth];
        });
      }
      return teeth;
  }
}
