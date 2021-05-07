// TODO: have the user enter in vehicles to an array stored in data
// TODO: have a submit button that pushes the vehicle into the array
// TODO: display the vehicles into a listbox of sorts
// TODO: delete buttons to delete a vehicle from the array?
// TODO: random vehicle button that choose a random vehicle to take out for the day

import { vehicles } from './data.js';

const form = document.querySelector('#form');
const submit = document.querySelector('#subButton');

form.addEventListener('submit', event => {
  event.preventDefault();

  vehicles.push({
    type: event.target.elements[0].value,
    make: event.target.elements[1].value,
    model: event.target.elements[2].value,
    year: event.target.elements[3].value,
    color: event.target.elements[4].value,
    horsepower: event.target.elements[5].value,
    torque: event.target.elements[6].value,
    weight: event.target.elements[7].value,
  });

  // render function here
});
