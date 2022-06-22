"use strict";
// Getting elements
const addTaskForm = document.querySelector(".add-task__form");
const addTaskInput = document.querySelector("#add-task__input");
const addTaskSubmit = document.querySelector(".add-task__submit");
const tasksContainer = document.querySelector(".tasks-container__tasks");
let taskList = getTasksFromLocalStorage();
// Initial tasks render
renderTasks(taskList);
// Create task object and add it to taskList array
function addToTaskList(taskName) {
    const newTask = {
        id: generateId(),
        taskName: taskName
    };
    taskList.push(newTask);
    resetAddTaskInput();
}
function renderTasks(taskList) {
    // clear tasks container before render or re-render
    [...tasksContainer.children].forEach(task => {
        tasksContainer.removeChild(task);
    });
    // render tasks
    taskList.forEach(task => {
        const singleTaskContainer = document.createElement("div");
        singleTaskContainer.classList.add('singleTask');
        singleTaskContainer.setAttribute("id", task.id);
        const taskNameContainer = document.createElement("span");
        taskNameContainer.textContent = task.taskName;
        const taskDeleteBtn = document.createElement("button");
        singleTaskContainer.appendChild(taskNameContainer);
        singleTaskContainer.appendChild(taskDeleteBtn);
        tasksContainer.appendChild(singleTaskContainer);
    });
    // Set every task delete btn to handle delete process
    const allTasks = [...tasksContainer.children];
    allTasks.forEach(task => {
        task.children[1].addEventListener("click", handleDeleteTaskBtnClick);
    });
}
// Delete task based on id
function deleteTask(clickedTaskId) {
    taskList.forEach(task => {
        if (task.id === Number(clickedTaskId)) {
            taskList.splice(taskList.indexOf(task), 1);
        }
    });
}
function resetAddTaskInput() {
    addTaskInput.value = "";
}
function saveTasksToLocalStorage(taskList) {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}
function getTasksFromLocalStorage() {
    const localStorageRecord = localStorage.getItem("tasks");
    if (localStorageRecord) {
        const localStorageTasks = JSON.parse(localStorageRecord);
        return localStorageTasks;
    }
    else
        return [];
}
/* Event handlers */
function handleDeleteTaskBtnClick(e) {
    deleteTask(e.target.parentNode.id);
    saveTasksToLocalStorage(taskList);
    renderTasks(taskList);
}
function handleAddTaskFormSubmit(e) {
    e.preventDefault();
    if (addTaskInput.value.length >= 3) {
        addToTaskList(addTaskInput.value);
    }
    else {
        alert("Task must contain at least 3 letters");
        addTaskInput.focus();
    }
    saveTasksToLocalStorage(taskList);
    renderTasks(taskList);
}
// Event Listeners
addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit);
function generateId() {
    const id = Math.floor(Math.random() * 100000);
    return id;
}
//# sourceMappingURL=index.js.map