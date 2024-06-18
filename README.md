# Dental Notation

<br/>

## What is Dental Notation package

**This package facilitates easy manipulation** of commonly used dental notation methods in dentistry.  
The package covers a **total of three dental notations**.  
Dental notation are FDI, Universal and Palmer.

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

#### function : convertTooth

A function to convert between dental notation types: `FDI`, `Universal`, and `Palmer`, for tooth numbering.

```
import { convertTooth } from "dental-notation"

const fdi: FdiTeeth[] = [18, 17];
const universal: UniversalTeeth[] = ["1", "2"];
const palmer: PalmerTeeth[] = ["EUR", "DUR"];

const fdiToUniveral = convertTeeth(fdi, "universal");
const universalToPalmer = convertTeeth(universal, "palmer");
const palmerToFdi = convertTeeth(palmer, "fdi");

console.log("fdiToUniveral  : ", fdiToUniveral); // ['1', '2']
console.log("universalToPalmer  : ", universalToPalmer); // ['8UR', '7UR']
console.log("palmerToFdi  : ", palmerToFdi); // [55, 54]
```

<br/>

#### function : getTeethString

When inputting FDI, Universal, or Palmer tooth, the tool performs string conversion.

- **Range** : Displays only the first and last teeth in a continuous sequence.
- **Individual** : Shows all teeth individually.

```
import { getTeethString } from "dental-notation"

const fdi: FdiTeeth[] = [18, 17, 15];
const universal: UniversalTeeth[] = ["1", "2", "5", "6"];
const palmer: PalmerTeeth[] = ["EUR", "DUR"];

const fdiRange = getTeethString(fdi);
const universalRange = getTeethString(universal);
const palmerRange = getTeethString(palmer);

console.log("fdiRange  : ", fdiRange); // #18-17, #15
console.log("universalRange  : ", universalRange); // #1-2, #5-6
console.log("palmerRange  : ", palmerRange); // EUR-DUR

const fdiIndividual = getTeethString(fdi, "individual");
const universalIndividual = getTeethString(universal, "individual");
const palmerIndividual = getTeethString(palmer, "individual");

console.log("fdiIndividual  : ", fdiIndividual); // #18, #17, #15
console.log("universalIndividual  : ", universalIndividual); // #1, #2, #5, #6
console.log("palmerIndividual  : ", palmerIndividual); // EUR, DUR
```
