// data parametrai:
// name: "Jonas",
// surname: "Jonaitis",
// age: 24,
// photo: "images/jonas.jpg",
// description: "Sveiki, aš Jonas."
function getContainer(data){
  var containerDiv = $("<div>");
  //containerDiv.prop("class", "container"); // pirmas budas
  //containerDiv.attr("class", "container"); // antras budas
  containerDiv.addClass("container"); // trecias budas

  var imageRowDiv = $("<div>");
  imageRowDiv.addClass("row");

  var img = $("<img>");
  img.prop("src", data.photo);

  imageRowDiv.append(img);
  containerDiv.append(imageRowDiv);

  var vardas = getRow("Vardas", data.name);
  containerDiv.append(vardas);

  var pavarde = getRow("Pavardė", data.surname);
  containerDiv.append(pavarde);

  var amzius = getRow("Amžius", data.age);
  containerDiv.append(amzius);

  var description = getRow("Aprašymas", data.description);
  containerDiv.append(description);

  return containerDiv;
  //$("body").prepend(containerDiv); // append, prepend, after, before
}

function getRow(key, value){
  var rowDiv = $("<div>");
  rowDiv.addClass("row");

  var rowDivLeft = $("<div>");
  rowDivLeft.addClass("left");

  var boxDiv = $("<div>");
  boxDiv.addClass("box");
  boxDiv.text(key);
  rowDivLeft.append(boxDiv);

  rowDiv.append(rowDivLeft);

  var rowDivRight = $("<div>");
  rowDivRight.addClass("right");

  boxDiv = $("<div>");
  boxDiv.addClass("box");
  boxDiv.text(value);
  rowDivRight.append(boxDiv);

  rowDiv.append(rowDivRight);

  return rowDiv;
}
