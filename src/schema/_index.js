import { gql } from 'apollo-server-express';

import abilityScores from './5e_database/abilityScores';
import classes from './5e_database/classes';
import conditions from './5e_database/conditions';
import damageTypes from './5e_database/damageTypes';
import equipment from './5e_database/equipment';
import equipmentCategories from './5e_database/equipmentCategories';
import features from './5e_database/features';
import languages from './5e_database/languages';
import levels from './5e_database/5e_database/levels';
import magicSchools from './5e_database/magicSchools';
import monsters from './5e_database/monsters';
import proficiencies from './5e_database/proficiencies';
import races from './5e_database/races';
import skills from './5e_database/skills';
import spells from './5e_database/spells';
import spellcasting from './5e_database/spellcasting';
import startingEquipment from './5e_database/startingEquipment';
import subclasses from './5e_database/subclasses';
import subraces from './5e_database/subraces';
import traits from './5e_database/traits';
import weaponProperties from './5e_database/weaponProperties';
 
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
 
export default [linkSchema, abilityScores, classes, conditions, damageTypes, equipment, equipmentCategories, features, 
languages, levels, magicSchools, monsters, proficiencies, races, skills, spells, spellcasting, startingEquipment,
subclasses, subraces, traits, weaponProperties];
