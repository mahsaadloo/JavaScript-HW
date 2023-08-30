import {contactInfoType, contactTypes} from "./types";
import {showContact,userName,phoneNumber,device,drawerList} from "./importer.js";
import {contactList} from "./state.js";
import{createListItem} from "./function.js";
import{validateFields} from "./function.js";

export const showDrawerHandler = ()=>{
    showContact?.classList.remove("bottom-[-100%]");
    showContact?.classList.add("bottom-[0%]")
};
export const closeDrawerHandler = ()=> {
    showContact?.classList.remove("bottom-[0%]")
    showContact?.classList.add("bottom-[-100%]");
};

const validateCreateContact = (contactInfo: contactInfoType) => {
    if (!validateFields(contactInfo.username , contactInfo.phonenumber)){
        alert(" Fill all Fields ");
        throw Error(" Fill all Fields ");
    };
};

export const submitButtonHandler = () => {

    validateCreateContact({username: userName!.value , phonenumber: phoneNumber!.value});

    const newContact:contactTypes = {
        id: crypto.randomUUID(),
        username: userName?.value ?? "",
        phonenumber: phoneNumber?.value ?? "",
        avatar: null,
        storage: device?.checked ? "device" : "SIM"
    };
    contactList.push(newContact);

    const listItem = createListItem({
        username: newContact.username,
        phonenumber: newContact.phonenumber
    });
    drawerList?.appendChild(listItem);
};