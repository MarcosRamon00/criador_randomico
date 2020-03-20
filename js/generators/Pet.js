const pet = {
    species:'',
    age:'',
    behavior:'',

    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    setSpecies:function(){
        let list_species = ["gato","cachorro","rato","coruja","cobra","galinha"];
        return list_species[this.chooseFeature(list_species)];
    },
    setAge:function(){
        let list_age = ["filhote","adulto","idoso"];
        return list_age[this.chooseFeature(list_age)];
    },
    setBehavior:function(){
        let list_behavior = ["bobo(a)","bravo(a)","preguiçoso(a)","esperto(a)"];
        return list_behavior[this.chooseFeature(list_behavior)];
    },
    generate:function(){
        this.species = this.setSpecies();
        this.age = this.setAge();
        this.behavior = this.setBehavior();
    }
}
