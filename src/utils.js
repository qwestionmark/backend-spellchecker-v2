
// Returns each collection object in the db with name reference to 
// replace db.collection(<name>) with DRY db[name]
// eg: { doc1: <Connection Obj 1>, doc2: <Connection Obj 2>}
export async function collectByNamespace(connection) {
    const db = {};
    // NOTE: Unsure whether these db collection instances could become stale.
    // should research for optimal solution.
    const collections = await connection.collections()
    const namespaces = collections.map(doc => {
        const docName = doc.namespace.split('.')[1]
        db[docName] = doc
        return docName
    });
    return {db, namespaces}
};