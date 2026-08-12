// js/storage.js
const StorageDB = {
    // Inicializa la base de datos simulada en LocalStorage si no existe
    init: async function() {
        if (!localStorage.getItem('jobxp_initialized')) {
            try {
                // Simula un fetch a los JSON locales en el primer despliegue
                const usersRes = await fetch('./data/usuarios.json');
                const expRes = await fetch('./data/experiencias.json');
                
                const users = await usersRes.json();
                const experiences = await expRes.json();
                
                localStorage.setItem('jxp_users', JSON.stringify(users));
                localStorage.setItem('jxp_experiences', JSON.stringify(experiences));
                localStorage.setItem('jxp_current_user', JSON.stringify(users[0])); // Autologuear demo
                localStorage.setItem('jobxp_initialized', 'true');
            } catch (error) {
                console.error("Error cargando JSONs de demo:", error);
            }
        }
    },
    
    get: function(key) {
        return JSON.parse(localStorage.getItem(key)) || null;
    },
    
    set: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
};