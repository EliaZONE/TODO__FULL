import {BUTTONS_ADD, DELETE, CHECKBOX, LISTS} from './view.js'

for (const add of BUTTONS_ADD) {
    add.addEventListener('click', addTask)
    add.addEventListener('click', function (e) {
        e.preventDefault()
    })
}

function addTask() {
    let TASK__HIGH = document.getElementById('high')
    let TASK__LOW = document.getElementById('low')

    let div = document.createElement('div')
    let label = document.createElement('label')
    let input = document.createElement('input')
    let button = document.createElement('input')

    if (TASK__HIGH.value === '' && TASK__LOW.value === '') {
        return alert('Введите задачу')
    }

    div.className = 'input-todo'
    label.className = 'text__input-body'
    input.className = 'input__checkbox'
    input.type = 'checkbox'
    button.className = 'button_close'
    button.type = 'button'

    if (TASK__HIGH.value) {
        label.textContent = TASK__HIGH.value
        TASK__HIGH.value = ''
    }
    if (TASK__LOW.value) {
        label.textContent = TASK__LOW.value
        TASK__LOW.value = ''
    }

    for (const list of LISTS) {
        this.after(div)
        div.append(label)
        div.append(input)
        div.append(button)
    }

    const DELETE = document.querySelectorAll('.button_close')

    for (const button of DELETE) {
        button.addEventListener('click', deleteTask)
    }

    const CHECKBOX = document.querySelectorAll('.input__checkbox')

    for (const check of CHECKBOX) {
        check.addEventListener('click', taskDone)
    }
}

for (const button of DELETE) {
    button.addEventListener('click', deleteTask)
}

for (const check of CHECKBOX) {
    check.addEventListener('click', taskDone)
}

function deleteTask() {
    for (const list in LISTS) {
        this.parentElement.remove()
    }
}

function taskDone() {
    this.parentElement.classList.toggle('checked__back')
}



