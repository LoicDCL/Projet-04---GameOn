function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Fermeture de la modale + la validation
// Déclaration variable fermeture
const closeBtns = document.querySelectorAll(".close");
//Mise en place d'un Event Listener
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalbg.style.display = "none";
    document.querySelector(".content").style.display = "block";
    document.querySelector(".validation-content").style.display = "none";
  });
});

//fonction qui cache la modale
function closeModal() {
  modalbg.style.display = "none";
}


// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  let formIsValid = true;
// Gestion erreur champ Prénom
  // Déclaration des variables du champ prénom
  const first = document.getElementById("first");
  const firstData = first.parentElement;
  // Résultat selon conditions THEN - ELSE
  if (first.value.trim().length < 2) {
    event.preventDefault();
    firstData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    firstData.setAttribute("data-error-visible", "false");
  }

// Gestion erreur champ nom
  // Déclaration des variables du champ nom
  const last = document.getElementById("last");
  const lastData = last.parentElement;
  // Résultat selon conditions THEN - ELSE
  if (last.value.trim().length < 2) {
    event.preventDefault();
    lastData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    lastData.setAttribute("data-error-visible", "false");
  }

// Gestion erreur champ Email
  // Déclaration des variables du champ Email
  const email = document.getElementById("email");
  const emailData = email.parentElement;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    event.preventDefault();
    emailData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    emailData.setAttribute("data-error-visible", "false");
  }

// Gestion erreur nombre évènements
  // Déclaration des variables valeur numérique évènements
  const quantity = document.getElementById("quantity");
  const quantityData = quantity.parentElement;
  if (quantity.value.trim() === "" || isNaN(quantity.value)) {
    event.preventDefault();
    quantityData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    quantityData.setAttribute("data-error-visible", "false");
  }

// Gestion erreur boutons radio location
  // Déclaration des variables radio
  const radios = document.getElementsByName("location");
  const radioData = radios[0].closest(".formData");
  let oneChecked = false;
  Array.from(radios).forEach(r => { if (r.checked) oneChecked = true; });
  if (!oneChecked) {
    event.preventDefault();
    radioData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    radioData.setAttribute("data-error-visible", "false");
  }

// Message Erreur sur la non selection checkbox condition générales
  // Variables Erreur non selection
  const checkbox1 = document.getElementById("checkbox1");
  const checkboxData = checkbox1.closest(".formData");
  if (!checkbox1.checked) {
    event.preventDefault();
    checkboxData.setAttribute("data-error-visible", "true");
    formIsValid = false;
  } else {
    checkboxData.setAttribute("data-error-visible", "false");
  }

const formContent = document.querySelector(".content"); 
const validationContent = document.querySelector(".validation-content");

  if (formIsValid) {
    event.preventDefault();
    formContent.style.display = "none";
    validationContent.style.display = "block";
  }

document.querySelector(".btn-close").addEventListener("click", () => {
  modalbg.style.display = "none";
  formContent.style.display = "block";
  validationContent.style.display = "none";
  });

});