exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipes_ingredients').insert([
    {id: 1, recipe_id: 2, ingredient_id: 5, ingredient_quantity: '1 cups'},
    {id: 2, recipe_id: 2, ingredient_id: 3, ingredient_quantity: '2 cup'},
    {id: 3, recipe_id: 2, ingredient_id: 2, ingredient_quantity: '2 tsp'}
  ]);
};