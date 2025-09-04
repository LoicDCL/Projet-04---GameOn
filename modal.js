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


// Fermeture de la modale
// Déclaration variable fermeture
const closeBtn = document.querySelector(".close");
//Mise en place d'un Event Listener
closeBtn.addEventListener("click", closeModal);
//fonction qui cache la modale
function closeModal() {
  modalbg.style.display = "none";
}


// Message Erreur Champ 01
// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  // Variables Erreur Champs 01
  const firstNameInput = document.getElementById("first");
  const errorMessage = document.querySelector(".error-first");
  const value = firstNameInput.value.trim();
  // Résultat selon conditions THEN - ELSE
  if (value.length < 2) {
    event.preventDefault();
    errorMessage.style.display = "inline";
  } else {
    errorMessage.style.display = "none";
  }
});

// Message Erreur Champ 02
// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  // Variables Erreur Champs 02
  const lastNameInput = document.getElementById("last");
  const errorMessage = document.querySelector(".error-last");
  const value = lastNameInput.value.trim();
  // Résultat selon conditions THEN - ELSE
  if (value.length < 2) {
    event.preventDefault();
    errorMessage.style.display = "inline";
  } else {
    errorMessage.style.display = "none";
  }
});

// Message Erreur Email non Valide
// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  // Variables Erreur Email
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-email");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Résultat selon conditions THEN - ELSE
  if (!emailRegex.test(emailValue)) {
    event.preventDefault();
    errorMessage.style.display = "inline";
  } else {
    errorMessage.style.display = "none";
  }
});

// Message Erreur sur le nombre d'évènement fait
// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  // Variables Erreur quantité
  const quantityInput = document.getElementById("quantity");
  const errorMessage = document.querySelector(".error-quantity");
  const value = quantityInput.value.trim();
  // Résultat selon conditions THEN - ELSE
  if (value ==="") {
    event.preventDefault();
    errorMessage.style.display = "inline";
  } else {
    errorMessage.style.display = "none";
  }
});

// Message Erreur sur la non selection checkbox
// Blocage de l'event si condition non remplie
document.getElementById("modal-form").addEventListener("submit", function(event){
  // Variables Erreur non selection
  const checkboxes = document.getElementsByName("location");
  const errorMessage = document.querySelector(".error-checkbox-label");
  // Vérifie si au moins une est cochée
  let atLeastOneChecked = false;
  checkboxes.forEach(cb => {
    if (cb.checked) atLeastOneChecked = true;
  });
  // Résultat selon conditions THEN - ELSE
  if (!atLeastOneChecked) {
    event.preventDefault();
    errorMessage.style.display = "inline";
  } else {
    errorMessage.style.display = "none";
  }
});
