exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("champions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("champions").insert([
        { id: 1, name: "Volibear", age: "12" },
        { id: 2, name: "Illaoi", age: "18" },
        { id: 3, name: "Lucian", age: "25" },
      ]);
    });
};
