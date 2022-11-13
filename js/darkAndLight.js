function Switch() {
    var bodyTag = document.getElementById('bodyId')
    var bgc =bodyTag.style.backgroundColor;
     
    if(bgc=='black'){
     bodyTag.style.backgroundColor='yellow'
    }
    else{
     bodyTag.style.backgroundColor ='black'
    }
}