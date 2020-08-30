
// Returns each collection object in the db with name reference for ease of use.
// eg: { doc1: <Connection Obj 1>, doc2: <Connection Obj 2>}
export async function collectByNamespace(connection) {
    const db = {};
    const collections = await connection.collections()
    collections.forEach(doc => db[doc.namespace.split('.')[1]] = doc);
    return db
};
