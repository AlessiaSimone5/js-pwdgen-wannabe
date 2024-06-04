const nomeUtente = prompt('inserisci il tuo nome');
const cognomeUtente = prompt('inserisci il tuo cognome');
const colorePreferito = prompt('inserisci il tuo colore preferito');

const output=`

nome: ${nomeUtente}
cognome: ${cognomeUtente}
colore preferito: ${colorePreferito}
`;
//console.log(output);

const nomeCompleto = `
nomecognomecolorepreferito21
`;
console.log(nomeCompleto);

document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore-preferito').innerHTML = colorePreferito;



