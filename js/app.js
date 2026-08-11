document.addEventListener('DOMContentLoaded', async () => {
    // 1. Inicializamos la base de datos simulada
    await StorageDB.init();
    
    // 2. Inicializamos el Router (esto detectará '#/inicio' y llamará a UI.renderDashboardJoven)
    Router.init();
});