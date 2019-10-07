const weapon = {
    weapon :'',
    condition :'',
    style:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    setWeapon:function(){
        let list_weapon = ["arma laser","galinha de borracha","machado","lança","espada","escudo","foice","arco e flecha"];
        return list_weapon[this.chooseFeature(list_weapon)];
    },
    setCondition:function(){
        let list_condition = ["amaldiçoado","abençoado","velho","novo"];
        return list_condition[this.chooseFeature(list_condition)];
    },
    setStyle:function(){
        let list_style = ["medieval","viking","futurista","cyberpunk","velho oeste","steampunk"];
        return list_style[this.chooseFeature(list_style)];
    },
    generate:function(){
        this.weapon = this.setWeapon();
        this.condition = this.setCondition();
        this.style = this.setStyle();
    }
}
