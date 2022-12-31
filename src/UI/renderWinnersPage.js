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

// const {count: winnersCount} = await getWinners(1,10)
// const { items: winners, count: winnersAmount } = await getWinners(1);

export const renderWinnersPage = () => {
  let root = document.createElement("div");
  root.setAttribute("id", "rootWinners");
  root.classList.add("hidden");
  root.innerHTML = `
  <div class="winners">
    <div class="winners__wrapper wrapper">
      <h2 class="heading">WINNERS (<span class="winners__carsTotal">1</span>)</h2>
      <table class="winners__table table">
        <thead>
          <tr>
            <th class="table__number">№</th>
            <th>Car</th>
            <th class="table__name">Name</th>
            <th class="table__wins sort" data-sort="wins">
              <div class="table__wins">
                <span>Wins</span>
                <span class="table__wins_order"></span>
              </div>
            </th>
            <th class="table__time sort" data-sort="time">
              <div class="table__time">
                <span>Best time (sec)</span>
                <span class="table__time_order"></span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
  
    </tbody>
      </table>
      <div class="winners__pagination pagination">
        <button class="button button-basic button-prev" disabled="">Prev</button>
        <span class="pagination__page">1</span>
        <button class="button button-basic button-next" disabled="">Next</button>
      </div>
    </div>
  </div>
  `;
  document.querySelector("body").append(root);

  // winners.map((winner, num = 0) => {
  //   document.querySelector(".table__body").innerHTML += `
  //   <tr>
  //   <td>${num++}</td>
  //   <td>${renderCarImage('crimson', 90)}</td>
  //   <td>${winner.name}</td>
  //   <td>${winner.wins}</td>
  //   <td>${winner.time}</td>
  // </tr>`;
  // });
};

export const renderWinnersContent = () => {
  return ``;
};
