 //init cria objetos iniciais
 gerarPersonagem();
 gerarJogo();
 gerarPet();
 gerarArma();
 
 //personagem
 function gerarPersonagem(){//gerar personagem
     personagem.gerar();//gera personagem
     document.getElementById("raca").innerHTML = personagem.raca;
     document.getElementById("classe").innerHTML = personagem.classe;
     document.getElementById("qualidade").innerHTML = personagem.qualidade;
     document.getElementById("defeito").innerHTML = personagem.defeito;
     document.getElementById("motivacao").innerHTML = personagem.motivacao;
 }
 //jogo
 function gerarJogo(){//gerar jogo
     jogo.gerar();//gera jogo
     document.getElementById("estilo").innerHTML = jogo.estilo;
     document.getElementById("graficos").innerHTML = jogo.graficos;
     document.getElementById("tema").innerHTML = jogo.tema;
     document.getElementById("jogabilidade").innerHTML = jogo.jogabilidade;
 }
 //pet
 function gerarPet(){
     pet.gerar();
     document.getElementById("especie").innerHTML = pet.especie;
     document.getElementById("idade").innerHTML = pet.idade;
     document.getElementById("pet_comportamento").innerHTML = pet.comportamento;
 }
 //arma
 function gerarArma(){
     arma.gerar();
     document.getElementById("arma").innerHTML = arma.arma;
     document.getElementById("condicao").innerHTML = arma.condicao;
     document.getElementById("arma_estilo").innerHTML = arma.estilo;
 }