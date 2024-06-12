import { FdiTeeth } from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import { convertTooth, getTeethString } from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type NotationType = "fdi" | "universal" | "palmer";

export { convertTooth, getTeethString };

export type { FdiTeeth, NotationType, PalmerTeeth, Teeth, UniversalTeeth };
