import { generateId, getTasksFromLocalStorage, resetAddTaskInput, saveTasksToLocalStorage } from "./helperFunctions";
import { TaskTemplateListElement } from "./interfaces";
import "./styles.css"

// Getting elements
const addTaskInput = <HTMLInputElement>document.querySelector("#add-task__input");
const addTaskSubmit = <HTMLInputElement>document.querySelector(".add-task__submit");
const tasksContainer = <HTMLDivElement>document.querySelector(".tasks-container__tasks");
const filterSectionInputs = [...document.getElementsByName("filter-option")];

let taskTemplateList: TaskTemplateListElement[] = getTasksFromLocalStorage()

// Initial tasks render
renderTasks(taskTemplateList)


// Create task object and add it to taskList array
function addToTaskList(taskName: string): void {

    const newTask: TaskTemplateListElement = 
    {
        id: generateId(),
        taskName: taskName,
        completionStatus: "active"
    }
    taskTemplateList.push(newTask);

    resetAddTaskInput(addTaskInput);
}

function renderTasks(taskTemplateList: TaskTemplateListElement[]) {
    // const status = [...filterSectionInputs].filter(input => console.log(input.checked));
    // const status = [...filterSectionInputs].filter(input => input.checked === "true");
    console.log(status);
    
    // clear tasks container before render or re-render
    tasksContainer.textContent = "";

    // render tasks
    taskTemplateList.forEach(taskTemplate => {
        const singleTaskContainer = document.createElement("div");
        singleTaskContainer.classList.add('singleTask');
        singleTaskContainer.setAttribute("id", <string>taskTemplate.id);
        singleTaskContainer.setAttribute("data-completion-status", taskTemplate.completionStatus)

        const taskNameContainer = document.createElement("span");
        taskNameContainer.textContent = taskTemplate.taskName;
        
        const taskCompleteBtn = document.createElement("button");
        taskCompleteBtn.classList.add("complete-task-btn");

        const taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.classList.add("delete-task-btn");
        
        singleTaskContainer.appendChild(taskNameContainer);
        singleTaskContainer.appendChild(taskCompleteBtn);
        singleTaskContainer.appendChild(taskDeleteBtn);

        tasksContainer.appendChild(singleTaskContainer);
    })

    // Set every task btn event
    const allTasks = [...tasksContainer.children];
    allTasks.forEach(task => {

        [...task.children].forEach(child => {
            if (child.nodeName === "BUTTON") {

                if (child.className === "delete-task-btn") {
                    child.addEventListener("click", handleDeleteTaskBtnClick)
                } else if (child.className === "complete-task-btn") {
                    child.addEventListener("click", handleCompleteTaskBtnClick)
                }

            }
        })

    });
    
}

// Delete task based on id
function deleteTask(taskDeleteBtn: HTMLButtonElement): void {

    const taskContainerId = taskDeleteBtn.parentElement.id;

    taskTemplateList.forEach(taskTemplate => {
        if (taskTemplate.id === Number(taskContainerId)) {
            taskTemplateList.splice(taskTemplateList.indexOf(taskTemplate), 1)
        }
    })
}

// Toggle task completion status
function toggleTaskCompletionStatus(taskCompleteBtn: HTMLButtonElement): void {
    
    const taskContainer = taskCompleteBtn.parentElement;
    const taskCompletionStatus = taskContainer.getAttribute("data-completion-status");

    if (taskCompletionStatus === "active") {
        taskContainer.setAttribute("data-completion-status", "completed");
    }  else if (taskCompletionStatus === "completed") {
        taskContainer.setAttribute("data-completion-status", "active");
    }

    taskTemplateList.forEach(taskTemplate => {
        if (taskTemplate.id === Number(taskContainer.id)) {
            taskTemplate.completionStatus = taskContainer.getAttribute("data-completion-status");
        }
    })
}


/* Event handlers */ 

function handleDeleteTaskBtnClick(e: any): void {
    deleteTask(e.target);
    saveTasksToLocalStorage(taskTemplateList);
    renderTasks(taskTemplateList)
}

function handleCompleteTaskBtnClick(e: any): void {
    toggleTaskCompletionStatus(e.target);
    saveTasksToLocalStorage(taskTemplateList);
    renderTasks(taskTemplateList)
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

    saveTasksToLocalStorage(taskTemplateList);
    renderTasks(taskTemplateList)
}


// Event Listeners

addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit)


