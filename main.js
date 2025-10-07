// ===========================================
// Variables que almacenan elementos del DOM
// ===========================================
const $marcadorX = document.querySelector(".marcador-jugador1"),
  $marcadorO = document.querySelector(".marcador-jugador2"),
  $botonReinicio = document.querySelector(".btn-reiniciar"),
  $casilla = document.querySelectorAll(".casilla");

// ===========================================
// Variables globales de estado
// ===========================================
let tablero = Array(9).fill(""),
  turnoJugador = "❌",
  finDelJuego = false;

const COMBINACION_PARA_GANAR = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const verificarGanador = (tablero) => {
  const hayGanador = COMBINACION_PARA_GANAR.some((conjunto) => {
    const [a, b, c] = conjunto;

    if (
      tablero[a] !== "" &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    ) {
      return true;
    }
  });

  if (hayGanador) {
    finDelJuego = true;
  }

  return hayGanador;
};

// ===========================================
// Delegación de Eventos
// ===========================================

// --- "click" (Interacción del Usuario) ---
document.addEventListener("click", (e) => {
  if (finDelJuego === true) return null;
  // --- "click" Tablero de Juego (Interacción del Usuario) ---
  if (e.target.matches(".casilla")) {
    const CASILLA_INDEX = e.target.dataset.value;
    if (tablero[CASILLA_INDEX] === "") {
      tablero[CASILLA_INDEX] = turnoJugador;
      $casilla[CASILLA_INDEX].textContent = turnoJugador;

      if (turnoJugador === "⭕") {
        verificarGanador(tablero);
        turnoJugador = "❌";
      } else if (turnoJugador === "❌") {
        verificarGanador(tablero);
        turnoJugador = "⭕";
      }
    } else {
      return;
    }
  }
});
// --- "click" Botón Reiniciar Marcador (Interacción del Usuario) ---
// if (e.target === $botonReinicio) {}
