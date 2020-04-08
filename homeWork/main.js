const clickButton = document.querySelector('.classButton');

let oddNumber = 1;
clickButton.addEventListener('click', function() {
    let newLi = document.createElement('li'); 
    if(oddNumber%2==1){
        console.log(`your number ${oddNumber} is odd, congratulations!`);
        newLi.textContent = oddNumber;
        if(oddNumber%3==0){
            console.log(`your number ${oddNumber} is odd, congratulations!`);
            newLi.textContent = oddNumber;  
            // newLi.style.fontSize="30px";
            newLi.classList.add('liClass')
        }
        oddNumber+=2;
    }
    let newLiStyle = document.getElementById('ulId')
    newLiStyle.appendChild(newLi);

} );