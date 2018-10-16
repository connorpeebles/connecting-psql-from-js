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

const printPeopleByFirstName = require("./print_people");

function selectPeopleByFirstName(name, callback) {

  knex("famous_people")
  .where("first_name", name)
  .orWhere("last_name", name)
  .asCallback((err, rows) => {
    if (err) {
      return console.error("Error running query", err);
    }
    printPeopleByFirstName(name, rows);
  })
  .finally(() => knex.destroy());
}

selectPeopleByFirstName(process.argv[2], printPeopleByFirstName);