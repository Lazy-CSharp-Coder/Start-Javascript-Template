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
  let isOnline = true;

  // Variable chaining

  console.log("Welcome back : " + characterName + "\nLevel : " + characterLevel + "\nOnline : " + isOnline); 
  // if(isOnline) console.log("currently not online")
  // else console.log("is online - Ready to play")

  // Template literal

  console.log(`Welcome back : ${characterName} \nLevel : ${characterLevel} \nOnline :  ${isOnline ? `online - ready to play`: `offline`}`);

  // for(let i = 0; i < 10; ++i)
  // {
  //    console.log(characterName + " now level : " + i);
  //    if(i == 4)
  //    { 
  //     console.log("Level cannot be higher than 4. Terminating loop");
  //     break;
  //    }
  // }

}

// function call

character(); //  vil kjøre funksjon

//
//
let isHamburgerClicked = false;

function hamburgerToggle()
{
   console.log("Er inne i funksjon");

   const navListElement = document.querySelector(".navList");  // kobler variabel til html element
   // Bevist brukt klass for kun kun ett element på det klassenavnet - bytt til id hvis flere
   const textElement = document.querySelector(".heroText");
   console.log(navListElement);

  //  navListElement.style.display ="flex";   // inline styling - må skrive mye - legg til classenavn i CSS
  //  navListElement.style.flex-direction = "column";
    if(!isHamburgerClicked) 
    {
      navListElement.classList.add("show");
      navListElement.classList.remove("hidden");
      // textElement.remove("show");
      // textElement.add("hidden");
      isHamburgerClicked = true;
    }
    else 
    {
      navListElement.classList.remove("show");
      navListElement.classList.add("hidden"); 
      isHamburgerClicked = false;   
      // textElement.remove("hidden");
      // textElement.add("show");
     
    }
  
}

globalThis.hamburgerToggle = hamburgerToggle;

