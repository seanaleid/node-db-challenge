
exports.seed = function(knex) {
  return knex('tasks').insert([
    {t_description: 'task description 1', t_notes: 'task notes 1', isCompleted: false, project_id: 1}, // 1
    {t_description: 'task description 2', t_notes: 'task notes 2', isCompleted: true, project_id: 2}, // 2
    {t_description: 'task description 3', t_notes: 'task notes 3', isCompleted: false, project_id: 3}, // 3 
  ]);
};
