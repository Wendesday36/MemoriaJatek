class Kartya {
  #kep;
  #kepElem;
  #szuloElem;
  #divElem;
  #id;
  
  constructor(kep, id, szuloElem) {
    this.#kepElem.on("click",()=>{
        
    } )
  }
  getKep() {
    this.#kep = kep;
    return kep;
  }
  getId() {
    this.#id = id;
    return id;
  }
  setKepElem(kep) {
    this.pElem.html(kep);
  }
  kattintasTrigger() {
    const esemeny = new CustomEvent("Kattintas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Kartya;
