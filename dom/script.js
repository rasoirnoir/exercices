setInterval(afficheHeure, 1000);
let nbAleatoire = Math.round(genererNombreAleatoire());
let nbEssais = 0;
let heureChargement = luxon.DateTime.now();

function afficheHeure() {
    let heure = luxon.DateTime.now({
        zone: "Europe/Paris",
    });
    let getElHeures = document.getElementById("heures");
    let getElMinutes = document.getElementById("minutes");
    let getElSecondes = document.getElementById("secondes");

    getElHeures.innerHTML = toString2Chiffres(heure.hour);
    getElMinutes.innerHTML = toString2Chiffres(heure.minute);
    getElSecondes.innerHTML = toString2Chiffres(heure.second);

    if (heure.second % 3 == 0) {
        getElHeures.style.color = "red";
    } else {
        getElHeures.style.color = "black";
    }
}

function toString2Chiffres(num) {
    if (num.toString().length == 1) return "0" + num.toString();
    else {
        return num.toString();
    }
}

/**
 * Génère un nombre aléatoire compris entre 1 et 100
 */
function genererNombreAleatoire() {
    return Math.random() * 100;
}

function guess() {}
