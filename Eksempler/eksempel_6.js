class spiller {
    constructor(fornavn, efternavn) {
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.aktiv = false;
        this.point = 0;
    }
    skiftAktiv() {
        this.aktiv = !this.aktiv;
    }
    givPoint(antal) {
        this.point += antal;
    }
    profil() {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    }
    static hentSpillerListe(){
        let liste = [];
        liste.push(new spiller("Josh","Shuls"));
        liste.push(new spiller("Mille","Berg"));
        liste.push(new spiller("Signe","Lorensen"));
        return liste;
    }
    
}
let spillerListe = spiller.hentSpillerListe();
spillerListe.forEach((element) => {
    element.givPoint(10);
    console.log(element.profil());
});