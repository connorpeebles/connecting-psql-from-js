const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const printPeopleByFirstName = require("./print_people");

function selectPeopleByFirstName(name, callback) {

  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }

    client.query("SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text", [name], (err, result) => {
      if (err) {
        return console.error("Error running query", err);
      }

      printPeopleByFirstName(name, result.rows);
      client.end();
    });
  });
}

selectPeopleByFirstName(process.argv[2], printPeopleByFirstName);