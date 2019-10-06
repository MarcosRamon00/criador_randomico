const arma = {
    arma :'',
    condicao :'',
    estilo:'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setArma:function(){
        let lista_armas = ["arma laser","galinha de borracha","machado","lança","espada","escudo"];
        return lista_armas[this.escolherCaracteristica(lista_armas)];
    },
    setCondicao:function(){
        let lista_condicoes = ["amaldiçoado","abençoado","velho","novo"];
        return lista_condicoes[this.escolherCaracteristica(lista_condicoes)];
    },
    setEstilo:function(){
        let lista_estilos = ["medieval","viking","futurista","cyberpunk"];
        return lista_estilos[this.escolherCaracteristica(lista_estilos)];
    },
    gerar:function(){
        this.arma = this.setArma();
        this.condicao = this.setCondicao();
        this.estilo = this.setEstilo();
    }
}
