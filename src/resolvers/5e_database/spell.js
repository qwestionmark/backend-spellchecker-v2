const ordinalNumbers = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "eighth",
  9: "ninth",
};

export default {
  Spell: {
    damage_at_slot_level: (parent) => {
      const slots = parent.damage.damage_at_slot_level;
      console.log(Object.keys(parent));
      if (!slots) return null;
      const formattedSlots = {};
      Object.keys(slots).forEach(
        (key) => (formattedSlots[ordinalNumbers[key]] = slots[key])
      );
      return formattedSlots;
    },
  },
};
