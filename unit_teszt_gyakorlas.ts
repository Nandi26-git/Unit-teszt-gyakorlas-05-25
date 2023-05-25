function EkezetesBetukSzama(modositandoSzoveg: string): number {
    let ekezetesBetukSzama = 0;
    const ekezetesBetuk = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ö", "Ö", "ő", "Ő", "ú", "Ú", "ü", "Ü", "ű", "Ü"];
    const szobolTomb: string[] = modositandoSzoveg.split("");
    for (let karakter of szobolTomb) {
        if (ekezetesBetuk.includes(karakter)) {
            ekezetesBetukSzama++
        }
    }
    return ekezetesBetukSzama
}

function camelCaseGenerator(modositandoSzoveg: string): string {
    const szobolTomb: string[] = modositandoSzoveg.split(" ");
    const camelCaseSzoveg = szobolTomb.map((szo) => { return szo.replace(szo[0], szo[0].toUpperCase()) }).join("");
    return camelCaseSzoveg
}

function PrimLista(vizsgaltTomb: number[]): number[] | string {
    let primSzamok: number[] = [];
    vizsgaltTomb.forEach((szam) => {
        let osztok = 0;
        for (let i = szam; i > 0; i--) {
            if (szam % i == 0) {
                osztok++
            }
        }
        if(osztok == 2){
            primSzamok.push(szam)
        }
    })
    if(primSzamok.length > 0){
    return primSzamok
} else {return "Nincs prímszám a tömbben"}
}