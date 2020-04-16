Design the **data model** for a _recipe book_ application

db = recipes

tables
    recipes
        id(PK) recipe_name

    recipe_ingredients - qty measures of each ingredient(3/4 cup, etc)
      id(PK)  ingredient_qty  recipie_id(FK)  ingredient_id(FK)

    ingredients
        id(PK) ingredient_name

        multiple recipies will use some 
        of the same ingredients. This table will
        give each ingredient an id. 
        e.g. egg id =1, milk id = 2


    steps 
        id(PK) step_number description recipe_id(FK)

   
        