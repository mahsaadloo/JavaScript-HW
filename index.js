function average() {
    const math = +prompt(" Enter MATH score : ");
    const physic = +prompt(" Enter PHYSIC score : ");
    const chemistry = +prompt(" Enter CHEMISTRY score : ");
    const english = +prompt(" Enter ENGLISH score : ");
    const persian = +prompt(" Enter PERSIAN score : ");
    const sum = math + physic + chemistry + english + persian;
    const result = sum/5;
    if (result <= "12") {
        return("Your Average is : "+result+" . You FAILED ! See you on September !");
    }
    else{
        return("Your Average is : "+result+" . You PASSED !");
    }
}
console.log(average());