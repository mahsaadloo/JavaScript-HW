type dailyTask = {
    id: number,
    title: string,
    description: string
};

type tasks = Array<dailyTask>; // or dailyTask[]

const titleInput = document.querySelector<HTMLInputElement>("#title");
const descriptionInput = document.querySelector<HTMLInputElement>("#description");

const submitButton = document.querySelector<HTMLButtonElement>("#addButton");
submitButton?.addEventListener("click", ()=> {
    console.log(titleInput?.value);
})