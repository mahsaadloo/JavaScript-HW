import {contactInfoType} from "./types"

export const createListItem = (contactInfo: contactInfoType):HTMLLIElement => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-3 bg-red-100 rounded-lg mb-3";

    const userNameElement = document.createElement("h2");
    userNameElement.className = "text-red-800";
    userNameElement.innerText = contactInfo.username;

    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.className = "text-slate-600";
    phoneNumberElement.innerText = contactInfo.phonenumber;

    listItem.appendChild(userNameElement);
    listItem.appendChild(phoneNumberElement);

    return listItem;
};

export const validateFields = (...fields: string[]):boolean =>{
    return fields.every((field) => !!field.toString());
};