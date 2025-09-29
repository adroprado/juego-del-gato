// ===========================================
// Variables que almacenan elementos del DOM
// ===========================================
const $tabla = document.querySelector(".tabla"),
  $casilla = document.querySelectorAll(".casilla"),
  $botonReinicio = document.querySelector(".btn-reiniciar");

// console.log($casilla);
// console.log($botonReinicio);

// ===========================================
// Variables globales de estado
// ===========================================
let tablero = Array(9).fill(""),
  turnoJugador = "❌",
  finDelJuego = false;

// ===========================================
// Delegación de Eventos
// ===========================================

// --- "click" (Interacción del Usuario) ---
document.addEventListener("click", (e) => {
  // --- "click" Tablero de Juego (Interacción del Usuario) ---
  // console.log(e.target);
  if (e.target.matches(".casilla")) {
    // console.log(e.target);
    const CASILLA_INDEX = e.target.dataset.value;
    // console.log(CASILLA_INDEX);
    if (tablero[CASILLA_INDEX] === "") {
      tablero[CASILLA_INDEX] = turnoJugador;
      $casilla[CASILLA_INDEX].textContent = turnoJugador;
      // turnoJugador = "⭕";
      console.log(tablero);

      if (turnoJugador === "⭕") {
        turnoJugador = "❌";
      } else if (turnoJugador === "❌") {
        turnoJugador = "⭕";
      }
    } else {
      return null;
    }
  }
  // --- "click" Botón Reiniciar Marcador (Interacción del Usuario) ---
  // if (e.target === $botonReinicio) {}
});
