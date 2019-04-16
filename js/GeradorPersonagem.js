function Personagem(){
    var raca;
    var classe;
    var qualidade;
    var defeito;

    this.setRaca = setRaca;
    this.setClasse = setClasse;
    this.setQualidade = setQualidade;
    this.setDefeito = setDefeito;

    this.raca = this.setRaca();
    this.classe = this.setClasse();
    this.qualidade = this.setQualidade();
    this.defeito = this.setDefeito();


    function escolherCaracteristica(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    }

    function setRaca(){
        let lista_raca = ["humano","fera","demonio","anjo","ciborgue","robo","espirito","humano-réptil"]; 
        //let escolha = Math.round(Math.random() * (lista_raca.length - 1));
        //return lista_raca[escolha];
        return lista_raca[escolherCaracteristica(lista_raca)];
    }

    function setClasse(){
        let lista_classe = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor",
    "medico(a)","sabio(a)","soldado(a)"];
        //let escolha = Math.round(Math.random() * (lista_classe.length - 1));
        //return lista_classe[escolha];
        return lista_classe[escolherCaracteristica(lista_classe)];
    }

    function setQualidade(){
        let lista_qualidade = ["sorte","força","inteligencia","resistencia","beleza","carisma"];
       // let escolha = Math.round(Math.random() * (lista_qualidade.length - 1));
        //return lista_qualidade[escolha];
        return lista_qualidade[escolherCaracteristica(lista_qualidade)];
    }

    function setDefeito(){
        let lista_defeito = ["azar","fraqueza fisica","ignorancia","feiura","bruto"];
        //let escolha = Math.round(Math.random() * (lista_defeito.length - 1));
        //return lista_defeito[escolha];
        return lista_defeito[escolherCaracteristica(lista_defeito)];
    }
}