const jogo = {
    estilo:'',
    graficos:'',
    tema:'',
    jogabilidade:'',
    
    escolherCaracteristica:function(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    },

    setEstilo:function(){
        let lista_estilo = ["labirinto","corrida sem fim","quebra cabeça","horror","FPS","ficção interativa","escape the room","Puzzle adventure","visual novel","RTS","RPG","JRPG","esporte","corrida","simulação","MMO","stealth"]; 
        return lista_estilo[this.escolherCaracteristica(lista_estilo)];
    },
    
    setGraficos:function(){
       let lista_graficos = ["3D","2D","2.5D","texto","vetorial"];
       return lista_graficos[this.escolherCaracteristica(lista_graficos)];
    },

    setTema:function(){
        let lista_tema = ["velho oeste","futurista","cyberpunk","diselpunk","pos apocaliptico","steampunk","retro futurista","medieval","anos 60","anos 70","anos 80","anos 90","anos 2000"];
        return lista_tema[this.escolherCaracteristica(lista_tema)];
    },

    setJogabilidade:function(){
        let lista_jogabilidade = ["shooter","MOBA","TURN BASED","luta","point and click","sandbox","open world","plataforma","hack and slash","beat and up","run and gun"];
        return lista_jogabilidade[this.escolherCaracteristica(lista_jogabilidade)];
    },

    gerar:function(){
        this.estilo = this.setEstilo();
        this.graficos = this.setGraficos();
        this.tema = this.setTema();
        this.jogabilidade = this.setJogabilidade();
    }
}