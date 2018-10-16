const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client: "pg",
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});

function addFamousPerson(firstName, lastName, birthDate) {

  knex("famous_people")
  .insert({first_name: firstName, last_name: lastName, birthdate: birthDate})
  .finally(() => knex.destroy());
}

addFamousPerson(process.argv[2], process.argv[3], process.argv[4]);