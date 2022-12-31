export const renderHeader = () => {

  let header = document.createElement("div");
  let pagesDiv = document.createElement("div");
  let garagePageBtn = document.createElement("button");
  garagePageBtn.textContent = "TO GARAGE";
  garagePageBtn.setAttribute('id', 'garageBtn')
  garagePageBtn.classList.add("header__button");
  let winnersPageBtn = document.createElement("button");
  winnersPageBtn.textContent = "TO WINNERS";
  winnersPageBtn.classList.add("header__button");
  winnersPageBtn.setAttribute('id', 'winnersPageBtn') 
  let title = document.createElement("p");
  title.innerHTML = "AS<span>YN</span>C RAC<span>E</span>";
  title.classList.add("logo__title");
  pagesDiv.append(garagePageBtn, winnersPageBtn);
  header.append(pagesDiv, title);
  header.classList.add("header__wrapper");
  document.querySelector("body").append(header);
};
