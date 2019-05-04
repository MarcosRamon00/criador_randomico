const personagem = {
    raca :'',
    classe:'',
    qualidade:'',
    defeito:'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setRaca:function(){
        let lista_raca = ["humano","fera","demonio","anjo","ciborgue","robo","espirito","humano-réptil","meio elemental","elemental","mutante","alienigina"];
        return lista_raca[this.escolherCaracteristica(lista_raca)];
    },

    setClasse:function(){
        let lista_classe = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor",
    "medico(a)","sabio(a)","ferreiro","bardo","caçador(a)"];
        return lista_classe[this.escolherCaracteristica(lista_classe)];
    },

    setQualidade:function(){
        let lista_qualidade = ["sorte","força","inteligencia","resistencia","beleza","carisma"];
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
