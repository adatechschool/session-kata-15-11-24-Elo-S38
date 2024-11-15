//variable pour déclarer un string
let message =""

//fonction qui transforme la chaine de caractères en tableau avec ".split"
function getLatinCharacterList(message){
    let arrayOfChars = message. split ('')
    return  console.log (arrayOfChars)
}

getLatinCharacterList("Hello world")
