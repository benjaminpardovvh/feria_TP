// js/router.js

const Router = {
    // El mapa de rutas: Conecta la URL con la función de ui.js correspondiente
    routes: {
        // ==========================================
        // RUTAS OPERATIVAS (YA CONSTRUIDAS)
        // ==========================================
        '': 'renderHome',
        '#/home': 'renderHome',
        '#/login': 'renderLogin',
        '#/registro': 'renderRegistro',
        '#/inicio': 'renderDashboardJoven',
        '#/explorar': 'renderExplorar',
        '#/pasaporte': 'renderPasaporte',
        '#/experiencia': 'renderDetalleExperiencia', // Requiere un ID adicional en la URL
        
        // ==========================================
        // ZONAS DE DESAFÍO (LO QUE FALTA POR CONSTRUIR)
        // ==========================================
        // Para activar estas vistas, los estudiantes deben cambiar 'renderPlaceholder' 
        // por el nombre de la nueva función que creen en ui.js (ej: 'renderPerfil')
        '#/perfil': 'renderPlaceholder',
        '#/asistencia': 'renderPlaceholder',
        '#/evaluaciones': 'renderEvaluaciones',
        '#/denuncias': 'renderPlaceholder'
    },

    // Inicializa el router escuchando los cambios en la URL
    init: function() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute(); // Ejecuta la ruta actual al cargar la página por primera vez
    },

    // Analiza la URL y decide qué mostrar
    handleRoute: function() {
        // Si no hay hash, forzamos el login por defecto
        let hash = window.location.hash || '#/login';
        
        // Separamos la URL por si trae parámetros (ej: #/experiencia/101)
        let routeParts = hash.split('/');
        
        // La ruta base es la primera parte (ej: #/experiencia)
        let baseRoute = routeParts.length > 2 ? `#/${routeParts[1]}` : hash;
        
        // Excepción manual para rutas anidadas específicas de este proyecto
        if (hash.includes('#/empresa/publicar')) {
            baseRoute = '#/empresa/publicar';
        }

        // Si hay un tercer elemento y no es la ruta de publicar, es un parámetro (el ID)
        let param = routeParts.length > 2 && baseRoute !== '#/empresa/publicar' ? routeParts[2] : null;

        // Buscamos la función en nuestro mapa de rutas
        const action = this.routes[baseRoute];
        
        // Si la acción existe y es una función válida en UI, la ejecutamos
        if (action && typeof UI[action] === 'function') {
            // Pasamos el parámetro (ID) y el hash completo (útil para el placeholder)
            UI[action](param, hash); 
        } else {
            // Si la ruta no existe, mostramos error 404
            UI.render404();
        }
        
        // Actualizamos visualmente el menú de navegación
        this.updateActiveNav(baseRoute);
    },

    // Ilumina el botón del menú en el que el usuario se encuentra actualmente
    updateActiveNav: function(hash) {
        document.querySelectorAll('.mobile-nav a, .navbar-nav a').forEach(link => {
            // Limpiamos los estilos activos de todos los enlaces
            link.classList.remove('active-nav', 'text-primary', 'fw-bold');
            link.classList.add('text-secondary');
            
            // Si el enlace coincide con la ruta actual, le damos el estilo activo
            if(link.getAttribute('href') === hash) {
                link.classList.add('active-nav', 'text-primary', 'fw-bold');
                link.classList.remove('text-secondary');
            }
        });
    }
};