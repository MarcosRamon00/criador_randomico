const food = {
    type:'',
    main_ingredient:'',
    condition:'',
    plus:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_type : [
        "sopa",
        "hamburger",
        "sanduiche",
        "pizza",
        "bolinho",
        "pastel",
        "biscoito",
        "bolacha",
        "torta",
        "bolo",
        "chá",
        "suco",
        "refrigerante",
        "não sei"],

    list_main_ingredient : [
        "chocolate",
        "peixe",
        "carne bovina",
        "não sei",
        "restos"],
    
    list_condition : [
        "fria(o)",
        " nenhum ",
        "amaldicionada",
        "digitalizada(o)",
        "envenenada(o)",
        "quente",
        "morna",
        "monstruoso(a)",
        "vivo(a)",
        "não sei"],

    list_plus : [
        "queijo",
        " nenhum ",
        "presunto",
        "queijo e presunto",
        "tentáculos vivos",
        "terra",
        "não sei"
    ],

    setType:function(){
        return this.list_type[this.chooseFeature(this.list_type)];
    },

    getLengthType:function(){
        return this.list_type.length;
    },

    setMain_ingredient:function(){    
        return this.list_main_ingredient[this.chooseFeature(this.list_main_ingredient)];
    },

    getLengthMain_ingredient:function(){
        return this.list_main_ingredient.length;
    },

    setCondition:function(){
        return this.list_condition[this.chooseFeature(this.list_condition)];
    },

    getLengthCondition:function(){
        return this.list_condition.length;
    },

    getNumberPossibilities:function(){
        let possibilities =  this.getLengthType() * this.getLengthMain_ingredient() *
         this.getLengthCondition() * this.getLengthPlus(); 
        return possibilities;
    },

    setPlus:function(){
        return this.list_plus[this.chooseFeature(this.list_plus)];
    },

    getLengthPlus:function(){
        return this.list_plus.length;
    },

    generate:function(){
        this.type = this.setType();
        this.main_ingredient = this.setMain_ingredient();
        this.condition = this.setCondition();
        this.plus = this.setPlus();
    }
}
