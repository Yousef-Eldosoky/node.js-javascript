const Employee = require('./Employee');

// Input: Creating 5 employee instances
const employees = [
    new Employee("Alice", 30, [5000, 7000, 8000]),
    new Employee("Bob", 25, [6000, 7500, 8500]),
    new Employee("Charlie", 28, [4000, 6500, 7000]),
    new Employee("Diana", 35, [9000, 11000, 10000]),
    new Employee("Eve", 29, [3000, 4000, 5000])
];

maxTotalSales = Number.MIN_SAFE_INTEGER

// name of the employee with the highest total sales
maxName = ""

// total for all mployees
totalSales = 0 

for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    if(employee.totalSales() > maxTotalSales) {
        maxTotalSales = employee.totalSales();
        maxName = employee.name;
    }
    totalSales += employee.totalSales();
}

average = totalSales / employees.length;


// output
for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    employee.introduce();
    if (employee.totalSales() > average) {
        console.log( "above average");
    } else {
        console.log( "below average");
    }
}

console.log("Employee with the highest total sales is "+ maxName);