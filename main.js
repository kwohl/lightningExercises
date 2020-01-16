const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
};

const animals = [
    "Kippers", 
    "Jack", 
    "Gypsy", 
    "Angus", 
    "Seymour Bouts", 
    "Sharky"];

const mary = {
    name: "Mary",
    relationship: "wife"
};

const bobby = {
    name: "Bobby",
    relationship: "dad"
};

const joe = {
    name: "Joe",
    relationship: "brother"
};

const dorita = {
    name: "Dorita",
    relationship: "aunt"
};

const familyMembers = [mary, bobby, joe, dorita];

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(`Height: ${wardrobe.height}`);
console.log(`Manufacturer: ${wardrobe.manufacturer}`);
console.log(`Contents: ${wardrobe.contents}`);
console.log(`Depth: ${wardrobe.depth}`);
console.log(`Width: ${wardrobe.width}`);

wardrobe.material = "Cedar";

console.log(wardrobe)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

console.log("Print the empire state building details");
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);

const owner = empireStateBuilding.owner
console.log(owner);

console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["architect"]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;

for (let i=0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i]);
};

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;

for (let i=0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i]);
};

console.log(fullTimeInstructors[4]);
console.log(partTimeInstructors[0]);