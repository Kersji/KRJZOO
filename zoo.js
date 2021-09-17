'use strict'

// Define buttons
let searchAnimalButton = document.querySelector("#searchAnimal");
let clearDisplayButton = document.querySelector("#clearDisplay");
let addAnimalButton = document.querySelector("#addAnimal");
let amendAnimalButton = document.querySelector("#amendAnimal");
let removeAnimalButton = document.querySelector("#removeAnimal");
let refreshAnimalListlButton = document.querySelector("#refreshAnimalList");

// Define display and entry fields
let searchAnimalIdField = document.querySelector("#searchAnimalId");
let displayInfoField = document.querySelector("#displayInfo");
let animalIdInfoField = document.querySelector("#animalIdInfo");
let nameInfoField = document.querySelector("#nameInfo");
let speciesInfoField = document.querySelector("#speciesInfo");
let sexInfoField = document.querySelector("#sexInfo");
let arrivalDateInfoField = document.querySelector("#arrivalDateInfo");
let dateOfBirthInfoField = document.querySelector("#dateOfBirthInfo");
let ageInfoField = document.querySelector("#ageInfo");
let birthLocationInfoField = document.querySelector("#birthLocationInfo");
let birthTypeInfoField = document.querySelector("#birthTypeInfo");
let enclosureInfoField = document.querySelector("#enclosureInfo");
let zooKeeperInfoField = document.querySelector("#zooKeeperInfo");

// Define display fields for Animal list
let animalIdTableInfoField = document.querySelector("#animalIdTableInfo");
let nameTableInfoField = document.querySelector("#nameTableInfo");
let speciesTableInfoField = document.querySelector("#speciesTableInfo");
let arrivalDateTableInfoField = document.querySelector("#arrivalDateTableInfo");
let ageTableInfoField = document.querySelector("#ageTableInfo");
let enclosureTableInfoField = document.querySelector("#enclosureTableInfo");
let zooKeeperTableInfoField = document.querySelector("#zooKeeperTableInfo");

// Clear display fields
const clearDisplayFields = () => {
   
    searchAnimalIdField.value = ``;
    displayInfoField.innerHTML = ``;
    animalIdInfoField.value = ``;
    nameInfoField.value=``;
    speciesInfoField.value = ``;
    sexInfoField.value = ``;
    arrivalDateInfoField.value = ``;
    dateOfBirthInfoField.value = ``;
    ageInfoField.value = ``;
    birthLocationInfoField.value = ``;
    birthTypeInfoField.value = ``;
    enclosureInfoField.value = ``;
    zooKeeperInfoField.value = ``;
}

// Display user information
const displayUserMsg = (msg) => {

    displayInfoField.innerHTML = ``;
    const TEXT = document.createTextNode(msg);
    const HEADING = document.createElement("h4");
    HEADING.appendChild(TEXT);
    displayInfoField.appendChild(HEADING);
}

// Display informational message
const displayInfoMsg = (msg) => {

    // Clear display fields
    clearDisplayFields();

    // Display error message
    displayUserMsg(msg);
}

// Display animal information
const displayAnimalInfo = (animal, msg) => {
    
    // Clear display fields
    clearDisplayFields();
   
    // Display user message
    displayUserMsg(msg);

    // Set frontend fields
    animalIdInfoField.value = animal.id;
    nameInfoField.value = animal.name;
    speciesInfoField.value = animal.species;
    sexInfoField.value = animal.sex;
    arrivalDateInfoField.value = animal.arrivalDate;
    dateOfBirthInfoField.value = animal.dateOfBirth;
    ageInfoField.value = animal.age;
    birthLocationInfoField.value = animal.birthLocation;
    birthTypeInfoField.value = animal.birthType;
    enclosureInfoField.value = animal.enclosure;
    zooKeeperInfoField.value = animal.zooKeeper;
}


// Display animal list - Incomplete (removed all codes after several unsuccessful attempts)
const displayAnimalList = (animalList) => {
      
    for (let i=0; i<animalList.length ; i++) {

        animalIdTableInfoField.value = animalList[i].id;
        nameTableInfoField.value = animalList[i].name;
        speciesTableInfoField.value = animalList[i].species;;
        arrivalDateTableInfoField.value = animalList[i].arrivalDate;;
        ageTableInfoField.value = animalList[i].age;
        enclosureTableInfoField.value = animalList[i].enclosure;
        zooKeeperTableInfoField.value = animalList[i].zooKeeper;
    } 

}

