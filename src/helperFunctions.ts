import { TaskTemplateListElement } from "./interfaces";
import { TaskId } from "./types";

export function generateId(): TaskId {
    const id: TaskId = Math.floor(Math.random() * 100000);
    return id
}

export function saveTasksToLocalStorage(taskList: TaskTemplateListElement[]): void {
    localStorage.setItem("tasks", JSON.stringify(taskList))
}

export function getTasksFromLocalStorage(): TaskTemplateListElement[] {
    
    const localStorageRecord = localStorage.getItem("tasks");

    if (localStorageRecord) {
        
        const localStorageTasks = JSON.parse(localStorageRecord);
        return localStorageTasks 
        
    } else return [];

}

export function resetAddTaskInput(taskInput: HTMLInputElement): void {
    taskInput.value = "";
}