


function changeImg() {
    let bulbImg = document.getElementById("bulbImg");
    if (bulbImg.src.match("./img/bulb-on.png")) {
        bulbImg.src = "./img/bulb-off.png";
        
    }else{
        bulbImg.src = "./img/bulb-on.png";
    }
    
}