//Esercizio 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName;
    this.lastName;
    this.age;
    this.location;
  }

  static ageMethod(x, y) {
    if (x > y) {
      console.log("il primo utente è più vecchio del secondo");
    } else {
      if (x < y) {
        console.log("il secondo utente è più vecchio del primo");
      } else {
        console.log("i due utenti hanno la stessa età");
      }
    }
  }
}

const user1 = new User("Davide", "Bragagnolo", "25", "Torino");
const user2 = new User("Daniele", "Bragagnolo", "25", "Torino");

User.ageMethod(user1.age, user2.age);

//Esercizio 2

const pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  haveSomeOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const createForm = document.getElementById("petForm");
createForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("petOwner").value;
  let species = document.getElementById("petSpecies").value;
  let breed = document.getElementById("petBreed").value;
  let pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet);

  const petListElement = document.getElementById("petList");
  const newPetListItem = document.createElement("li");
  newPetListItem.classList.add("list-group-item");
  newPetListItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petListElement.appendChild(newPetListItem);

  for (let i = 0; i < pets.length - 1; i++) {
    const otherPet = pets[i];
    if (pet.haveSameOwner(otherPet)) {
      alert(`Warning: ${pet.petName} and ${pet.petName} have the same owner!`);
    }
  }

  createForm.reset();
});
