let todoField = document.getElementById("todoField")
let todoButton = document.getElementById("todoBtn")
let todoUL = document.getElementById("todoList")

let todos = []

displayTodo()

todoButton.onclick = () => {
    let value = todoField.value
    let todo = {
        id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1,
        todo: value,
        done: false
    }
    todos.push(todo)
    displayTodo()
}

function displayTodo() {
    todoUL.innerHTML = ""
    todos.map(todo => {
        let todoLI = document.createElement("li")
        todoLI.innerHTML = todo.todo
        todoLI.classList.add("todo-item")
        todoUL.appendChild(todoLI)
        todoField.value = ""
    })
}