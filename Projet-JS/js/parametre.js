import { heuresComplete, masquerHeure, masquerMinute, masquerSeconde, dateDiv, batterie, latence, masquerAnnee, masquerMois, masquerJour } from './main.js';
var afficherLat = document.querySelector(".afficher-latence");
var masquerLat = document.querySelector(".masquer-latence");
var afficherBat = document.querySelector(".afficher-batterie");
var masquerBat = document.querySelector(".masquer-batterie");
var afficherH = document.querySelector(".afficher-heures");
var masquerH = document.querySelector(".masquer-heures");
var afficherMin = document.querySelector(".afficher-minutes");
var masquerMin = document.querySelector(".masquer-minutes");
var afficherSec = document.querySelector(".afficher-secondes");
var masquerSec = document.querySelector(".masquer-secondes");
var afficherDate = document.querySelector(".afficher-date");
var masquerDate = document.querySelector(".masquer-date");
var afficherAnnee = document.querySelector(".afficher-annee");
var buttonMasquerAnn = document.querySelector(".masquer-annee");
var afficherMois = document.querySelector(".afficher-mois");
var buttonMasquerMois = document.querySelector(".masquer-mois");
var afficherJour = document.querySelector(".afficher-jour");
var buttonMasquerJour = document.querySelector(".masquer-jour");
const theme = document.querySelector(".theme");
const body = document.body;
const settingsDialog = document.querySelector('#settings');
const settingsOverlay = document.querySelector('#settings-overlay');
const showSettingsButton = document.querySelector('#show-settings');
const hideSettingsButton = document.querySelector('#hide-settings');

// Affichage et masquer la latence
afficherLat.addEventListener("click", () => {
  if (getComputedStyle(latence).display != "block") {
    latence.classList.remove("block-mode")
    latence.classList.add("block-mode")
    localStorage.setItem("displayLat", "block-mode");

  }
})

masquerLat.addEventListener("click", () => {
  if (getComputedStyle(latence).display != "none") {
    latence.classList.remove("block-mode")
    latence.classList.add("none-mode")
    localStorage.setItem("displayLat", "none-mode");
  }
})



//Affichage et masquer batterie

afficherBat.addEventListener("click", () => {
  if (getComputedStyle(batterie).display != "block") {
    batterie.classList.remove("block-mode")
    batterie.classList.add("block-mode")
    localStorage.setItem("displayBat", "block-mode");
  }

});

masquerBat.addEventListener("click", () => {
  if (getComputedStyle(batterie).display != "none") {
    batterie.classList.remove("block-mode")
    batterie.classList.add("none-mode")
    localStorage.setItem("displayBat", "none-mode");
  }
})


// Affichage et masquer heure , min , sec

afficherH.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "block") {
    masquerHeure.classList.remove("block-mode")
    heuresComplete.classList.add("block-mode")
    localStorage.setItem("displayH", "block-mode");
    localStorage.setItem("displayMh", "none-mode");
    ;
  }
})

masquerH.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "none") {
    heuresComplete.classList.remove("block-mode")
    heuresComplete.classList.add("none-mode")
    masquerHeure.classList.add("block-mode");
    localStorage.setItem("displayH", "none-mode");
    localStorage.setItem("displayMh", "block-mode");

    ;
  }
})

afficherMin.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "block") {
    masquerMinute.classList.remove("block-mode")
    heuresComplete.classList.add("block-mode")
    localStorage.setItem("displayH", "block-mode");
    localStorage.setItem("displayMm", "none-mode");
    ;
  }
})

masquerMin.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "none") {
    heuresComplete.classList.remove("block-mode")
    heuresComplete.classList.add("none-mode")
    masquerMinute.classList.add("block-mode");
    localStorage.setItem("displayH", "none-mode");
    localStorage.setItem("displayMm", "block-mode");

    ;
  }
})


afficherSec.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "block") {
    masquerSeconde.classList.remove("block-mode")
    heuresComplete.classList.remove("none-mode")
    localStorage.setItem("displayMs", "none-mode");
    localStorage.setItem("displayH", "block-mode");
    ;
  }
})

masquerSec.addEventListener("click", () => {
  if (getComputedStyle(heuresComplete).display != "none") {
    heuresComplete.classList.remove("block-mode")
    heuresComplete.classList.add("none-mode")
    masquerSeconde.classList.add("block-mode");
    localStorage.setItem("displayH", "none-mode");
    localStorage.setItem("displayMs", "block-mode");
    ;
  }
})

// Afficher/Masquer la date , l'annee , le mois , le jour 

afficherDate.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "block") {
    dateDiv.classList.remove("block-mode")
    dateDiv.classList.add("block-mode")
    localStorage.setItem("displayDc", "block-mode");

  }
})

masquerDate.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "none") {
    dateDiv.classList.remove("block-mode")
    dateDiv.classList.add("none-mode")
    localStorage.setItem("displayDc", "none-mode");

  }
})


afficherAnnee.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "block") {
    masquerAnnee.classList.remove("none-mode")
    masquerAnnee.classList.remove("block-mode")
    dateDiv.classList.add("block-mode")
    localStorage.setItem("displayDc", "block-mode");
    localStorage.setItem("displayMda", "none-mode");

  }
})

buttonMasquerAnn.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "none") {
    dateDiv.classList.remove("block-mode")
    dateDiv.classList.add("none-mode")
    masquerAnnee.classList.add("block-mode")
    localStorage.setItem("displayDc", "none-mode");
    localStorage.setItem("displayMda", "block-mode");
  }
})

afficherMois.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "block") {
    masquerMois.classList.remove("none-mode")
    masquerMois.classList.remove("block-mode")
    dateDiv.classList.add("block-mode")
    localStorage.setItem("displayDc", "block-mode");
    localStorage.setItem("displayMdm", "none-mode");

  }
})

buttonMasquerMois.addEventListener("click", () => {
  dateDiv.classList.remove("block-mode")
  dateDiv.classList.add("none-mode")
  masquerMois.classList.add("block-mode")
  localStorage.setItem("displayDc", "none-mode");
  localStorage.setItem("displayMdm", "block-mode");
})

afficherJour.addEventListener("click", () => {
  if (getComputedStyle(dateDiv).display != "block") {
    masquerJour.classList.remove("none-mode")
    masquerJour.classList.remove("block-mode")
    dateDiv.classList.add("block-mode")
    localStorage.setItem("displayDc", "block-mode");
    localStorage.setItem("displayMdj", "none-mode");
  }
})

buttonMasquerJour.addEventListener("click", () => {
  dateDiv.classList.remove("block-mode")
  dateDiv.classList.add("none-mode")
  masquerJour.classList.add("block-mode")
  localStorage.setItem("displayDc", "none-mode");
  localStorage.setItem("displayMdj", "block-mode");
})

showSettingsButton.addEventListener('click', () => {
  settingsDialog.show();
  settingsOverlay.style.display = 'block';
});

hideSettingsButton.addEventListener('click', () => {
  settingsDialog.close();
  settingsOverlay.style.display = 'none';
});


theme.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
    theme.style.backgroundColor = "#ccc";

  }
  else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
    theme.style.backgroundColor = "black"

  }
})

body.classList.add(localStorage.theme);


















