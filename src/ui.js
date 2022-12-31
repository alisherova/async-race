import {renderCarImage, renderRandomColor} from './utils'
import { getCars, getCar, createCar, deleteCar, updateCar, startEngine, stopEngine, drive, getWinners, getWinner, createWinner, deleteWinner, updateWinner} from './api';


console.log(renderRandomColor());

// write header for both pages 
let header = document.createElement("div");
let pagesDiv = document.createElement("div");
let garagePageBtn = document.createElement("button");
garagePageBtn.textContent = "TO GARAGE";
garagePageBtn.classList.add("header__button");
let winnersPageBtn = document.createElement("button");
winnersPageBtn.textContent = "TO WINNERS";
winnersPageBtn.classList.add("header__button");
let title = document.createElement("p");
title.innerHTML = "AS<span>YN</span>C RAC<span>E</span>";
title.classList.add("logo__title");
pagesDiv.append(garagePageBtn, winnersPageBtn);
header.append(pagesDiv, title);
header.classList.add("header__wrapper");
let root = document.createElement("div");
root.setAttribute("id", "root"); 
let carQuantity = null;

const writeCarContent = (carName) => {
    return `<div class="garage__content">
      <div class="car" data-id="2">
        <div class="car__options">
          <div class="car__buttons">
            <button class="button button-additional buttonSelect">select</button>
            <button class="button button-additional buttonRemove" data-id="2">remove</button>
          </div>
          <div class="car__wrapper">
            <div class="car__buttons">
              <button class="button button-basic buttonStart"></button>
              <button class="button button-basic buttonEnd"></button>
            </div>
            <span class="text">${carName}</span>
         </div>
        </div>
        <div class="car__container">
        ${renderCarImage(renderRandomColor())}
    </div>
      </div>`;
  };
function fetchData(callback){
    fetch('http://127.0.0.1:3000/garage')
    .then(res => res.json())
    .then(data => {
        carQuantity = data.length;
        for(let i = 0; i < data.length; i++){ 
            root.innerHTML += callback(data[i].name);
        }
        console.log(data)
    })
} 

fetchData(writeCarContent)


const writeInputs = (input1, input2) => {
  return `<div class="options">
    <div class="option create-car">
      <div class="option__wrapper">
        <input class="option__input option__input_text create-car__name" type="text">
        <input class="option__input option__input_color create-car__color" type="color" value="#fb00ff">
      </div>
      <button class="button button-additional option__button create-car__button">${input1}</button>
    </div>
    <div class="option update-car">
      <div class="option__wrapper">
        <input class="option__input option__input_text update-car__name" type="text" disabled="">
        <input class="option__input option__input_color update-car__color" type="color" disabled="">
      </div>
      <button class="button button-additional option__button update-car__button" disabled="">${input2}</button>
    </div>
  </div>`;
};


const writeHeader = () => {
  return `<div>
  <div class="garage">
    <div class="wrapper">
      <div class="garage__options"> 
        <div class="options__race">
          <button class="button option__button button-basic race">Race</button>
          <button class="button option__button button-basic reset">Reset</button>
          <button class="button option__button button-basic generate-cars">Generate cars</button>
        </div>
      </div>
      <h2 class="heading">GARAGE (<span class="garage__carsTotal">${carQuantity}</span>)</h2>
    </div>
  </div>
        </div>`;
};

const writePagination = () => {
  return `<div class="garage__pagination pagination">
    <button class="button button-basic button-prev" disabled="">Prev</button>
    <span class="pagination__page">1</span>
    <button class="button button-basic button-next" disabled="">Next</button>
  </div>`;
};
root.innerHTML += writeInputs("CREATE", "UPDATE");
root.innerHTML += writeHeader();
root.innerHTML += writePagination();

// export const writeGaragePage = () => {
//     document.querySelector('body').innerHTML = `
//         <div></div>
//     `
// }

// export const writeWinnnersPage = () => {

// }
document.querySelector("body").append(header, root);
