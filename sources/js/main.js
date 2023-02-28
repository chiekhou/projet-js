export { batterie, latence, heuresComplete, masquerHeure, vibration, masquerMinute, masquerSeconde, dateDiv, masquerAnnee, masquerMois, masquerJour, vibrate }
var heuresComplete = document.querySelector('.heuresComplete');
var batterie = document.querySelector('.batterie');
var latence = document.querySelector('.latence');
var vibration = document.querySelector('.vibration');
var masquerHeure = document.querySelector('.ch');
var masquerMinute = document.querySelector('.cm');
var masquerSeconde = document.querySelector('.cs');
var dateDiv = document.querySelector('.date');
var masquerAnnee = document.querySelector('.annee')
var masquerMois = document.querySelector('.mois')
var masquerJour = document.querySelector('.jour')


// Récupérer la date actuelle : 
var today = new Date();

var annee, listeMois, mois, listeJours, jourNumero, jourNom;

var heures, minutes, secondes;
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
var deuxChiffres = function (element) {
    if (element < 10) {
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


var affichageDate = function () {

    //Affichage dans nos DIV du HTML :
    dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;
    masquerAnnee.textContent = jourNom + ", " + jourNumero + " " + mois
    masquerMois.textContent = jourNom + ", " + jourNumero + " " + annee;
    masquerJour.textContent = mois + " " + annee;

}
affichageDate();


var affichageHeure = function () {
    //Affichage dans nos DIV du HTML :
    masquerHeure.textContent = minutes + ":" + secondes;
    masquerMinute.textContent = heures + ":" + secondes;
    masquerSeconde.textContent = heures + ":" + minutes;
}

affichageHeure()

setInterval(myTimer, 10);

function myTimer() {
    const date = new Date();
    heuresComplete.textContent = date.toLocaleTimeString();
}


fetch("/img/fd-ecran.jpg").then(function (response) {
    if (response.ok) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                const request = entry.responseStart - entry.requestStart;
                if (request > 0 && entry.name == "https://chiekhoutraore.fr/img/fd-ecran.jpg") {
                    console.log(`${entry.name} : Request time: ${request} ms`)
                    setInterval(delayLatency, 1000)

                    function delayLatency() {
                        latence.innerHTML = `${request.toFixed(2)}/ms`
                    }
                }
            })
        })
        observer.observe({ type: "resource", buffered: true })
        return response.blob();
    }
})

var affichageBatterie = function () {
    navigator.getBattery().then(battery => {
        function updateAllBatteryInfo() {
            updateLevelInfo();
        }
        updateAllBatteryInfo();

        function updateLevelInfo() {
            batterie.innerHTML = "<div class='center'><span>" + (battery.level * 100).toFixed() + "%</span></div>";
        }

    });

}
affichageBatterie();

function vibrate() {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }
    navigator.vibrate = navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
    window.navigator.vibrate([200, 100, 200]);
}

function stopVibrations() {
    // You can also stop an ongoing vibration pattern by specifying a vibration
    // length of zero.
    navigator.vibrate(0);
}


if ('vibrate' in navigator) {
    // vibration API supported
    vibration.addEventListener('click', function (ev) {
        console.log('body clicked. Time to shake.');
        //navigator.vibrate(1000);
        var vib = navigator.vibrate(0);
        vibration.textContent = vib
    });
}



latence.classList.add(localStorage.displayLat);
batterie.classList.add(localStorage.displayBat);
heuresComplete.classList.add(localStorage.displayH);
masquerHeure.classList.add(localStorage.displayMh);
masquerMinute.classList.add(localStorage.displayMm);
masquerSeconde.classList.add(localStorage.displayMs);
dateDiv.classList.add(localStorage.displayDc);
masquerAnnee.classList.add(localStorage.displayMda);
masquerMois.classList.add(localStorage.displayMdm);
masquerJour.classList.add(localStorage.displayMdj);
vibration.classList.add(localStorage.displayVib);



