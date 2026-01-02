const form = document.querySelector('form')
const btn = document.querySelector('.check')
const value = document.querySelector('input').value

const answer = [
    'https://c.tenor.com/1m8Op3rv0KkAAAAC/tenor.gif',
    'https://c.tenor.com/OiJ2GK4wNlEAAAAC/tenor.gif',
    'https://c.tenor.com/Dq91vZHfn-IAAAAd/tenor.gif'
]

const gif = document.querySelector('#image')

const addBestScoreInLS = (attempts) => {
    const best = getBestScoreFromLS()
    if (best == null || attempts < best)
        localStorage.setItem('bestScore', JSON.stringify(attempts))
}

const getBestScoreFromLS = () => {
    return JSON.parse(localStorage.getItem('bestScore'))
}

let bestAttempt = getBestScoreFromLS()


// Random Num Genrator
const genrateRandNum = () => {
    return Math.floor(Math.random() * 100)
}


let num = genrateRandNum();

// Attempt Counter
let flag = 0
const attempt = document.querySelector('#attempt')

// Checking Number
btn.addEventListener('click', (e) => {
    e.preventDefault();
    flag++
    const value = document.querySelector('input').value
    if (value != '') {
        if (num > value) {
            gif.innerHTML = `<img src=${answer[0]} alt=my num is greater than ${value}>`
        } else if (num < value) {
            gif.innerHTML = `<img src=${answer[1]} alt=my num is smaller than ${value}>`
        } else {
            gif.innerHTML = `<img src=${answer[2]} alt="Ghop Ghop">`
            attempt.textContent = `Total Attempt = ${flag}`
            addBestScoreInLS(flag)
        }
        form.reset()
    }
})

// Showing Best
const best = getBestScoreFromLS()
if(best != null){
    const show = document.querySelector('#best')
    show.textContent = `Best Score: ${best}`
}

// Restart
const restart = document.querySelector('#restart')

restart.addEventListener('click', (e) => {
    window.location.reload();
})

// DarkMode
const mode = document.querySelector('.modeBtn')
const body = document.querySelector('body')

mode.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('darkMode')

    mode.innerHTML = body.classList.contains('darkMode')
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>'
})