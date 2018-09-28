function Bouton(id) {
    var x = document.getElementById(id);
    Presentation.style.display = "none";
    Competences.style.display = "none";
    Formation.style.display = "none";
    ExpPro.style.display = "none";
    Contact.style.display = "none";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function BoutonFlex(id) {
    var x = document.getElementById(id);
    Presentation.style.display = "none";
    Competences.style.display = "none";
    Formation.style.display = "none";
    ExpPro.style.display = "none";
    Contact.style.display = "none";
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}