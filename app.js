// Applikasi Kesehatan Minggu ini berdasar dari yg kita makan 

var makanSteak = 500;
var makanRoti = 100;
var makanApel = 45;
var makanPisang = 30;
var makanPizza = 600;
var makanBurger = 450;

// menggunakan kondisional
if (makanSteak) {
console.log ('makan steak berat badan nambah = ' + makanSteak + ' gram' );
             }
else if (makanRoti) {
console.log ('makan roti berat badan nambah = ' + makanRoti + ' gram' );
}
else if (makanApel) {
console.log ('makan apel berat badan nambah = ' + makanApel + ' gram' );
}
else if (makanPisang) {
console.log ('makan pisang berat badan nambah = ' + makanPisang + ' gram' );
}
else if (makanPizza) {
console.log ('makan pizza berat badan nambah = ' + makanPizza + ' gram' );
}
else {
console.log ('makan burger berat badan nambah = ' + makanBurger + ' gram' );
}

// menggunakan looping
for(var jumlahMakan = 1; jumlahMakan< 4; jumlahMakan++) {
  console.log('Hari ini makan ' + jumlahMakan + ' kali.. ya wajarlah');
}
for(var jumlahMakan = 4; jumlahMakan< 7; jumlahMakan++) {
  console.log('Hari ini makan ' + jumlahMakan + ' kali.. kekenyangannn.....');
}

// menggunakan tipe data array
var makanan = ['apel', 'pisang'];
var jumlahMakan = [1, 2, 3, 4, 5, 6 ];
makanan.splice(0, 2, 'steak', 'pizza');
console.log('ga jadi deh mam sehat, jadinya mam ' + makanan); 

// menggunakan function
function sehatGa(jumlahMakan, makanan) 
{ console.log ( 'hari ini jadinya makan ' + jumlahMakan + ' kali,, dan makan ' + makanan + ' sehat ga ya??');
}
sehatGa(5,'apel');

// type data object
function mingguIni(makanan, jumlahMakan, hari) {
	this.meal = makanan;
	this.numb = jumlahMakan;
	this.day = hari;
	this.week = function() {
	console.log('Minggu ini ane makan ' + this.meal + this.numb + ' kali... tapi ' + this.day + ' ane puasa hehe ^^' );
}
}
var kondisiAne = new mingguIni('kodok ', 5 , 'Kamis');
kondisiAne.week();

//link http://jsbin.com/wajoheg/edit?js,console