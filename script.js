function updateColorText(currentNumberOnScreen){
    if(currentNumberOnScreen >= 0){
        document.querySelector('.number').style.color = "#000";   
    }
    else{
        document.querySelector('.number').style.color = "#EB5353";
    }
}

document.querySelector(".btn-decrease").addEventListener('click', () =>{
    var currentNumberOnScreen = document.querySelector('.number').textContent;
    currentNumberOnScreen--;
    updateColorText(currentNumberOnScreen);
    document.querySelector('.number').textContent = currentNumberOnScreen;
})

document.querySelector(".btn-increase").addEventListener('click', () =>{
    var currentNumberOnScreen = document.querySelector('.number').textContent;
    currentNumberOnScreen++;
    updateColorText(currentNumberOnScreen);
    document.querySelector('.number').textContent = currentNumberOnScreen;
})

document.querySelector(".btn-reset").addEventListener('click', () =>{
    var resetNumber = 0;
    updateColorText(resetNumber);
    document.querySelector('.number').textContent = 0;
})