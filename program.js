// if,else,nested if
let jam = 22;

if (jam < 12) {
    console.log("Selamat pagi!");
} else {
    if (jam < 18) {
        console.log("Selamat siang!");
    } else {
        console.log("Selamat malam!");
    }
} 

// switch case
let nilai = 'F';
let keterangan;

switch (nilai) {
    case 'A':
        keterangan = "Sangat Baik";
        break;
    case 'B':
        keterangan = "Baik";
        break;
    case 'C':
        keterangan = "Cukup";
        break;
    case 'D':
        keterangan = "Kurang";
        break;
    case 'E':
        keterangan = "Sangat Kurang";
        break;
    default:
        keterangan = "Nilai tidak valid. Masukkan nilai antara A dan E.";
}

console.log(keterangan);

// for statement
let array = ['apel', 'pisang', 'ceri'];

for (let i = 0; i < array.length; i++) {
    console.log("Buah: " + array[i]);
}

// while
var i = 0;
while (i < 5) {
    console.log("Nilai i saat ini adalah: " + i);
    i++;
}

// do while
var j = 0;
do {
    console.log("Nilai j saat ini adalah: " + j);
    j++;
} while (j < 5);

// function
function sapa(nama) {
    return "Halo, " + nama + "!";
}

console.log(sapa("Hariri"));

// function
function hitungVolumeKubus(sisi) {
    return sisi * sisi * sisi;
}

var sisi = 4;
console.log("Volume kubus dengan sisi " + sisi + " adalah " + hitungVolumeKubus(sisi));