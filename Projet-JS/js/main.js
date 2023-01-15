import { isJsxFragment } from "typescript";

export { heuresComplete, dateDiv , batterie ,latence, masquerHeure}

var heuresComplete = document.querySelector('.heuresComplete');
var masquerHeure = document.querySelector('#ch');
var masquerMin = document.querySelector('#cm');
var masquerSec = document.querySelector('#cs');
var dateDiv = document.querySelector('.date');
var masquerAnnee = document.querySelector('#annee')
var masquerMois = document.querySelector('#mois')
var masquerJour = document.querySelector('#jour')
var batterie = document.querySelector('.batterie');
var latence= document.querySelector('.latence');
var vibration = document.querySelector('.vibration');

// Récupérer la date actuelle : 
var today = new Date();

var annee, listeMois, mois, listeJours, jourNumero, jourNom ; 

var heures, minutes, secondes ; 
// Récupérer l'année : 
annee = today.getFullYear();

//Récupérer le mois : 
listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
mois = listeMois[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Février, ce qui donne la valeur "Février" depuis notre liste

// Récupérer le numéro du jour du mois : 
jourNumero = today.getDate(); //donne 29

// Récupérer le jour. Attention la semaine commence un dimanche en Javascript : 
listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
jourNom = listeJours[today.getDay()]; // getDay() donne index 6, donc samedi

    //Afficher les heures, minutes et secondes toujours avec deux chiffres : 
    var deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

// Récupérer les heures : 
heures = deuxChiffres(today.getHours());

// Récupérer les minutes : 
minutes = deuxChiffres(today.getMinutes());

// Récupérer les secondes : 
secondes = deuxChiffres(today.getSeconds());


var affichageDate = function() {

//Affichage dans nos DIV du HTML :

dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;
masquerAnnee.textContent =  jourNom + ", " + jourNumero + " " + mois
masquerMois.textContent =  jourNom + ", " + jourNumero + " " + annee;
masquerJour.textContent =  mois + " " + annee;


}
affichageDate();

var affichageHeure = function(){

    //Affichage dans nos DIV du HTML :

    heuresComplete.textContent = heures + ":" + minutes + ":" + secondes ;
    masquerHeure.textContent =  minutes + ":" + secondes;
    masquerHeure.textContent =  minutes + ":" + secondes;
    masquerMin.textContent =  heures + ":" + secondes;
    masquerSec.textContent = heures + ":" + minutes;

    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);
}

affichageHeure()


var affichageLatence = function(){
    var lat = navigator.connection.rtt;
    //Affichage dans nos DIV du HTML : 
    latence.textContent = lat + "/ms" ;
}

affichageLatence();

var affichageBatterie = function(){

    navigator.getBattery().then(battery => {
        function updateAllBatteryInfo() {
          updateLevelInfo();
        }
        updateAllBatteryInfo();

        battery.addEventListener('levelchange', () => {
          updateLevelInfo();
        });

        function updateLevelInfo() {
            batterie.textContent = battery.level * 100 + "%";
        }
      });
      
}
affichageBatterie();

function vibrate(){
    if(!window){
        return;
    }

    if(!window.navigator){
        return;
    }

    if(!window.navigator.vibrate){
        return;
    }
    navigator.vibrate = navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
}

  
if (navigator.vibrate) {
    // vibration API supported
    vibration.addEventListener('click', function(ev){
            console.log('body clicked. Time to shake.');
            //navigator.vibrate(1000);
          var vib =  navigator.vibrate([500, 300, 100]);
            
            vibration.textContent = vib
        });
}


// vibration.addEventListener("click" , function() {

