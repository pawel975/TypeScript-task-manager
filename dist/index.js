"use strict";
// Getting elements
const addTaskForm = document.querySelector(".add-task__form");
const addTaskInput = document.querySelector("#add-task__input");
const addTaskSubmit = document.querySelector(".add-task__submit");
const tasksContainer = document.querySelector(".tasks-container__tasks");
const allTasks = document.querySelectorAll(".singleTask");
// Create task and Add it to task container
function addTask(taskName) {
    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.setAttribute("class", "singleTask");
    const taskNameContainer = document.createElement("span");
    taskNameContainer.textContent = taskName;
    singleTaskContainer.setAttribute("id", generateId());
    singleTaskContainer.appendChild(taskNameContainer);
    tasksContainer.appendChild(singleTaskContainer);
}
// Delete task based on id
function deleteTask(taskId) {
    const taskToDelete = [...tasksContainer.children].filter(task => task.id === taskId);
    console.log(taskToDelete);
    // tasksContainer.remove(taskToDelete)
}
function handleDeleteTaskBtnClick(e) {
    deleteTask(e.target.id);
}
function handleAddTaskFormSubmit(e) {
    e.preventDefault();
    addTask(addTaskInput.value);
}
function generateId() {
    const id = Math.floor(Math.random() * 100000);
    return id;
}
addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit);
allTasks.forEach(element => {
    element.addEventListener("click", deleteTask);
});
// window.addEventListener("click", deleteTask)
