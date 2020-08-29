// NOTE: Still determining whether to use vanilla mongodb or mongoose. Will update resolver when decided.
export default {
    Query: {
        spell: async (parent, { name }, { db } ) => {
            const spell = await db.find({ name })
            return spell
        },
    }
};
