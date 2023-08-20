"use strict";
const tasksList = [];
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
});
//# sourceMappingURL=index.js.map