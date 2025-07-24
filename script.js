var b = 0;
var nugget = document.getElementsByClassName('nugget');
const a = document.getElementsByClassName('counter');

nugget.height = nugget_width;

var upgradeCost = 1;
var upgradeForce = 1;

function upgradeF(el) {
    upgradeForce = upgradeForce + 1;
    b = b - upgradeCost;
    upgradeCost = upgradeCost * 2;
    a[0].innerHTML = b;
}

function score(el) {
    b = b + upgradeForce;
    a[0].innerHTML = b;
}