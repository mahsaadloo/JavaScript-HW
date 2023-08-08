const randomNum = () => {
    return Math.floor(Math.random() * 1000); 
}

const personList = [
{
    id : 1,
    name : "Mahsa",
    age: 25,
    major : "Business Management",
    membershipNum : randomNum()
},{
    id : 2,
    name : "Setare",
    age: 26,
    major : "Translating",
    membershipNum : randomNum()
},{
    id : 3,
    name : "Mona",
    age: 20,
    major : "Architecture",
    membershipNum : randomNum()
},{
    id : 4,
    name : "Sara",
    age: 27,
    major : "Chemistry",
    membershipNum : randomNum()
}];

const mapNum = (item) => {
    console.log(item);
    document.body.innerHTML += ` 
    <li>
        ${item.id}- <span>${item.name} / </span><span>${item.age} / </span><span>${item.major}</span> 
    </li> `
};

const addToList = () => {
    personList.push({id:5, name:"Parisa", age:22, major:"Art", membershipNum:randomNum()});
};
addToList();

const deleteFromList = () => {
    personList.pop();
}
// deleteFromList();

const editList = () => {
    const indexNum = personList.findIndex(obj => obj.id == 5);
    personList[indexNum].name = "Sanaz";
    //or personList[4].name = "Sanaz";
}
// editList();

personList.map(mapNum);


