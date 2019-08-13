//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
contacts.forEach(function(contact){
    console.log(contact['firstName']);
  if (contact['firstName'] === name && contact[prop]) {
    return contact[prop];
  } else if (contact['firstName'] != name) {
    return 'No such contact';
  } else if (!contact[prop]) {
    return 'No such property';
  }
})
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");