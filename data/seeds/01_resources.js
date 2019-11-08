
exports.seed = function(knex) {
  return knex('resources').insert([
    {r_name: 'resource 1 test', r_description: 'resource description 1'}, // 1
    {r_name: 'resource 2 test', r_description: 'resource description 2'}, // 2
    {r_name: 'resource 3 test', r_description: 'resource description 3'}, // 3
  ]);
};
