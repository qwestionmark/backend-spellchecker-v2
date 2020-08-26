// NOTE: Still determining whether to use vanilla mongodb or mongoose. Will update resolver when decided.
export default {
    Query: {
        spell: (parent, { id }, { models: { Spell } } ) => {
            return Spell.findById(id);
        },
    }
};
