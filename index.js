'use strict'

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1,5,7,9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а
// метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let value = 0;
    return {
        increment: () => ++value,
        decrement: () => --value,
        getValue: () => value
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue()); // 2


// 3) Напишите рекурсивную функцию findElementByClass,
// которая принимает корневой элемент дерева DOM и название класса в качестве аргументов
// и возвращает первый найденный элемент с указанным классом в этом дереве.

//     Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const findElementByClass = (rootEl, targetClassName) => {
    const closureFoo = _checkDom();
    return closureFoo.find(rootEl, targetClassName);
}

function _checkDom() {
    return {
        lookingElement: null,
        find: function(rootEL, targetClassName) {
            if (rootEL.classList.contains(targetClassName)) {
                this.lookingElement = rootEL;
                return rootEL;
            }
            const children = rootEL.children;
            for (let i = 0; i < children.length; i++) {
                if (this.lookingElement) {
                    return this.lookingElement;
                }
                this.find(children[i], targetClassName);
            }
            return this.lookingElement;
        }
    }
}

window.addEventListener('load', () => {
    const rootEl = document.querySelector('.container');
    const box3El = document.querySelector('.box:nth-child(3)');

    const targetEl = findElementByClass(rootEl, 'span-target')
    const target2El = findElementByClass(box3El, 'img');

    console.log(targetEl)
    console.log(target2El)
})