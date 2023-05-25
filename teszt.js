function EkezetesBetukSzamaTeszt(tesztEset, helyesMegoldas){
try{
if(EkezetesBetukSzama(tesztEset) === helyesMegoldas){console.log("Helyes megoldás")
} else {
    throw new Error("Hibás megoldás")
}
}catch (e) {
    console.log(e)
}
}

function camelCaseGeneratorTeszt(tesztEset, helyesMegoldas){
    try{
    if(camelCaseGenerator(tesztEset) === helyesMegoldas){console.log("Helyes megoldás")
    } else {
        throw new Error("Hibás megoldás")
    }
    }catch (e) {
        console.log(e)
    }
    }

function PrimListaTeszt(tesztEset, helyesMegoldas){
        try{
        if(PrimLista(tesztEset).toString() === helyesMegoldas.toString()){
            console.log("Helyes megoldás")
        } else {
            throw new Error("Hibás megoldás")
        }
        }catch (e) {
            console.log(e)
        }
        }

EkezetesBetukSzamaTeszt("Árvíztűrő tükörfúrógép", 9)
EkezetesBetukSzamaTeszt("Repülőgép", 3)

PrimListaTeszt([1,2,3,7,11], [2,3,7,11])
PrimListaTeszt([6,8,9,12], 'Nincs prímszám a tömbben')

camelCaseGeneratorTeszt("fém fa műanyag", "FémFaMűanyag")
camelCaseGeneratorTeszt("asztal szék fotel", "AsztalSzékFotel")