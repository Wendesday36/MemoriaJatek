import Kartya from "./Kartya.js"
class Jatekter{
    #kepLista
    #kivalasztottKepek
    #jatekVege
   
    constructor(kepLista){

    }
    $(window).on("Kattintas",(event) => {
        console.log(event.detail);
    })
}
export default Jatekter