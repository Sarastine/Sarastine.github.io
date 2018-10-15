function displayShow(div) {
    document.getElementById('Presentation').style.display = "none";
    document.getElementById('Competences').style.display = "none";
    document.getElementById('Formation').style.display = "none";
    document.getElementById('Experiences').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById(div).style.display = "block";
}