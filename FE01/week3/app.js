// Removing Task
const taskUl = document.querySelector('.task ul');

taskUl.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        e.preventDefault();
        const li = e.target.parentElement
        taskUl.removeChild(li)
    }
})

// Add Task
const form = document.getElementById('taskForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = form.querySelector('input').value;

    //create elements
    const li = document.createElement('li')
    const checkBox = document.createElement('input')
    const task = document.createElement('span')
    const dltBtn = document.createElement('button')

    // value add
    task.textContent = value
    dltBtn.textContent = 'Delete'

    // add class
    task.classList.add('taskText')
    dltBtn.classList.add('delete')
    checkBox.classList.add('checkbox')


    checkBox.type = 'checkbox'

    // apend
    taskUl.appendChild(li)
    li.appendChild(checkBox)
    li.appendChild(task)
    li.appendChild(dltBtn)

    form.reset()
})


// checkbox
taskUl.addEventListener('click', (e) => {
    if (e.target.type == 'checkbox') {
        const txt = e.target.nextElementSibling
        if (e.target.checked) {
            txt.classList.add('completed')
        } else {
            txt.classList.remove('completed')
        }
    }
})


// clear all completed 
const removeAll = document.querySelector('#removeAll')

removeAll.addEventListener('click', (e) => {
    const task = document.querySelectorAll('.completed')
    task.forEach((task) => {
        task.parentElement.remove()
    })

})