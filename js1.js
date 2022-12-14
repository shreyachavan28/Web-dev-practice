let i = 0;
for (i = 0; i < 3; i++) {
    console.log(i);
}

let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
for (let index = 0; index < friends.length; index++) {
    console.log("Hello friend, " + friends[index]);
}

let employee = {
    name: "Shreya",
    salary: 2,
    channel: "Chavan"
}

// Use this loop to iterate over objects in JavaScript
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}