// ===========================================
// Variables que almacenan elementos del DOM
// ===========================================
const $tabla = document.querySelector(".tabla"),
  $casilla = document.querySelectorAll(".casilla"),
  $botonReinicio = document.querySelector(".btn-reiniciar");

console.log($casilla);
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
  if (e.target.matches(".casilla")) {
  }

  // --- "click" Botón Reiniciar Marcador (Interacción del Usuario) ---
  // if (e.target === $botonReinicio) {}
});
