// Removing Task
const taskUl = document.querySelector('.task ul');


// couter Tags
let completedTask = document.querySelectorAll('.completed')
let completedTaskTag = document.querySelector("#completedTask")
let totalTask = taskUl.querySelectorAll('li')
let totalTaskTag = document.querySelector('#totalTask')

const addTodoListinLocalStorage = (todo) => {
    return localStorage.setItem('todos', JSON.stringify(todo))
};

const getListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

let todoList = getListFromLocalStorage();

const showTodoListFromLocalStorage = () => {
    todoList.forEach((currTodo) => {
        const li = document.createElement('li')
        const checkBox = document.createElement('input')
        const task = document.createElement('span')
        const dltBtn = document.createElement('button')

        // value add
        task.textContent = currTodo;
        dltBtn.textContent = 'Delete'

        task.classList.add('taskText')
        dltBtn.classList.add('delete')
        checkBox.classList.add('checkbox')


        checkBox.type = 'checkbox'

        taskUl.appendChild(li)
        li.appendChild(checkBox)
        li.appendChild(task)
        li.appendChild(dltBtn)
    })
}


taskUl.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        e.preventDefault();
        const li = e.target.parentElement
        const text = li.querySelector('span').textContent

        todoList = todoList.filter(todo => todo !== text)
        addTodoListinLocalStorage(todoList)

        taskUl.removeChild(li)
    }

    totalTask = document.querySelectorAll('li')
    completedTask = document.querySelectorAll('.completed')
    totalTaskTag.innerHTML = `<h3 id="totalTask">Total : ${totalTask.length}</h3>`
    completedTaskTag.innerHTML = `<h3 id="completedTask">Completed : ${completedTask.length}</h3>`
})

completedTaskTag.innerHTML = `<h3 id="completedTask">Completed : ${completedTask.length}</h3>`
totalTaskTag.innerHTML = `<h3 id="totalTask">Total : ${todoList.length}</h3>`

// Add Task
const form = document.getElementById('taskForm')

showTodoListFromLocalStorage()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = form.querySelector('input').value;
    if (value.trim() !== '') {
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

        todoList.push(value)


        addTodoListinLocalStorage(todoList)

        checkBox.type = 'checkbox'

        // apend
        taskUl.appendChild(li)
        li.appendChild(checkBox)
        li.appendChild(task)
        li.appendChild(dltBtn)
    }

    // counter
    totalTask = document.querySelectorAll('li')
    totalTaskTag.innerHTML = `<h3 id="totalTask">Total : ${totalTask.length}</h3>`


    form.reset()
})


// checkbox
taskUl.addEventListener('click', (e) => {
    const txt = e.target.nextElementSibling
    if (e.target.checked) {
        txt.classList.add('completed')
    } else {
        txt.classList.remove('completed')
    }

    completedTask = document.querySelectorAll('.completed')
    completedTaskTag.innerHTML = `<h3 id="completedTask">Completed : ${completedTask.length}</h3>`
})


// clear all completed 
const removeAll = document.querySelector('#removeAll')

removeAll.addEventListener('click', (e) => {
    const task = document.querySelectorAll('.completed')
    task.forEach((taskTodo) => {
        const text = taskTodo.textContent
        todoList = todoList.filter(todo => todo !== text)
        taskTodo.parentElement.remove()
    })

    addTodoListinLocalStorage(todoList)

    completedTask = document.querySelectorAll('.completed')
    totalTask = document.querySelectorAll('li')
    completedTaskTag.innerHTML = `<h3 id="completedTask">Completed : ${completedTask.length}</h3>`
    totalTaskTag.innerHTML = `<h3 id="totalTask">Total : ${totalTask.length}</h3>`
})

