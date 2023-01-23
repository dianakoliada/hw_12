'use strict'

//при нажатии на кнопку Walk, 
// светофор переходит на красный, ждет 10 секунд, и продлжает обычную работу.
// под кнопкой есть счетчик, он отображает сколько секуд осталось после нажатия на кнопку.

const lights = document.getElementsByClassName('circle');
const btn = document.getElementById('button');
let activeLight = 0;

function activeTrafficLight () {
    lights[activeLight].className = 'circle'; //перебираю дивы с классом 'circle'
    activeLight++; 

    if(activeLight>2){
        activeLight = 0;
    };

    const currentLight = lights[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
};


function deactivatedTrafficLight () {
    lights[activeLight].className = 'circle'; //перебираю дивы с классом 'circle'
    activeLight++;

    const deactivatedLight = lights[0];
    deactivatedLight.classList.add(currentLight.getAttribute('color'));
};

const onStartWorking = setInterval(() => {
    activeTrafficLight ()
}, 2000); //5000


btn.addEventListener('click', () => {
    clearInterval(onStartWorking);
    
    //set counter
    const counter = document.getElementById('counter');
    console.log(counter);

    let cntValue = 10;
    
    const pointer = setInterval(() => { 
    if (cntValue === 0) {
        return;
    }
    cntValue -= 1;
    counter.innerHTML = cntValue;
    }, 1000);
});

