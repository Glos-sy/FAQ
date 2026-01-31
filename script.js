"use strict";

// ACCESSING VARIABLES
const textDisplay1 = document.querySelector(".first-p");
const dropdown1 = document.querySelector("#first-s");
const textDisplay2 = document.querySelector(".second-p");
const dropdown2 = document.querySelector("#second-s");
const textDisplay3 = document.querySelector(".third-p");
const dropdown3 = document.querySelector("#third-s");
const textDisplay4 = document.querySelector(".fourth-p");
const dropdown4 = document.querySelector("#fourth-s");

// FUNCTIONS
function displayText1() {
  if (textDisplay1.style.display === "none") {
    textDisplay1.style.display = "block";
  } else {
    textDisplay1.style.display = "none";
  }
}

function displayText2() {
  if (textDisplay2.style.display === "none") {
    textDisplay2.style.display = "block";
  } else {
    textDisplay2.style.display = "none";
  }
}

function displayText3() {
  if (textDisplay3.style.display === "none") {
    textDisplay3.style.display = "block";
  } else {
    textDisplay3.style.display = "none";
  }
}

function displayText4() {
  if (textDisplay4.style.display === "none") {
    textDisplay4.style.display = "block";
  } else {
    textDisplay4.style.display = "none";
  }
}

function changeSign1() {
  if (dropdown1.src.includes("icon-plus.svg")) {
    dropdown1.src = "Media/icon-minus.svg";
  } else {
    dropdown1.src = "Media/icon-plus.svg";
  }
}

function changeSign2() {
  if (dropdown2.src.includes("icon-plus.svg")) {
    dropdown2.src = "Media/icon-minus.svg";
  } else {
    dropdown2.src = "Media/icon-plus.svg";
  }
}

function changeSign3() {
  if (dropdown3.src.includes("icon-plus.svg")) {
    dropdown3.src = "Media/icon-minus.svg";
  } else {
    dropdown3.src = "Media/icon-plus.svg";
  }
}

function changeSign4() {
  if (dropdown4.src.includes("icon-plus.svg")) {
    dropdown4.src = "Media/icon-minus.svg";
  } else {
    dropdown4.src = "Media/icon-plus.svg";
  }
}

function toggleFAQ1() {
  displayText1();
  changeSign1();
}

function toggleFAQ2() {
  displayText2();
  changeSign2();
}

function toggleFAQ3() {
  displayText3();
  changeSign3();
}

function toggleFAQ4() {
  displayText4();
  changeSign4();
}

let isOpen1 = false;
function toggleFAQ1() {
  isOpen1 = !isOpen1;
  textDisplay1.style.display = isOpen1 ? "block" : "none";
  dropdown1.src = isOpen1 ? "Media/icon-minus.svg" : "Media/icon-plus.svg";
}

let isOpen2 = false;
function toggleFAQ2() {
  isOpen2 = !isOpen2;
  textDisplay2.style.display = isOpen2 ? "block" : "none";
  dropdown2.src = isOpen2 ? "Media/icon-minus.svg" : "Media/icon-plus.svg";
}

let isOpen3 = false;
function toggleFAQ3() {
  isOpen3 = !isOpen3;
  textDisplay3.style.display = isOpen3 ? "block" : "none";
  dropdown3.src = isOpen3 ? "Media/icon-minus.svg" : "Media/icon-plus.svg";
}

let isOpen4 = false;
function toggleFAQ4() {
  isOpen4 = !isOpen4;
  textDisplay4.style.display = isOpen4 ? "block" : "none";
  dropdown4.src = isOpen4 ? "Media/icon-minus.svg" : "Media/icon-plus.svg";
}

// EVENTS
dropdown1.addEventListener("click", toggleFAQ1);
dropdown2.addEventListener("click", toggleFAQ2);
dropdown3.addEventListener("click", toggleFAQ3);
dropdown4.addEventListener("click", toggleFAQ4);
