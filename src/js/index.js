/**
 * Script de Controle de Movimento e Animações de Campo (GEMBA Dashboard)
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // Configuração do Observador de Tela (IntersectionObserver API)
    const observerOptions = {
        root: null, // Usa o visor do dispositivo móvel como base
        threshold: 0.15 // Dispara o movimento quando 15% do card estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Injeta a classe que ativa a subida suave do card (CSS Reveal)
                entry.target.classList.add("active");
                
                // Captura a barra de progresso interna do card ativo
                const progressBar = entry.target.querySelector(".progress-bar");
                if (progressBar) {
                    const targetProgress = progressBar.getAttribute("data-progress");
                    // Preenche a barra de forma macia mudando a largura no DOM
                    progressBar.style.width = targetProgress;
                }
                
                // Remove o elemento do observador para otimizar memória e desempenho do celular
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Mapeia e monitora todos os elementos com a classe de animação .reveal
    const elementsToReveal = document.querySelectorAll(".reveal");
    elementsToReveal.forEach(element => observer.observe(element));
});