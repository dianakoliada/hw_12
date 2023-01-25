'use strict'

//при нажатии на кнопку Walk, 
// светофор переходит на красный, ждет 10 секунд, и продлжает обычную работу.
// под кнопкой есть счетчик, он отображает сколько секуд осталось после нажатия на кнопку.

const lights = document.getElementsByClassName('circle');
const btn = document.getElementById('button');
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
let activeLight = 0;
let currentLight = undefined;

function activeTrafficLight () {
    lights[activeLight].className = 'circle'; //перебираю дивы с классом 'circle'
    activeLight++; 

    if(activeLight>2){
        activeLight = 0;
    };

    currentLight = lights[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
};


const onStartWorking = setInterval(() => {
    activeTrafficLight ()
}, 2000); //5000


btn.addEventListener('click', () => {
    clearInterval(onStartWorking);

    redLight.classList.add('red__active');
    yellowLight.classList.remove('yellow__active');
    greenLight.classList.remove('green__active');
    
    let cntValue = 10;

    btn.disabled = true;
     
    const pointer = setInterval(() => { 
    if (cntValue === 0) {
        cntValue = 11;
        clearInterval(pointer);
        btn.disabled = false;
        setInterval(() => {
            activeTrafficLight ()
        }, 2000); //5000
    };

    cntValue -= 1;
    counter.innerHTML = cntValue;
    }, 1000);
});


