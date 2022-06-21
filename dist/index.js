"use strict";
// Getting elements
const addTaskForm = document.querySelector(".add-task__form");
const addTaskInput = document.querySelector("#add-task__input");
const addTaskSubmit = document.querySelector(".add-task__submit");
const tasksContainer = document.querySelector(".tasks-container__tasks");
// Create task and Add it to task container
function addTask(taskName) {
    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add('singleTask');
    singleTaskContainer.setAttribute("id", generateId());
    const taskNameContainer = document.createElement("span");
    taskNameContainer.textContent = taskName;
    const taskDeleteBtn = document.createElement("button");
    singleTaskContainer.appendChild(taskNameContainer);
    singleTaskContainer.appendChild(taskDeleteBtn);
    tasksContainer.appendChild(singleTaskContainer);
}
// Delete task based on id
function deleteTask(taskId) {
    const taskToDelete = [...tasksContainer.children].filter(task => task.id === taskId)[0];
    if (taskToDelete)
        tasksContainer.removeChild(taskToDelete);
}
/* Event handlers */
function handleDeleteTaskBtnClick(e) {
    deleteTask(e.target.parentNode.id);
}
function handleAddTaskFormSubmit(e) {
    e.preventDefault();
    addTask(addTaskInput.value);
    // Set every task delete btn to handle delete process
    const allTasks = [...tasksContainer.children];
    allTasks.forEach(task => {
        task.children[1].addEventListener("click", handleDeleteTaskBtnClick);
    });
}
// Event Listeners
addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit);
function generateId() {
    const id = Math.floor(Math.random() * 100000);
    return id;
}
