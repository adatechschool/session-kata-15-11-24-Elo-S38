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

//fonction pour afficher l'equivalent du latin en morse
function translateLatinCharacter(message){
   return console.log (latinToMorse[message])
   }
 
//fonction pour traduire les elements d'un tableau string en morse

function encode (message){
		for (let items of getLatinCharacterList(message) ){
	return console.log (items += translateLatinCharacter (message))
	}

}
	


getLatinCharacterList("Hello world")
translateLatinCharacter ("B")
encode ("BONJOUR TOUT LE MONDE")

