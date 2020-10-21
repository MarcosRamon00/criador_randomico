const character = {
    type :'',
    class:'',
    quality:'',
    defect:'',
    motivation:'',

    chooseFeature:function(list){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (list.length - 1));
    },

    list_type : [
        "humano(a)",
        "fera",
        "demônio(a)",
        "anjo",
        "ciborgue",
        "robô",
        "espírito",
        "humano-peixe",
        "humano-passáro",
        "humano-réptil",
        "meio elemental",
        "elemental",
        "elemental do fogo",
        "elemental da água",
        "elemental das plantas",
        "elemental do ar",
        "elemental da terra",
        "elemental do raio",
        "elemental de gelo",
        "elemental da luz",
        "elemental da sombra",
        "mutante",
        "alienigina",
        "fada",
        "ogro(a)",
        "anão(a)",
        "golem",
        "dragão",
        "meio dragão",
        "fantasma amaldiçoado",
        "fantasma",
        "sereia",
        "tritão",
        "meio lagarto",
        "centauro",
        "entidade",
        "deus(a)",
        "barbáro(a)",
        "viking"],
    
    list_class : [
        "guerreiro(a)",
        "mago(a)",
        "bruxo(a)",
        "paladino(a)",
        "amazona",
        "cantor(a)",
        "médico(a)",
        "sábio(a)",
        "ferreiro(a)",
        "bardo",
        "caçador(a)",
        "bruxo(a)",
        "alquimista",
        "lutador(a) de boxe",
        "judoca",
        "caçador(a) de recompensas",
        "arqueiro(a)",
        "lanceiro(a)",
        "necromante",
        "contador(a)",
        "cantor(a) sertanejo",
        "vocalista de uma banda de rock",
        "baterista",
        "guitarrista",
        "tecladista",
        "violinista",
        "baixista",
        "palhaço",
        "sniper",
        "empresario(a)",
        "soldado",
        "pesquisador(a)"],
        
    list_quality : [
        "especialista em algo",
        "fofura",
        "sorte",
        "força",
        "inteligência",
        "resistência",
        "beleza",
        "carisma",
        "esperteza",
        "ágil",
        "corajoso(a)"],

    list_defect : [
        "azar",
        "fraqueza física",
        "ignorância",
        "feiura",
        "bruto",
        "chatice",
        "irritante",
        "covarde"],

    list_motivation : [
        "vingança",
        "tédio",
        "amor",
        "honra",
        "ódio",
        "dinheiro",
        "poder",
        "em busca de paz interior",
        "salvar seu povo",
        "salvar sua família"],

    setType:function(){
        return this.list_type[this.chooseFeature(this.list_type)];
    },

    getLengthTypes:function(){
            return this.list_type.length;
    },

    setClass:function(){
        return this.list_class[this.chooseFeature(this.list_class)];
    },

    getLengthClasses:function(){
        return this.list_class.length;
    },

    setQuatity:function(){
        return this.list_quality[this.chooseFeature(this.list_quality)];
    },

    getLengthQualities:function(){
        return this.list_quality.length;
    },

    setDefect:function(){
        return this.list_defect[this.chooseFeature(this.list_defect)];
    },

    getLengthDefects:function(){
        return this.list_defect.length;
    },

    setMotivation:function(){
        return this.list_motivation[this.chooseFeature(this.list_motivation)];
    },
    
    getLengthMotivations:function(){
        return this.list_motivation.length;
    },

    getNumberPossibilities:function(){
        let possibilities =  this.getLengthTypes() * this.getLengthClasses() * this.getLengthQualities() * this.getLengthDefects() * this.getLengthMotivations();
        return possibilities;
    },

    generate:function(){
        this.type = this.setType();
        this.class = this.setClass();
        this.quality = this.setQuatity();
        this.defect = this.setDefect();
        this.motivation = this.setMotivation();
    }
}
