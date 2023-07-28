const productlist = [
    "Iphone 14 pro max",
    "Iphone 14",
    "Iphone 13 pro max",
    "iwatch 7",
    "Airpod pro 2",
    "Airpod 3",
    "Macbook 2023"];
    
const userchoice = +prompt(" choose from 0-6 to select product :"+
"0:Iphone 14 pro max, 1:Iphone 14, 2:Iphone 13 pro max, 3:iwatch 7, 4:Airpod pro 2, 5:Airpod 3, 6:Macbook 2023");

const AddToBasket = [];

function add(index) {
    AddToBasket.push(productlist[index]);
    return AddToBasket;
}
console.log(add(userchoice));

const rmv = prompt(" Wanna remove item ? If YES press 'Y' and if NO press any keys");

if(rmv == "y"){
    const RemoveBasket = [];
    function remov() {
        RemoveBasket.pop(userchoice);
        return RemoveBasket;
    }
    console.log(remov());
}
else{
     console.log("You remove none . Your current basket is " + AddToBasket);
}