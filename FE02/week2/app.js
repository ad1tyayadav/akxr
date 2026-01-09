const fs = require("fs")

const result = JSON.parse(fs.readFileSync('./employee.json', 'utf-8'));

console.log(typeof result)

const employe = result.map(emp =>  emp)

console.log(employe);
// const sortSalray = salary.sort()

// const sortAllEmp = (i) => {
//     if (employe[i].salary > employe[i + 1].salary) {
//         console.log(employe[i])
//     } else console.log(employe[i + 1])
// }

// sortAllEmp()