let insertBtn = document.querySelector(".TodoInsert button");
let todoList = document.querySelector(".TodoList")
insertBtn.onclick = () => {
    let todoString = document.querySelector(".TodoInsert input").value;
    if (todoString === "") {
        return;
    }


    document.querySelector(".TodoInsert input").value = "";
    let todoItem = document.createElement("div");
    todoItem.className = "TodoListItem";
    let checkBox = document.createElement("div");
    checkBox.className = "checkbox";
    let icon = document.createElement("div");
    icon.className = "icon";
    icon.appendChild(document.createTextNode("□"));
    let text = document.createElement("div");
    text.className = "text";
    text.appendChild(document.createTextNode(todoString));
    let button = document.createElement("button");
    button.className = "remove";
    button.appendChild(document.createTextNode("X"));

    checkBox.onclick = () => {
        checkBox.classList.toggle("checked");
        if (checkBox.classList.contains("checked")) {
            checkBox.querySelector(".icon").textContent = "■";
        }
        else {
            checkBox.querySelector(".icon").textContent = "□";
        }
    }
    button.onclick = () => { todoItem.remove() }



    checkBox.appendChild(icon);
    checkBox.appendChild(text);
    todoItem.appendChild(checkBox);
    todoItem.appendChild(button);
    todoList.appendChild(todoItem);

}

let todos = document.querySelectorAll(".TodoListItem")
for (let i = 0; i < todos.length; i++) {
    let checkbox = todos[i].querySelector(".checkbox");
    let remove = todos[i].querySelector(".remove");
    checkbox.onclick = () => {
        checkbox.classList.toggle("checked");
        if (checkbox.classList.contains("checked")) {
            checkbox.querySelector(".icon").textContent = "■";
        }
        else {
            checkbox.querySelector(".icon").textContent = "□";
        }
    }
    remove.onclick = () => { todos[i].remove() }
}