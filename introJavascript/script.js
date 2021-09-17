/**
 * Inverse une chaine de caractères
 * @param {string} str La chaine à inverser
 * @returns La chaîne inversée
 */
function inverseChaine(str){
    let tabStr = str.split("");
    return tabStr.reverse().join("");
}

/**
 * 
 * @param {string} heure L'heure sous forme "HH:MM" 
 * @returns true si l'heure entrée en paramètre est égale à l'heure actuelle
 */
function bonneHeure(heure){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return heure === hours + ":" + minutes;
}

/**
 * Determine si la taille d'un tableau est supérieure à 10
 * @param {array} tableau 
 * @return true si la taille du tableau est supérieure à 10, false sinon
 */
function tableauTaille10(tableau){
    return tableau.length > 10;
}

/**
 * Détermine combien d'années il faudra pour atteindre un seuil
 * @param {*} deposit le depot initial
 * @param {*} rate le taux annuel
 * @param {*} threshold le seuil à atteindre
 * @returns Le nombre d'années nécessaires pour atteindre le seuil
 */
function DepositProfit (deposit, rate, threshold) {
    let balance = deposit;
    let annees = 0;
    while(balance < threshold){
        balance += balance * rate / 100;
        annees++;
    }
    return annees;
  }

  /**
   * Renvoie la somme des impairs de la suite de fibonacci inférieurs à une valeur donnée
   * @param {*} numMax 
   * @returns 
   */
  function SumOddFiboNumber(numMax) {
    let i = 1;
    let j = 1;
    let somme = 0;
    let sommeImpairs = i + j;
    while(sommeImpairs < numMax){
        somme = i + j;
        i = j;
        j = somme;
        if(somme % 2 != 0) sommeImpairs += somme;
    }
    return sommeImpairs;
  }

/**
 * Récupère le siècle auquel appartient une année
 * @param {*} year L'année à vérifier
 * @returns Le siècle
 */
function CenturyFromYear(year) {
    if(year % 100 == 0) return year / 100;
    return Math.ceil(year / 100);
}

function SortByLength(inputArray) {
    inputArray.sort(function(a, b){
        return a.length - b.length;
    });
    return inputArray;
  }

  function CountVowelConsonant(inputString) {
    let count = 0;
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    for(let c of inputString){
        if(voyelles.includes(c)) count++;
        else count += 2;
    }
    return count;
  }


  function LargestNumber() {
    let tab = [2, 4, -1, 28, 3, -10, 29, 12, 21 -3]
    tab.sort(function(a, b){
        return b - a;
    })
    return tab[0];
  }


  function NoterLesEleve () {
    let eleves = [{
      'Prénom' : 'Luna',
      'Point' : 73,
      'Note' : ''
    },
    {
      'Prénom' : 'Joe',
      'Point' : 80,
      'Note' : ''
    },
    {
      'Prénom' : 'Thomas',
      'Point' : 79,
      'Note' : ''
    },
    {
      'Prénom' : 'Raman',
      'Point' : 45,
      'Note' : ''
    },
    {
      'Prénom' : 'Alexandra',
      'Point' : 92,
      'Note' : ''
    },
    {
      'Prénom' : 'Jeanne',
      'Point' : 42,
      'Note' : ''
    }];
  
    for(let i = 0; i < eleves.length; i++){
      eleves[i].Note = "A";
      if(eleves[i].Point < 90) eleves[i].Note = "B";
      if(eleves[i].Point < 80) eleves[i].Note = "C";
      if(eleves[i].Point < 70) eleves[i].Note = "D";
      if(eleves[i].Point < 60) eleves[i].Note = "E";
    }
    return eleves;
  }


  function FizzBuzz() {
    for(let i = 1; i <= 100; i++){
      if(i % 3 == 0 && i % 5 == 0){ 
        console.log("FizzBuzz");
      }
      else{
        if(i % 3 == 0) console.log("Fizz");
        if(i % 5 == 0) console.log("Buzz");
      }      
    }
  }

  function HappyNumber(nombre) {
    let stringVersion = nombre.toString();
    let sommeCarres = 0;
    for(let c of stringVersion){
      sommeCarres += Math.pow(parseInt(c), 2);
    }
    if(sommeCarres == 4) return false;
    if(sommeCarres == 1) return true;
    return HappyNumber(sommeCarres);
  }

  function fiveFirstHappyNumbers(){
    let fiveFirst = [];
    let nb = 1;
    while(fiveFirst.length < 5){
      if(HappyNumber(nb)) fiveFirst.push(nb);
      nb++;
    }
    return fiveFirst;
  }


module.exports = {
    inverseChaine,
    bonneHeure,
    tableauTaille10,
    DepositProfit,
    SumOddFiboNumber,
    CenturyFromYear,
    SortByLength,
    CountVowelConsonant,
    LargestNumber,
    NoterLesEleve,
    FizzBuzz,
    HappyNumber,
    fiveFirstHappyNumbers
}