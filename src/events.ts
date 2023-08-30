import {contactTypes} from "./types";
import {showContact,userName,phoneNumber,device,drawerList} from "./importer.js";
import {contactList} from "./state.js";

export const showDrawerHandler = ()=>{
    showContact?.classList.remove("bottom-[-100%]");
    showContact?.classList.add("bottom-[0%]")
};
export const closeDrawerHandler = ()=> {
    showContact?.classList.remove("bottom-[0%]")
    showContact?.classList.add("bottom-[-100%]");
};
export const submitButtonHandler = () => {
    const newContact:contactTypes = {
        id: crypto.randomUUID(),
        username: userName?.value ?? "",
        phonenumber: phoneNumber?.value ?? "",
        avatar: null,
        storage: device?.checked ? "device" : "SIM"
    };
    contactList.push(newContact);
    // HTML tags:
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-3 bg-red-100 rounded-lg mb-3";
    const userNameElement = document.createElement("h2");
    userNameElement.className = "text-red-800";
    userNameElement.innerText = newContact.username;
    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.className = "text-slate-600";
    phoneNumberElement.innerText = newContact.phonenumber;

    listItem.appendChild(userNameElement);
    listItem.appendChild(phoneNumberElement);
    drawerList?.appendChild(listItem);
};