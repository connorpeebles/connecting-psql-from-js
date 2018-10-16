const printPeopleByFirstName = (name, arr) => {
  console.log("Searching...");
  console.log(`Found ${arr.length} person(s) by the name '${name}':`);

  for (let i = 0; i < arr.length; i++) {
    const year = String(arr[i].birthdate.getFullYear());
    let month = String(arr[i].birthdate.getMonth() + 1);
    if (month.length === 1) month = "0" + month;
    let day = String(arr[i].birthdate.getDate());
    if (day.length === 1) day = "0" + day;
    const date = year + "-" + month + "-" + day;

    console.log(`- ${i+1}: ${arr[i].first_name} ${arr[i].last_name}, born '${date}'`);
  }
};

module.exports = printPeopleByFirstName;