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



const addContactModal = document.getElementById('add-modal');
const startAddContactButton = document.querySelector('.contact');
const backdrop = document.getElementById('backdrop');
const confirmContactButton = document.querySelector('.btn-submit');
const userInputs = addContactModal.querySelectorAll('input');
const userInputText = addContactModal.querySelector('textarea');
const emailTo = "marie.blanchet.pro@gmail.com";

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// const closeContactDeletionModal = () => {
//   toggleBackdrop();
//   // deleteContactModal.classList.remove('visible');
// };

const closeContactModal = () => {
  toggleBackdrop();
  addContactModal.classList.remove('visible');
};

const showContactModal = () => {
  // function() {}
  addContactModal.classList.add('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeContactModal();
  // closeContactDeletionModal();
  clearContactInput();
};

const clearContactInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
  userInputText.value = '';
};

const addContactHandler = () => {
  const nameValue = userInputs[0].value;
  const emailValue = userInputs[1].value;
  const messageValue = userInputText.value;

  if (
    nameValue.trim() === '' ||
    emailValue.trim() === '' ||
    messageValue.trim() === ''
  ) {
    alert('Merci de compléter les champs');
    return;
  }
  // const sendEmail = () => {
  //   window.location.href = "mailto:"+emailTo+'?cc='+emailValue+'&subject= Email de '+nameValue+'&body='+messageValue;
  //   };
  // sendEmail();
  // console.log("mailto:"+emailTo+'?cc='+emailValue+'&subject= Email de '+nameValue+'&body='+messageValue);
};


startAddContactButton.addEventListener('click', showContactModal);
backdrop.addEventListener('click', backdropClickHandler);
// cancelAddContactButton.addEventListener('click', cancelAddContactHandler);
// confirmContactButton.addEventListener('click', addContactHandler);

// confirmContactButton.addEventListener('click', (event) => );




$("#ajaxForm").submit(function(e){
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    contentType: "multipart/form-data",
    processData: false,
    contentType: false,
    headers: {
      "Accept": "application/json"
    }
  }).done(function() {
     $('.success').addClass('is-active');
  }).fail(function() {
     alert('Une erreur s\'est produite, merci d\'essayer plus tard.')
  });
});

