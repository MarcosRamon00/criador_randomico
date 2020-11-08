 //init cria objetos iniciais
 generateCharacter();
 generateGame();
 generatePet();
 generateWeapon();
 generateFood();
 generateHero_journey();


 //mostra o total de possiveis combinacoes
 showPossibilitiesCharacters();
 showPossibilitiesGames();
 showPossibilitiesPets();
 showPossibilitiesWeapons();
 showPossibilitiesFoods();
 showPossibilitiesHero_journey();

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
     document.getElementById("numberPossibilitiesCharacteres").innerHTML = utils.abbreviationOfPossibilities(character.getNumberPossibilities());
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
     document.getElementById("numberPossibilitiesGames").innerHTML = utils.abbreviationOfPossibilities(game.getNumberPossibilities());
 }
 //pet
 function generatePet(){
     pet.generate();
     document.getElementById("pet_species").innerHTML = pet.species;
     document.getElementById("pet_age").innerHTML = pet.age;
     document.getElementById("pet_behavior").innerHTML = pet.behavior;
 }
 function showPossibilitiesPets(){
    document.getElementById("numberPossibilitiesPets").innerHTML = utils.abbreviationOfPossibilities(pet.getNumberPossibilities());
}
 //weapon
 function generateWeapon(){
     weapon.generate();
     document.getElementById("weapon_weapon").innerHTML = weapon.weapon;
     document.getElementById("weapon_condition").innerHTML = weapon.condition;
     document.getElementById("weapon_style").innerHTML = weapon.style;
 }
 function showPossibilitiesWeapons(){
    document.getElementById("numberPossibilitiesWeapons").innerHTML = utils.abbreviationOfPossibilities(weapon.getNumberPossibilities());
}

//food
function generateFood(){
    food.generate();
    document.getElementById("food_type").innerHTML = food.type;
    document.getElementById("food_main_ingredient").innerHTML = food.main_ingredient;
    document.getElementById("food_condition").innerHTML = food.condition;
    document.getElementById("food_plus").innerHTML = food.plus;
}
function showPossibilitiesFoods(){
   document.getElementById("numberPossibilitiesFoods").innerHTML = utils.abbreviationOfPossibilities(food.getNumberPossibilities());
}

// hero journey
function generateHero_journey(){
    hero_journey.generate();
    document.getElementById("hero_journey_ordinary_world").innerHTML = hero_journey.ordinary_world;
    document.getElementById("hero_journey_call_to_adventure").innerHTML = hero_journey.call_to_adventure;
    document.getElementById("hero_journey_refusal_of_the_call").innerHTML = hero_journey.refusal_of_the_call;
    document.getElementById("hero_journey_meeting_with_the_mentor").innerHTML = hero_journey.meeting_with_the_mentor;
    document.getElementById("hero_journey_the_first_threshold").innerHTML = hero_journey.crossing_the_first_threshold;
    document.getElementById("hero_journey_tests_allies_and_enemies").innerHTML = hero_journey.tests_allies_and_enemies;
    document.getElementById("hero_journey_approach_to_the_inmost_cave").innerHTML = hero_journey.approach_to_the_inmost_cave;
    document.getElementById("hero_journey_the_ordeal").innerHTML = hero_journey.the_ordeal;
    document.getElementById("hero_journey_reward").innerHTML = hero_journey.reward;
    document.getElementById("hero_journey_the_road_back").innerHTML = hero_journey.the_road_back;
    document.getElementById("hero_journey_the_resurrection").innerHTML = hero_journey.the_resurrection;
    document.getElementById("hero_journey_return_with_the_elixir").innerHTML = hero_journey.return_with_the_elixir;
}
function showPossibilitiesHero_journey(){
    document.getElementById("numberPossibilitiesHero_journey").innerHTML = utils.abbreviationOfPossibilities(hero_journey.getNumberPossibilities());
}