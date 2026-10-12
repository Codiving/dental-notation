import type { NotationType, TeethWithPlaceholder } from "../types";
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

type ConversionTable = Readonly<Record<string, TeethWithPlaceholder>>;

const CONVERSION_TABLES: Record<
  NotationType,
  Partial<Record<NotationType, ConversionTable>>
> = {
  fdi: {
    universal: FDI_TO_UNIVERSAL_WITH_PLACEHOLDER,
    palmer: FDI_TO_PALMER_WITH_PLACEHOLDER
  },
  universal: {
    fdi: UNIVERSAL_TO_FDI_WITH_PLACEHOLDER,
    palmer: UNIVERSAL_TO_PALMER_WITH_PLACEHOLDER
  },
  palmer: {
    fdi: PALMER_TO_FDI_WITH_PLACEHOLDER,
    universal: PALMER_TO_UNIVERSAL_WITH_PLACEHOLDER
  }
};

/**
 * Converts teeth of a single notation to another notation.
 * `validTeeth` decides which values are accepted for each notation.
 */
export const convertNotation = (
  teeth: readonly TeethWithPlaceholder[],
  to: NotationType,
  validTeeth: Record<NotationType, readonly TeethWithPlaceholder[]>
): TeethWithPlaceholder[] => {
  if (!Object.prototype.hasOwnProperty.call(CONVERSION_TABLES, to)) {
    throw new Error(`Unknown target notation: ${to}`);
  }
  if (!teeth.length) return [];

  const from = (Object.keys(validTeeth) as NotationType[]).find(notation =>
    validTeeth[notation].includes(teeth[0])
  );
  const invalidTooth = teeth.find(
    tooth => !from || !validTeeth[from].includes(tooth)
  );

  if (!from || invalidTooth !== undefined) {
    throw new Error(`Invalid mixed or unknown tooth notation: ${invalidTooth}`);
  }

  if (from === to) return [...teeth];

  const table = CONVERSION_TABLES[from][to]!;
  return teeth.map(tooth => table[tooth]);
};
