//types:
type contactTypes = {
    username: string,
    phonenumber: string,
    id: string,
    avatar: null,
    storage: "SIM" | "device"
};
type contactListType = contactTypes[];

//Arrays:
const contactList:contactListType = []

// webAPI:
const userName = document.querySelector<HTMLInputElement>("#username");
const phoneNumber = document.querySelector<HTMLInputElement>("#phonenumber");
const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
const showDrawer = document.querySelector<HTMLButtonElement>("#showDrawer");
const closeDrawer = document.querySelector<HTMLButtonElement>("#closeDrawer");
const device = document.querySelector<HTMLInputElement>("#device");
const showContact = document.querySelector<HTMLButtonElement>("#showContact")

// Events:
submitButton?.addEventListener("click", () => {
    const newContact:contactTypes = {
        id: crypto.randomUUID(),
        username: userName?.value ?? "",
        phonenumber: phoneNumber?.value ?? "",
        avatar: null,
        storage: device?.checked ? "device" : "SIM"
    };
    contactList.push(newContact);
});
console.log(contactList);

// Drawer
showDrawer?.addEventListener("click", ()=>{
    showContact?.classList.remove("bottom-[-100%]");
    showContact?.classList.add("bottom-[0%]")
});

closeDrawer?.addEventListener("click", ()=> {
    showContact?.classList.remove("bottom-[0%]")
    showContact?.classList.add("bottom-[-100%]");
})