 //init cria objetos iniciais
 generateCharacter();
 generateGame();
 generatePet();
 generateWeapon();
 
 //personagem
 function generateCharacter(){//gerar personagem
     personagem.gerar();//gera personagem
     document.getElementById("personagem_raca").innerHTML = personagem.raca;
     document.getElementById("personagem_classe").innerHTML = personagem.classe;
     document.getElementById("personagem_qualidade").innerHTML = personagem.qualidade;
     document.getElementById("personagem_defeito").innerHTML = personagem.defeito;
     document.getElementById("personagem_motivacao").innerHTML = personagem.motivacao;
 }
 //jogo
 function generateGame(){//gerar jogo
     jogo.gerar();//gera jogo
     document.getElementById("jogo_estilo").innerHTML = jogo.estilo;
     document.getElementById("jogo_graficos").innerHTML = jogo.graficos;
     document.getElementById("jogo_tema").innerHTML = jogo.tema;
     document.getElementById("jogo_jogabilidade").innerHTML = jogo.jogabilidade;
 }
 //pet
 function generatePet(){
     pet.gerar();
     document.getElementById("pet_especie").innerHTML = pet.especie;
     document.getElementById("pet_idade").innerHTML = pet.idade;
     document.getElementById("pet_comportamento").innerHTML = pet.comportamento;
 }
 //arma
 function generateWeapon(){
     arma.gerar();
     document.getElementById("arma_arma").innerHTML = arma.arma;
     document.getElementById("arma_condicao").innerHTML = arma.condicao;
     document.getElementById("arma_estilo").innerHTML = arma.estilo;
 }