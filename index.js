function findtext() {
    let sentences = prompt("Enter your sentences please: ");
    let findword = prompt("What are you looking for?");
    if (!sentences || !findword) {
        return console.log(" something is wrong ! please try again !");
    }
    else{
        if (sentences.includes(findword)) {
            return console.log("Word " + findword + " is Exist.");
        } else {
            return console.log("NOT FOUND !!!");
        }
    }
  }
  
  findtext();
  