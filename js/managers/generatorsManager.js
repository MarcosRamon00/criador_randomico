 //init cria objetos iniciais
 generateCharacter();
 generateGame();
 generatePet();
 generateWeapon();
 generateFood();


 //mostra o total de possiveis combinacoes
 showPossibilitiesCharacters();
 showPossibilitiesGames();
 showPossibilitiesPets();
 showPossibilitiesWeapons();
 showPossibilitiesFoods();


 //character
 function generateCharacter(){//gerar character
     character.generate();//gera character
     document.getElementById("character_type").innerHTML = character.type;
     document.getElementById("character_class").innerHTML = character.class;
     document.getElementById("character_quality").innerHTML = character.quality;
     document.getElementById("character_defect").innerHTML = character.defect;
     document.getElementById("character_motivation").innerHTML = character.motivation;
 }
 function showPossibilitiesCharacters(){//mostra a quantidade de personagens possiveis
     document.getElementById("numberPossibilitiesCharacteres").innerHTML = character.getNumberPossibilities();
 }

 //game
 function generateGame(){//gerar game
     game.generate();//gera game
     document.getElementById("game_style").innerHTML = game.style;
     document.getElementById("game_grafics").innerHTML = game.grafics;
     document.getElementById("game_theme").innerHTML = game.theme;
     document.getElementById("game_gameplay").innerHTML = game.gameplay;
 }
 function showPossibilitiesGames(){
     document.getElementById("numberPossibilitiesGames").innerHTML = game.getNumberPossibilities();
 }
 //pet
 function generatePet(){
     pet.generate();
     document.getElementById("pet_species").innerHTML = pet.species;
     document.getElementById("pet_age").innerHTML = pet.age;
     document.getElementById("pet_behavior").innerHTML = pet.behavior;
 }
 function showPossibilitiesPets(){
    document.getElementById("numberPossibilitiesPets").innerHTML = pet.getNumberPossibilities();
}
 //weapon
 function generateWeapon(){
     weapon.generate();
     document.getElementById("weapon_weapon").innerHTML = weapon.weapon;
     document.getElementById("weapon_condition").innerHTML = weapon.condition;
     document.getElementById("weapon_style").innerHTML = weapon.style;
 }
 function showPossibilitiesWeapons(){
    document.getElementById("numberPossibilitiesWeapons").innerHTML = weapon.getNumberPossibilities();
}

//food
function generateFood(){
    food.generate();
    document.getElementById("food_type").innerHTML = food.type;
    document.getElementById("food_main_ingredient").innerHTML = food.main_ingredient;
    document.getElementById("food_condition").innerHTML = food.condition;
}
function showPossibilitiesFoods(){
   document.getElementById("numberPossibilitiesFoods").innerHTML = food.getNumberPossibilities();
}
