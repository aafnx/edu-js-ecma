'use strict'

// Задание 1. "Управление персоналом компании"
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
//     Свойство name (имя) - строка, имя сотрудника.
//     Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
//     Свойство department (отдел) - строка, отдел, в котором работает менеджер.
//     Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee("John Smith");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith
//
// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class  Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Имя: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        // можно было просто переопредлить метод написав console.log(`Имя: ${this.name}`\nОтдел: ${this.department}`);
        // но я использовал сперва вызов метода displayInfo(), через ключевое слово super
        // затем добавил вывод отдела
        super.displayInfo();
        console.log(`Отдел: ${this.department}`)
    }
}

const employee = new Employee('Джон Смит');
employee.displayInfo();
console.log(`-----`)
const manager = new Manager('Джейн До', 'Продажи');
manager.displayInfo();

// Задание 2. "Управление списком заказов"
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
//     Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
//     Свойство products (продукты) - массив, содержащий список продуктов в заказе.
//     Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
//     Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
//     class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }
//
// const order = new Order(12345);
//
// const product1 = new Product("Phone", 500);
// order.addProduct(product1);
//
// const product2 = new Product("Headphones", 100);
// order.addProduct(product2);
//
// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product, count = 1) {
        if (this.products.includes(product)) {
            this.products.find(el => el.name === product.name).count += count;
        } else {
            product.count = count;
            this.products.push(product);
        }
    }
    getTotalPrice() {
        return this.products.reduce((acc, {price, count}) => acc + price * count, 0);
    }
    getProductsInOrder() {
        return this.products;
    }
}

const phone = new Product('phone', 50000);
const headphones = new Product('headphones', 9800);
const watch = new Product('watch', 32000);

const order1 = new Order(1);
order1.addProduct(phone, 2)
order1.addProduct(headphones)
console.log(order1.getProductsInOrder())
console.log(order1.getTotalPrice())

const order2 = new Order(2);
order2.addProduct(watch, 5);
order2.addProduct(phone);
order2.addProduct(headphones, 3);
console.log(order2.getProductsInOrder())
console.log(order2.getTotalPrice());