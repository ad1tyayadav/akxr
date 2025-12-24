const input = document.querySelector('input');
const lists = [...document.querySelectorAll('.list')];

input.addEventListener('input', () => {
    const value = input.value.toLowerCase();

    lists.forEach(target => {
        const name = target.querySelector('h2').innerText.toLowerCase();
        const description = target.querySelector('p').innerText.toLocaleLowerCase();

        target.style.display = name.includes(value) || description.includes(value) ? 'flex' : 'none';
    });
});
