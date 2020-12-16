function changeInput() {
    const toDoInput = document.getElementById("toDoInput");
    const toDoButton = document.getElementById("inputButton")

    if (toDoInput.value === ''){
        toDoButton.style.display = "none";
    } else {
        toDoButton.style.display = "inline";
    }
}

