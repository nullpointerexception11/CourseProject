let remainingRight = 0;
let randomNum = 0;
let guessNum = document.querySelector("#tahminEt");
let newGameSelector = document.querySelector("#yeniOyun");
let conc = document.querySelector("#sonuc");
let number = document.querySelector("#sayi");

const randomNumGen = () =>  Math.floor(Math.random () * 100) + 1;

function newGame() {
  randomNum = randomNumGen();
  remainingRight = 10;
  console.log(randomNum);

  conc.innerHTML = "";
  number.value = "";
  guessNum.disabled = false;
  newGameSelector.disabled = true;
}

function guess() {

    let girilenSayi = number.value;
    console.log(randomNum);
    console.log(girilenSayi);


  if (remainingRight == 0) return;

  if (isNaN(girilenSayi)) return;

  let message = "";

  if (randomNum > girilenSayi) {
    message = "Daha buyuk bir sayi giriniz";
  } else if (girilenSayi > randomNum) {
    message = "Daha kucuk bir sayi giriniz";
  } else {
    message = "Tebrikler. Dogru tahmin ettiniz";
    guessNum.disabled = true;
    newGameSelector.disabled = false;
  }

  remainingRight--;

  conc.innerHTML = `${message} | Kalan Hakkiniz : ${remainingRight}`;

  if (remainingRight == 0) {
    guessNum.disabled = true;
    newGameSelector.disabled = false;
  }
}
