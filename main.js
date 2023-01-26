'use strict'

const light = document.querySelectorAll('.circle');
console.log(light);

const btn = document.getElementById('button');
console.log(btn);

let count = 0;
let interval;

function activeTrafficLight() {
    interval = setInterval(() => {
        light[count].className = 'circle';
        count++;

        if(count > 2) {
            count = 0;
        }

        light[count].classList.add(light[count].getAttribute('color'));
    }, 2000); //5000
};
activeTrafficLight();

btn.disabled = false;

btn.addEventListener('click', () => {
    clearInterval(interval);

    let counter = 11;
    let countNum = document.getElementById('counter');

    let timer = setInterval(() => {
        counter--;
        countNum.innerHTML = counter;

        if (counter > 0) {
            light[count].classList.remove(light[count].getAttribute('color'));
            light[0].classList.add(light[0].getAttribute('color'));
            return btn.disabled = true;
        }
        else {
            clearInterval(timer);
            light[0].classList.remove(light[0].getAttribute('color'));
            return btn.disabled = false;
        }
    }, 1000);

    setTimeout(() => {
        count = 0;
        activeTrafficLight();
    }, 10000);
});






