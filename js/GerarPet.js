const pet = {
    especie :'',

    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setEspecie:function(){
        let lista_especies = ["gato","cachorro","rato","coruja","cobra","galinha"];
        return lista_especies[this.escolherCaracteristica(lista_especies)];
    },

    gerar:function(){
        this.especie = this.setEspecie();
    }
}
