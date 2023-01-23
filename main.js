'use strict'

// Используя интервал или таймаут на ваш выбор реализуйте светофор.
// свет переключается каждые 5 секунд.
//при нажатии на кнопку Walk, 
// светофор переходит на красный, ждет 10 секунд, и продлжает обычную работу.
// под кнопкой есть счетчик, он отображает сколько секуд осталось после нажатия на кнопку.

const lights = document.getElementsByClassName('circle');
console.log(lights);

const redLight = document.getElementById('red');
console.log(redLight);

const yellowLight = document.getElementById('yellow');
console.log(yellowLight);

const greenLight = document.getElementById('green');
console.log(greenLight);

const btn = document.getElementById('button');
console.log(btn);

let i = 0;
for (; i <= lights.length; i++) {
    // switch (i) {
    //     case i: setInterval(() => {
    //         redLight.style.opacity = '1';
    //         }, 5000);
    //     case i: setInterval(() => {
    //         redLight.style.opacity = '.3';
    //         }, 10000);
    //     case i: setInterval(() => {
    //         yellowLight.style.opacity = '1';
    //         }, 10000);
    //     case i: setInterval(() => {
    //         yellowLight.style.opacity = '.3';
    //         }, 16000);
    //     case i: setInterval(() => {
    //         greenLight.style.opacity = '1';
    //         }, 16000);
    //     case i: setInterval(() => {
    //         greenLight.style.opacity = '.3';
    //         }, 26000);
    // };
    switch (i) {
        case i: setTimeout(() => {
            redLight.style.opacity = '1';
            }, 1000);
        case i: setTimeout(() => {
            redLight.style.opacity = '.3';
            }, 6000);
        case i: setTimeout(() => {
            yellowLight.style.opacity = '1';
            }, 6000);
        case i: setTimeout(() => {
            yellowLight.style.opacity = '.3';
            }, 11000);
        case i: setTimeout(() => {
            greenLight.style.opacity = '1';
            }, 11000);
        case i: setTimeout(() => {
            greenLight.style.opacity = '.3';
            }, 16000);
        };
    };
    // if (i > 2) {
    //     i = 0;
    // }

// function turnLightOnRedHandler () {
//     redLight.style.opacity = '1';
//     setInterval(() => {
//         yellowLight.style.opacity = '.3';
//         greenLight.style.opacity = '.3';
//     }, 10000);
// };
// turnLightOnRedHandler(setTimeout);


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




