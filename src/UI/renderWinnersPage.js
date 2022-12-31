export const renderWinnersPage = () => {
    let root = document.createElement("div");
    root.setAttribute("id", "rootWinners");
    root.innerHTML = `<div class="garage__pagination pagination">
    <button class="button button-basic button-prev" disabled="">Prev</button>
    <span class="pagination__page">1</span>
    <button class="button button-basic button-next" disabled="">Next</button>
  </div>`;
    document.querySelector("body").append(root);
}