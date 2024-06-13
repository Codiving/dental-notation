# Dental Notation

<br/>

## What is Dental Notation package

**This package facilitates easy manipulation** of commonly used dental notation methods in dentistry.  
The package covers a **total of three dental notations**.  
Dental notation are [**FDI**](#FDI), [**Universal**](#Universal) and [**Palmer**](#Palmer).

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

<br/>

## Dental Notation

### FDI

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Primary upper right teeth</th>
      <th colspan="8">Primary upper left teeth</th>
    </tr>
    <tr>
      <td>18</td><td>17</td><td>16</td><td>15</td><td>14</td><td>13</td><td>12</td><td>11</td>
      <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
    </tr>
    <tr></tr>
    <tr>
      <td>48</td><td>47</td><td>46</td><td>45</td><td>44</td><td>43</td><td>42</td><td>41</td>
      <td>31</td><td>32</td><td>33</td><td>34</td><td>35</td><td>36</td><td>37</td><td>38</td>
    </tr>
    <tr>
      <th colspan="8">Primary lower right teeth</th>
      <th colspan="8">Primary lower left teeth</th>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Baby upper right teeth</th>
      <th colspan="8">Baby upper left teeth</th>
    </tr>
    <tr>
      <td> </td><td> </td><td> </td><td>55</td><td>54</td><td>53</td><td>52</td><td>51</td>
      <td>61</td><td>66</td><td>63</td><td>64</td><td>65</td><td> </td><td> </td><td> </td>
    </tr>
    <tr></tr>
    <tr>
      <td> </td><td> </td><td> </td><td>85</td><td>88</td><td>83</td><td>82</td><td>81</td>
      <td>74</td><td>77</td><td>76</td><td>77</td><td>78</td><td> </td><td> </td><td> </td>
    </tr>
    <tr>
      <th colspan="8">Baby lower right teeth</th>
      <th colspan="8">Baby lower left teeth</th>
    </tr>
  </tbody>
</table>

<br/>
 
### Universal

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Primary upper right teeth</th>
      <th colspan="8">Primary upper left teeth</th>
    </tr>
    <tr>
      <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
      <td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
    </tr>
    <tr></tr>
    <tr>
      <td>32</td><td>31</td><td>30</td><td>29</td><td>28</td><td>27</td><td>26</td><td>25</td>
      <td>24</td><td>23</td><td>22</td><td>21</td><td>20</td><td>19</td><td>18</td><td>17</td>
    </tr>
    <tr>
      <th colspan="8">Primary lower right teeth</th>
      <th colspan="8">Primary lower left teeth</th>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Baby upper right teeth</th>
      <th colspan="8">Baby upper left teeth</th>
    </tr>
    <tr>
      <td> </td><td> </td><td> </td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td>
      <td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td> </td><td> </td><td> </td>
    </tr>
    <tr></tr>
    <tr>
      <td> </td><td> </td><td> </td><td>T</td><td>S</td><td>R</td><td>Q</td><td>P</td>
      <td>O</td><td>N</td><td>M</td><td>L</td><td>K</td><td> </td><td> </td><td> </td>
    </tr>
    <tr>
      <th colspan="8">Baby lower right teeth</th>
      <th colspan="8">Baby lower left teeth</th>
    </tr>
  </tbody>
</table>

<br/>

### Palmer

#### Text

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Primary upper right teeth</th>
      <th colspan="8">Primary upper left teeth</th>
    </tr>
    <tr>
      <td>8UR</td><td>7UR</td><td>6UR</td><td>5UR</td><td>4UR</td><td>3UR</td><td>2UR</td><td>1UR</td>
      <td>1UL</td><td>2UL</td><td>3UL</td><td>4UL</td><td>5UL</td><td>6UL</td><td>7UL</td><td>8UL</td>
    </tr>
    <tr></tr>
    <tr>
      <td>8LR</td><td>7LR</td><td>6LR</td><td>5LR</td><td>4LR</td><td>3LR</td><td>2LR</td><td>1LR</td>
      <td>1LL</td><td>2LL</td><td>3LL</td><td>4LL</td><td>5LL</td><td>6LL</td><td>7LL</td><td>8LL</td>
    </tr>
    <tr>
      <th colspan="8">Primary lower right teeth</th>
      <th colspan="8">Primary lower left teeth</th>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Baby upper right teeth</th>
      <th colspan="8">Baby upper left teeth</th>
    </tr>
      <tr>
      <td> </td><td> </td><td> </td><td>EUR</td><td>DUR</td><td>CUR</td><td>BUR</td><td>AUR</td>
      <td>AUL</td><td>BUL</td><td>CUL</td><td>DUL</td><td>EUL</td><td> </td><td> </td><td> </td>
    </tr>
    <tr></tr>
    <tr>
   <td> </td><td> </td><td> </td><td>ELR</td><td>DLR</td><td>CLR</td><td>BLR</td><td>ALR</td>
      <td>ALL</td><td>BLL</td><td>CLL</td><td>DLL</td><td>ELL</td><td> </td><td> </td><td> </td>
    </tr>
    <tr>
      <th colspan="8">Baby lower right teeth</th>
      <th colspan="8">Baby lower left teeth</th>
    </tr>
  </tbody>
</table>

#### Symbol

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Primary upper right teeth</th>
      <th colspan="8">Primary upper left teeth</th>
    </tr>
    <tr>
      <td>8⏌</td><td>7⏌</td><td>6⏌</td><td>5⏌</td><td>4⏌</td><td>3⏌</td><td>2⏌</td><td>1⏌</td>
      <td>⎿1</td><td>⎿2</td><td>⎿3</td><td>⎿4</td><td>⎿5</td><td>⎿6</td><td>⎿7</td><td>⎿8</td>
    </tr>
    <tr></tr>
    <tr>
      <td>8⏋</td><td>7⏋</td><td>6⏋</td><td>5⏋</td><td>4⏋</td><td>3⏋</td><td>2⏋</td><td>1⏋</td>
      <td>⎾1</td><td>⎾2</td><td>⎾3</td><td>⎾4</td><td>⎾5</td><td>⎾6</td><td>⎾7</td><td>⎾8</td>
    </tr>
    <tr>
      <th colspan="8">Primary lower right teeth</th>
      <th colspan="8">Primary lower left teeth</th>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr></tr>
    <tr>
      <th colspan="8">Baby upper right teeth</th>
      <th colspan="8">Baby upper left teeth</th>
    </tr>
      <tr>
      <td> </td><td> </td><td> </td><td>E⏌</td><td>D⏌</td><td>C⏌</td><td>B⏌</td><td>A⏌</td>
      <td>⎿A</td><td>⎿B</td><td>⎿C</td><td>⎿D</td><td>⎿E</td><td> </td><td> </td><td> </td>
    </tr>
    <tr></tr>
    <tr>
   <td> </td><td> </td><td> </td><td>E⏋</td><td>D⏋</td><td>C⏋</td><td>B⏋</td><td>A⏋</td>
      <td>⎾A</td><td>⎾B</td><td>⎾C</td><td>⎾D</td><td>⎾E</td><td> </td><td> </td><td> </td>
    </tr>
    <tr>
      <th colspan="8">Baby lower right teeth</th>
      <th colspan="8">Baby lower left teeth</th>
    </tr>
  </tbody>
</table>
