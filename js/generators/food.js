const food = {
    type:'',
    main_ingredient:'',
    condition:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_type : [
        "sopa",
        "hamburger",
        "sanduiche",
        "pizza",
        "bolinho"],

    list_main_ingredient : [
        "chocolate",
        "peixe",
        "carne bovina"],
    
    list_condition : [
        "fria",
        "envenenada",
        "quente",
        "morna"],

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
        let possibilities =  this.getLengthType() * this.getLengthMain_ingredient() * this.getLengthCondition();
        return possibilities;
    },

    generate:function(){
        this.type = this.setType();
        this.main_ingredient = this.setMain_ingredient();
        this.condition = this.setCondition();
    }
}
