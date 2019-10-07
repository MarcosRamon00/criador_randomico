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
        document.getElementById("nav-character-tab").style.color = "white";
        document.getElementById("nav-character-tab").style.background = "black";
        document.getElementById("nav-game-tab").style.color = "white";
        document.getElementById("nav-game-tab").style.background = "black";
        document.getElementById("nav-pet-tab").style.color = "white";
        document.getElementById("nav-pet-tab").style.background = "black";
        document.getElementById("nav-weapon-tab").style.color = "white";
        document.getElementById("nav-weapon-tab").style.background = "black";
        this.setEnableState();
    },
    disable:function(){
        localStorage.removeItem("theme_criador_randomico");
        //css
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("nav-character-tab").style.color = "black";
        document.getElementById("nav-character-tab").style.background = "white";
        document.getElementById("nav-game-tab").style.color = "black";
        document.getElementById("nav-game-tab").style.background = "white";
        document.getElementById("nav-pet-tab").style.color = "black";
        document.getElementById("nav-pet-tab").style.background = "white";
        document.getElementById("nav-weapon-tab").style.color = "black";
        document.getElementById("nav-weapon-tab").style.background = "white";
        this.setDisableState();
    }
}