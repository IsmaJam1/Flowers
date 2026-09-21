// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Na na ra oh, ta ra ta ta", time: 4.5 },

  { text: "Era tan bella, era tan bella", time: 12 },
  { text: "Que su mirada todavía me quema", time: 14 },
  { text: "Cómo quisiera poderla olvidar", time: 20 },
  { text: "Pero se acerca y no lo puedo evitar", time: 23 },

  { text: "Porque cuando habla con sus ojos", time: 28 },
  { text: "Dice cosas que no puedo entender", time: 32 },
  { text: "Y se desnuda poco a poco", time: 35 },
  { text: "Y se convierte en tu piel", time: 39 },
  { text: "Oh-oh-oh", time: 40 },

  { text: "Y yo no sé cómo vivir", time: 42 },
  { text: "Si ya no puedo sacarla de aquí", time: 46 },
  { text: "Qué no daría por besarla", time: 50 },
  { text: "Por abrazarla una vez más", time: 55 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);