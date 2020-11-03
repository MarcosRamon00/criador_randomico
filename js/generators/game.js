const game = {
    style:'',
    grafics:'',
    theme:'',
    gameplay:'',
    
    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    list_style : [
        "labirinto",
        "corrida sem fim",
        "quebra cabeça",
        "horror",
        "FPS",
        "ficção interativa",
        "escape the room",
        "Puzzle adventure",
        "visual novel",
        "RTS",
        "RPG",
        "JRPG",
        "esporte",
        "corrida",
        "simulação",
        "MMO",
        "stealth"],

    list_grafics : [
        "3D",
        "2D",
        "2.5D",
        "texto"],

    list_theme : [
        "velho oeste",
        "futurista",
        "cyberpunk",
        "diselpunk",
        "piratas",
        "espacial",
        "utopia",
        "matemática",
        "química",
        "pos apocaliptico",
        "steampunk",
        "retro futurista",
        "medieval",
        "anos 10",
        "anos 20",
        "anos 30",
        "anos 40",
        "anos 50",
        "anos 60",
        "anos 70",
        "anos 80",
        "anos 90",
        "anos 2000",
        "antigo egito",
        "inca",
        "maia",
        "asteca",
        "alieniginas",
        "noir"],
    
    list_gameplay : [
        "shooter",
        "MOBA",
        "TURN BASED",
        "luta",
        "point and click",
        "sandbox",
        "open world",
        "plataforma",
        "hack and slash",
        "beat and up",
        "run and gun"],

    setStyle:function(){
        return this.list_style[this.chooseFeature(this.list_style)];
    },
    
    getLengthStyles:function(){
        return this.list_style.length;
    },

    setGrafics:function(){
       return this.list_grafics[this.chooseFeature(this.list_grafics)];
    },

    getLengthGrafics:function(){
        return this.list_grafics.length;
    },

    setTheme:function(){    
        return this.list_theme[this.chooseFeature(this.list_theme)];
    },

    getLengthThemes:function(){
        return this.list_theme.length;
    },

    setGameplay:function(){    
        return this.list_gameplay[this.chooseFeature(this.list_gameplay)];
    },

    getLengthGameplays:function(){
        return this.list_gameplay.length;
    },

    getNumberPossibilities:function(){
        let possibilities =  this.getLengthStyles() * this.getLengthGrafics() * this.getLengthThemes() * this.getLengthGameplays();
        return possibilities;
    },
    generate:function(){
        this.style = this.setStyle();
        this.grafics = this.setGrafics();
        this.theme = this.setTheme();
        this.gameplay = this.setGameplay();
    }
}