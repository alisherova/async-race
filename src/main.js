import './css/styles.css'
import {renderHeader} from './UI/renderBothPageHeader'
import {renderGaragePage} from './UI/renderGaragePage'
import { renderWinnersPage } from './UI/renderWinnersPage'
renderHeader()
renderGaragePage()
renderWinnersPage()

document.getElementById('winnersPageBtn').addEventListener('click', () => {
    document.getElementById('rootGarage').classList.add('hidden')
    document.getElementById('rootWinners').classList.remove('hidden')
})
document.getElementById('garageBtn').addEventListener('click', () => {
    document.getElementById('rootWinners').classList.add('hidden')
    document.getElementById('rootGarage').classList.remove('hidden')
})