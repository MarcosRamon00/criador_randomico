const character = {
    breed :'',
    class:'',
    quality:'',
    defect:'',
    motivation:'',


    chooseFeature:function(list){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (list.length - 1));
    },

    setBreed:function(){
        let list_breed = ["humano","fera","demônio","anjo","ciborgue","robô","espírito","humano-peixe","humano-passáro","humano-réptil","meio elemental","elemental","elemental do fogo","elemental da água","elemental das plantas","elemental do ar","elemental da terra","elemental do raio","elemental de gelo","elemental da luz","elemental da sombra","mutante","alienigina","fada","ogro","anão(a)","golem","dragão","meio dragão"];
        return list_breed[this.chooseFeature(list_breed)];
    },

    setClass:function(){
        let list_class = ["guerreiro(a)","mago(a)","bruxo(a)","paladino(a)","amazona","cantor(a)",
    "médico(a)","sábio(a)","ferreiro(a)","bardo","caçador(a)","bruxo(a)","alquimista","lutador(a) de boxe","judoca","caçador(a) de recompensas","arqueiro(a)","lanceiro(a)","necromante","contador(a)"];
        return list_class[this.chooseFeature(list_class)];
    },

    setQuatity:function(){
        let list_quality = ["especialista em algo","fofura","sorte","força","inteligência","resistência","beleza","carisma","esperteza","ágil","corajoso(a)"];
        return list_quality[this.chooseFeature(list_quality)];
    },

    setDefect:function(){
        let list_defect = ["azar","fraqueza física","ignorância","feiura","bruto","chatice","irritante","covarde"];
        return list_defect[this.chooseFeature(list_defect)];
    },

    setMotivation:function(){
        let list_motivation = ["vingança","tédio","amor","honra","ódio","dinheiro","poder","em busca de paz interior","salvar seu povo","salvar sua família"];
        return list_motivation[this.chooseFeature(list_motivation)];
    },
    
    generate:function(){
        this.breed = this.setBreed();
        this.class = this.setClass();
        this.quality = this.setQuatity();
        this.defect = this.setDefect();
        this.motivation = this.setMotivation();
    }
}