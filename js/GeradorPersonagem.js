const personagem = {
    raca :'',
    classe:'',
    qualidade:'',
    defeito:'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setRaca:function(){
        let lista_raca = ["humano","fera","demonio","anjo","ciborgue","robo","espírito","humano-peixe","humano-passáro","humano-réptil","meio elemental","elemental","elemental do fogo","elemental da água","elemental das plantas","elemental do ar","elemental da terra","elemental do raio","elemental de gelo","elemental da luz","elemental da sombra","mutante","alienigina","fada","ogro","anão(a)","golem"];
        return lista_raca[this.escolherCaracteristica(lista_raca)];
    },

    setClasse:function(){
        let lista_classe = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor(a)",
    "médico(a)","sábio(a)","ferreiro(a)","bardo","caçador(a)","bruxo(a)","alquimista","lutador(a) de box","judoka","caçador(a) de recompensas","arqueiro(a)","lanceiro(a)","necromante","contador(a)"];
        return lista_classe[this.escolherCaracteristica(lista_classe)];
    },

    setQualidade:function(){
        let lista_qualidade = ["sorte","força","inteligente","resistente","beleza","carisma","esperteza","agil"];
        return lista_qualidade[this.escolherCaracteristica(lista_qualidade)];
    },

    setDefeito:function(){
        let lista_defeito = ["azar","fraqueza fisica","ignorancia","feiura","bruto"];
        return lista_defeito[this.escolherCaracteristica(lista_defeito)];
    },
    gerar:function(){
        this.raca = this.setRaca();
        this.classe = this.setClasse();
        this.qualidade = this.setQualidade();
        this.defeito = this.setDefeito();
    }
}
