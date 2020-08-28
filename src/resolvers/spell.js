// NOTE: Still determining whether to use vanilla mongodb or mongoose. Will update resolver when decided.
export default {
    Query: {
        spell: async (parent, { name }, { models: { Spell } } ) => {
            const spell = await Spell.find({ name })
            console.log(spell)
            return spell
        },
    }
};
