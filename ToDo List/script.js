const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        let checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        li.appendChild(checkbox);

        let taskText = document.createElement("span");
        taskText.textContent = inputBox.value;
        li.appendChild(taskText);

        let deleteButton = document.createElement("span");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");
        li.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            listContainer.removeChild(li);
        });

        checkbox.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        listContainer.appendChild(li);
        inputBox.value = "";
    }
}
