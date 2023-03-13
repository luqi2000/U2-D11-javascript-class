//esercizio 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compare(compareSecond) {
    if (this.age > compareSecond.age) {
      return `${this.firstName} è più vecchio di ${compareSecond.firstName}.`;
    } else if (this.age < compareSecond.age) {
      return `${compareSecond.firstName}è più vecchio di ${this.firstName}.`;
    } else {
      return `${this.firstName} e ${compareSecond.firstName} hanno la stessa eta'.`;
    }
  }
}

//x sarebbe l' istanza di User
const x = new User("Mario", "Rossi", "25", "Milano");
console.log(x);

//y sarebbe l' istanza di User
const y = new User("Pietro", "Bianchi", "20", "Roma");
console.log(y);

//nel metodo compare x andra' a sostituirsi con this mentre y va a sostituirsi con compareSecond
console.log(x.compare(y));

//esercizio 2

class Pet {
  constructor(petName, ownerName, Species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.Species = Species;
    this.breed = breed;
  }
  sameownerName(secondOwnerName) {
    if (this.ownerName === secondOwnerName.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const a = new Pet("harry", "Simon", "cat", "soriano");
console.log(a);

const b = new Pet("boo", "Mario", "dog", "labrador");
console.log(b);

const c = new Pet("charlie", "Simon", "dog", "nano");
console.log(c);

console.log(a.sameownerName(c));
console.log(a.sameownerName(b));

const form = document.getElementById("PetForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito di aggiornare la pagina
});
