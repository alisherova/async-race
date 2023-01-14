import {getWinners} from '../api'
import { renderCarImage } from '../utils'

let winnersNumber = 1
let winnersList = []

export async function renderWinnersPage() { 
  const root = document.createElement('section')
  root.setAttribute('id', 'rootWinners')
  root.classList.add('hidden')
  root.innerHTML = `
  <div class="winners">
    <div class="winners__wrapper wrapper">
      <h2 class="heading">WINNERS (<span class="winners__carsTotal">${winnersNumber}</span>)</h2>
      <table class="winners__table table">
        <thead>
          <tr>
            <th class="table__number">№</th>
            <th>Car</th>
            <th class="table__name">Name</th>
            <th class="table__wins sort" data-sort="wins">
              <div class="table__wins">
                <span onclick="sortByWins()">Wins</span>
                <span class="table__wins_order"></span>
              </div>
            </th>
            <th class="table__time sort" data-sort="time">
              <div class="table__time">
                <span id="winnersTimeSpan" onclick="sortByTime()">Best time (sec)</span>
                <span class="table__time_order"></span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="table__body"> 
    </tbody>
      </table>
    </div>
  </div>
  `
  document.querySelector('body').append(root)
}

const renderWinners = (winnersList) => {
  winnersList.map((winner, num = 0) => {
    document.querySelector('.table__body').innerHTML += `
    <tr>
      <td>${num++}</td>
      <td>${renderCarImage(winner.car.color, 90)}</td>
      <td>${winner.car.name}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
  </tr>`
  })
}

let winnersUrl = ''

 window.showWinners = function(sort, order){
  document.querySelector('.table__body').innerHTML = ""
  getWinners(sort, order).then((res) => { 
    winnersUrl = res.url;
    winnersList = res.items
    winnersNumber = res.count
    renderWinners(winnersList)
  }) 
} 

window.sortByTime = function(){ 
  const searchParams = new URLSearchParams(winnersUrl); 
  (searchParams.get('_order') === "DESC") ? showWinners('time', 'ASC') : showWinners('time', 'DESC')
}

window.sortByWins = function(){ 
  const searchParams = new URLSearchParams(winnersUrl); 
  (searchParams.get('_order') === "DESC") ? showWinners('wins', 'ASC') : showWinners('wins', 'DESC')
}

export default showWinners;