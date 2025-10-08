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
  finDelJuego = false,
  puntosX = 0,
  puntosO = 0;

$marcadorX.textContent = puntosX;
$marcadorO.textContent = puntosO;

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

// ===========================================
// Funciones de Lógica
// ===========================================

// --- función que verifica si hay un posible ganador ---
const verificarGanador = (tablero) => {
  // Recorremos array de posibles combinaciones ganadoras
  const hayGanador = COMBINACION_PARA_GANAR.some((conjunto) => {
    // Destructuramos la combinación
    const [a, b, c] = conjunto;

    // Condición de victoria
    if (
      tablero[a] !== "" &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    ) {
      return true;
    }
  });

  // Si detecta ganador, coloca la variable global finDelJuego a true
  if (hayGanador) {
    finDelJuego = true;
  }
  // Y devuelve un Booleano
  return hayGanador;
};

// --- función que verifica empate ---
const verificarEmapte = (tablero) => {
  // Verifica que no haya cadenas vacías
  const TABLERO_LLENO = !tablero.includes("");
  if (TABLERO_LLENO) {
    finDelJuego = true; // Correcto: detiene el juego
    return true; // Correcto: indica que la partida ha terminado por empate
  }
  return false;
};

// --- función que reinicia partida ---
const reiniciarPartida = () => {
  // Reinicia el estado lógico de las variables
  tablero = Array(9).fill("");
  finDelJuego = false;
  turnoJugador = "❌";

  // Reinicia visualización en el DOM
  $casilla.forEach((casilla) => {
    casilla.textContent = "";
  });
};

// ===========================================
// Delegación de Eventos
// ===========================================

// --- "click" (Interacción del Usuario) ---
document.addEventListener("click", (e) => {
  // Detiene cualquier interacción con el tablero, si detecta un ganador
  if (finDelJuego === true) return null;

  // --- "click" Tablero de Juego (Interacción del Usuario) ---
  if (e.target.matches(".casilla")) {
    // Obtiene la posición (valor) de la casilla en la que hicimos "click"
    const CASILLA_INDEX = e.target.dataset.value;
    // Valida si la casilla seleciionada esta vacía
    if (tablero[CASILLA_INDEX] === "") {
      tablero[CASILLA_INDEX] = turnoJugador; // Marca en el arreglo el valor
      $casilla[CASILLA_INDEX].textContent = turnoJugador; // Marca en el DOM el valor

      // Almacena el resultado de la verificación
      const GANADOR = verificarGanador(tablero);

      // Verificación de puntaje y victoria
      if (GANADOR) {
        // ¿Quién gano? turno actual "❌"
        if (turnoJugador === "❌") {
          puntosX++;
          $marcadorX.textContent = puntosX;
        } else {
          // ó "⭕"
          puntosO++;
          $marcadorO.textContent = puntosO;
        }
        // Llamada automática al reinicio con temporizador
        setTimeout(reiniciarPartida, 2000);
        return;
      }

      // Verifica empate
      const EMPATE = verificarEmapte(tablero);
      if (EMPATE) {
        // Llamada automática al reinicio con temporizador
        setTimeout(reiniciarPartida, 2000);
        return;
      }

      // Alternancia de turno. solo si no hay gandor
      if (turnoJugador === "⭕") {
        turnoJugador = "❌";
      } else if (turnoJugador === "❌") {
        turnoJugador = "⭕";
      }
    } else {
      return;
    }
  }
  // --- "click" Botón Reiniciar Marcador (Interacción del Usuario) ---
  if (e.target === $botonReinicio) {
    // Reinicia el estado lógico de las variables
    puntosX = 0;
    puntosO = 0;
    // Reinicia visualización en el DOM
    $marcadorX.textContent = puntosX;
    $marcadorO.textContent = puntosO;
  }
});
