 document.getElementById("understoodButton").addEventListener("click", function() {
    document.getElementById("startPage").style.display = "none"; // Kezdőoldal elrejtése
  });

var texts = [
    "“Psychedelics are to the study of the mind, what the microscope is to biology and the telescope is to astronomy.” - Terence Mckenna",
    "“The psychedelic experience is a doorway to a higher state of consciousness.” - Stanislav Grof",
    "“The spiritual journey is individual, highly personal. It can’t be organized or regulated.” - Ram Dass",
    "“Experience is not what happens to you; it's what you do with what happens to you.” - Aldous Huxley",

];

let index = 0;
const textElement = document.getElementById("text");

function changeText() {
    textElement.classList.add("fade-out"); // Eltűnés hozzáadása

    setTimeout(() => {
        index = (index + 1) % texts.length; // Következő szöveg index
        textElement.textContent = texts[index]; // Szöveg frissítése
        textElement.classList.remove("fade-out"); // Eltűnés eltávolítása
    }, 1000); // Az átlátszóság változtatásának ideje (1 másodperc)
}

// Minden 4 másodpercben váltás (3 másodperc az eltűnéshez + 1 másodperc az új szöveg megjelenéséhez)
setInterval(changeText, 10000);

    document.getElementById("lysergamides-dropdown").addEventListener("click", function() {
        window.location.href = "lsd.html";
    });

    document.getElementById("mushrooms-dropdown").addEventListener("click", function() {
        window.location.href = "psilocybe_mushrooms.html";
    });

    document.getElementById("mescaline-dropdown").addEventListener("click", function() {
        window.location.href = "mescaline.html";
    });

   document.getElementById("ayahuasca-dropdown").addEventListener("click", function() {
        window.location.href = "ayahuasca.html";
    });

   document.getElementById("salvia-dropdown").addEventListener("click", function() {
        window.location.href = "salvia.html";
    });
   document.getElementById("bufo-dropdown").addEventListener("click", function() {
        window.location.href = "bufo.html";
    });

$(document).ready(function() {
    $(".ayahuasca-trigger").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "ayahuasca.html",
            success: function(result) {
                $("#ayahuasca-container").html(result);
                $("#ayahuasca-container").css("display", "block"); // Az elem megjelenítése a tartalom betöltése után
            }
        });
    });
});

$(document).ready(function() {
    $(".ibogaine-trigger").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "ibogaine.html",
            success: function(result) {
                $("#ibogaine-container").html(result);
                $("#ibogaine-container").css("display", "block"); // Az elem megjelenítése a tartalom betöltése után
            }
        });
    });
});

$(document).ready(function() {
    $(".mescaline-trigger").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "mescaline.html",
            success: function(result) {
                $("#mescaline-container").html(result);
                $("#mescaline-container").css("display", "block"); // Az elem megjelenítése a tartalom betöltése után
            }
        });
    });
});

$(document).ready(function() {
    $(".salvia-trigger").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "salvia.html",
            success: function(result) {
                $("#salvia-container").html(result);
                $("#salvia-container").css("display", "block"); // Az elem megjelenítése a tartalom betöltése után
            }
        });
    });
});

 

