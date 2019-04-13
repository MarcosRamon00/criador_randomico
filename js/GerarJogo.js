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

    function setEstilo(){
        let lista_estilo = ["labirinto","corrida sem fim","quebra cabeça","horror","FPS","ficção interativa","escape the room","Puzzle adventure","visual novel","RTS","RPG","JRPG","esporte","corrida","simulação","MMO","stealth"]; 
        let escolha = Math.round(Math.random() * (lista_estilo.length - 1));
        return lista_estilo[escolha];
    }

    function setGraficos(){
        let lista_graficos = ["3D","2D","2.5D","texto","vetorial"];
        let escolha = Math.round(Math.random() * (lista_graficos.length - 1));
        return lista_graficos[escolha];
    }

    function setTema(){
        let lista_tema = ["velho oeste","futurista","cyberpunk","diselpunk","pos apocaliptico"];
        let escolha = Math.round(Math.random() * (lista_tema.length - 1));
        return lista_tema[escolha];
    }

    function setJogabilidade(){
        let lista_jogabilidade = ["shooter","MOBA","TURN BASED","luta","point and click","sandbox","open world","plataforma","hack and slash","beat and up","run and gun"];
        let escolha = Math.round(Math.random() * (lista_jogabilidade.length - 1));
        return lista_jogabilidade[escolha];
    }
}