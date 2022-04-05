const mongoose = require('mongoose');
const {db} = require('../configuration')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db);
}