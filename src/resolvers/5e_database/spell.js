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
    damageAtSlotLevel: (parent) => {
      const slots = parent.damage.damage_at_slot_level;
      if (!slots) return null;
      const formattedSlots = {};
      Object.keys(slots).forEach(
        (key) => (formattedSlots[ordinalNumbers[key]] = slots[key])
      );
      return formattedSlots;
    },
    // Single description string are contained within array
    desc: (parent) => parent.desc[0],
    damageType: (parent) => parent.damage.damage_type.name,
    school: (parent) => parent.school.name,
    classes: (parent) => parent.classes.map((klass) => klass.name),
    subclasses: (parent) => parent.subclasses.map((klass) => klass.name),
  },
};
