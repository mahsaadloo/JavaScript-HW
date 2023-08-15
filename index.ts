type usertype = {
    id: number,
    name?: string,
    family?: string,
    age?: number,
    occupation?: string,
    maritalStatus?: boolean,
    gender?: "Male" | "Female",
    height?: number,
    weight?: number,
    phoneNumber?: number
};

const userList: Array<usertype> = [
    {
        id: 1,
        name: "Mahsa",
        family: "Adloo",
        age: 25,
        occupation: "Student",
        maritalStatus: false,
        gender: "Female",
        height: 162,
        weight: 52,
        phoneNumber: 9017485411
    },{
        id: 2,
        name: "Setare",
        family: "Moratab",
        age: 26,
        occupation: "Hair Keratin",
        maritalStatus: false,
        gender: "Female",
        height: 167,
        weight: 50,
        phoneNumber: 9012069576
    },{
        id: 3,
        name: "Elnaz",
        family: "Golchin",
        age: 26,
        occupation: "Student",
        gender: "Female",
        height: 160,
        weight: 65,
        phoneNumber: 9177585069
    }
];

const createUser = (user:usertype): void => {
    userList.push(user);
}
createUser({
    id: 4,
    name: "Maryam",
    family: "Hemmati",
    age: 26,
    occupation: "Veterinary",
    maritalStatus: true,
    gender: "Female",
    height: 165,
    weight: 55,
    phoneNumber: 9177904160
});
console.log(userList);

const editUser = (user: usertype) => {
    const userIndex: number = userList.findIndex((item) => item.id === user.id);
    userList[userIndex] = {...userList[userIndex], ...user};
}
editUser({id:2, age:27});
console.log(userList);

const deleteUser = (id: usertype["id"]) => {
    // const deleted = userList.filter((item) => item.id !== id);
    // return deleted;
    const deleted: number = userList.findIndex((item) => item.id === id);
    userList.splice(deleted, 1);
};
// console.log(deleteUser(4));
deleteUser(4);
console.log(userList);

userList.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});

console.log(userList);