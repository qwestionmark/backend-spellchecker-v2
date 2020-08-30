export default {
    Query: {
        spell: async (parent, { name }, { db } ) => {
            const spell = await db.find({ name })
            return spell
        },
    }
};
