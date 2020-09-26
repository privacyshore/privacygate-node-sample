// https://github.com/louischatriot/nedb
// https://github.com/bajankristof/nedb-promises
import Datastore from 'nedb-promises'

let datastore = Datastore.create({ filename: 'local.db', autoload: true })
datastore.persistence.setAutocompactionInterval(500)

export default datastore