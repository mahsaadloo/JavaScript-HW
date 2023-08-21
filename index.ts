type dailyTask = {
    id: string,
    title: string,
    description: string
};

type tasksListType = Array<dailyTask>; // or dailyTask[]

const tasksList : tasksListType = [];

const showTaskList = document.querySelector<HTMLUListElement>("#showTaskList");

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

const taskListDrawer = document.querySelector<HTMLButtonElement>("#taskListDrawer");

const showTasksButton = document.querySelector<HTMLButtonElement>("#showTasksButton");
showTasksButton?.addEventListener("click", ()=> {
    // or taskListDrawer?.classList.remove("hidden");
    taskListDrawer?.classList.remove("bottom-[-100%]");
    taskListDrawer?.classList.add("bottom-[0%]"); 

});

const closeDrawerButton = document.querySelector<HTMLButtonElement>("#closeDrawerButton");
closeDrawerButton?.addEventListener("click", ()=>{
    // or taskListDrawer?.classList.add("hidden");
    taskListDrawer?.classList.remove("bottom-[0%]");
    taskListDrawer?.classList.add("bottom-[-100%]");
});