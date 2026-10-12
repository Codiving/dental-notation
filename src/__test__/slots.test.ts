import { getToothSlots } from "../slots";

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
      { quadrant: "upper-right", slot: 1, kind: "placeholder", tooth: null, placeholder: "A2" },
      { quadrant: "upper-right", slot: 2, kind: "placeholder", tooth: null, placeholder: "A1" },
      { quadrant: "upper-right", slot: 3, kind: "placeholder", tooth: null, placeholder: "A0" }
    ]);
  });

  it("supports Palmer values without treating placeholders as teeth", () => {
    const slots = getToothSlots("palmer", "deciduous");
    const first = slots[0];
    const fourth = slots[3];

    expect(first).toMatchObject({ kind: "placeholder", tooth: null, placeholder: "HUR" });
    expect(fourth).toMatchObject({ kind: "tooth", tooth: "EUR" });
  });
});
