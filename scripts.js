// TODO: have the user enter in vehicles to an array stored in data
// TODO: have a submit button that pushes the vehicle into the array
// TODO: display the vehicles into a listbox of sorts
// TODO: delete buttons to delete a vehicle from the array?
// TODO: random vehicle button that choose a random vehicle to take out for the day

const form = document.querySelector('#form');
const submit = document.querySelector('#subButton');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.element[0].value);
});
