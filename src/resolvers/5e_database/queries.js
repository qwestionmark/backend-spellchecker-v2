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

export default {
    Query: {
        spell: async (_, args, { db } ) => {
            return await db.spells.findOne(args);
        },
        spells: async (_, __, { db } ) => {
            return await db.spells.find().toArray();
        },
    }
}
