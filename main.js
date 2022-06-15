let layar = document.querySelector("#layar");
let tombol = document.querySelector(".container-button");
let resetLayar = false;
let bolehHitung = false;
let tmpVal = "";
let operator = "";

tombol.addEventListener("click", function (e) {
   let tombolClick = e.target;
   let nilaiTombol = tombolClick.innerText;

   if (nilaiTombol == "C") {
      layar.value = "";
      tmpVal = "";
   } else if (nilaiTombol == "<") {
      layar.value = layar.value.slice(0, -1);
   } else if (nilaiTombol == "=") {
      if (bolehHitung == true) {
         layar.value = eval(tmpVal + operator + layar.value);
         bolehHitung = false;
      }
   } else if (nilaiTombol == ".") {
      layar.value = layar.value + nilaiTombol;
   } else if (tombolClick.classList.contains("operator")) {
      if (bolehHitung == true) {
         layar.value = eval(tmpVal + operator + layar.value);
         bolehHitung = false;
      }
      tmpVal = layar.value;
      operator = nilaiTombol;
      resetLayar = true;
   } else {
      if (resetLayar == true) {
         layar.value = nilaiTombol;
         resetLayar = false;
         bolehHitung = true;
      } else {
         layar.value = layar.value + nilaiTombol;
      }
   }
});
