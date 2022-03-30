function hesapla() {
  let sayi = document.querySelector("#txtSayi").value;

  if (!sayi || isNaN(sayi) || sayi < 1) {
    alert("Lutfen bir sayi giriniz");
    return;
  }

  let con = 0;
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      con++;
    }
  }

  let mesaj = "Bu sayi asal";
  if (con > 0) {
    mesaj = `Bu sayi asal degil. Cunku ${con} adet boluneni var`;
  }

  document.querySelector("#sonuc").innerHTML = mesaj;
}
