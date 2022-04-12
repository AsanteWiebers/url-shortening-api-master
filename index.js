let mobLinks = document.getElementById("navLinks");

function hamburgerIcon (){

    if (mobLinks.style.display === "block"){
        mobLinks.style.display = "none";
    } else {
        mobLinks.style.display = "block";
    }
}

hamburgerIcon()
