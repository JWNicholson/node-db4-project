exports.seed = function(knex) {
  // Inserts seed entries
  return knex('steps').insert([
    {id: 1, recipe_id: '1', step_number: '1', instructions: 'smash the potatoes'},
    {id: 2, recipe_id: '1', step_number: '2', instructions: 'season to taste'},
    {id: 3, recipe_id: '1', step_number: '3', instructions: 'spread onto bread slice(s)'},
    {id: 4, recipe_id: '1', step_number: '4', instructions: 'wait 15 minutes'},
    {id: 5, recipe_id: '1', step_number: '5', instructions: 'add butter'}
  ]);
};
