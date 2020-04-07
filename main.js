const addElement = document.getElementById('idButton');

    let numRandom = 0;
const addNewElementTwo = function(){
    ++numRandom;
    let newModel = document.createElement('div');
        if(numRandom%5==0){
            newModel.classList.add('newCircle');
            newModel.textContent = numRandom;
            console.log(numRandom);
        }else{
            newModel.classList.add('newSquare');
            newModel.textContent = numRandom;
            console.log(` ${numRandom}!`);
        }

    const dFlex = document.getElementById('displayFlex');
    dFlex.appendChild(newModel);
}



addElement.addEventListener('click', addNewElementTwo);







