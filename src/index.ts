import { FdiTeeth } from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import { convertTooth, getTeethStringFdi } from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type ToothNumberingSystem = "fdi" | "universal" | "palmer";

export { Teeth, ToothNumberingSystem, convertTooth, getTeethStringFdi };
