export default {
    Query: {
        spell: async (parent, { name }, { db } ) => {
            const spell = await db.spells.findOne({ name })
            return spell
        },
    }
};
