import { renderCarImage, renderRandomColor } from "../utils";
import {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
  startEngine,
  stopEngine,
  drive,
  getWinners,
  getWinner,
  createWinner,
  deleteWinner,
  updateWinner,
} from "../api";

const { items: cars, count: carsAmount } = await getCars(1);
export const renderGaragePage = () => {
  let root = document.createElement("div");
  root.setAttribute("id", "rootGarage");

  const writeGarageHeader = () => {
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
      <h2 class="heading">GARAGE (<span class="garage__carsTotal">${carsAmount}</span>)</h2>
    </div>
  </div>
        </div>`;
  };

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


  root.innerHTML += writeInputs("CREATE", "UPDATE");
  root.innerHTML += writeGarageHeader();

  const writeCarContent = (carName, color) => {
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
        ${renderCarImage(color)}
    </div>
      </div>`;
  };

  const renderCars = () => {
    cars.map((car) => {
      root.innerHTML += writeCarContent(car.name, car.color);
    });
  };
  renderCars();

  const writePagination = () => {
    return `<div class="garage__pagination pagination">
    <button class="button button-basic button-prev" disabled="">Prev</button>
    <span class="pagination__page">1</span>
    <button class="button button-basic button-next" disabled="">Next</button>
  </div>`;
  };

  root.innerHTML += writePagination();
  document.querySelector("body").append(root);

  document.querySelector('.create-car__button').addEventListener('click',() => {
    let newCar = {
      name: document.querySelector('.create-car__name').value,
      color: document.querySelector('.create-car__color').value
    }

    createCar(newCar)
    console.log(createCar(newCar));

    // writeCarContent(newCar.name, newCar.color)
    getCars()
    // console.log( document.querySelector('.create-car__name').value);
    // console.log(document.querySelector('.create-car__color').value);
    // console.log('hi');

  })
};

