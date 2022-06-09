/*
**  name: sayHello
**  parameter(s):
**      name        an array with a person's name; can have any number of elements
**      city        city for greeting
**      state       state for greeting
**
**  returns:
**      a string formatted to greet the person's full name and welcome them to a city belonging to some state
*/

function sayHello( name, city, state ) {
  let fullName = '';
  for (let i = 0; i < name.length; i++){
    fullName = fullName + name[i] + ' ';
  }
  fullName = fullName.trim();
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}