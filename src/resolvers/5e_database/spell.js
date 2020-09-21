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

// Apollo-Graphql default resolvers can be used for all non-snakecase, scalar fields.
// Custom resolvers required for all other values.
export default {
  Spell: {
    // Integers as keys in 5e-db not allowed by graphql. Mapping to ordinal numbers instead.
    damageAtSlotLevel: (parent) => {
      const slots = parent.damage.damage_at_slot_level;
      if (!slots) return null;
      const formattedSlots = {};
      Object.keys(slots).forEach(
        (key) => (formattedSlots[ordinalNumbers[key]] = slots[key])
      );
      return formattedSlots;
    },
    //
    desc: (parent) => parent.desc.join(/\n/),
    damageType: (parent) => parent.damage.damage_type.name,
    castingTime: (parent) => parent.casting_time,
    school: (parent) => parent.school.name,
    classes: (parent) => parent.classes.map((klass) => klass.name),
    subclasses: (parent) => parent.subclasses.map((klass) => klass.name),
    higherLevel: (parent) => parent.higher_level.join(/\n/),
    areaOfEffect: (parent) => parent.area_of_effect,
    dc: (parent) => {
      return { ...parent.dc_type.name, ...parent.dc_success };
    },
  },
};
