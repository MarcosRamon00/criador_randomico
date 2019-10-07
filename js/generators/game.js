const game = {
    style:'',
    grafics:'',
    theme:'',
    gameplay:'',
    
    chooseFeature:function(list){//escolhe caracterista de uma list
        return Math.round(Math.random() * (list.length - 1));
    },

    setStyle:function(){
        let list_style = ["labirinto","corrida sem fim","quebra cabeça","horror","FPS","ficção interativa","escape the room","Puzzle adventure","visual novel","RTS","RPG","JRPG","esporte","corrida","simulação","MMO","stealth"]; 
        return list_style[this.chooseFeature(list_style)];
    },
    
    setGrafics:function(){
       let list_grafics = ["3D","2D","2.5D","texto"];
       return list_grafics[this.chooseFeature(list_grafics)];
    },

    setTheme:function(){
        let list_theme = ["velho oeste","futurista","cyberpunk","diselpunk","pos apocaliptico","steampunk","retro futurista","medieval","anos 10","anos 20","anos 30","anos 40","anos 50","anos 60","anos 70","anos 80","anos 90","anos 2000","antigo egito","inca","maia","asteca","alieniginas","noir"];
        return list_theme[this.chooseFeature(list_theme)];
    },

    setGameplay:function(){
        let list_gameplay = ["shooter","MOBA","TURN BASED","luta","point and click","sandbox","open world","plataforma","hack and slash","beat and up","run and gun"];
        return list_gameplay[this.chooseFeature(list_gameplay)];
    },

    generate:function(){
        this.style = this.setStyle();
        this.grafics = this.setGrafics();
        this.theme = this.setTheme();
        this.gameplay = this.setGameplay();
    }
}