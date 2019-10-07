 //init cria objetos iniciais
 generateCharacter();
 generateGame();
 generatePet();
 generateWeapon();
 
 //character
 function generateCharacter(){//gerar character
     character.generate();//gera character
     document.getElementById("character_raca").innerHTML = character.breed;
     document.getElementById("character_classe").innerHTML = character.class;
     document.getElementById("character_qualidade").innerHTML = character.quality;
     document.getElementById("character_defeito").innerHTML = character.defect;
     document.getElementById("character_motivacao").innerHTML = character.motivation;
 }
 //game
 function generateGame(){//gerar game
     game.generate();//gera game
     document.getElementById("game_estilo").innerHTML = game.style;
     document.getElementById("game_graficos").innerHTML = game.grafics;
     document.getElementById("game_tema").innerHTML = game.theme;
     document.getElementById("game_jogabilidade").innerHTML = game.gameplay;
 }
 //pet
 function generatePet(){
     pet.generate();
     document.getElementById("pet_especie").innerHTML = pet.species;
     document.getElementById("pet_idade").innerHTML = pet.age;
     document.getElementById("pet_comportamento").innerHTML = pet.behavior;
 }
 //weapon
 function generateWeapon(){
     weapon.generate();
     document.getElementById("weapon_weapon").innerHTML = weapon.weapon;
     document.getElementById("weapon_condicao").innerHTML = weapon.condition;
     document.getElementById("weapon_estilo").innerHTML = weapon.style;
 }