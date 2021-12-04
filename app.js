import {BUTTONS_ADD, DELETE, CHECKBOXES, TASKS} from './view.js'

for (let i = 0; i < BUTTONS_ADD.length; i++) {

    BUTTONS_ADD[i].addEventListener('click', function (e) {
        e.preventDefault()
    })

    BUTTONS_ADD[i].addEventListener('click', function () {
        const task = TASKS[i]
        const div = document.createElement('div')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const button = document.createElement('input')
        const isEmptyTask = task.value.trim()

        if (!isEmptyTask) {
            task.value = ''
            return task.classList.add('error')
        }

        div.className = 'input-todo'
        label.className = 'text__input-body'
        label.textContent = task.value
        task.value = ''
        input.className = 'input__checkbox'
        input.type = 'checkbox'
        input.addEventListener('click', changeStatus)
        button.className = 'button_close'
        button.type = 'button'
        button.addEventListener('click', deleteTask)
        task.classList.remove('error')

        task.after(div)
        div.append(label)
        div.append(input)
        div.append(button)
    })
}


for (const deleted of DELETE) {
    deleted.addEventListener('click', deleteTask)
}

for (const checkbox of CHECKBOXES) {
    checkbox.addEventListener('click', changeStatus)
}

function deleteTask() {
    this.parentElement.remove()
}

function changeStatus() {
    this.parentElement.classList.toggle('checked__back')
}



