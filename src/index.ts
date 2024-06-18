import {
  FDI_BABY_TEETH,
  FDI_BABY_TEETH_LOWER,
  FDI_BABY_TEETH_LOWER_LEFT,
  FDI_BABY_TEETH_LOWER_RIGHT,
  FDI_BABY_TEETH_UPPER,
  FDI_BABY_TEETH_UPPER_LEFT,
  FDI_BABY_TEETH_UPPER_RIGHT,
  FDI_PRIMARY_TEETH,
  FDI_PRIMARY_TEETH_LOWER,
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FDI_TEETH,
  FdiBabyTeeth,
  FdiBabyTeethLower,
  FdiBabyTeethLowerLeft,
  FdiBabyTeethLowerRight,
  FdiBabyTeethUpper,
  FdiBabyTeethUpperLeft,
  FdiBabyTeethUpperRight,
  FdiPrimaryTeeth,
  FdiPrimaryTeethLower,
  FdiPrimaryTeethLowerLeft,
  FdiPrimaryTeethLowerRight,
  FdiPrimaryTeethUpper,
  FdiPrimaryTeethUpperLeft,
  FdiPrimaryTeethUpperRight,
  FdiTeeth
} from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import { convertTeeth, getTeethString } from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type NotationType = "fdi" | "universal" | "palmer";

export {
  FDI_BABY_TEETH,
  FDI_BABY_TEETH_LOWER,
  FDI_BABY_TEETH_LOWER_LEFT,
  FDI_BABY_TEETH_LOWER_RIGHT,
  FDI_BABY_TEETH_UPPER,
  FDI_BABY_TEETH_UPPER_LEFT,
  FDI_BABY_TEETH_UPPER_RIGHT,
  FDI_PRIMARY_TEETH,
  FDI_PRIMARY_TEETH_LOWER,
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FDI_TEETH,
  convertTeeth,
  getTeethString
};

export type {
  FdiBabyTeeth,
  FdiBabyTeethLower,
  FdiBabyTeethLowerLeft,
  FdiBabyTeethLowerRight,
  FdiBabyTeethUpper,
  FdiBabyTeethUpperLeft,
  FdiBabyTeethUpperRight,
  FdiPrimaryTeeth,
  FdiPrimaryTeethLower,
  FdiPrimaryTeethLowerLeft,
  FdiPrimaryTeethLowerRight,
  FdiPrimaryTeethUpper,
  FdiPrimaryTeethUpperLeft,
  FdiPrimaryTeethUpperRight,
  FdiTeeth,
  NotationType,
  PalmerTeeth,
  Teeth,
  UniversalTeeth
};
