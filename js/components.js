class ComponentsLoader {
    constructor() {
        const componentsPath = 'components/';
        const components = [
            { id: 'cabecalho', file: 'cabecalho.html' },
            { id: 'section1', file: 'elias.html' },
            { id: 'section2', file: 'vinicius.html' },
            { id: 'section3', file: 'adriana.html' },
            { id: 'section4', file: 'marcos.html' },
            { id: 'section5', file: 'daniel.html' },
            { id: 'footer', file: 'footer.html' }
        ];

        Promise.all(
            components.map(async ({ id, file }) => {
                const container = document.getElementById(id);
                if (!container) return { id, loaded: false };

                const response = await fetch(componentsPath + file);
                const html = await response.text();
                container.innerHTML = html;

                return { id, loaded: true };
            })
        ).then(results => {
            console.log('Componentes carregados:', results);
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
        });
    }
}

// Inicializa o carregamento
document.addEventListener('DOMContentLoaded', () => new ComponentsLoader());