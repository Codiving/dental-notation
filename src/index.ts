import { FdiTeeth } from "./fdi";
import { PalmerTeeth } from "./palmer";
import { UniversalTeeth } from "./universal";
import { convertTeeth, getTeethString } from "./utils";

type Teeth = FdiTeeth | UniversalTeeth | PalmerTeeth;

type NotationType = "fdi" | "universal" | "palmer";

export { convertTeeth, getTeethString };

export type { FdiTeeth, NotationType, PalmerTeeth, Teeth, UniversalTeeth };
