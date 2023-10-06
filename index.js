// ## 1. ""Получение данных о пользователе""

// Реализуйте функцию `getUserData`, которая принимает идентификатор пользователя (`ID`) в качестве аргумента и
// использует `fetch` для получения данных о пользователе с заданным `ID` с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
// Если пользователь с указанным `ID` не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// `getUserData` использует `fetch` для получения данных о пользователе с удаленного сервера.
// Если запрос успешен (с кодом `200`), функция извлекает данные из ответа с помощью `response.json()` и
// возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const URL = 'https://jsonplaceholder.typicode.com'

function getUserData(id) {
    return new Promise((resolve, reject) => {
        fetch(`${URL}/users`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(users => {
                            const targetUser = users.find(user => user.id === id);
                            targetUser ? resolve(targetUser) : reject('Пользователь не найден');
                        });
                } else {
                    reject('Ошибка ответа сервера')
                }
            })
    })
}

getUserData(5)
    .then(data => console.log(data))
    .catch(e => console.error(e))


// ## 2. ""Отправка данных на сервер""
// Реализуйте функцию `saveUserData`, которая принимает объект с данными о пользователе в качестве аргумента и
// использует `fetch` для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены,
// или отклоняется в случае ошибки.

// `saveUserData` использует `fetch` для отправки данных о пользователе на удаленный сервер для сохранения.
// Она отправляет POST-запрос на URL-адрес `/users` с указанием типа содержимого `application/json` и сериализует
// объект с данными о пользователе в JSON-строку с помощью `JSON.stringify()`. Если запрос успешен (с кодом `200`),
// функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

function  saveUserData(user) {
    return new Promise((resolve, reject) => {
        fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    resolve();
                } else {
                    reject('Ошибка сохранения данных о пользователе');
                }
            })
    })
}

const user  = {
    name: 'Dima',
    age: 35,
    address: {
        country: 'Russia',
        city: 'Moscow',
        street: 'Pushkina',
        house: 1
    }
}

saveUserData(user)
    .then(response => console.log('Данные успешно записаны'))
    .catch(err => console.error(err))


//## 3. ""Изменение стиля элемента через заданное время""
// Напишите функцию `changeStyleDelayed`, которая принимает идентификатор элемента и время задержки (в миллисекундах)
// в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

function  changeStyleDelayed(elementId, ms, isInterval = false) {
    const el = document.querySelector(`#${elementId}`);
    if (!el) {
        throw new Error('Елемент не найден');
    }

    if (!isInterval) {
        setTimeout(() => {
            el.style.backgroundColor = 'red'
        }, ms)
    } else {
        const srcStyle = el.style.backgroundColor;
        setInterval(() => {
            if (srcStyle === el.style.backgroundColor) {
                el.style.backgroundColor = 'red';
            } else {
                el.style.backgroundColor = srcStyle;
            }
        }, ms)
    }
}

changeStyleDelayed('target', 1000, true);