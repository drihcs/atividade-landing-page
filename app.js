/**
 * Arquivo JavaScript principal
 * Inicializa a aplicação
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicação inicializada');
    
    // Adiciona evento para quando todos os componentes forem carregados
    document.addEventListener('componentsLoaded', function() {
        console.log('Todos os componentes foram carregados');
        
        // Inicializa funcionalidades adicionais aqui
        initializeEventListeners();
    });
});

/**
 * Inicializa os event listeners da aplicação
 */
function initializeEventListeners() {
    // Exemplo: adicionar event listeners aos botões de assinatura
    const subscribeButtons = document.querySelectorAll('.btn-dark, .btn-light');
    subscribeButtons.forEach(button => {
        if (button.textContent.trim() === 'Assine' || button.textContent.trim() === 'Assinar') {
            button.addEventListener('click', function() {
                alert('Redirecionando para a página de assinatura...');
                // Aqui você pode redirecionar para a página de assinatura
                // window.location.href = '/assinar';
            });
        }
    });
    
    // Exemplo: adicionar event listener ao formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('.newsletter-input');
        const newsletterButton = newsletterForm.querySelector('.btn');
        
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (newsletterInput && newsletterInput.value) {
                alert(`E-mail ${newsletterInput.value} inscrito com sucesso!`);
                newsletterInput.value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
}