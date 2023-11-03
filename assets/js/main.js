
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    
    // le code de l'étape 1 se passe ici
    
    //## solution avec for()
    for(let i=0; i < colors.length; i++){
        let div = document.querySelector(`header > div:nth-child(${i+1})`);
        div.style.backgroundColor = colors[i];
    }
    
    //## solution avec forEach()
    // colors.forEach(function(color, key){
    //   let div = document.querySelector(`header > div:nth-child(${key+1})`);
    //   div.style.backgroundColor = color;
    // });
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    let headerDivs = document.querySelectorAll('header > div');
    headerDivs.forEach(function(div){
      div.addEventListener("click", selectColor);
    });
 
    // console.log(getSelectedColor());
    // le code de l'étape 3 se passe ici
    let mainDivs = document.querySelectorAll('main > div > div');
    
    mainDivs.forEach(function(div){
        div.addEventListener("click", function(event){
            let color = getSelectedColor();
            if (color) {
                if (event.target.style.backgroundColor) {
                    event.target.style.backgroundColor = "";
                } else {
                    event.target.style.backgroundColor = color;
                }
            }
        });
    });
});