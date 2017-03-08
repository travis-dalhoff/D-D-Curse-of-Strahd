///////////D20 Modal and Dice Roll

var d20modal = document.getElementById("d20Modal");
var d20btn = document.getElementById("rolld20Btn");
var d20span = document.getElementsByClassName("d20close")[0];

d20btn.onclick = function () {
    d20modal.style.display = "block";
    var x = Math.floor((Math.random() * 20) + 1);
    if (x == 1) {
        document.getElementById("d20-result").innerHTML = "Critical fail! You rolled 1."
    } else {
        document.getElementById("d20-result").innerHTML = "You rolled " + x;
    }
}

d20span.onclick = function() {
    d20modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d20modal) {
      d20modal.style.display = "none";
    }
}


////////////D4 Modal and Dice Roll

var d4modal = document.getElementById("d4Modal");
var d4btn = document.getElementById("rolld4Btn");
var d4span = document.getElementsByClassName("d4close")[0];

d4btn.onclick = function () {
    d4modal.style.display = "block";
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("d4-result").innerHTML = "You rolled " + x;
}

d4span.onclick = function() {
    d4modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d4modal) {
      d4modal.style.display = "none";
    }
}

////////////D6 Modal and Dice Roll

var d6modal = document.getElementById("d6Modal");
var d6btn = document.getElementById("rolld6Btn");
var d6span = document.getElementsByClassName("d6close")[0];

d6btn.onclick = function () {
    d6modal.style.display = "block";
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("d6-result").innerHTML = "You rolled " + x;
}

d6span.onclick = function() {
    d6modal.style.display = "none";
}

/*window.onclick = function(event) {
    if (event.target == d6modal) {
      d6modal.style.display = "none";
    }
}*/

////////////D8 Modal and Dice Roll

var d8modal = document.getElementById("d8Modal");
var d8btn = document.getElementById("rolld8Btn");
var d8span = document.getElementsByClassName("d8close")[0];

d8btn.onclick = function () {
    d8modal.style.display = "block";
    var x = Math.floor((Math.random() * 8) + 1);
    document.getElementById("d8-result").innerHTML = "You rolled " + x;
}

d8span.onclick = function() {
    d8modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d8modal) {
      d8modal.style.display = "none";
    }
}

////////////D10 Modal and Dice Roll

var d10modal = document.getElementById("d10Modal");
var d10btn = document.getElementById("rolld10Btn");
var d10span = document.getElementsByClassName("d10close")[0];

d10btn.onclick = function () {
    d10modal.style.display = "block";
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("d10-result").innerHTML = "You rolled " + x;
}

d10span.onclick = function() {
    d10modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d10modal) {
      d10modal.style.display = "none";
    }
}

////////////D12 Modal and Dice Roll

var d12modal = document.getElementById("d12Modal");
var d12btn = document.getElementById("rolld12Btn");
var d12span = document.getElementsByClassName("d12close")[0];

d12btn.onclick = function () {
    d12modal.style.display = "block";
    var x = Math.floor((Math.random() * 12) + 1);
    document.getElementById("d12-result").innerHTML = "You rolled " + x;
}

d12span.onclick = function() {
    d12modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d12modal) {
      d12modal.style.display = "none";
    }
}

////////////D100 Modal and Dice Roll

var d100modal = document.getElementById("d100Modal");
var d100btn = document.getElementById("rolld100Btn");
var d100span = document.getElementsByClassName("d100close")[0];

d100btn.onclick = function () {
    d100modal.style.display = "block";
    var x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("d100-result").innerHTML = "You rolled " + x;
}

d100span.onclick = function() {
    d100modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == d20modal) {
        d20modal.style.display = "none";
    }

    if (event.target == d4modal) {
        d4modal.style.display = "none";
    }

    if (event.target == d6modal) {
        d6modal.style.display = "none";
    }

    if (event.target == d8modal) {
        d8modal.style.display = "none";
    }

    if (event.target == d10modal) {
        d10modal.style.display = "none";
    }

    if (event.target == d12modal) {
        d12modal.style.display = "none";
    }

    if (event.target == d100modal) {
      d100modal.style.display = "none";
    }
}

