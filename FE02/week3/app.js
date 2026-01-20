// 1 read karna hai
// 2 Sab transiction ko sort krna date ke according
// 3 filer and analyze
// 3.1 total debit and credit sare account ka
// 3.2 largest transiction ko find kr hai/user
// 3.3 jnha pe salary likha hai un sare transiction ka list bnao
// 4 ek array form mein sumrize kro
// 5 ek new csv file bnana hai jo array genrate hai uska



// Step 1
const fs = require("fs")

const data = fs.readFileSync('./bank.csv', "utf-8")
// console.log(typeof data)

const line = data.split('\n')
// console.log(line);

const header = line[0].trim().split(',')
// console.log(header);

const dataArr = []

for (let i = 1; i < line.length; i++) {
    const lineObj = line[i].split(',')
    //    console.log(lineObj);

    const obj = {}

    header.forEach((key, index) => {
        obj[header[index]] = lineObj[index].trim('\r')
    })

    obj.Amount = Number(obj.Amount)


    dataArr.push(obj)

}

// console.log(dataArr);
// console.log(dataArr[0]);

// Step-2 Sorting 
const sortData = dataArr.sort((a, b) => new Date(a.Date) - new Date(b.Date));
console.log(sortData);

const summary = {}

sortData.forEach((data) => {
    const accountHolder = data.AccountHolder

    if (!summary[accountHolder]) {
        summary[accountHolder] = {
            AccountHolder: accountHolder,
            TotalCredit: 0,
            TotalDebit: 0,
            LargestTransaction: 0,
            SalaryTransactions: []
        }
    }


    if (data.Type) {
        if (data.Type.toLowerCase() === 'credit') {
            summary[accountHolder].TotalCredit += data.Amount
        } else {
            summary[accountHolder].TotalDebit += Math.abs(data.Amount)
        }
    }

    if (Math.abs(data.Amount) > summary[accountHolder].LargestTransaction) {
        summary[accountHolder].LargestTransaction = data.Amount
    }

    if (data.Remarks) {
        if (data.Remarks.toLowerCase().includes('salary')) {
            summary[accountHolder].SalaryTransactions.push(data.TransactionID)
        }
    }
})

const finalData = Object.values(summary);
// console.log(finalData);

const csvHeader = 'AccountHolder,TotalCredit,TotalDebit,LargestTransaction,SalaryTransactions';

let csvContent = csvHeader + '\n';


finalData.forEach((curr) => {
   const rowOfFile = [
        curr.AccountHolder,
        curr.TotalCredit,
        curr.TotalDebit,
        curr.LargestTransaction,
        curr.SalaryTransactions.join('|')
    ].join(',');

    csvContent += rowOfFile + '\n'
})

fs.writeFileSync('./output.csv', csvContent, 'utf-8');