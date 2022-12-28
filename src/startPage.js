import { route } from "./route";
function startPage(){
    const fragment = document.createDocumentFragment();
    let div = document.createElement('div');
    div.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'h-100', 'w-100')
    let start = document.createElement('h1')
    start.textContent = 'ACYNC RACE'
    start.classList.add('startupHeading')
    let btnGo = document.createElement('button')
    let btnGoLink = document.createElement('a')
    btnGoLink.setAttribute('href', '/')
    btnGoLink.addEventListener('click', route)
    btnGoLink.textContent = "GO"
    btnGo.appendChild(btnGoLink)
    div.append(start,btnGo)
    fragment.append(div)
    document.body.append(fragment)
}

export default startPage
