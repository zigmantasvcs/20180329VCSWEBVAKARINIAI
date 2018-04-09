// alert('Jūs laimėjot 1000000 €!!!');
var pranesimas = 'Jūs laimėjot 1000000 €!!!';
//alert(pranesimas);

// tipas objektas
var objektas = {"name":"Jonas", "surname":"Jonaitis"};
//alert(objektas.name + " " + objektas.surname);

// string tipas

var tekstas = "Čia yra tekstas";
var tekstas2 = 'Čia yra tekstas 2';
//alert (tekstas);

// number tipas (1, 2, 3, ... 1.5)
var skaicius = 10;
var skaicius = 15;
//alert(skaicius);

// boolean tipas (tiesa=true arba netiesa=false)
var arPilnatis = true; // 0 false arba 1 true
//alert(arPilnatis);

// neapibreztas tipas (undefined)
var nera;
//alert(nera);

// tipas funkcija
var sudetis = function(x,y){
  alert(x+y);
}

sudetis(5, 10);
sudetis(5, "10");

function atimtis(x, y){ // skliausteliuose argumentai
  alert(x-y);
}

//atimtis("5", 1);

// funkcija kuri grazina rezultata
function sudetis2(x, y){
  return x+y;
}

var sum = sudetis2(5,10); // kai funkcija grazina rezultata pati funkcija tampa rezultatu
alert(sum);
console.log(objektas);

var veiksmas = eval("5+1+2+8-4");

console.log(veiksmas);
