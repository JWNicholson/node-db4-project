exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'butter'},
    {id: 2, ingredient_name: 'jelly'},
    {id: 3, ingredient_name: 'peanut butter'},
    {id: 4, ingredient_name: 'pork chops'},
    {id: 5, ingredient_name: 'potatoes'},
    {id: 6, ingredient_name: 'beans'},
    {id: 7, ingredient_name: 'bread'}
    
  ]);
};
