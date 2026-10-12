import {
  FDI_BABY_TEETH,
  FDI_BABY_TEETH_LOWER_LEFT_WITH_TMP,
  FDI_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
  FDI_BABY_TEETH_UPPER_LEFT_WITH_TMP,
  FDI_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FdiTeethWithPlaceholder
} from "./fdi";
import {
  PALMER_BABY_TEETH,
  PALMER_BABY_TEETH_LOWER_LEFT_WITH_TMP,
  PALMER_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
  PALMER_BABY_TEETH_UPPER_LEFT_WITH_TMP,
  PALMER_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
  PALMER_PRIMARY_TEETH_LOWER_LEFT,
  PALMER_PRIMARY_TEETH_LOWER_RIGHT,
  PALMER_PRIMARY_TEETH_UPPER_LEFT,
  PALMER_PRIMARY_TEETH_UPPER_RIGHT,
  PalmerTeethWithPlaceholder
} from "./palmer";
import {
  UNIVERSAL_BABY_TEETH,
  UNIVERSAL_BABY_TEETH_LOWER_LEFT_WITH_TMP,
  UNIVERSAL_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
  UNIVERSAL_BABY_TEETH_UPPER_LEFT_WITH_TMP,
  UNIVERSAL_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
  UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT,
  UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT,
  UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT,
  UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT,
  UniversalTeethWithPlaceholder
} from "./universal";

export type SlotNotation = "fdi" | "universal" | "palmer";
export type Dentition = "permanent" | "deciduous";
export type ToothQuadrant =
  | "upper-right"
  | "upper-left"
  | "lower-right"
  | "lower-left";

export type ToothSlot<T> =
  | {
      quadrant: ToothQuadrant;
      slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
      kind: "tooth";
      tooth: T;
    }
  | {
      quadrant: ToothQuadrant;
      slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
      kind: "placeholder";
      tooth: null;
      placeholder: T;
    };

type ToothValue = string | number;

const makeSlots = <T extends ToothValue>(
  quadrant: ToothQuadrant,
  values: readonly T[],
  realTeeth: readonly T[]
): ToothSlot<T>[] =>
  values.map((value, index) => {
    const slot = (index + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    if (realTeeth.includes(value)) {
      return { quadrant, slot, kind: "tooth", tooth: value };
    }

    return {
      quadrant,
      slot,
      kind: "placeholder",
      tooth: null,
      placeholder: value
    };
  });

const makeNotationSlots = <T extends ToothValue>(
  dentition: Dentition,
  permanent: readonly (readonly T[])[],
  deciduous: readonly (readonly T[])[],
  realDeciduous: readonly T[]
): ToothSlot<T>[] => {
  const quadrants: ToothQuadrant[] = [
    "upper-right",
    "upper-left",
    "lower-right",
    "lower-left"
  ];
  const values = dentition === "permanent" ? permanent : deciduous;
  const realTeeth = dentition === "permanent" ? values.flat() : realDeciduous;

  return values.flatMap((quadrantValues, index) =>
    makeSlots(quadrants[index], quadrantValues, realTeeth)
  );
};

export function getToothSlots(
  notation: "fdi",
  dentition: Dentition
): ToothSlot<FdiTeethWithPlaceholder>[];
export function getToothSlots(
  notation: "universal",
  dentition: Dentition
): ToothSlot<UniversalTeethWithPlaceholder>[];
export function getToothSlots(
  notation: "palmer",
  dentition: Dentition
): ToothSlot<PalmerTeethWithPlaceholder>[];
export function getToothSlots(
  notation: SlotNotation,
  dentition: Dentition
): ToothSlot<FdiTeethWithPlaceholder | UniversalTeethWithPlaceholder | PalmerTeethWithPlaceholder>[] {
  switch (notation) {
    case "fdi":
      return makeNotationSlots(
        dentition,
        [
          FDI_PRIMARY_TEETH_UPPER_RIGHT,
          FDI_PRIMARY_TEETH_UPPER_LEFT,
          FDI_PRIMARY_TEETH_LOWER_RIGHT,
          FDI_PRIMARY_TEETH_LOWER_LEFT
        ],
        [
          FDI_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
          FDI_BABY_TEETH_UPPER_LEFT_WITH_TMP,
          FDI_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
          FDI_BABY_TEETH_LOWER_LEFT_WITH_TMP
        ],
        FDI_BABY_TEETH
      ) as ToothSlot<FdiTeethWithPlaceholder>[];
    case "universal":
      return makeNotationSlots(
        dentition,
        [
          UNIVERSAL_PRIMARY_TEETH_UPPER_RIGHT,
          UNIVERSAL_PRIMARY_TEETH_UPPER_LEFT,
          UNIVERSAL_PRIMARY_TEETH_LOWER_RIGHT,
          UNIVERSAL_PRIMARY_TEETH_LOWER_LEFT
        ],
        [
          UNIVERSAL_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
          UNIVERSAL_BABY_TEETH_UPPER_LEFT_WITH_TMP,
          UNIVERSAL_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
          UNIVERSAL_BABY_TEETH_LOWER_LEFT_WITH_TMP
        ],
        UNIVERSAL_BABY_TEETH
      ) as ToothSlot<UniversalTeethWithPlaceholder>[];
    case "palmer":
      return makeNotationSlots(
        dentition,
        [
          PALMER_PRIMARY_TEETH_UPPER_RIGHT,
          PALMER_PRIMARY_TEETH_UPPER_LEFT,
          PALMER_PRIMARY_TEETH_LOWER_RIGHT,
          PALMER_PRIMARY_TEETH_LOWER_LEFT
        ],
        [
          PALMER_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
          PALMER_BABY_TEETH_UPPER_LEFT_WITH_TMP,
          PALMER_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
          PALMER_BABY_TEETH_LOWER_LEFT_WITH_TMP
        ],
        PALMER_BABY_TEETH
      ) as ToothSlot<PalmerTeethWithPlaceholder>[];
  }
}
