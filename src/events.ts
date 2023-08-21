import{taskListDrawer, titleInput,descriptionInput, showTaskList} from './importer.js';
import{dailyTask} from './types';
import{tasksList} from './state.js';

export const showTasksButtonHandler = () => {
    taskListDrawer?.classList.remove("bottom-[-100%]");
    taskListDrawer?.classList.add("bottom-[0%]"); 
};

export const closeDrawerButtonHandler = () => {
    taskListDrawer?.classList.remove("bottom-[0%]");
    taskListDrawer?.classList.add("bottom-[-100%]");
};

export const submitButtonCreateHandler = () => {
    const newTask : dailyTask = {
        id: crypto.randomUUID(),
        title: titleInput?.value ?? '',
        description: descriptionInput?.value ?? ''
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

    showTaskList?.appendChild(listItem);
};