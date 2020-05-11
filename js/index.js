// import './plugins/navbar';
// console.log("je suis la");

const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const menu = document.querySelector(".menu i");

function scrollFunction() {
  // console.log("je suis dans la fonction");
  // console.log(nav);
  if (window.pageYOffset == 0) {
    nav.classList.remove('white');
  } else {
    nav.classList.add('white');
  }
}

const toggleNavbar = () => {
  if (menu) {
    menu.addEventListener("click", (event) => {
      navUl.classList.toggle("active");
    });
  }
}

window.onscroll = function() {scrollFunction()};
toggleNavbar ();
