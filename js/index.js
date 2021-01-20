window.onload = function () {
    const todos = JSON.parse(localStorage.getItem("todos") || '[]');
    const toDoListContainer = document.getElementById("toDoListContainer");

    for (let i = 0; i < todos.length; i++) {
        const id = todos[i].id;
        const todo = todos[i].todo;
        let labelClasses;
        if (todos[i].done){
            labelClasses = 'toDoLabel toDoLabelCrossed';
        } else {
            labelClasses = 'toDoLabel';
        }

        toDoListContainer.innerHTML +=
            ` <div class="toDoContainer" id="toDoContainer${id}">
                 <button class="toDoButton" id="toDoButton${id}" onclick="deleteTodo(${id})">x</button>
                 <input type="checkbox" class="toDoCheckbox" id="toDoCheckbox${id}" onchange="changeCheckbox(${id})">
                 <label class="${labelClasses}" id="toDoLabel${id}">${todo}</label>
             </div>`

    }
}

function changeInput(event) {
    const toDoInput = document.getElementById("toDoInput");
    const toDoButton = document.getElementById("inputButton")

    if (toDoInput.value === '') {
        toDoButton.style.display = "none";
    } else {
        toDoButton.style.display = "inline";
    }

    if (event.keyCode === 13) {
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


    // todos = [
    //  {id: 1, todo: "jakies zadanie", done: true},
    // {id: 2, todo: " drugie jakies", done: true },
    // {id: 3, todo: " drugie jakies", done: true },
    // {id: 3, todo: " drugie jakies", done: true },
    //]

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    let currentIndex;

    if (todos.length === 0) {
        currentIndex = 0;
    } else {
        currentIndex = todos[todos.length - 1].id;
    }

    todos.push({id: currentIndex + 1, todo: toDoInput.value, done: false});

    localStorage.setItem("todos", JSON.stringify(todos));

    toDoInput.value = '';
    inputButton.style.display = 'none';
}

function deleteTodo(id) {
    const container = document.getElementById(`toDoContainer${id}`);
    container.remove();

    const todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos.splice(i, 1);
        }
    }

    localStorage.setItem("todos", JSON.stringify(todos));
}

function changeCheckbox(id) {
    const checkbox = document.getElementById(`toDoCheckbox${id}`);
    const label = document.getElementById(`toDoLabel${id}`);

    if (checkbox.checked) {
        label.classList.add("toDoLabelCross");
    } else {
        label.classList.remove("toDoLabelCross");
    }

    const todos = JSON.parse(localStorage.getItem("todos"));

    for (let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            if(todos[i].done === true){
                todos[i].done = false;
            } else {
                todos[i].done = true;
            }
        }
    }
    localStorage.setItem("todos", JSON.stringify(todos));

}
