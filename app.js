function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv
function generateCV() {
  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  // phone number
  // let phoneField = document.getElementById("phoneField").value;
  // let phoneT = document.getElementById("phoneT");
  // phoneT.innerHTML = phoneField;

  document.getElementById("phoneT").innerHTML = document.getElementById(
    "phoneField"
  ).value;

  // address
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;

  // all links
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedField"
  ).value;

  // objective
  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  // Work Experience

  let workE = document.getElementsByClassName("weField");

  let str = "";
  for (let e of workE) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // Academic Qualifiction

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;


  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";


}


// print Cv

function printCV(){
  window.print();
}