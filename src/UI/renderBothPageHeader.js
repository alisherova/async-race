export default function renderHeader() {
  const header = document.createElement('div')
  const pagesDiv = document.createElement('div')
  const garagePageBtn = document.createElement('button')
  garagePageBtn.textContent = 'TO GARAGE'
  garagePageBtn.setAttribute('id', 'garageBtn')
  garagePageBtn.classList.add('header__button')
  const winnersPageBtn = document.createElement('button')
  winnersPageBtn.textContent = 'TO WINNERS'
  winnersPageBtn.classList.add('header__button')
  winnersPageBtn.setAttribute('id', 'winnersPageBtn')
  const title = document.createElement('p')
  title.innerHTML = 'AS<span>YN</span>C RAC<span>E</span>'
  title.classList.add('logo__title')
  pagesDiv.append(garagePageBtn, winnersPageBtn)
  header.append(pagesDiv, title)
  header.classList.add('header__wrapper')
  const section = document.querySelector('section')
  document.querySelector('body').insertBefore(header, section)
}
