/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helperFunctions.ts":
/*!********************************!*\
  !*** ./src/helperFunctions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateId": () => (/* binding */ generateId),
/* harmony export */   "getTasksFromLocalStorage": () => (/* binding */ getTasksFromLocalStorage),
/* harmony export */   "saveTasksToLocalStorage": () => (/* binding */ saveTasksToLocalStorage)
/* harmony export */ });
function generateId() {
    const id = Math.floor(Math.random() * 100000);
    return id;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.ts");

// Getting elements
const addTaskInput = document.querySelector("#add-task__input");
const addTaskSubmit = document.querySelector(".add-task__submit");
const tasksContainer = document.querySelector(".tasks-container__tasks");
let taskList = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getTasksFromLocalStorage)();
// Initial tasks render
renderTasks(taskList);
// Create task object and add it to taskList array
function addToTaskList(taskName) {
    const newTask = {
        id: (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.generateId)(),
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
/* Event handlers */
function handleDeleteTaskBtnClick(e) {
    deleteTask(e.target.parentNode.id);
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(taskList);
    renderTasks(taskList);
}
function handleAddTaskFormSubmit(e) {
    e.preventDefault();
    if (addTaskInput.value.length >= 3) {
        addToTaskList(addTaskInput.value);
    }
    else {
        console.log(addTaskInput.value.length);
        alert("Task must contain at least 3 letters");
        addTaskInput.focus();
    }
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(taskList);
    renderTasks(taskList);
}
// Event Listeners
addTaskSubmit.addEventListener("click", handleAddTaskFormSubmit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFO1FBQ2hDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDOUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3hCO0lBRUQseUVBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUN6QixDQUFDO0FBR0Qsa0JBQWtCO0FBRWxCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyRnVuY3Rpb25zLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrTGlzdEVsZW1lbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IFRhc2tJZCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKTogVGFza0lkIHtcclxuICAgIGNvbnN0IGlkOiBUYXNrSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xyXG4gICAgcmV0dXJuIGlkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrTGlzdDogVGFza0xpc3RFbGVtZW50W10pOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk6IFRhc2tMaXN0RWxlbWVudFtdIHtcclxuICAgIFxyXG4gICAgY29uc3QgbG9jYWxTdG9yYWdlUmVjb3JkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlUmVjb3JkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVJlY29yZCk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVRhc2tzIFxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHJldHVybiBbXTtcclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdlbmVyYXRlSWQsIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgVGFza0xpc3RFbGVtZW50IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuLy8gR2V0dGluZyBlbGVtZW50c1xyXG5jb25zdCBhZGRUYXNrSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrX19pbnB1dFwiKSE7XHJcbmNvbnN0IGFkZFRhc2tTdWJtaXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrX19zdWJtaXRcIikhO1xyXG5jb25zdCB0YXNrc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lcl9fdGFza3NcIikhO1xyXG5cclxubGV0IHRhc2tMaXN0OiBUYXNrTGlzdEVsZW1lbnRbXSA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpXHJcblxyXG4vLyBJbml0aWFsIHRhc2tzIHJlbmRlclxyXG5yZW5kZXJUYXNrcyh0YXNrTGlzdClcclxuXHJcblxyXG4vLyBDcmVhdGUgdGFzayBvYmplY3QgYW5kIGFkZCBpdCB0byB0YXNrTGlzdCBhcnJheVxyXG5mdW5jdGlvbiBhZGRUb1Rhc2tMaXN0KHRhc2tOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrOiBUYXNrTGlzdEVsZW1lbnQgPSBcclxuICAgIHtcclxuICAgICAgICBpZDogZ2VuZXJhdGVJZCgpLFxyXG4gICAgICAgIHRhc2tOYW1lOiB0YXNrTmFtZVxyXG4gICAgfVxyXG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcclxuXHJcbiAgICByZXNldEFkZFRhc2tJbnB1dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrTGlzdDogVGFza0xpc3RFbGVtZW50W10pIHtcclxuXHJcbiAgICAvLyBjbGVhciB0YXNrcyBjb250YWluZXIgYmVmb3JlIHJlbmRlciBvciByZS1yZW5kZXJcclxuICAgIFsuLi50YXNrc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlbmRlciB0YXNrc1xyXG4gICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBzaW5nbGVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaW5nbGVUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZVRhc2snKVxyXG4gICAgICAgIHNpbmdsZVRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgPHN0cmluZz50YXNrLmlkKVxyXG5cclxuICAgICAgICBjb25zdCB0YXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcclxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBcclxuICAgICAgICBzaW5nbGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lQ29udGFpbmVyKTtcclxuICAgICAgICBzaW5nbGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xyXG5cclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUYXNrQ29udGFpbmVyKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gU2V0IGV2ZXJ5IHRhc2sgZGVsZXRlIGJ0biB0byBoYW5kbGUgZGVsZXRlIHByb2Nlc3NcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gWy4uLnRhc2tzQ29udGFpbmVyLmNoaWxkcmVuXTtcclxuICAgIGFsbFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgdGFzay5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVsZXRlVGFza0J0bkNsaWNrKVxyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuLy8gRGVsZXRlIHRhc2sgYmFzZWQgb24gaWRcclxuZnVuY3Rpb24gZGVsZXRlVGFzayhjbGlja2VkVGFza0lkOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmlkID09PSBOdW1iZXIoY2xpY2tlZFRhc2tJZCkpIHtcclxuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRBZGRUYXNrSW5wdXQoKTogdm9pZCB7XHJcbiAgICBhZGRUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5cclxuLyogRXZlbnQgaGFuZGxlcnMgKi8gXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrQnRuQ2xpY2soZTogYW55KTogdm9pZCB7XHJcbiAgICBkZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xyXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza0xpc3QpO1xyXG4gICAgcmVuZGVyVGFza3ModGFza0xpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2tGb3JtU3VibWl0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChhZGRUYXNrSW5wdXQudmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBhZGRUb1Rhc2tMaXN0KGFkZFRhc2tJbnB1dC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZFRhc2tJbnB1dC52YWx1ZS5sZW5ndGgpXHJcbiAgICAgICAgYWxlcnQoXCJUYXNrIG11c3QgY29udGFpbiBhdCBsZWFzdCAzIGxldHRlcnNcIik7XHJcbiAgICAgICAgYWRkVGFza0lucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza0xpc3QpO1xyXG4gICAgcmVuZGVyVGFza3ModGFza0xpc3QpXHJcbn1cclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lcnNcclxuXHJcbmFkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUFkZFRhc2tGb3JtU3VibWl0KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==