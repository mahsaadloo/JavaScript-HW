type dailyTask = {
    id: string,
    title: string,
    description: string
};

type tasksListType = Array<dailyTask>; // or dailyTask[]

const tasksList : tasksListType = [];

const titleInput = document.querySelector<HTMLInputElement>("#title");
const descriptionInput = document.querySelector<HTMLInputElement>("#description");

const submitButton = document.querySelector<HTMLButtonElement>("#addButton");
submitButton?.addEventListener("click", ()=> {
    const newTask : dailyTask = {
        id: crypto.randomUUID(),
        title: titleInput?.value ?? '',
        description: descriptionInput?.value ?? ''
    };
    tasksList.push(newTask);
});