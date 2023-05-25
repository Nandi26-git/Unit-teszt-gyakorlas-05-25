function EkezetesBetukSzama(modositandoSzoveg) {
    var ekezetesBetukSzama = 0;
    var ekezetesBetuk = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ö", "Ö", "ő", "Ő", "ú", "Ú", "ü", "Ü", "ű", "Ü"];
    var szobolTomb = modositandoSzoveg.split("");
    for (var _i = 0, szobolTomb_1 = szobolTomb; _i < szobolTomb_1.length; _i++) {
        var karakter = szobolTomb_1[_i];
        if (ekezetesBetuk.includes(karakter)) {
            ekezetesBetukSzama++;
        }
    }
    return ekezetesBetukSzama;
}
function camelCaseGenerator(modositandoSzoveg) {
    var szobolTomb = modositandoSzoveg.split(" ");
    var camelCaseSzoveg = szobolTomb.map(function (szo) { return szo.replace(szo[0], szo[0].toUpperCase()); }).join("");
    return camelCaseSzoveg;
}
function PrimLista(vizsgaltTomb) {
    var primSzamok = [];
    vizsgaltTomb.forEach(function (szam) {
        var osztok = 0;
        for (var i = szam; i > 0; i--) {
            if (szam % i == 0) {
                osztok++;
            }
        }
        if (osztok == 2) {
            primSzamok.push(szam);
        }
    });
    if (primSzamok.length > 0) {
        return primSzamok;
    }
    else {
        return "Nincs prímszám a tömbben";
    }
}
