const nextJoke = document.querySelector("#nextJoke");
const url = "https://api.chucknorris.io/jokes/random";
const contenet = document.querySelector("#joke");

const randomJoke = async () => {
  const response = await fetch(url);
  const { value, icon_url } = await response.json();
  contenet.innerHTML = value;
};

nextJoke.addEventListener("click", randomJoke);
