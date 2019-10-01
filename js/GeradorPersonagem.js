const personagem = {
    raca :'',
    classe:'',
    qualidade:'',
    defeito:'',
    motivacao:'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setRaca:function(){
        let lista_raca = ["humano","fera","demonio","anjo","ciborgue","robô","espírito","humano-peixe","humano-passáro","humano-réptil","meio elemental","elemental","elemental do fogo","elemental da água","elemental das plantas","elemental do ar","elemental da terra","elemental do raio","elemental de gelo","elemental da luz","elemental da sombra","mutante","alienigina","fada","ogro","anão(a)","golem"];
        return lista_raca[this.escolherCaracteristica(lista_raca)];
    },

    setClasse:function(){
        let lista_classe = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor(a)",
    "médico(a)","sábio(a)","ferreiro(a)","bardo","caçador(a)","bruxo(a)","alquimista","lutador(a) de box","judoka","caçador(a) de recompensas","arqueiro(a)","lanceiro(a)","necromante","contador(a)"];
        return lista_classe[this.escolherCaracteristica(lista_classe)];
    },

    setQualidade:function(){
        let lista_qualidade = ["fofura","sorte","força","inteligente","resistente","beleza","carisma","esperteza","agil","corajoso(a)"];
        return lista_qualidade[this.escolherCaracteristica(lista_qualidade)];
    },

    setDefeito:function(){
        let lista_defeito = ["azar","fraqueza fisica","ignorancia","feiura","bruto","chatice","irritante","covarde"];
        return lista_defeito[this.escolherCaracteristica(lista_defeito)];
    },

    setMotivacao:function(){
        let lista_motivacao = ["vingança","tédio","amor","honra","ódio","dinheiro","poder","paz","salvar seu povo","salvar sua família"];
        return lista_motivacao[this.escolherCaracteristica(lista_motivacao)];
    },

    gerar:function(){
        this.raca = this.setRaca();
        this.classe = this.setClasse();
        this.qualidade = this.setQualidade();
        this.defeito = this.setDefeito();
        this.motivacao = this.setMotivacao();
    }
}
