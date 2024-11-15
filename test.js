//variable pour déclarer un string
let message =""

// constante du dictionnaire pour traduire du latin au morse
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

//fonction qui transforme la chaine de caractères en tableau avec ".split"
function getLatinCharacterList(message){
    let arrayOfChars = message. split ('')
    return  console.log (arrayOfChars)
}

//fonction pour traduire du latin au morse
function translateLatinCharacter(message){
   return console.log (latinToMorse[message]);
   }
 


getLatinCharacterList("Hello world")
translateLatinCharacter ("B")


