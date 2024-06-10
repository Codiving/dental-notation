import { FdiTeeth } from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import {
  convertTooth,
  getTeethStringFdi,
  getTeethStringUniversal
} from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type ToothNumberingSystem = "fdi" | "universal" | "palmer";

export {
  FdiTeeth,
  PalmerTeeth,
  Teeth,
  ToothNumberingSystem,
  UniversalTeeth,
  convertTooth,
  getTeethStringFdi,
  getTeethStringUniversal
};
