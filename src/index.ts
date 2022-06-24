import { generateId, getTasksFromLocalStorage, saveTasksToLocalStorage } from "./helperFunctions";
import { TaskListElement } from "./interfaces";
import "./styles.css"

// Getting elements
const addTaskInput: HTMLInputElement = document.querySelector("#add-task__input")!;
const addTaskSubmit: HTMLInputElement = document.querySelector(".add-task__submit")!;
const tasksContainer: HTMLDivElement = document.querySelector(".tasks-container__tasks")!;

let taskList: TaskListElement[] = getTasksFromLocalStorage()

// Initial tasks render
renderTasks(taskList)


// Create task object and add it to taskList array
function addToTaskList(taskName: string): void {

    const newTask: TaskListElement = 
    {
        id: generateId(),
        taskName: taskName
    }
    taskList.push(newTask);

    resetAddTaskInput();
}

function renderTasks(taskList: TaskListElement[]) {

    // clear tasks container before render or re-render
    [...tasksContainer.children].forEach(task => {
        tasksContainer.removeChild(task);
    });

    // render tasks
    taskList.forEach(task => {
        const singleTaskContainer = document.createElement("div");
        singleTaskContainer.classList.add('singleTask')
        singleTaskContainer.setAttribute("id", <string>task.id)

        const taskNameContainer = document.createElement("span");
        taskNameContainer.textContent = task.taskName;
        const taskDeleteBtn = document.createElement("button");
        
        singleTaskContainer.appendChild(taskNameContainer);
        singleTaskContainer.appendChild(taskDeleteBtn);

        tasksContainer.appendChild(singleTaskContainer);
    })

    // Set every task delete btn to handle delete process
    const allTasks = [...tasksContainer.children];
    allTasks.forEach(task => {
        task.children[1].addEventListener("click", handleDeleteTaskBtnClick)
    });
    
}

// Delete task based on id
function deleteTask(clickedTaskId: number | string): void {

    taskList.forEach(task => {
        if (task.id === Number(clickedTaskId)) {
            taskList.splice(taskList.indexOf(task), 1)
        }
    })
}

function resetAddTaskInput(): void {
    addTaskInput.value = "";
}


/* Event handlers */ 

function handleDeleteTaskBtnClick(e: any): void {
    deleteTask(e.target.parentNode.id);
    saveTasksToLocalStorage(taskList);
    renderTasks(taskList)
}

function handleAddTaskFormSubmit(e: any): void {
    e.preventDefault();

    if (addTaskInput.value.length >= 3) {
        addToTaskList(addTaskInput.value);
    } else {
        console.log(addTaskInput.value.length)
        alert("Task must contain at least 3 letters");
        addTaskInput.focus();
    }

    saveTasksToLocalStorage(taskList);
    renderTasks(taskList)
}


// Event Listeners

addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit)


