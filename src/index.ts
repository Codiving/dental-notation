import { FdiTeeth } from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import { convertTooth } from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type ToothNumberingSystem = "fdi" | "universal" | "palmer";

export { Teeth, ToothNumberingSystem, convertTooth };
