// Getting elements
const addTaskForm: HTMLFormElement = document.querySelector(".add-task__form")!;
const addTaskInput: HTMLInputElement = document.querySelector("#add-task__input")!;
const addTaskSubmit: HTMLInputElement = document.querySelector(".add-task__submit")!;
const tasksContainer: HTMLDivElement = document.querySelector(".tasks-container__tasks")!;
const allTasks: NodeListOf<Element> = document.querySelectorAll(".singleTask")!

// Create task and Add it to task container
function addTask(taskName: string): void {

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.setAttribute("class", "singleTask")
    const taskNameContainer = document.createElement("span");

    taskNameContainer.textContent = taskName;
    singleTaskContainer.setAttribute("id", <string>generateId())

    singleTaskContainer.appendChild(taskNameContainer);
    tasksContainer.appendChild(singleTaskContainer);
}

// Delete task based on id
function deleteTask(taskId: number | string): void {
    const taskToDelete = [...tasksContainer.children].filter(task => task.id === taskId)
    console.log(taskToDelete)
    // tasksContainer.remove(taskToDelete)
}

function handleDeleteTaskBtnClick(e: any): void{
    deleteTask(e.target.id);
}

function handleAddTaskFormSubmit(e: any): void {
    e.preventDefault();
    addTask(addTaskInput.value)
}

type TaskId = number | string

function generateId(): TaskId {
    const id: TaskId = Math.floor(Math.random() * 100000);
    return id
}

addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit)

allTasks.forEach(element => {
    element.addEventListener("click", deleteTask)
});
// window.addEventListener("click", deleteTask)