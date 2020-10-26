/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
const LETTERSA = LETTERS.split("");

/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!');
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits

// Prompt er í rauninni, lætur koma upp ehv þegar þú opnar síðuna þá kemur upp ehv prompt box með spurningu. þarft að gera = prompt()
// til þess að pop uppið kemur



start();
//let er svipað eins og int, bara skýra breytuna.
let kodi = '';
//while lykkja notuð til þess að keyra þangað til kóðinn er true
while(kodi != 'kóða' && kodi != 'afkóða') {
//Hér erum við með Segðina okkar.
  kodi = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“')
  //Ef hvorugt er valið þá kemur þessi segð
  if (kodi != 'kóða' && kodi != 'afkóða'){
    alert(`Veit ekki hvaða aðgerð „${kodi}“ er. Reyndu aftur`);
  }
}
//Ef slegin er inn rétt aðgerð (kóða eða afkóða) þá er spurt um hliðrun 
let hlidrun ='';
//While lykkjan byggist á heiltölunum 1, 31 í textanum.
//isNaN = fall sem maður notar til þess að bara skrifa tölur.
while(isNaN(hlidrun) || hlidrun < 1 ||hlidrun > 31){
  hlidrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  //alert er fall sem notar ef það á að birta eitthvað sérstak
  //alert er svona mini prompt basically prompt.junior
  if(isNaN(hlidrun) || hlidrun < 1 ||hlidrun > 31){
    alert(`${hlidrun} er ekki heiltala á bilinu [1, 31]. Reyndu aftur`)
  }
}


//Hér er strengur sem tekur inn arguments með parseInt
hlidrun = parseInt(hlidrun);

// basically int texti = 0;
// while(typeof text er ekki strengur)

let textings = "C, Z, Q, W,"
let text = 0;
while(typeof text != "string"){
  texti = prompt(`Gefðu upp strenginn sem á að ${kodi} með hliðrun ${hlidrun}`);
  if(typeof text != "string"){
    alert(`Þú gafst ekki upp streng. Reyndu aftur`)
    if(typeof textings != "string") {
      alert(`Þú gafst upp stafi sem ekki er hægt að ${kodi}:. Reyndu aftur.`)

    }
  }
}

//C, Z, Q og W eru stafir sem ekki eru í íslenska bókstafinu
//Breyta streng yfir í hástafastreng
text = text.toUpperCase();

//Erum í rauninni að segja hvað encode og decode gerir
//encode = er að kóða text og hliðrun 
//decode = er að afkóða text og hliðrun
if (kodi == 'kóða'){
  let code = encode(text, hlidrun);
  alert(`Kóðun á ${text} er ${code}`)
} else if ( kodi == 'afkóða'){
  let code = decode(text, hlidrun);
  alert(`Afkóðun á ${text} er ${code}`);
}


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */

function encode(str, n) {
  let splittad = str.split("");
  console.log(splittad);
//Forlykkjur fyrir að kóða (encode)
for(var i = 0; i<splittad.length; i++){
  for (var j = 0; j<LETTERSA.length; j++){
    if (splittad[i] == LETTERSA[j]){
      splittad[i] = j
    }
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = splittad[i] + n;
  if(splittad[i]>32){
    splittad[i] = splittad[i] - 32;
  }
  
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = LETTERS[splittad[i]];
}
samansett = splittad.join("");
  return samansett;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  let splittad = str.split("");
  console.log(splittad);

 //Forlykkjur fyrir að afkóða (decode)

for(var i = 0; i<splittad.length; i++){
  for (var j = 0; j<LETTERSA.length; j++){
    if (splittad[i] == LETTERSA[j]){
      splittad[i] = j
    }
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = splittad[i] - n;
  if(splittad[i]<0){
    splittad[i] = splittad[i] + 32;
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = LETTERS[splittad[i]];
}
samansett = splittad.join("");
  return samansett;
}

/*console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
*/