//  fs style giving error in broweser console
/*
const fs = require("fs")

const result = JSON.parse(fs.readFileSync('./employee.json', 'utf-8'));

console.log(typeof result)
const employe = result.map(emp => emp)

const sortSalary = employe.sort((a, b) => a.salary - b.salary).reverse();
fs.writeFileSync('./sortEmp.json', JSON.stringify(sortSalary))

const expMore3 = employe.filter((emp) => emp.experience > 3)
fs.writeFileSync('./experienceMoreThree.json', JSON.stringify(expMore3))
*/

// using fetch

async function fetching() {
    const data = await fetch("https://gist.githubusercontent.com/yash2324/aabffcf0729fd5750d9d21af9a1230c8/raw/460d6294586ed33d95ad8405867ff38c034ac14c/fe02_week1_challenge.json")

    return await data.json()
}

const btn1 = document.querySelector("#btn1")
const list = document.querySelector("#list")

btn1.addEventListener("click", async (e) => {
    e.preventDefault()
    const dataObj = await fetching();

    // console.log(typeof dataObj);

    const data = dataObj.sort((a, b) => a.salary - b.salary).reverse()
    list.innerHTML = data.map(e => `<ul><li>Name:${e.name} </br> Salary:${e.salary}</li></ul>`).join('')
})

const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", async (e) => {
    e.preventDefault()
    const dataObj = await fetching();

    const threeExp = dataObj.filter((e) => e.experience > 3).sort((a, b) => a.experience - b.experience)
    // console.log(threeExp);

    list.innerHTML = threeExp.map(e => `<ul><li>Name:${e.name} </br> Experience:${e.experience}</li></ul>`).join('')
})


const btn3 = document.querySelector("#btn3")

btn3.addEventListener("click", async (e) => {
    e.preventDefault()
    const dataObj = await fetching();

    list.innerHTML = dataObj.map(e => `<ul><li>Name:${e.name} </br> Experience:${e.department} </br> Bonus: ${Math.floor(e.experience * 0.10 * e.salary)}</li></ul>`).join('')
})
