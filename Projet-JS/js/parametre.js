import { heuresComplete, dateDiv, batterie, latence} from './main.js';

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
var masquerAnnee = document.querySelector(".masquer-annee");
var afficherMois = document.querySelector(".afficher-mois");
var masquerMois = document.querySelector(".masquer-mois");
var afficherJour = document.querySelector(".afficher-jour");
var masquerJour = document.querySelector(".masquer-jour");

// Affichage et masquer la latence
afficherLat.addEventListener("click", () => {
  if(getComputedStyle(latence).display != "block"){
    latence.style.display = "block";
  }
})

masquerLat.addEventListener("click", () => {
    if(getComputedStyle(latence).display != "none"){
      localStorage.setItem("latence", latence.value)
        latence.style.display = "none";
      }
  })

// Affichage et masquer batterie
afficherBat.addEventListener("click", () => {
  if(getComputedStyle(batterie).display != "block"){
    batterie.style.display = "block";
  }
  
});

masquerBat.addEventListener("click", () => {
    if(getComputedStyle(batterie).display != "none"){
        batterie.style.display = "none";
      }
  })

   //Affichage et masquer heure , min , sec
afficherH.addEventListener("click", () => {
  if(getComputedStyle(heuresComplete).display != "block"){
    heuresComplete.style.display = "block";
    ch.style.display = 'none';
  }
})

masquerH.addEventListener("click", () => {
  if(getComputedStyle(ch).display != "block"){
  ch.style.display = 'block';
    heuresComplete.style.display = 'none'
  }
  }) 

  afficherMin.addEventListener("click", () => {
    if(getComputedStyle(heuresComplete).display != "block"){
      heuresComplete.style.display = "block";
      cm.style.display = 'none';
    }
  })
  
  masquerMin.addEventListener("click", () => {
    if(getComputedStyle(cm).display != "block"){
      cm.style.display = 'block';
      heuresComplete.style.display = 'none'
    }
    }) 

    
  afficherSec.addEventListener("click", () => {
    if(getComputedStyle(heuresComplete).display != "block"){
      heuresComplete.style.display = "block";
      cs.style.display = 'none';
    }
  })
  
  masquerSec.addEventListener("click", () => {
    if(getComputedStyle(cs).display != "block"){
      cs.style.display = 'block';
      heuresComplete.style.display = 'none'
    }
    }) 

  // Afficher/Masquer la date , l'annee , le mois , le jour 

  afficherDate.addEventListener("click", () => {
    if(getComputedStyle(dateDiv).display != "block"){
      dateDiv.style.display = "block";
    }
  })
  
  masquerDate.addEventListener("click", () => {
      if(getComputedStyle(dateDiv).display != "none"){
          dateDiv.style.display = "none";
        }
    })

   
    afficherAnnee.addEventListener("click", () => {
      if(getComputedStyle(dateDiv).display != "block"){
          dateDiv.style.display = "block";
          annee.style.display = 'none'
        }
    })
    
    masquerAnnee.addEventListener("click", () => {
        if(getComputedStyle(annee).display != "block"){
            annee.style.display = "block";
            dateDiv.style.display = 'none'
          }
      })

      afficherMois.addEventListener("click", () => {
        if(getComputedStyle(dateDiv).display != "block"){
            dateDiv.style.display = "block";
            mois.style.display = 'none'
          }
      })
      
      masquerMois.addEventListener("click", () => {
          if(getComputedStyle(mois).display != "block"){
              mois.style.display = "block";
              dateDiv.style.display = 'none'
            }
        })

        afficherJour.addEventListener("click", () => {
          if(getComputedStyle(dateDiv).display != "block"){
              dateDiv.style.display = "block";
              jour.style.display = 'none'
            }
        })
        
        masquerJour.addEventListener("click", () => {
            if(getComputedStyle(jour).display != "block"){
                jour.style.display = "block";
                dateDiv.style.display = 'none'
              }
          })
















