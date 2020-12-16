function changeInput(event) {
    const toDoInput = document.getElementById("toDoInput");
    const toDoButton = document.getElementById("inputButton")

    if (toDoInput.value === ''){
        toDoButton.style.display = "none";
    } else {
        toDoButton.style.display = "inline";
    }

    if (event.keyCode === 13){
        addTodo();
    }
}

function addTodo() {
    const toDoInput = document.getElementById("toDoInput");
    const toDoListContainer = document.getElementById("toDoListContainer");
    const toDoContainers = document.getElementsByClassName("toDoContainer");
    const inputButton = document.getElementById("inputButton");

    toDoListContainer.innerHTML +=
        ` <div class="toDoContainer" id="toDoContainer${toDoContainers.length + 1}">
            <button class="toDoButton" id="toDoButton${toDoContainers.length + 1}" onclick="deleteTodo(${toDoContainers.length + 1})">x</button>
            <input type="checkbox" class="toDoCheckbox" id="toDoCheckbox${toDoContainers.length + 1}" onchange="changeCheckbox(${toDoContainers.length + 1})">
            <label class="toDoLabel" id="toDoLabel${toDoContainers.length + 1}">${toDoInput.value}</label>
        </div>`

        toDoInput.value = '';
        inputButton.style.display = 'none';

        const todos = JSON.parse(localStorage.getItem("todos") || "[]");

        todos.push({id: 1, todo:"Tekst", done: false});

        localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(id) {
    const container = document.getElementById(`toDoContainer${id}`);
    container.remove();
}

function changeCheckbox(id) {
    const checkbox = document.getElementById(`toDoCheckbox${id}`);
    const label = document.getElementById(`toDoLabel${id}`);

    if (checkbox.checked) {
        label.classList.add("toDoLabelCross");
    } else {
        label.classList.remove("toDoLabelCross");
    }
}













