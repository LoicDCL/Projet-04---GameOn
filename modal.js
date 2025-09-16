function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}


// Eléments DOM (DOCUMENT OBJECT MODEL)
// Déclaration constantes pour accession rapide aux éléments
const modalbg = document.querySelector(".bground");// Overlay Modale
const modalBtns = document.querySelectorAll(".modal-btn");// Tous les boutons ouverture
const closeBtns = document.querySelectorAll(".close");// Toutes les croix de fermeure
const formContent = document.querySelector(".content");// Bloc contenant le formulaire
const validationContent = document.querySelector(".validation-content");// Bloc contenant le message de validation
const form = document.getElementById("modal-form");// Eléments formulaire entier


// Fonction d'ouverture de la modale
// La fonction utilise un EventListener pour qu'au clic la propriété CSS passe de "none" à "block"
function openModal() {modalbg.style.display = "block";}
modalBtns.forEach(btn => btn.addEventListener("click", openModal));


// Fonction de Fermeture de la modale
// Inversement l'action (croix ou validation) fait passer le CSS de "block" à "none"
function closeModal() {
    modalbg.style.display = "none";
    formContent.style.display = "block";
    validationContent.style.display = "none";
}
closeBtns.forEach(btn => btn.addEventListener("click", closeModal));
document.querySelector(".btn-close").addEventListener("click", closeModal);


// Fonction utilitaire setError
// Centralise l'affichage/masquage des erreurs
function setError(input, showError) {
    const container = input.closest(".formData");
    container.setAttribute("data-error-visible", showError ? "true" : "false");
    return !showError;
}


// Validation Globale du formulaire avec blocage si un champ est invalide
// Au submit controle la validité des champs, si tout est OK validation
// Sinon blocage du formulaire et la fonction setError montre d'ou viens le problème
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    isValid &= checkText(document.getElementById("first"));
    isValid &= checkText(document.getElementById("last"));
    isValid &= checkEmail(document.getElementById("email"));
    isValid &= checkNumber(document.getElementById("quantity"));
    isValid &= checkRadio(document.getElementsByName("location"));
    isValid &= checkCheckbox(document.getElementById("checkbox1"));

// Si tout est valide alors cache le fomulaire, affiche la validation et vide les champs
    if (isValid) {
    formContent.style.display = "none";
    validationContent.style.display = "block";
    form.reset();
    }
});


// Validation Champs Prénom & Nom
// Vérification que les champs contiennent minimum 2 caractères
// Si First & Last via checkText is OK alors champ valide sinon setError 
function checkText(input, minLength = 2) {
    return setError(input, input.value.trim().length < minLength);
}


// Validation Champs Email
// Respect du regex sur l'éléments Email sinon setError
function checkEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return setError(input, !regex.test(input.value.trim()));
}


// Validation Nombre
function checkNumber(input) {
    return setError(input, input.value.trim() === "" || isNaN(input.value));
}


// Validation Ville
function checkRadio(radios) {
    const checked = Array.from(radios).some(r => r.checked);
    return setError(radios[0], !checked);
}


// Validation CGU
function checkCheckbox(input) {
    return setError(input, !input.checked);
}
