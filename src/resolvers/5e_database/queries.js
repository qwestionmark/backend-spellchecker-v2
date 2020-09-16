export default {
  Query: {
    abilityScore: async (_, args, { db }) => {
      return await db["ability-scores"].findOne(args);
    },
    abilityScores: async (_, __, { db }) => {
      return await db["ability-scores"].find().toArray();
    },
    class: async (_, args, { db }) => {
      return await db.classs.findOne(args);
    },
    classs: async (_, __, { db }) => {
      return await db.classs.find().toArray();
    },
    condition: async (_, args, { db }) => {
      return await db.conditions.findOne(args);
    },
    conditions: async (_, __, { db }) => {
      return await db.conditions.find().toArray();
    },
    damageType: async (_, args, { db }) => {
      return await db["damage-types"].findOne(args);
    },
    damageTypes: async (_, __, { db }) => {
      return await db["damage-types"].find().toArray();
    },
    equipment: async (_, args, { db }) => {
      return await db.equipment.findOne(args);
    },
    equipments: async (_, __, { db }) => {
      return await db.equipment.find().toArray();
    },
    equipmentCategory: async (_, args, { db }) => {
      return await db["equipment-categories"].findOne(args);
    },
    equipmentCategories: async (_, __, { db }) => {
      return await db["equipment-categories"].find().toArray();
    },
    feature: async (_, args, { db }) => {
      return await db.features.findOne(args);
    },
    features: async (_, __, { db }) => {
      return await db.features.find().toArray();
    },
    language: async (_, args, { db }) => {
      return await db.languages.findOne(args);
    },
    languages: async (_, __, { db }) => {
      return await db.languages.find().toArray();
    },
    level: async (_, args, { db }) => {
      return await db.levels.findOne(args);
    },
    levels: async (_, __, { db }) => {
      return await db.levels.find().toArray();
    },
    magicSchool: async (_, args, { db }) => {
      return await db["magic-schools"].findOne(args);
    },
    magicSchools: async (_, __, { db }) => {
      return await db["magic-schools"].find().toArray();
    },
    monster: async (_, args, { db }) => {
      return await db.monsters.findOne(args);
    },
    monsters: async (_, __, { db }) => {
      return await db.monsters.find().toArray();
    },
    proficiency: async (_, args, { db }) => {
      return await db.proficiencies.findOne(args);
    },
    proficiencies: async (_, __, { db }) => {
      return await db.proficiencies.find().toArray();
    },
    race: async (_, args, { db }) => {
      return await db.races.findOne(args);
    },
    races: async (_, __, { db }) => {
      return await db.races.find().toArray();
    },
    skill: async (_, args, { db }) => {
      return await db.skills.findOne(args);
    },
    skills: async (_, __, { db }) => {
      return await db.skills.find().toArray();
    },
    spellcasting: async (_, args, { db }) => {
      return await db.spellcasting.findOne(args);
    },
    spellcastings: async (_, __, { db }) => {
      return await db.spellcasting.find().toArray();
    },
    spell: async (_, args, { db }) => {
      return await db.spells.findOne(args);
    },
    spells: async (_, __, { db }) => {
      return await db.spells.find().toArray();
    },
    startingEquipment: async (_, args, { db }) => {
      return await db.startingequipment.findOne(args);
    },
    startingEquipments: async (_, __, { db }) => {
      return await db.startingequipment.find().toArray();
    },
    subclass: async (_, args, { db }) => {
      return await db.subclass.findOne(args);
    },
    subclasses: async (_, __, { db }) => {
      return await db.subclass.find().toArray();
    },
    subrace: async (_, args, { db }) => {
      return await db.subraces.findOne(args);
    },
    subraces: async (_, __, { db }) => {
      return await db.subraces.find().toArray();
    },
    trait: async (_, args, { db }) => {
      return await db.traits.findOne(args);
    },
    traits: async (_, __, { db }) => {
      return await db.traits.find().toArray();
    },
    weaponProperty: async (_, args, { db }) => {
      return await db["weapon-properties"].findOne(args);
    },
    weaponProperties: async (_, __, { db }) => {
      return await db["weapon-properties"].find().toArray();
    },
  },
};

// import _ from 'lodash'
// The 5e-database queries aren't unique and the db should be read-only.
// programmatically creates search obj by all attributes.
// NOTE: This query resolver generator breaks due to incorrect plural/singular-ization of query name
// export function fifthEditionQueries(namespaces) {
//     const query = { Query: { } };
//     namespaces.forEach(collection => {
//         query.Query[collection] = async (parent, args, { db } ) => {
//             return await db[collection].findOne(args)
//         }
//     })
//     return query
// };
