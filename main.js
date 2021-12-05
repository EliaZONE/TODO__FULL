import {BUTTONS_ADD, DELETE, CHECKBOXES, TASKS, FORMS} from './view.js'

BUTTONS_ADD.forEach(function(item, i) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
    })

    item.addEventListener('click', function () {
        const task = TASKS[i]
        const createDiv = document.createElement('div')
        const createLabel = document.createElement('label')
        const createInput = document.createElement('input')
        const createButton = document.createElement('input')
        const isNotEmptyTask = task.value.trim()

        if (!isNotEmptyTask) {
            resetForm(FORMS)
            return task.classList.add('error')
        }

        createDiv.className = 'input-todo'
        createLabel.className = 'text__input-body'
        createLabel.textContent = task.value
        resetForm(FORMS)
        createInput.className = 'input__checkbox'
        createInput.type = 'checkbox'
        createInput.addEventListener('click', changeStatus)
        createButton.className = 'button_close'
        createButton.type = 'button'
        createButton.addEventListener('click', deleteTask)
        task.classList.remove('error')

        task.after(createDiv)
        createDiv.append(createLabel)
        createDiv.append(createInput)
        createDiv.append(createButton)
    })
})

function resetForm(forms) {
    forms.forEach(item => item.reset())
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



