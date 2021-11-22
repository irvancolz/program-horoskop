const tekan = document.querySelector('.tekan');
tekan.addEventListener('click', ()=>{
    const randomNumber = Date.now() % 10;
    const resultContainer = document.querySelector('.result-container');
    console.log(randomNumber);
    if(randomNumber < 4){
        resultContainer.style.color = "crimson";
        resultContainer.innerHTML = "Mengerikan...";
    }
    else if(randomNumber < 8 && randomNumber > 3){
        resultContainer.style.color = "rgb(211, 180, 6)";
        resultContainer.innerHTML = "Boleh juga !";
    }
    else{
        resultContainer.style.color = "blue";
        resultContainer.innerHTML = "Hebat!!";
    }
})


const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    const resultContainer = document.querySelector('.result-container');
    for( let i = 1; i < 3;i++){
        resultContainer.innerHTML = "";
    } 
})
