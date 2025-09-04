console.log('Hello World');

// Variabler / Variables

/* 
const - nøkkelord for å erklære en variabel
userName - funnet på variabel navn
= setter verdien på variabel
"Julie" - string verdi til variabel

*/

const userName = "'Harald"; // string variabel
console.log(userName); // skjekk variabel

let userAge = 28; // number
let isPresent = true; // boolean

// var isPresent = true;  // er gått ut på dato - støttes fremdeles

// Regular Function

function character() 
{
  console.log("Er inne i funskjon character()");
  const characterName = "Haplo";
  let characterLevel = 1;
  let isOnline = false;

  for(let i = 0; i < 5; ++i)
  {
     console.log(characterName + " now level : " + i);
        
  }


}

character(); //  vil kjøre funksjon
