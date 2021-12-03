import {BUTTONS_ADD, DELETE, CHECKBOXES, LISTS} from './view.js'

for (const add of BUTTONS_ADD) {
    add.addEventListener('click', addTask)
    add.addEventListener('click', function (e) {
        e.preventDefault()
    })
}

function addTask() {
    const TASK_HIGH = document.getElementById('high')
    const TASK_LOW = document.getElementById('low')

    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('input')

    if (TASK_HIGH.value === '' && TASK_LOW.value === '') {
        return alert('Введите задачу')
    }

    div.className = 'input-todo'
    label.className = 'text__input-body'
    input.className = 'input__checkbox'
    input.type = 'checkbox'
    button.className = 'button_close'
    button.type = 'button'

    if (TASK_HIGH.value) {
        label.textContent = TASK_HIGH.value
        TASK_HIGH.value = ''
    }
    if (TASK_LOW.value) {
        label.textContent = TASK_LOW.value
        TASK_LOW.value = ''
    }

    for (const list of LISTS) {
        this.after(div)
        div.append(label)
        div.append(input)
        div.append(button)
    }

    const DELETE = document.querySelectorAll('.button_close')

    for (const deleted of DELETE) {
        deleted.addEventListener('click', deleteTask)
    }

    const CHECKBOXES = document.querySelectorAll('.input__checkbox')

    for (const checkbox of CHECKBOXES) {
        checkbox.addEventListener('click', taskDone)
    }
}

for (const deleted of DELETE) {
    deleted.addEventListener('click', deleteTask)
}

for (const checkbox of CHECKBOXES) {
    checkbox.addEventListener('click', taskDone)
}

function deleteTask() {
    for (const list in LISTS) {
        this.parentElement.remove()
    }
}

function taskDone() {
    this.parentElement.classList.toggle('checked__back')
}



