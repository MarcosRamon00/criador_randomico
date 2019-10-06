const nocturnal = {
    state : false,
    
    setEnableState:function(){
        this.state = true;
    },
    setDisableState:function(){
        this.state = false;
    },
    enable:function(){
        localStorage.setItem("theme_criador_randomico",'nocturnal');
        //css
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("nav-personagem-tab").style.color = "white";
        document.getElementById("nav-personagem-tab").style.background = "black";
        document.getElementById("nav-jogo-tab").style.color = "white";
        document.getElementById("nav-jogo-tab").style.background = "black";
        document.getElementById("nav-pet-tab").style.color = "white";
        document.getElementById("nav-pet-tab").style.background = "black";
        document.getElementById("nav-arma-tab").style.color = "white";
        document.getElementById("nav-arma-tab").style.background = "black";
        this.setEnableState();
    },
    disable:function(){
        localStorage.removeItem("theme_criador_randomico");
        //css
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("nav-personagem-tab").style.color = "black";
        document.getElementById("nav-personagem-tab").style.background = "white";
        document.getElementById("nav-jogo-tab").style.color = "black";
        document.getElementById("nav-jogo-tab").style.background = "white";
        document.getElementById("nav-pet-tab").style.color = "black";
        document.getElementById("nav-pet-tab").style.background = "white";
        document.getElementById("nav-arma-tab").style.color = "black";
        document.getElementById("nav-arma-tab").style.background = "white";
        this.setDisableState();
    }
}