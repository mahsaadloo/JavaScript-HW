export type contactTypes = {
    username: string,
    phonenumber: string,
    id: string,
    avatar: null,
    storage: "SIM" | "device"
};
export type contactListType = contactTypes[];
export type contactInfoType = {
    username: string,
    phonenumber: string
};