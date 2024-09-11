const revealBtn = document.getElementById("revealBtn");
const question = document.getElementById("question");
const response = document.getElementById("response");
const heartsContainer = document.getElementById("heartsContainer");

// Variable para controlar si ya se ha hecho clic una vez
let clicked = false;

revealBtn.addEventListener("click", () => {
  if (!clicked) {
    // Ocultar la pregunta inicial
    question.classList.add("hidden");

    // Mostrar el texto "Me gustas"
    response.classList.remove("hidden");

    // Cambiar el texto del botón a "Click"
    revealBtn.textContent = "Click";

    // Marcar que ya se ha hecho clic
    clicked = true;
  }

  // Generar corazones en cada clic
  createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = `${Math.random() * 100}%`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}
