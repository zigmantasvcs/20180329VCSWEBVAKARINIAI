function printArrayDescending1(masyvas){
  var naujasMasyvas = masyvas.reverse();
  for (var i = 0; i < naujasMasyvas.length; i++) {
    console.log(naujasMasyvas[i]);
  }
}

function printArrayDescending2(masyvas){
  masyvas.reverse();
  for (var i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
  }
}

function printArrayDescending3(masyvas) {
  for (var i = masyvas.length-1; i >= 0; i--) {
    console.log(masyvas[i]);
  }
}

function printArrayDescending4(masyvas) {
  console.log(masyvas[1]);
  console.log(masyvas[0]);
}

function Add(a,b) {
  console.log(a+b);
}

function Devide(a,b){
  console.log(a/b);
}

function Multiply(a,b){
  console.log(a*b);
}

function Substract(a,b) {
  console.log(a-b);
}
