const db = require('../data/db-Config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

//return list of all recipes
function getRecipes(){
    return db('recipes');
}

//return list of all ingredients and quantities for recipe
function getShoppingList(recipeID){
    return db.select('i.ingredient_name', 'ri.ingredient_qty')
    .from('ingredients as i')
    .join('recipes_ingredients as ri', 'ri.ingredient_id', 'i.id')
    .where('ri.recipe_id', recipeID);
}

//return list of steps to prepare the recipe
function getInstructions(recipeID){
    return db('steps')
        .where('recipe_id', recipeID);
}