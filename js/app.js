const sideBar = document.getElementById("side_bar");
const sideBarToggler = document.getElementById("toggle-sidebar");
const closeSideBar = document.getElementById("side_bar_back_arrow");
const sideBarContent = document.getElementsByClassName("side_bar_container");
const sideBarHeader = document.getElementById("side_bar_header");
const suggestions = document.getElementById("suggestions");
const searchInput = document.getElementById("search_input");
let sideBarShowState = false;

const toggleSideBar = () => {
  switch (sideBarShowState) {
    case false:
      sideBar.classList.remove("show-sidebar");
      closeSideBar.classList.remove("show-content");
      sideBarHeader.classList.remove("show-side-bar-header");
      Array.from(sideBarContent).map((el, index) => {
        el.classList.remove("show-content");
      });
      break;
    default:
      sideBar.classList.add("show-sidebar");
      closeSideBar.classList.add("show-content");
      sideBarHeader.classList.add("show-side-bar-header");
      Array.from(sideBarContent).map((el, index) => {
        el.classList.add("show-content");
      });
      break;
  }
  sideBarShowState = !sideBarShowState;
};

sideBarToggler.addEventListener("click", toggleSideBar);
closeSideBar.addEventListener("click", toggleSideBar);

searchInput.onfocus = () => {
  suggestions.classList.add("show-suggestions");
};
searchInput.onblur = () => {
  suggestions.classList.remove("show-suggestions");
};
