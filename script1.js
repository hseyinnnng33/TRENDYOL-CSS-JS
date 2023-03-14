const BtnAcık = document.getElementById("bars");
const BtnKapalı = document.getElementById("bars-click");
const GizliBar = document.getElementById("gizli");

BtnAcık.addEventListener("click", () =>{
    BtnAcık.style.display = "none";
    GizliBar.style.display = "block";
    BtnKapalı.style.display = "block";
});


BtnKapalı.addEventListener("click", () =>{
    BtnAcık.style.display = "block";
    BtnKapalı.style.display = "none";
    GizliBar.style.display = "none";
});