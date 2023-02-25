const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

// Define an empty object called "info"
const info = {};

// Add properties "name" and "age" to the "info" object
info['name'] = 'Ahsan';
info['age'] = 25;

// Log the "info" object to the console
console.log(info);


Persons.map(p => {
    // Get the "id" property from the current object
    const id = p.id;
    // Get the "name" property from the current object
    const value = p.name;
 
    // Add a new property to the "info" object using the "id" as the key and the "name" as the value
    info[id] = value;
 })
 
 // Log the value of the "ID02" property of the "info" object to the console
 console.log(info.ID02); 