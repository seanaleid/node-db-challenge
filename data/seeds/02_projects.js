
exports.seed = function(knex) {
  return knex('projects').insert([
    {p_name: 'project name 1', p_description: 'project description 1', isCompleted: true}, // 1
    {p_name: 'project name 2', p_description: 'project description 2', isCompleted: false}, // 2
    {p_name: 'project name 3', p_description: 'project description 3', isCompleted: true}, // 3
  ]);
};
