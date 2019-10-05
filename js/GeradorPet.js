const pet = {
    especie :'',
    idade :'',
    comportamento:'',

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
    setComportamento:function(){
        let lista_comportamentos = ["brincalhão(ona)","bravo(a)"];
        return lista_comportamentos[this.escolherCaracteristica(lista_comportamentos)];
    },
    gerar:function(){
        this.especie = this.setEspecie();
        this.idade = this.setIdade();
        this.comportamento = this.setComportamento();
    }
}
