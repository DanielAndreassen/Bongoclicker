let bongocp = 1;
let bongoamount = 1;
let bongocurrency = 0;
let upgradeamtcp = 10;
let upgradeamtamount = 10;

const bongocpfield = document.querySelector("[data-bongoamount]");
const bongoamountfield = document.querySelector("[data-bongocp]");
const bongocurrencyfield = document.querySelector("[data-bongos]");
const bongocpcostfield = document.querySelector("[data-cpcost]");
const bongoamountcostfield = document.querySelector("[data-amountcost]");

const bongobutton = document.querySelector("#bongo-pic");
bongobutton.addEventListener("click", bongoclick);

const bongocpbutton = document.querySelector("#bongo-strength");
bongocpbutton.addEventListener("click", bongostrength);

const bongoamountbutton = document.querySelector("#bongo-amount");
bongoamountbutton.addEventListener("click", bongoamounted);

function bongoclick(event) {
  bongocurrency = bongocurrency + bongocp * bongoamount;
  updateFields();
}

function bongostrength(event) {
  let amt = bongocurrency;
  if (amt > upgradeamtcp - 1) {
    bongocp++;
    bongocurrency -= upgradeamtcp;
    upgradeamtcp *= 2;
    updateFields();
  }
}

function bongoamounted(event) {
  let amta = bongocurrency;
  if (amta > upgradeamtamount - 1) {
    bongoamount++;
    bongocurrency -= upgradeamtamount;
    upgradeamtamount *= 2;
    updateFields();
  }
}

function updateFields() {
  bongocpfield.innerHTML = bongocp;
  bongoamountfield.innerHTML = bongoamount;
  bongocurrencyfield.innerHTML = bongocurrency;
  bongocpcostfield.innerHTML = upgradeamtcp;
  bongoamountcostfield.innerHTML = upgradeamtamount;
}

updateFields();
