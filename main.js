function styleOfCut(number) {
    document.getElementById(`cut${number}`).style.backgroundImage = `linear-gradient(to left, rgb(136, 136, 136), transparent, transparent, rgb(136, 136, 136)), url(\"cut${number}/images/img1.png\")`;
    
    console.log(document.getElementById(`cut${number}`).style);
}

window.onload = function() {
    var index = 1;
    while(document.getElementById(`cut${index}`) != null) {
        styleOfCut(index);
        index++;
    }
};
