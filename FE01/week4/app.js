const form = document.querySelector('form')
const btn = document.querySelector('button')
const value = document.querySelector('input').value

const answer = [
    'https://c.tenor.com/1m8Op3rv0KkAAAAC/tenor.gif',
    'https://c.tenor.com/OiJ2GK4wNlEAAAAC/tenor.gif',
    'https://c.tenor.com/Dq91vZHfn-IAAAAd/tenor.gif'
]

const gif = document.querySelector('#image')

const genrateRandNum = () => {
    return Math.floor(Math.random() * 100)
}

const num = genrateRandNum();



btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = document.querySelector('input').value
    if (value != '') {
        if (num > value) {
            gif.innerHTML = `<img src=${answer[0]} alt=my num is greater than ${value}>`
        } else if (num < value) {
            gif.innerHTML = `<img src=${answer[1]} alt=my num is smaller than ${value}>`
        } else {
            gif.innerHTML = `<img src=${answer[2]} alt="Ghop Ghop">`
        }
        form.reset()
    }

})
