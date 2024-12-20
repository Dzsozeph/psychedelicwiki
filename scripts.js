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

   // Ellenőrizzük, hogy már megjelent-e a kezdőoldal a felhasználónak
  if (!localStorage.getItem("hasSeenStartPage")) {
    // Ha még nem jelent meg, megjelenítjük a kezdőoldalt
    document.getElementById("startPage").style.display = "block";

    // Figyeljük a "Megértettem" gomb kattintását
    document.getElementById("understoodButton").addEventListener("click", function() {
      // Elrejtjük a kezdőoldalt
      document.getElementById("startPage").style.display = "none";

      // Beállítjuk a jelzőt, hogy már megjelent a kezdőoldal
      localStorage.setItem("hasSeenStartPage", true);
    });
  } else {
    // Ha már megjelent a kezdőoldal, elrejtjük azt
    document.getElementById("startPage").style.display = "none";
  }

const title = document.getElementById('title');
    const text = title.textContent;
    title.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.className = 'rainbow-char';
      span.style.animationDelay = `${i * 0.1}s`; // staggered delay for rainbow effect
      title.appendChild(span);
    }










	const openPlayerBtn = document.getElementById('openPlayerBtn');
const closePlayerBtn = document.getElementById('closePlayerBtn');
const musicPlayerWindow = document.getElementById('musicPlayerWindow');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Nyitás és zárás
openPlayerBtn.addEventListener('click', () => {
    musicPlayerWindow.classList.remove('hidden');
});

closePlayerBtn.addEventListener('click', () => {
    musicPlayerWindow.classList.add('hidden');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Lejátszás és megállítás
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '⏯';
    }
});

stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.textContent = '⏯';
});

// Léptető gombokhoz (zeneváltás logika itt bővíthető)
prevBtn.addEventListener('click', () => {
    // Előző zene logika
    alert('Előző zene');
});

nextBtn.addEventListener('click', () => {
    // Következő zene logika
    alert('Következő zene');
});