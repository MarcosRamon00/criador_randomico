const pet = {
    especie :'',
    idade :'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setEspecie:function(){
        let lista_especies = ["gato","cachorro","rato","coruja","cobra","galinha"];
        return lista_especies[this.escolherCaracteristica(lista_especies)];
    },
    setIdade:function(){
        let lista_idades = ["filhote","adulto","idoso"];
        return lista_idades[this.escolherCaracteristica(lista_idades)];
    },

    gerar:function(){
        this.especie = this.setEspecie();
        this.idade = this.setIdade();
    }
}
