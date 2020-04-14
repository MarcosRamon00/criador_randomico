setThemeDefault();

function setThemeDefault(){//seta tema anteriormente selecionado mesmo se tela recarregada
    let themeBefore = localStorage.getItem('theme_criador_randomico');
    switch(themeBefore){
        case 'nocturnal':
            themeNocturnal();
        case 'cyberpunk':
            themeCyberpunk();
        default:
            null;
    }
}
function themeNocturnal(){
    if(nocturnal.state == false){
        nocturnal.enable();
    }else{
        nocturnal.disable();
    }
}

function themeCyberpunk(){
    if(cyberpunk.state == false){
        cyberpunk.enable();
    }else{
        cyberpunk.disable();
    }
}
