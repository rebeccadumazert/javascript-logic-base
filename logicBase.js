const age = prompt("Quel âge avez vous ?")
// console.log((age <= 18 + "Vous êtes majeur") || (age > 18 + "Bonjour simple user"))
// console.log( age <= 18 + "Vous êtes majeur" )
const majeur = age > 18 && console.log("Vous êtes majeur")

const mineur = age <= 18 && console.log("Bonjour simple user")

const role = prompt("Quel rôle avcez vous dans la société ?")

const isAdmin = role === "admin" && age > 18 && console.log("Bienvenu admin ")

const passWord = prompt("Entrez un mot de passe")

const masterUser = (role === "admin" && age > 18 && passWord.length > 5 && console.log("Bienvenue master user ")) || console.log ("fermez cette fenetre tout de suite")
