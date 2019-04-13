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


    function setRaca(){
        let lista_raca = ["humano","fera","demonio","anjo","ciborgue","robo","espirito","humano-réptil"]; 
        let escolha = Math.round(Math.random() * (lista_raca.length - 1));
        return lista_raca[escolha];
    }

    function setClasse(){
        let lista_classe = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor",
    "medico(a)","sabio(a)","soldado(a)"];
        let escolha = Math.round(Math.random() * (lista_classe.length - 1));
        return lista_classe[escolha];
    }

    function setQualidade(){
        let lista_qualidade = ["sorte","força","inteligencia","resistencia","beleza","carisma"];
        let escolha = Math.round(Math.random() * (lista_qualidade.length - 1));
        return lista_qualidade[escolha];
    }

    function setDefeito(){
        let lista_defeito = ["azar","fraqueza fisica","ignorancia","feiura","bruto"];
        let escolha = Math.round(Math.random() * (lista_defeito.length - 1));
        return lista_defeito[escolha];
    }
}