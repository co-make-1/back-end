
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {issueId: 1, name: "Amane", bio: 'Artist for the original castlevania games'},
        {issueId: 2, name: "Alucard", bio: 'Got kinda not as cool in the Netflix series'},
        {issueId: 3, name: "Quistis", bio: 'Wakes Squall up from his comma at the start of the best game ever created'}
      ]);
    });
};
