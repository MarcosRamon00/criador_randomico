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
        let lista_racas = ["humano","fera","demônio","anjo","ciborgue","robô","espírito","humano-peixe","humano-passáro","humano-réptil","meio elemental","elemental","elemental do fogo","elemental da água","elemental das plantas","elemental do ar","elemental da terra","elemental do raio","elemental de gelo","elemental da luz","elemental da sombra","mutante","alienigina","fada","ogro","anão(a)","golem"];
        return lista_racas[this.escolherCaracteristica(lista_racas)];
    },

    setClasse:function(){
        let lista_classes = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor(a)",
    "médico(a)","sábio(a)","ferreiro(a)","bardo","caçador(a)","bruxo(a)","alquimista","lutador(a) de boxe","judoca","caçador(a) de recompensas","arqueiro(a)","lanceiro(a)","necromante","contador(a)"];
        return lista_classes[this.escolherCaracteristica(lista_classes)];
    },

    setQualidade:function(){
        let lista_qualidades = ["fofura","sorte","força","inteligência","resistência","beleza","carisma","esperteza","ágil","corajoso(a)"];
        return lista_qualidades[this.escolherCaracteristica(lista_qualidades)];
    },

    setDefeito:function(){
        let lista_defeitos = ["azar","fraqueza física","ignorância","feiura","bruto","chatice","irritante","covarde"];
        return lista_defeitos[this.escolherCaracteristica(lista_defeitos)];
    },

    setMotivacao:function(){
        let lista_motivacoes = ["vingança","tédio","amor","honra","ódio","dinheiro","poder","em busca de paz interior","salvar seu povo","salvar sua família"];
        return lista_motivacoes[this.escolherCaracteristica(lista_motivacoes)];
    },
    
    gerar:function(){
        this.raca = this.setRaca();
        this.classe = this.setClasse();
        this.qualidade = this.setQualidade();
        this.defeito = this.setDefeito();
        this.motivacao = this.setMotivacao();
    }
}
