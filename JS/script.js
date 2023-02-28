/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
sappiamo che esiste il metodo .includes() per trovare subito 
l'occorrenza di un elemento all'interno di un array
ma vi chiediamo di realizzare una soluzione alternativa 
ad hoc che faccia forza dell'utilizzo del ciclo

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere
 al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

*/

//MAIL

//pseudo-codice:
//- Creo un div che utilizzerò come input per inserire la mail
//- creo un array con all'interno delle mail
//- se l'indirizzo inserito è presente nell'array stampo in pagina il testo
// - stampo un messaggio di esito del controllo



/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
- preparare una lista di email di registrazione
- preparare una variabile sentinella inizializzata in "falso"
- Prendere la mail da un campo di testo alla pressione del pulsante
- per ogni elemento nella lista di email
  ? SE la mail inserita è uguale alla mail a cui siamo arrivati
    - ALLORA modifica la variabile sentinella in "vero"
? SE la variabile sentinella è "vero"
  - ALLORA scrivi in pagina "trovata"
: altrimenti
  - scrivi in pagina "non trovata"
*/

// - Prendere la mail da un campo di testo alla pressione del pulsante
let userEmailElement = document.getElementById('userEmail');
let userEmailButtonElement = document.getElementById('userEmailButton');

// prendo l'elemento di output
let loginOutputElement = document.getElementById("loginOutput");

// - preparare una lista di email di registrazione
const acceptedEmails = ['paolo@email.com', 'mario@email.com', 'luca@email.com', 'roberto@email.com'];


// aggiungo l'event listener del click al pulsante
userEmailButtonElement.addEventListener("click", function() {
  // - preparare una variabile sentinella inizializzata in "falso"
  // "la mail è trovata"
  let isMailFound = false;

  // per ogni elemento nella lista di email
  for (let i = 0; i < acceptedEmails.length; i++) {

    // ? SE la mail inserita è uguale alla mail a cui siamo arrivati
    if(userEmailElement.value == acceptedEmails[i]) {

      // ALLORA modifica la variabile sentinella in "vero"
      isMailFound = true;

    }
     
  }

  //  SE la variabile sentinella è "vero"
  if(isMailFound) {

    loginOutputElement.innerText = "Benvenuto."
    loginOutputElement.style.color = "green";

  } else {

    loginOutputElement.innerText = "Non hai i permessi."
    loginOutputElement.style.color = "red";
    
  }

});

//parte dadi


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
mostra le immagini dei dadi in pagina rispettive al numero tirato
*/

/*
- mi preparo un array di immagini di dadi
- genero un numero random da 1 a 6 per l'utente
- genero un numero random da 1 a 6 per il computer
? SE il numero dell'utente è maggiore del numero del computer
  ° stampo "hai vinto"
: ALTRIMENTI 
  ° stampo "hai perso"
- mostro l'immagine del dado 1 corrispondente all'indice scelto -1
- mostro l'immagine del dado 2 corrispondente all'indice scelto -1
*/

// - mi preparo un array di immagini di dadi
let diceFaceImgs = ["img/dado1.jpg", "img/dado2.jpg", "img/dado3.png","img/dado4.png", "img/dado5.png", "img/dado6.png"];
const diceImg1Element = document.getElementById("diceImg1");
const diceImg2Element = document.getElementById("diceImg2");
const diceOutputElement = document.getElementById("diceOutput");

const throwDiceElement = document.getElementById("throwDice");

throwDiceElement.addEventListener("click",  function() {
  const diceContainerElement = document.getElementById("diceContainer");
  diceContainerElement.style.display = "block";

  // - genero un numero random da 1 a 6 per l'utente
  const randomUserNumber = Math.floor(Math.random() * 6 + 1);
  // - genero un numero random da 1 a 6 per il computer
  const randomComputerNumber = Math.floor(Math.random() * 6 + 1);

  // ? SE il numero dell'utente è maggiore del numero del computer

  if(randomUserNumber > randomComputerNumber) {
    
    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, hai vinto.`;


  } else if(randomUserNumber < randomComputerNumber) {

    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, hai perso.`;


  } else {
    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, PAREGGIO.`;

  }


  // - mostro l'immagine del dado 1 corrispondente all'indice scelto -1
  diceImg1Element.src = diceFaceImgs[randomUserNumber-1];

  // - mostro l'immagine del dado 2 corrispondente all'indice scelto -1
  diceImg2Element.src = diceFaceImgs[randomComputerNumber - 1];

});

    
  
  
  