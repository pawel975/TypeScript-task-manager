// Getting elements
const addTaskForm: HTMLFormElement = document.querySelector(".add-task__form")!;
const addTaskInput: HTMLInputElement = document.querySelector("#add-task__input")!;
const addTaskSubmit: HTMLInputElement = document.querySelector(".add-task__submit")!;
const tasksContainer: HTMLDivElement = document.querySelector(".tasks-container__tasks")!;

// Create task and Add it to task container
function addTask(taskName: string): void {

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add('singleTask')
    singleTaskContainer.setAttribute("id", <string>generateId())

    const taskNameContainer = document.createElement("span");
    taskNameContainer.textContent = taskName;
    const taskDeleteBtn = document.createElement("button");
    
    singleTaskContainer.appendChild(taskNameContainer);
    singleTaskContainer.appendChild(taskDeleteBtn);

    tasksContainer.appendChild(singleTaskContainer);
}

// Delete task based on id
function deleteTask(taskId: number | string): void {
    const taskToDelete = [...tasksContainer.children].filter(task => task.id === taskId)[0]
    if (taskToDelete) tasksContainer.removeChild(taskToDelete);
}


/* Event handlers */ 

function handleDeleteTaskBtnClick(e: any): void {
    deleteTask(e.target.parentNode.id);
}

function handleAddTaskFormSubmit(e: any): void {
    e.preventDefault();
    addTask(addTaskInput.value);


}


// Event Listeners

addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit)


/* Helper functions */

type TaskId =  number | string

function generateId(): TaskId {
    const id: TaskId = Math.floor(Math.random() * 100000);
    return id
}


/* Observers */

const taskObserver = new MutationObserver(() => {
    // Set every task delete btn to handle delete process
    const allTasks = [...tasksContainer.children];
    allTasks.forEach(task => {
        task.children[1].addEventListener("click", handleDeleteTaskBtnClick)
    });
});

// If new task is created, event listener is added to task delete btn
taskObserver.observe(tasksContainer, {childList: true});

