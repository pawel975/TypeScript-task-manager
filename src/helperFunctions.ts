import { TaskListElement } from "./interfaces";
import { TaskId } from "./types";


export function generateId(): TaskId {
    const id: TaskId = Math.floor(Math.random() * 100000);
    return id
}

export function saveTasksToLocalStorage(taskList: TaskListElement[]): void {
    localStorage.setItem("tasks", JSON.stringify(taskList))
}

export function getTasksFromLocalStorage(): TaskListElement[] {
    
    const localStorageRecord = localStorage.getItem("tasks");

    if (localStorageRecord) {
        
        const localStorageTasks = JSON.parse(localStorageRecord);
        return localStorageTasks 
        
    } else return [];

}