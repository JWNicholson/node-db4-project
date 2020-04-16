
exports.seed = function(knex) {
 
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'mash potatoes'},
        {id: 2, recipe_name: 'pb & j'},
        {id: 3, recipe_name: 'chops & beans'}
      ]);
    
};
