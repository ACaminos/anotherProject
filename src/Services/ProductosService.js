import instancia from "../Config/axios" //instancia es un nombre creado al azar, se puede tranquilamente dar otro nombre

export function getAll(){ //getAll es un nombre creado al azar, se puede tranquilamente dar otro nombre
    return instancia.get("sites/MLA/search?q=ipod")
}