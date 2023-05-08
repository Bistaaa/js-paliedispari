//dichiarazione variabili
let risultato


//chiediamo all'utente di inserire un parola o una frase
let input = prompt("inserisci parola o frase");
console.log("messaggio utente: " + input);

//creiamo una funzione per verificare la palindromità
function verificaPali(parola) {

    //eliminiamo eventuali spazi o punteggiatura
    let parolaClean = parola.toLowerCase().replace(/[^\w]+/g, "");
    console.log("parola unita: " + parolaClean);

    //reversiamo la parola
    let parolaReverse = parolaClean.split("").reverse().join("");
    console.log("parola reversata: " + parolaReverse);

    //confrontiamola con la vecchia parola
    if (parolaReverse === parolaClean) {
        risultato = "vero";
    } else {
        risultato = "falso";
    }

    //stampiamo il risultato
    console.log(risultato);
};

verificaPali(input);