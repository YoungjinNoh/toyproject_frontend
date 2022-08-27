let insertBtn = document.querySelector(".TodoInsert button");
let todoList = document.querySelector(".TodoList")

function createTodo() {
    let todoString = document.querySelector(".TodoInsert input").value;



    if (todoString === "") {
        return;
    }


    fetch("http://52.78.75.188:8080/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: todoString,
        }),
    })
        .then((response) => response.json())
        .then(() => location.reload())
}

function deleteTodo(id) {
    fetch("http://52.78.75.188:8080/todos/" + id, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then(() => location.reload())
}

function updateTodo(id) {
    fetch("http://52.78.75.188:8080/todos/" + id, {
        method: "PATCH",
    })
        .then((response) => response.json())
        .then(() => location.reload())
}

function initTodos() {
    fetch("http://52.78.75.188:8080/todos")
        .then((response) => response.json())
        .then((json) => {
            json.forEach(todo => {
                let todoItem = document.createElement("div");
                todoItem.className = "TodoListItem";
                let checkBox = document.createElement("div");
                checkBox.className = "checkbox";
                let icon = document.createElement("div");
                icon.className = "icon";
                if (todo.checked) {
                    icon.appendChild(document.createTextNode("■"));
                }
                else {
                    icon.appendChild(document.createTextNode("□"));
                }
                let text = document.createElement("div");
                text.className = "text";
                text.appendChild(document.createTextNode(todo.content));
                let button = document.createElement("button");
                button.className = "remove";
                button.appendChild(document.createTextNode("X"));

                checkBox.onclick = () => { updateTodo(todo.id) }
                button.onclick = () => { deleteTodo(todo.id) }



                checkBox.appendChild(icon);
                checkBox.appendChild(text);
                todoItem.appendChild(checkBox);
                todoItem.appendChild(button);
                todoList.appendChild(todoItem);
            })

        })
}


insertBtn.onclick = createTodo;

initTodos();







