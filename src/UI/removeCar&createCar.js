import { createCar, deleteCar, getCars } from "../api"
import { renderCars, writeGarageHeader, pageNumber} from "./renderGaragePage"
// const { items, count } = await getCars(pageNumber);
// let carsList = items;

// remove car
window.removeCar = function (id) {
  deleteCar(id).then((res) => {
    carsList = carsList.filter((deletedCar) => deletedCar.id !== +id)
    getCars(pageNumber).then((res) => {
      console.log(res)
      writeGarageHeader(res.count)
      renderCars(res.items)
    })
  })
  // deleteWinner(id).then((res) => {
  //   console.log(res);
  // });
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
