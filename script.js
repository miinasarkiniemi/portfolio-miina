

const syntymapaiva = new Date(2005, 2, 12);


// Tämänhetkinen päivämäärä
const tanaan = new Date();


// Lasketaan ikä
let ika = tanaan.getFullYear() - syntymapaiva.getFullYear();


// Tarkistetaan, onko syntymäpäivä jo ollut tänä vuonna
const kuukausi = tanaan.getMonth();
const paiva = tanaan.getDate();

if (
    kuukausi < syntymapaiva.getMonth() ||
    (
        kuukausi === syntymapaiva.getMonth() &&
        paiva < syntymapaiva.getDate()
    )
) {
    ika--;
}


// Näytetään ikä HTML-sivulla
document.getElementById("ika").textContent = ika;