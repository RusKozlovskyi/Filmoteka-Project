import * as apiServices from "../services/apiService";
import detailsPageMarkUp from "../views/MovieDetailsPage";
import refs from "../services/refs";
import btnHandler from "../services/localStorage";

const clickListener = () => {
  const movie = document.querySelector(".main__list");
  movie.addEventListener("click", (event) => {
    event.preventDefault();
    refs.warning.textContent = "";
    const { id } = event.target.dataset;
    apiServices
      .fetchById(Number(id))
      .then((data) => {
        refs.main.innerHTML = "";
        detailsPageMarkUp(data, refs.main);
        refs.routes.forEach((item) => item.classList.remove("selected"));
      })
      .then(() => btnHandler());
  });
};

export default clickListener;
