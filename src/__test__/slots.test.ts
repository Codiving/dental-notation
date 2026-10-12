import { getToothSlots, ToothSlot } from "../slots";
import type { NotationType } from "../types";
import { switchDentition } from "../utils/switchDentition";

const values = <T>(slots: ToothSlot<T>[]): T[] =>
  slots.map(slot => (slot.kind === "tooth" ? slot.tooth : slot.placeholder));

const positions = <T>(slots: ToothSlot<T>[]) =>
  slots.map(({ quadrant, slot }) => `${quadrant}:${slot}`);

describe("getToothSlots", () => {
  it("creates 32 real permanent tooth slots", () => {
    const slots = getToothSlots("fdi", "permanent");

    expect(slots).toHaveLength(32);
    expect(slots.every(slot => slot.kind === "tooth")).toBe(true);
    expect(slots.slice(0, 8).map(slot => slot.tooth)).toEqual([
      18, 17, 16, 15, 14, 13, 12, 11
    ]);
  });

  it("creates 20 real deciduous teeth and 12 placeholders", () => {
    const slots = getToothSlots("universal", "deciduous");

    expect(slots).toHaveLength(32);
    expect(slots.filter(slot => slot.kind === "tooth")).toHaveLength(20);
    expect(slots.filter(slot => slot.kind === "placeholder")).toHaveLength(12);
    expect(slots.slice(0, 3)).toEqual([
      {
        quadrant: "upper-right",
        slot: 1,
        kind: "placeholder",
        tooth: null,
        placeholder: "A2"
      },
      {
        quadrant: "upper-right",
        slot: 2,
        kind: "placeholder",
        tooth: null,
        placeholder: "A1"
      },
      {
        quadrant: "upper-right",
        slot: 3,
        kind: "placeholder",
        tooth: null,
        placeholder: "A0"
      }
    ]);
  });

  it("supports Palmer values without treating placeholders as teeth", () => {
    const slots = getToothSlots("palmer", "deciduous");
    const first = slots[0];
    const fourth = slots[3];

    expect(first).toMatchObject({
      kind: "placeholder",
      tooth: null,
      placeholder: "HUR"
    });
    expect(fourth).toMatchObject({ kind: "tooth", tooth: "EUR" });
  });

  it("keeps permanent and deciduous slots in the same positions", () => {
    const fdi = getToothSlots("fdi", "permanent");
    const universal = getToothSlots("universal", "permanent");
    const palmer = getToothSlots("palmer", "permanent");

    expect(positions(getToothSlots("fdi", "deciduous"))).toEqual(
      positions(fdi)
    );
    expect(switchDentition(values(fdi))).toEqual(
      values(getToothSlots("fdi", "deciduous"))
    );
    expect(switchDentition(values(universal))).toEqual(
      values(getToothSlots("universal", "deciduous"))
    );
    expect(switchDentition(values(palmer))).toEqual(
      values(getToothSlots("palmer", "deciduous"))
    );
  });

  it("accepts a notation chosen at runtime", () => {
    const firstDeciduousSlot = (notation: NotationType) =>
      getToothSlots(notation, "deciduous")[0];

    expect(firstDeciduousSlot("palmer")).toMatchObject({
      kind: "placeholder",
      placeholder: "HUR"
    });
  });
});
