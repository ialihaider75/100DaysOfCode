function addTask() {
    var taskInput = document.querySelector(".task-input");
    var taskObject = {
        "id": generateUniqueIdForNewTask(),
        "task": taskInput.value
    };
    var domTaskElement = document.createElement("div");
    domTaskElement.setAttribute("id", taskObject.id);
    var domTaskElementRemoveBtn = document.createElement("a");
    domTaskElementRemoveBtn.innerHTML = "<i class='fas fa-window-close'></i>";
    domTaskElement.append(document.createElement("span").innerText = taskObject.task);
    domTaskElement.append(domTaskElementRemoveBtn);
    document.querySelector(".task-list").append(domTaskElement);
    taskInput.value = "";
}

function generateUniqueIdForNewTask() {
    var taskList = document.querySelector(".task-list");
    console.log(taskList);
    var index = taskList.getElementsByTagName("div").length;
    return index;
}