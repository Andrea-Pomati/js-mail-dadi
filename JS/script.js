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


//creo variabile  assegno  prendihtml. da html cerca l'id  (id) 
let inputEmail = document.getElementById("_input-email")

let emailList = ["mario@gmail.com", "paolo@gmail.com", "luca@gmail.com"]
//imposto l'array con la lista di email

console.log(emailList)


