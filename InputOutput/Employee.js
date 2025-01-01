export class Employee {
    constructor(name, age, monthlySales) {
        this.name = name;
        this.age = age;
        this.monthlySales = monthlySales;
    }

    introduce() {
        console.log(`My name is ${this.name}, I am ${this.age} years old, and my sales for the last 3 months are ${this.monthlySales}.`)
    }

    totalSales() {
        var sales = 0;
        this.monthlySales.forEach(num => {
            sales += num;
        });
        return sales;
    }
}