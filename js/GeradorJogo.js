function Jogo(){
    var estilo;
    var graficos;
    var tema;
    var jogabilidade;

    this.setEstilo = setEstilo;
    this.setGraficos = setGraficos;
    this.setTema = setTema;
    this.setJogabilidade = setJogabilidade;

    this.estilo = this.setEstilo();
    this.graficos = this.setGraficos();
    this.tema = this.setTema();
    this.jogabilidade = this.setJogabilidade();

    function escolherCaracteristica(lista){//escolhe caracterista de uma lista
        return Math.round(Math.random() * (lista.length - 1));
    }

    function setEstilo(){
        let lista_estilo = ["labirinto","corrida sem fim","quebra cabeça","horror","FPS","ficção interativa","escape the room","Puzzle adventure","visual novel","RTS","RPG","JRPG","esporte","corrida","simulação","MMO","stealth"]; 
        return lista_estilo[escolherCaracteristica(lista_estilo)];
    }

    function setGraficos(){
        let lista_graficos = ["3D","2D","2.5D","texto","vetorial"];
        return lista_graficos[escolherCaracteristica(lista_graficos)];
    }

    function setTema(){
        let lista_tema = ["velho oeste","futurista","cyberpunk","diselpunk","pos apocaliptico"];
        return lista_tema[escolherCaracteristica(lista_tema)];
    }

    function setJogabilidade(){
        let lista_jogabilidade = ["shooter","MOBA","TURN BASED","luta","point and click","sandbox","open world","plataforma","hack and slash","beat and up","run and gun"];
        return lista_jogabilidade[escolherCaracteristica(lista_jogabilidade)];
    }
}