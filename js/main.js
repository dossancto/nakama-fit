const navbarToggle = document.querySelector("#naviconToggle")
const nav = document.querySelector(".nav-content")

navbarToggle.addEventListener('click', navToggle)

let navopenned = false;

function navToggle() {
  if (navopenned) {
    nav.classList.remove("nav-open")
    navbarToggle.classList.remove("blacknavicon")
  }


  else {
    nav.classList.add("nav-open")
    navbarToggle.classList.add("blacknavicon")
  }

  navopenned = !navopenned;
}

