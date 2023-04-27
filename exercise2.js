const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  hobbies: ["reading", "traveling", "playing tennis"],
  friends: ["Mary", "Bob", "Emily"]
};

// Use the Object.keys() method to create an array that includes the keys of the object.
const keys = Object.keys(person);
console.log(keys);

// Use the Object.values() method to create an array that includes the values of the object.
const values = Object.values(person);
console.log(values);

// Use the Object.entries() method to create an array of arrays, where each subarray includes the key and value of each property in the object.
const entries = Object.entries(person);
console.log(entries);

// Use the Object.assign() method to create a new object that includes the properties of the original object and an additional property, occupation, with the value "engineer".
const newObj = Object.assign({}, person ,{occupation : "Engineer"});
console.log(newObj);

