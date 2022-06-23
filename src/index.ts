// Getting elements
const addTaskForm: HTMLFormElement = document.querySelector(".add-task__form")!;
const addTaskInput: HTMLInputElement = document.querySelector("#add-task__input")!;
const addTaskSubmit: HTMLInputElement = document.querySelector(".add-task__submit")!;
const tasksContainer: HTMLDivElement = document.querySelector(".tasks-container__tasks")!;

interface TaskListElement {
    id: string | number,
    taskName: string
}

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

function saveTasksToLocalStorage(taskList: TaskListElement[]): void {
    localStorage.setItem("tasks", JSON.stringify(taskList))
}

function getTasksFromLocalStorage(): TaskListElement[] {
    
    const localStorageRecord = localStorage.getItem("tasks");

    if (localStorageRecord) {
        
        const localStorageTasks = JSON.parse(localStorageRecord);
        return localStorageTasks 
        
    } else return [];

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
        alert("Task must contain at least 3 letters");
        addTaskInput.focus();
    }

    saveTasksToLocalStorage(taskList);
    renderTasks(taskList)
}


// Event Listeners

addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit)


/* Helper functions */

type TaskId =  number | string

function generateId(): TaskId {
    const id: TaskId = Math.floor(Math.random() * 100000);
    return id
}