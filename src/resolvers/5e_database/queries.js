
// The 5e-database queries aren't unique and the db should be read-only. 
// programmatically creates search obj by all attributes.
export function fifthEditionQueries(namespaces) {
    const query = { Query: { } };
    namespaces.forEach(collection => {
        query.Query[collection] = async (parent, args, { db } ) => {
            return await db[collection].findOne(args)
        }
    })
    return query
};