// Search an animal by Id (searchAnimalIdField)
const searchAnimal = (event) => {
    event.preventDefault();

    if (searchAnimalIdField.value != ``) {
        axios.get(`http://localhost:8080/Zoo/searchAnimals/${searchAnimalIdField.value}`, {
            headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => displayAnimalInfo(response.data, `Animal ${searchAnimalIdField.value} found` ))
        .catch((error) =>  displayInfoMsg(`ERROR! Animal ${searchAnimalIdField.value} not found`));
    } else {
        displayInfoMsg(`ERROR! Please enter an Animal Id to search`);
    }
    
}

// Add an animal
const addAnimal = (event) => {
    event.preventDefault();

    if (nameInfoField.value != ``) {

        // Create the object to be sent to the createAnimals API
        let animalsData = {
            name:           nameInfoField.value,
            species:        speciesInfoField.value,
            sex:            sexInfoField.value,
            arrivalDate:    arrivalDateInfoField.value,
            dateOfBirth:    dateOfBirthInfoField.value,
            age:            ageInfoField.value,
            birthLocation:  birthLocationInfoField.value,
            birthType:      birthTypeInfoField.value,
            enclosure:      enclosureInfoField.value,
            zooKeeper:      zooKeeperInfoField.value
        };

        axios.post(`http://localhost:8080/Zoo/createAnimals`, animalsData, {
            headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => displayAnimalInfo(response.data, `Animal ${response.data.id} successfully added`))
        .catch((error) =>  displayInfoMsg(`ERROR! Animal not added`));
    } else {
        displayInfoMsg(`ERROR! Please enter Animal information`);
    }
    
}

// Remove an animal by Id (animalIdInfoField)
const removeAnimal = (event) => {
    event.preventDefault();

    if (animalIdInfoField.value != ``) {
        axios.delete(`http://localhost:8080/Zoo/deleteAnimals/${animalIdInfoField.value}`, {
            headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => displayInfoMsg(`Animal ${animalIdInfoField.value} removed`))
        .catch((error) =>  displayInfoMsg(`ERROR! Animal ${animalIdInfoField.value} not found`));
    } else {
        displayInfoMsg(`ERROR! Please search for the Animal to remove first`);
    }
    
}

// Amend animal information by Id (animalIdInfoField)
const amendAnimal = (event) => {
    event.preventDefault();

    if (animalIdInfoField.value != ``) {

        // Create the object to be sent to the updateAnimals API
        let animalsData = {
            name:           nameInfoField.value,
            species:        speciesInfoField.value,
            sex:            sexInfoField.value,
            arrivalDate:    arrivalDateInfoField.value,
            dateOfBirth:    dateOfBirthInfoField.value,
            age:            ageInfoField.value,
            birthLocation:  birthLocationInfoField.value,
            birthType:      birthTypeInfoField.value,
            enclosure:      enclosureInfoField.value,
            zooKeeper:      zooKeeperInfoField.value
        };

        axios.patch(`http://localhost:8080/Zoo/updateAnimals/${animalIdInfoField.value}`, animalsData, {
            headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => displayAnimalInfo(response.data, `Animal ${response.data.id} successfully amended`))
        .catch((error) =>  displayInfoMsg(`ERROR! Animal not amended`));
    } else {
        displayInfoMsg(`ERROR! Please search for the Animal to amend first`);
    }
    
}

// Refresh animal list - Incomplete
const refreshAnimalList = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:8080/Zoo/readAllAnimals`, {
        headers: {
       'Access-Control-Allow-Origin': '*',
    }})
    .then((response) => displayAnimalList(response.data))
    .catch((error) =>  displayInfoMsg(`ERROR! No Animals to display`));
}
    
// Clear display fields on frontend
clearDisplayFields();

// Associate functions to buttons

// Search for an animal by Id (searchAnimalIdField)
searchAnimalButton.addEventListener(`click`,searchAnimal);
clearDisplayButton.addEventListener(`click`,clearDisplayFields);
addAnimalButton.addEventListener(`click`,addAnimal);
amendAnimalButton.addEventListener(`click`,amendAnimal);
removeAnimalButton.addEventListener(`click`,removeAnimal);
refreshAnimalListlButton.addEventListener(`click`,refreshAnimalList);