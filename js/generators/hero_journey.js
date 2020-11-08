// basead on christopher Vogler
const hero_journey = {
    ordinary_world : '',
    call_to_adventure : '',
    refusal_of_the_call : '',
    meeting_with_the_mentor : '',
    crossing_the_first_threshold : '',
    tests_allies_and_enemies : '',
    approach_to_the_inmost_cave : '',
    the_ordeal : '',
    reward : '',
    the_road_back : '',
    the_resurrection : '',
    return_with_the_elixir : '',


    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_ordinary_world : [
        "estação espacial",
        "planeta deserto",
        "idade média"
    ],

    list_call_to_adventure : [
        "atacado(a) por um monstro",
        "contactado(a) por um espírito"
    ],

    list_refusal_of_the_call : [
        "por medo ",
        "por pagar pouco"
    ],

    list_meeting_with_the_mentor : [
        "encontra um mestre sagrado",
        "acha um manual de instruções"
    ],

    list_crossing_the_first_threshold : [
        "atravessa um portal mágico",
        "pega um táxi mágico"
    ],

    list_tests_allies_and_enemies : [
        "faz um teste escrito dificil ",
        "enfreta fases dificies em um video game"
    ],

    list_approach_to_the_inmost_cave : [
        "herói(na) ganha uma medalha",
        " "
    ],

    list_the_ordeal : [
        "herói(na) perde em um desafio díficil",
        "herói(na) perde em uma prova fácil"
    ],

    list_reward : [
        "ganha um poder mágico",
        "ganha um elogio de seu idolo(a)"
    ],

    list_the_road_back : [
        "pega um táxi para volta pra casa",
        "fast travel"
    ],

    list_the_resurrection : [
        "volta da morte",
        "pinta o cabelo"
    ],

    list_return_with_the_elixir : [
        "retorno com um artefato mágico",
        "consegue tudo que queria"
    ],

    setOrdinary_world:function(){
        return this.list_ordinary_world[this.chooseFeature(this.list_ordinary_world)];
    },

    getLengthOrdinary_world:function(){
        return this.list_ordinary_world.length;
    },

    setCall_to_adventure:function(){    
        return this.list_call_to_adventure[this.chooseFeature(this.list_call_to_adventure)];
    },

    getLengthCall_to_adventure:function(){
        return this.list_call_to_adventure.length;
    },

    setRefusal_of_the_call:function(){
        return this.list_refusal_of_the_call[this.chooseFeature(this.list_refusal_of_the_call)];
    },

    getLengthRefusal_of_the_call:function(){
        return this.list_refusal_of_the_call.length;
    },

    setMeeting_with_the_mentor:function(){
        return this.list_meeting_with_the_mentor[this.chooseFeature(this.list_meeting_with_the_mentor)];
    },

    getLengthMeeting_with_the_mentor:function(){
        return this.list_meeting_with_the_mentor.length;
    },

    setCrossing_the_first_threshold:function(){
        return this.list_crossing_the_first_threshold[this.chooseFeature(this.list_crossing_the_first_threshold)];
    },

    getLengthCrossing_the_first_threshold:function(){
        return this.list_crossing_the_first_threshold.length;
    },

    setTests_allies_and_enemies:function(){
        return this.list_tests_allies_and_enemies[this.chooseFeature(this.list_tests_allies_and_enemies)];
    },

    getLengthTests_allies_and_enemies:function(){
        return this.list_tests_allies_and_enemies.length;
    },

    setApproach_to_the_inmost_cave:function(){
        return this.list_approach_to_the_inmost_cave[this.chooseFeature(this.list_approach_to_the_inmost_cave)];
    },

    getLengthApproach_to_the_inmost_cave:function(){
        return this.list_approach_to_the_inmost_cave.length;
    },

    setThe_ordeal:function(){
        return this.list_the_ordeal[this.chooseFeature(this.list_the_ordeal)];
    },

    getLengthThe_ordeal:function(){
        return this.list_the_ordeal.length;
    },

    setReward:function(){
        return this.list_reward[this.chooseFeature(this.list_reward)];
    },

    getLengthReward:function(){
        return this.list_reward.length;
    },

    setThe_road_back:function(){
        return this.list_the_road_back[this.chooseFeature(this.list_the_road_back)];
    },

    getLengthThe_road_back:function(){
        return this.list_the_road_back.length;
    },

    setThe_resurrection:function(){
        return this.list_the_resurrection[this.chooseFeature(this.list_the_resurrection)];
    },

    getLengthThe_resurrection:function(){
        return this.list_the_resurrection.length;
    },

    setReturn_with_the_elixir:function(){
        return this.list_return_with_the_elixir[this.chooseFeature(this.list_return_with_the_elixir)];
    },

    getLengthReturn_with_the_elixir:function(){
        return this.list_return_with_the_elixir.length;
    },

    getNumberPossibilities:function(){
        let possibilities = this.getLengthOrdinary_world() * 
                            this.getLengthCall_to_adventure() *
                            this.getLengthRefusal_of_the_call() *
                            this.getLengthMeeting_with_the_mentor() *
                            this.getLengthCrossing_the_first_threshold() *
                            this.getLengthTests_allies_and_enemies() *
                            this.getLengthApproach_to_the_inmost_cave() *
                            this.getLengthThe_ordeal() *
                            this.getLengthReward() *
                            this.getLengthThe_road_back() *
                            this.getLengthThe_resurrection() *
                            this.getLengthReturn_with_the_elixir();
        return possibilities;
    },
    
    generate:function(){
        this.ordinary_world = this.setOrdinary_world();
        this.call_to_adventure = this.setCall_to_adventure();
        this.refusal_of_the_call = this.setRefusal_of_the_call();
        this.meeting_with_the_mentor = this.setMeeting_with_the_mentor();
        this.crossing_the_first_threshold = this.setCrossing_the_first_threshold();
        this.tests_allies_and_enemies = this.setTests_allies_and_enemies();
        this.approach_to_the_inmost_cave = this.setApproach_to_the_inmost_cave();
        this.the_ordeal = this.setThe_ordeal();
        this.reward = this.setReward();
        this.the_road_back = this.setThe_road_back();
        this.the_resurrection = this.setThe_resurrection();
        this.return_with_the_elixir = this.setReturn_with_the_elixir();
    }
}

console.log(hero_journey.getNumberPossibilities());