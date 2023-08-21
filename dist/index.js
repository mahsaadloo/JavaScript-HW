"use strict";
const tasksList = [];
const showTaskList = document.querySelector("#showTaskList");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const submitButton = document.querySelector("#addButton");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    var _a, _b;
    const newTask = {
        id: crypto.randomUUID(),
        title: (_a = titleInput === null || titleInput === void 0 ? void 0 : titleInput.value) !== null && _a !== void 0 ? _a : '',
        description: (_b = descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.value) !== null && _b !== void 0 ? _b : ''
    };
    tasksList.push(newTask);
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-3 bg-slate-100 rounded-lg mb-3";
    const titleElement = document.createElement("h2");
    titleElement.innerText = newTask.title;
    titleElement.className = "text-slate-700";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = newTask.description;
    descriptionElement.className = "text-slate-500";
    listItem.appendChild(titleElement);
    listItem.appendChild(descriptionElement);
    showTaskList === null || showTaskList === void 0 ? void 0 : showTaskList.appendChild(listItem);
});
const taskListDrawer = document.querySelector("#taskListDrawer");
const showTasksButton = document.querySelector("#showTasksButton");
showTasksButton === null || showTasksButton === void 0 ? void 0 : showTasksButton.addEventListener("click", () => {
    // or taskListDrawer?.classList.remove("hidden");
    taskListDrawer === null || taskListDrawer === void 0 ? void 0 : taskListDrawer.classList.remove("bottom-[-100%]");
    taskListDrawer === null || taskListDrawer === void 0 ? void 0 : taskListDrawer.classList.add("bottom-[0%]");
});
const closeDrawerButton = document.querySelector("#closeDrawerButton");
closeDrawerButton === null || closeDrawerButton === void 0 ? void 0 : closeDrawerButton.addEventListener("click", () => {
    // or taskListDrawer?.classList.add("hidden");
    taskListDrawer === null || taskListDrawer === void 0 ? void 0 : taskListDrawer.classList.remove("bottom-[0%]");
    taskListDrawer === null || taskListDrawer === void 0 ? void 0 : taskListDrawer.classList.add("bottom-[-100%]");
});
//# sourceMappingURL=index.js.map