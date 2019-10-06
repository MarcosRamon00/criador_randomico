setThemeDefault();

function setThemeDefault(){
    let themeBefore = localStorage.getItem('theme_criador_randomico');
    switch(themeBefore){
        case 'nocturnal':
            themeNocturnal();
        default:
            console.log("hello");
    }
}
function themeNocturnal(){
    //localStorage.clear();
    if(nocturnal.state == false){
        nocturnal.enable();
    }else{
        nocturnal.disable();
    }
}
