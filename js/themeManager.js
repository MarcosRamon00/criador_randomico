setThemeDefault();

function setThemeDefault(){//seta tema anteriormente selecionado mesmo se tela recarregada
    let themeBefore = localStorage.getItem('theme_criador_randomico');
    switch(themeBefore){
        case 'nocturnal':
            themeNocturnal();
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
