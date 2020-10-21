const weapon = {
    weapon :'',
    condition :'',
    style:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_weapon : [
        "arma laser",
        "galinha de borracha",
        "machado",
        "lança",
        "espada",
        "escudo",
        "foice",
        "arco e flecha"],
    
    list_condition : [
        "amaldiçoado",
        "abençoado",
        "velho",
        "novo",
        "envenenado",
        "enferrujado",
        "coberto de marcas estranhas"],

    list_style : [
        "medieval",
        "viking",
        "futurista",
        "cyberpunk",
        "velho oeste",
        "steampunk",
        "dieselpunk",
        "solarpunk"],

    setWeapon:function(){
        return this.list_weapon[this.chooseFeature(this.list_weapon)];
    },

    getLengthWeapons:function(){
        return this.list_weapon.length;
    },

    setCondition:function(){
        return this.list_condition[this.chooseFeature(this.list_condition)];
    },

    getLengthConditions:function(){
        return this.list_condition.length;
    },

    setStyle:function(){
        return this.list_style[this.chooseFeature(this.list_style)];
    },

    getLengthStyles:function(){
        return this.list_style.length;
    },

    getNumberPossibilities:function(){
        let possibilities =  this.getLengthWeapons() * this.getLengthConditions() * this.getLengthStyles();
        return possibilities;
    },

    generate:function(){
        this.weapon = this.setWeapon();
        this.condition = this.setCondition();
        this.style = this.setStyle();
    }
}
