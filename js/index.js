// import './plugins/navbar';
// console.log("je suis la");

const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const menu = document.querySelector(".menu h4");
console.log(menu);
// console.log(nav);
// if (nav) {
//   const toggleNav = () => {

//   }
//   toggleNav();
// }
// console.log(window);

window.onscroll = function() {scrollFunction()};

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

toggleNavbar ();


// (window).on('scroll', function(){
//            if((window).scrollTop()){
//             nav.addClass('white');
//             // $('nav img').attr('src','images/martin-logo.png');
//            }
//            else
//            {
//             nav.removeClass('white');
//             // $('nav img').attr('src','images/martin-logo-blanc.png');
//            }
//         })
        // $(document).ready(function(){
        //     $(".menu h4").click(function(){
        //       $("nav ul").toggleClass("active")
        //     })
        // })
