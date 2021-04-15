const suggestions = document.getElementById("suggestions");
const searchInput = document.getElementById("search_input");

searchInput.onfocus = () => {
  suggestions.classList.add("show-suggestions");
};
searchInput.onblur = () => {
  suggestions.classList.remove("show-suggestions");
};