import { renderCarImage, generateRandomCars } from "../utils";  
import { showPopUp } from "../utils"; 
import {
  getCars,
  createCar,
  deleteCar,
  updateCar,
  startEngine,
  stopEngine,
  getWinner, 
  deleteWinner,
  drive,
  createWinner,
  updateWinner,
} from "../api";

export let pageNumber = 1;
const { items, count } = await getCars(pageNumber);
export let carsList = items;
let carsAmount = count; 
let leftCars = count;
export const renderGaragePage = () => {
  return `
    <section id="rootGarage">
      <div class="garage__inputs"></div>
      <div class="options"></div>
      <div class="garage__content"></div>
      <div class="garage__pagination pagination"></div>
      <div class="popup"></div>
    </section>`;
};

document.querySelector("body").innerHTML += renderGaragePage();

  (function writeInputs() {
    document.querySelector(".garage__inputs").innerHTML = `
    <div class="option create-car">
      <div class="option__wrapper">
        <input class="option__input option__input_text create-car__name" type="text">
        <input class="option__input option__input_color create-car__color" type="color" value="#fb00ff">
      </div>
      <button onclick="createCar()" class="button button-additional option__button create-car__button">CREATE</button>
    </div>
    <div class="option update-car">
      <div class="option__wrapper">
        <input class="option__input option__input_text update-car__name" type="text" disabled>
        <input class="option__input option__input_color update-car__color" type="color" disabled>
      </div>
      <button class="button button-additional option__button update-car__button" disabled>UPDATE</button></div>`;
  })();

  const writeGarageHeader = (amount = carsAmount) => {
    document.querySelector(".options").innerHTML = `
  <div class="garage">
    <div class="wrapper">
      <div class="garage__options"> 
        <div class="options__race">
          <button onclick="raceCars()" class="button option__button button-basic race">Race</button>
          <button onclick="resetCars()" class="button option__button button-basic reset">Reset</button>
          <button onclick="generateCars()" class="button option__button button-basic generate-cars">Generate cars</button>
        </div>
      </div>
      <h2 class="heading">GARAGE (<span class="garage__carsTotal">${amount}</span>)</h2>
    </div>
  </div>`;
  };
  writeGarageHeader();

  const renderCars = (lists = carsList) => {
    document.querySelector(".garage__content").innerHTML = "";
    lists.map((car) => {
      document.querySelector(".garage__content").innerHTML += `
      <div class="car" data-id=${car.id}>
        <div class="car__options">
          <div class="car__buttons">
            <button onclick="selectCar(${
              car.id
            })" class="button button-additional buttonSelect" data-id=${
        car.id
      }>select</button>
            <button onclick="removeCar(${
              car.id
            })" class="button button-additional buttonRemove" data-id=${
        car.id
      }>remove</button>
          </div>
          <div class="car__wrapper">
            <div class="car__buttons">
              <button id="${car.id}_start-btn" onclick="startCar(${
                car.id
              })" class="button button-basic buttonStart"></button>
              <button id="${car.id}_stop-btn" onclick="stopCar(${
                car.id
              })" class="button button-basic buttonEnd"></button>
            </div>
            <span id="${car.id + "_car-name"}" class="text">${car.name}</span>
          </div
        </div>
        <div class="car__container">${renderCarImage(
          car.color,
          car.id + "_raceCar"
        )}</div>
        </div>`;
    });
  };
  renderCars();

  function writePagination() {
    document.querySelector(".pagination").innerHTML = `
    <button onclick="getPrevPage()" class="button button-basic button-prev" ${
      pageNumber === 1 ? "disabled" : ""
    }>Prev</button>
    <span class="pagination__page">${pageNumber}</span>
    <button onclick="getNextPage()" class="button button-basic button-next" ${carsAmount < 7 ? "disabled" : ""}>Next</button>`;
  }
  writePagination();
 
  // generate cars
  window.generateCars = async function () {
    let generatedCars = generateRandomCars();
    generatedCars.map((car) => {
      createCar(car).then((res) => {
        carsList = [...carsList, res];
      });
    });
    getCars(pageNumber).then((res) => {
      writeGarageHeader(res.count);
      renderCars(res.items);
      carsAmount = res.count
      leftCars = res.count;
      writePagination();
    });
  }; 

  window.getNextPage = function () {
    
    if (leftCars <= 7) {
      document.querySelector(".button-next").setAttribute("disabled", true);
    } 
    getCars(pageNumber += 1).then((res) => {
      carsList = res.items;
      renderCars();
    });
    writePagination();  
    leftCars = leftCars - 7;
  };

  window.getPrevPage = function () {
    getCars(pageNumber -= 1).then((res) => {
      carsList = res.items;
      renderCars();
    });
    writePagination();
    leftCars = leftCars + 7;
  };

  // update car
  let updatedCarId = null;
  window.selectCar = function (id) {
    let selectedCar = carsList.find((car) => {
      return car.name === document.getElementById(`${id}_car-name`).textContent;
    });
    updatedCarId = selectedCar.id
    document.querySelector(".update-car__name").removeAttribute("disabled");
    document.querySelector(".update-car__color").removeAttribute("disabled");
    document.querySelector(".update-car__button").removeAttribute("disabled");
    document.querySelector(".update-car__name").value = selectedCar.name;
    document.querySelector(".update-car__color").value = selectedCar.color;
  };

  document
    .querySelector(".update-car__button")
    .addEventListener("click", () => {
      let updatedCar = {
        name: document.querySelector(".update-car__name").value,
        color: document.querySelector(".update-car__color").value,
      };
      updateCar(updatedCarId, updatedCar).then((res) => {
        let car = carsList.find((el) => el.id === updatedCarId);
        car.name = updatedCar.name;
        car.color = updatedCar.color;
        renderCars();
      });
      updateWinner(updatedCarId, updatedCar)
      
      document.querySelector(".update-car__name").value = "";
      document.querySelector(".update-car__color").value = "#ccc";
      document
        .querySelector(".update-car__name")
        .setAttribute("disabled", true);
      document
        .querySelector(".update-car__color")
        .setAttribute("disabled", true);
      document
        .querySelector(".update-car__button")
        .setAttribute("disabled", true);
    });

  // start and stop engine 
  let result = []

  window.startCar = async function (id) {
    let movedPosition = null; 
    let roadWidth = null;
    let time = 0;
    document.getElementById(`${id}_start-btn`).setAttribute('disabled', true)
    
    await startEngine(id).then((res) => {
      time = Math.round(res.distance / res.velocity);  
      roadWidth = document.querySelector(".car").clientWidth; 
      movedPosition = (roadWidth / time / 10).toFixed(0);
    });
  
    let element = document.getElementById(`${id}_raceCar`);
    let animationEx;
      animationEx = element.animate([{left: 0}, {left: `100%`}], {
        duration: time,
        iterations: 1
      });
      animationEx.play();
      element.style.left = `100%`;
      
      await drive(id).then((res)=>{ 
      if(res.success === false){
        animationEx.pause();
      } else{
        result.push(res)   
      } 

      if(result.length === 1){
        let createdWinner = {id:result[0].id, wins:1, time:(time/1000).toFixed(2)}
        getWinner(result[0].id).then((res) => { 
          if(JSON.stringify(res) === "{}"){
            createWinner(createdWinner).then((r) => { 
            })
          } else{
            updateWinner(result[0].id, {wins:res.wins + 1, time: (time/1000).toFixed(2)}).then((r2) => {
            })
          }
          carsList.map((car) => {
            if(car.id === result[0].id){
              showPopUp(res.wins, car.name, (time/1000).toFixed(2))
            }
          })
          setTimeout(() => { 
          document.querySelector('.popup').style.display = 'none'
          }, 2000)
        })
      }
    })  
  };
  
  window.stopCar = function (id) {
    document.getElementById(`${id}_start-btn`).removeAttribute('disabled')
    stopEngine(id).then((res) => {
      document.getElementById(`${id}_raceCar`).style = "left: 0 !important;";
      console.log(document.getElementById(`${id}_raceCar`));
    });
  };

  window.raceCars = async function(){
    document.querySelectorAll('button').forEach(btn=>{ 
      if(btn.classList.contains('button-additional') || btn.classList.contains('option__button')){
      btn.setAttribute('disabled', true) 
      }
    })

    let newArray = await carsList.map(car => {  
      return (startCar(car.id)) 
    })
    Promise.all(newArray).then((res) => {
      document.querySelectorAll('button').forEach((btn) => {
        if(btn.classList.contains('race')){
          btn.setAttribute('disabled', true) 
        }else if(btn.classList.contains('button-additional') || btn.classList.contains('option__button')){
          btn.removeAttribute('disabled', true) 
          } 
      }) 
    }) 
  }

  window.resetCars = async function(){
    await carsList.map(car => {
      stopCar(car.id)
    })
    document.querySelector('.race').removeAttribute('disabled')
  }

  // remove car
window.removeCar = function (id) {
  deleteCar(id).then((res) => {
    carsList = carsList.filter((deletedCar) => deletedCar.id !== +id)
    getCars(pageNumber).then((res) => {

      writeGarageHeader(res.count)
      renderCars(res.items)
    })
  })
  deleteWinner(id)
}

// create car
window.createCar = function () {
  const newCar = {
    name: document.querySelector('.create-car__name').value,
    color: document.querySelector('.create-car__color').value,
  }
  createCar(newCar).then((res) => {
    carsList = [...carsList, res]
    renderCars()
    document.querySelector('.create-car__name').value = ''
    document.querySelector('.create-car__color').value = '#fb00ff'
  })
}

