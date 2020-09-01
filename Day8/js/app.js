function addTask() {
    var taskInput = document.querySelector(".task-input");
    var taskObject = {
        "id": generateUniqueIdForNewTask(),
        "task": taskInput.value
    };
    var domTaskElement = document.createElement("div");
    domTaskElement.setAttribute("id", taskObject.id);
    domTaskElement.setAttribute("class", "task");
    var domTaskElementRemoveBtn = document.createElement("a");
    domTaskElementRemoveBtn.setAttribute("class", "task-remove-btn");
    domTaskElementRemoveBtn.innerHTML = "<i class='fas fa-window-close'></i>";
    domTaskElementRemoveBtn.addEventListener("click", function () {
        removeTask(this.parentNode.getAttribute("id"));
    });
    domTaskElement.append(document.createElement("span").innerText = taskObject.task);
    domTaskElement.append(domTaskElementRemoveBtn);
    domTaskElement.addEventListener("click", function () {
        markTaskAsDone(this);
    });
    document.querySelector(".task-list").append(domTaskElement);
    document.querySelector(".task-count").innerText = document.getElementsByClassName("task").length;
    taskInput.value = "";
}

function generateUniqueIdForNewTask() {
    var taskList = document.querySelector(".task-list");
    var index = taskList.getElementsByTagName("div").length;
    return index;
}

function removeTask(id) {
    task = document.getElementById(id);
    task.parentNode.removeChild(task);
    document.querySelector(".task-count").innerText = document.getElementsByClassName("task").length;
}

function markTaskAsDone(task) {
    task.style.backgroundColor = "#29db2f";
}