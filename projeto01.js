function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
}

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
  const elements = document.querySelectorAll(".reveal");

  for (let i = 0; i < elements.length; i++) {
    const windowHeight = window.innerHeight;
