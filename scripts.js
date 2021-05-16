// TODO: have the user enter in vehicles to an array stored in data
// TODO: have a submit button that pushes the vehicle into the array
// TODO: display the vehicles into a listbox of sorts
// TODO: delete buttons to delete a vehicle from the array?
// TODO: random vehicle button that choose a random vehicle to take out for the day

import { vehicles } from './data.js';

const p = document.querySelector('p');
const table = document.querySelector('table');
const form = document.querySelector('#form');
const tbody = document.querySelector('tbody');
const template = document.querySelector('template');
const randButton = document.getElementById('randButton');

function renderV(automobiles) {
  tbody.innerText = '';
  automobiles.forEach(automobile => {
    const newRow = template.content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');

    tds[0].innerText = automobile.type;
    tds[1].innerText = automobile.make;
    tds[2].innerText = automobile.model;
    tds[3].innerText = automobile.year;
    tds[4].innerText = automobile.color;

    tbody.appendChild(newRow);
  });
}

function randomVehicle() {
  const randV = Math.floor(Math.random() * vehicles.length);
  return randV;
}

randButton.addEventListener('click', event => {
  const ranNum = randomVehicle();
  p.innerText = `You should take out the ${vehicles[ranNum].year} ${vehicles[ranNum].make} ${vehicles[ranNum].model}`;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    event.target.elements[0].value !== '' &&
    event.target.elements[1].value !== '' &&
    event.target.elements[2].value !== '' &&
    event.target.elements[3].value !== '' &&
    event.target.elements[4].value !== ''
  ) {
    p.innerText = '';
    vehicles.push({
      type: event.target.elements[0].value,
      make: event.target.elements[1].value,
      model: event.target.elements[2].value,
      year: event.target.elements[3].value,
      color: event.target.elements[4].value,
    });

    renderV(vehicles);
  } else {
    p.innerText = 'MAKE SURE YOU FILL OUT THE ENTIRE FORM PLEASE';
  }
});
