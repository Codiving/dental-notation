# Dental Notation

<br/>

## What is Dental Notation package

**This package facilitates easy manipulation** of commonly used dental notation methods in dentistry.  
The package covers a **total of three dental notations**.  
Dental notation are FDI, Universal and Palmer.

[• Docs and Testing site ](https://dental-notation-docs.vercel.app/ "Docs and Testing site ")

<br/>

## Installing

### Package manager

Using npm:

```
npm install dental-notation
```

Using yarn:

```
yarn add dental-notation
```

Using pnpm:

```
pnpm add dental-notation
```

<br/>

## Example

#### function : convertTeeth

A function to convert between dental notation types: `FDI`, `Universal`, and `Palmer`, for tooth numbering.

```ts
import {
  convertTeeth,
  FdiTeeth,
  PalmerTeeth,
  UniversalTeeth
} from "dental-notation";

const fdi: FdiTeeth[] = [18, 17];
const universal: UniversalTeeth[] = ["1", "2"];
const palmer: PalmerTeeth[] = ["EUR", "DUR"];

convertTeeth(fdi, "universal"); // ["1", "2"]
convertTeeth(universal, "palmer"); // ["8UR", "7UR"]
convertTeeth(palmer, "fdi"); // [55, 54]
```

Unknown or mixed notation values throw `Invalid mixed or unknown tooth notation: <value>`.

<br/>

#### function : convertTeethWithPlaceholder

Same as `convertTeeth`, but also accepts the display-only placeholder positions of the deciduous chart.

```ts
import { convertTeethWithPlaceholder } from "dental-notation";

convertTeethWithPlaceholder([58, 55], "universal"); // ["A2", "A"]
```

<br/>

#### function : switchDentition

Switches permanent teeth to the deciduous positions and vice versa.

```ts
import { switchDentition } from "dental-notation";

switchDentition([18]); // [58]
switchDentition(["1"]); // ["A2"]
switchDentition(["8UR"]); // ["HUR"]
```

<br/>

#### function : formatTeeth

When inputting FDI, Universal, or Palmer tooth, the tool performs string conversion.

- **Range** : Displays only the first and last teeth in a continuous sequence.
- **Individual** : Shows all teeth individually.

```ts
import { formatTeeth } from "dental-notation";

formatTeeth([18, 17, 15]); // "#18-17, #15"
formatTeeth(["1", "2", "5", "6"]); // "#1-2, #5-6"
formatTeeth(["EUR", "DUR"]); // "EUR-DUR"

formatTeeth([18, 17, 15], "individual"); // "#18, #17, #15"
formatTeeth(["1", "2", "5", "6"], "individual"); // "#1, #2, #5, #6"
formatTeeth(["EUR", "DUR"], "individual"); // "EUR, DUR"
```

<br/>

#### function : isFdiTooth / isUniversalTooth / isPalmerTooth

Checks whether a value is a real tooth. Placeholders return `false`.

```ts
import { isFdiTooth, isPalmerTooth, isUniversalTooth } from "dental-notation";

isFdiTooth(18); // true
isFdiTooth(58); // false (placeholder)
isUniversalTooth("1"); // true
isPalmerTooth("8UR"); // true
```

<br/>

#### function : getToothSlots

Returns 32 slots in chart order (upper-right, upper-left, lower-right, lower-left) for building a dental chart.  
Permanent and deciduous slots share the same `quadrant` and `slot` positions.

```ts
import { getToothSlots } from "dental-notation";

const slots = getToothSlots("fdi", "deciduous");

slots[0]; // { quadrant: "upper-right", slot: 1, kind: "placeholder", tooth: null, placeholder: 58 }
slots[3]; // { quadrant: "upper-right", slot: 4, kind: "tooth", tooth: 55 }
```
