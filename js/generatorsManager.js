 //init cria objetos iniciais
 generateCharacter();
 generateGame();
 generatePet();
 generateWeapon();
 
 //character
 function generateCharacter(){//gerar character
     character.generate();//gera character
     document.getElementById("character_breed").innerHTML = character.breed;
     document.getElementById("character_class").innerHTML = character.class;
     document.getElementById("character_quality").innerHTML = character.quality;
     document.getElementById("character_defect").innerHTML = character.defect;
     document.getElementById("character_motivation").innerHTML = character.motivation;
 }
 //game
 function generateGame(){//gerar game
     game.generate();//gera game
     document.getElementById("game_style").innerHTML = game.style;
     document.getElementById("game_grafics").innerHTML = game.grafics;
     document.getElementById("game_theme").innerHTML = game.theme;
     document.getElementById("game_gameplay").innerHTML = game.gameplay;
 }
 //pet
 function generatePet(){
     pet.generate();
     document.getElementById("pet_species").innerHTML = pet.species;
     document.getElementById("pet_age").innerHTML = pet.age;
     document.getElementById("pet_behavior").innerHTML = pet.behavior;
 }
 //weapon
 function generateWeapon(){
     weapon.generate();
     document.getElementById("weapon_weapon").innerHTML = weapon.weapon;
     document.getElementById("weapon_condition").innerHTML = weapon.condition;
     document.getElementById("weapon_style").innerHTML = weapon.style;
 }