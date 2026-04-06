// Opcional: Alterar a velocidade de todas as bolinhas via console
function mudarVelocidade(segundos) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.animationDuration = segundos + 's';
    });
}

// Exemplo: mudarVelocidade(0.5); // Deixa muito rápido