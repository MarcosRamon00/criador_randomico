const pet = {
    species:'',
    age:'',
    behavior:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_species : [
        "gato",
        "cachorro",
        "rato",
        "coruja",
        "cobra",
        "galinha",
        "sapo",
        "urso",
        "largato",
        "aranha",
        "pombo"],

    list_age : [
        "filhote",
        "adulto",
        "idoso"],
    
    list_behavior : [
        "bobo(a)",
        "bravo(a)",
        "preguiçoso(a)",
        "esperto(a)"],

    setSpecies:function(){
        return this.list_species[this.chooseFeature(this.list_species)];
    },

    getLengthSpecies:function(){
        return this.list_species.length;
    },

    setAge:function(){    
        return this.list_age[this.chooseFeature(this.list_age)];
    },

    getLengthAges:function(){
        return this.list_age.length;
    },

    setBehavior:function(){
        return this.list_behavior[this.chooseFeature(this.list_behavior)];
    },

    getLengthBehaviors:function(){
        return this.list_behavior.length;
    },

    getNumberPossibilities:function(){
        let possibilities =  this.getLengthSpecies() * this.getLengthAges() * this.getLengthBehaviors();
        return possibilities;
    },

    generate:function(){
        this.species = this.setSpecies();
        this.age = this.setAge();
        this.behavior = this.setBehavior();
    }
}
