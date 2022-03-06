let Menu = document.getElementById("menu");

let Menu_Screen = document.getElementById("MenuScreen");

Menu.addEventListener("click", function(){
    if(Menu_Screen.style.width == "0vw"){
        Menu_Screen.style.width = "100vw";
    }else{
        Menu_Screen.style.width = "0vw";
    }
})