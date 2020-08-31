import { gql } from 'apollo-server-express';
// import abilityScores from './ability-scores';
// import classes from './classes';
// import conditions from './conditions';
// import damageTypes from './damage-types';
// import equipment from './equipment';
// import equipmentCategories from './equipment-categories';
// import features from './features';
// import languages from './languages';
// import levels from './levels';
// import magicSchools from './magic-schools';
// import monsters from './monsters';
// import proficiencies from './proficiencies';
// import races from './races';
// import skills from './skills';
import spells from './spells';
// import spellcasting from './spellcasting';
// import startingEquipment from './starting-equipment';
// import subclasses from './subclasses';
// import subraces from './subraces';
// import traits from './traits';
// import weaponProperties from './weapon-properties';
 
const linkSchema = gql`
  type Query {
    _: Boolean
    test: String!
  }
 
  type Mutation {
    _: Boolean
  }
 
  type Subscription {
    _: Boolean
  }
`;
 
// export default [linkSchema, abilityScores, classes, conditions, damageTypes, equipment, equipmentCategories, features, 
// languages, levels, magicSchools, monsters, proficiencies, races, skills, spells, spellcasting, startingEquipment,
// subclasses, subraces, traits, weaponProperties];

export default [linkSchema, spells]