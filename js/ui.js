// js/ui.js

const UI = {

    renderHome: function () {
        const content = document.getElementById('app-content');

        content.innerHTML = `
            <div class="labxp-home">

                <section class="labxp-hero">
                    <div class="labxp-hero-pattern"></div>

                    <div class="container position-relative">
                        <div class="row align-items-center g-5">

                            <div class="col-lg-5">
                                <span class="labxp-kicker">
                                    PLATAFORMA DE MICROEXPERIENCIAS
                                </span>

                                <h1 class="labxp-hero-title">
                                    Tu primera
                                    <span>experiencia laboral</span>
                                    comienza aquí.
                                </h1>

                                <p class="labxp-hero-copy">
                                    JOBXP conecta a jóvenes sin experiencia con
                                    microexperiencias reales, inclusivas y seguras
                                    para desarrollar habilidades y construir un
                                    historial laboral demostrable.
                                </p>

                                <div class="labxp-hero-actions">
                                    <a href="#/explorar" class="btn labxp-primary-btn">
                                        <i class="bi bi-search me-2"></i>
                                        Explorar experiencias
                                    </a>

                                    <a href="#/inicio" class="btn labxp-outline-btn">
                                        <i class="bi bi-briefcase me-2"></i>
                                        Soy empresa
                                    </a>
                                </div>

                                <div class="labxp-trust-row">
                                    <div>
                                        <i class="bi bi-person-check"></i>
                                        <span>Sin experiencia previa</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-heart"></i>
                                        <span>Match personalizado</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-universal-access"></i>
                                        <span>Inclusión asistida</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-award"></i>
                                        <span>Experiencia certificada</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="labxp-product-preview">

                                    <aside class="labxp-preview-sidebar">
                                        <div class="labxp-preview-logo">
                                            JOB<span>XP</span>
                                        </div>

                                        <div class="labxp-preview-nav active">
                                            <i class="bi bi-house-door"></i>
                                            Inicio
                                        </div>
                                        <div class="labxp-preview-nav">
                                            <i class="bi bi-search"></i>
                                            Explorar
                                        </div>
                                        <div class="labxp-preview-nav">
                                            <i class="bi bi-send"></i>
                                            Mis postulaciones
                                        </div>
                                        <div class="labxp-preview-nav">
                                            <i class="bi bi-award"></i>
                                            Pasaporte laboral
                                        </div>
                                        <div class="labxp-preview-nav">
                                            <i class="bi bi-bell"></i>
                                            Notificaciones
                                            <b>3</b>
                                        </div>
                                        <div class="labxp-preview-nav">
                                            <i class="bi bi-person"></i>
                                            Mi perfil
                                        </div>

                                        <div class="labxp-preview-help">
                                            <i class="bi bi-question-circle"></i>
                                            Ayuda
                                        </div>
                                    </aside>

                                    <div class="labxp-preview-content">

                                        <div class="labxp-preview-header">
                                            <div>
                                                <h3>¡Hola, Camila! 👋</h3>
                                                <p>Experiencias recomendadas según tu perfil.</p>
                                            </div>

                                            <div class="labxp-preview-user">
                                                <div class="labxp-user-avatar">C</div>
                                                <div>
                                                    <strong>Camila R.</strong>
                                                    <small>Joven</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="labxp-experience-preview">

                                            <div class="labxp-experience-visual">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>

                                            <div class="labxp-experience-data">
                                                <span class="labxp-company">
                                                    <i class="bi bi-building"></i>
                                                    Café Santiago
                                                    <i class="bi bi-patch-check-fill"></i>
                                                </span>

                                                <h4>Digitalización de documentos</h4>

                                                <div class="labxp-preview-meta">
                                                    <span><i class="bi bi-clock"></i> 4 horas</span>
                                                    <span><i class="bi bi-geo-alt"></i> Santiago Centro</span>
                                                    <span><i class="bi bi-house"></i> Presencial</span>
                                                </div>

                                                <small>Pago por experiencia</small>
                                                <strong class="labxp-money">$25.000</strong>

                                                <div class="labxp-access-tags">
                                                    <span>Bajo ruido</span>
                                                    <span>Instrucciones escritas</span>
                                                    <span>Estación sentada</span>
                                                </div>
                                            </div>

                                            <div class="labxp-match">
                                                <div class="labxp-match-ring">
                                                    <strong>96%</strong>
                                                    <small>MATCH</small>
                                                </div>
                                                <span>Excelente compatibilidad</span>
                                                <a href="#/explorar" class="btn labxp-small-btn">Ver experiencia</a>
                                            </div>

                                        </div>

                                        <div class="labxp-preview-cards">

                                            <div class="labxp-preview-card">
                                                <strong>Tu actividad reciente</strong>
                                                <div>
                                                    <i class="bi bi-check-circle-fill"></i>
                                                    Postulación enviada
                                                    <small>Hace 2 días</small>
                                                </div>
                                                <div>
                                                    <i class="bi bi-star-fill"></i>
                                                    Evaluación recibida
                                                    <small>Hace 1 semana</small>
                                                </div>
                                            </div>

                                            <div class="labxp-preview-card labxp-progress">
                                                <strong>Tu progreso</strong>
                                                <div class="labxp-progress-stats">
                                                    <span><b>3</b>Experiencias</span>
                                                    <span><b>42</b>Horas</span>
                                                    <span><b>4.8</b>Promedio</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="labxp-search-section">
                    <div class="container">

                        <div class="labxp-section-title">
                            <div>
                                <span>OPORTUNIDADES PARA TI</span>
                                <h2>Encuentra una experiencia que encaje contigo</h2>
                            </div>
                            <a href="#/explorar">Ver todas <i class="bi bi-arrow-right"></i></a>
                        </div>

                        <div class="labxp-search-box">
                            <i class="bi bi-search"></i>
                            <span>¿Qué te gustaría hacer?</span>
                            <button onclick="location.hash='#/explorar'">
                                Buscar
                            </button>
                        </div>

                        <div class="labxp-filter-row">
                            <span><i class="bi bi-geo-alt"></i> Ubicación</span>
                            <span><i class="bi bi-laptop"></i> Modalidad</span>
                            <span><i class="bi bi-stars"></i> Habilidades</span>
                            <span><i class="bi bi-universal-access"></i> Accesibilidad</span>
                            <span><i class="bi bi-calendar3"></i> Disponibilidad</span>
                        </div>

                        <div class="row g-3 mt-2">

                            <div class="col-md-4">
                                <article class="labxp-mini-experience">
                                    <div class="labxp-mini-icon">
                                        <i class="bi bi-file-earmark-text"></i>
                                    </div>
                                    <div>
                                        <span class="labxp-mini-match">96% Match</span>
                                        <h3>Digitalización de documentos</h3>
                                        <p>Café Santiago · Santiago Centro</p>
                                        <strong>$25.000</strong>
                                    </div>
                                </article>
                            </div>

                            <div class="col-md-4">
                                <article class="labxp-mini-experience">
                                    <div class="labxp-mini-icon orange">
                                        <i class="bi bi-megaphone"></i>
                                    </div>
                                    <div>
                                        <span class="labxp-mini-match">88% Match</span>
                                        <h3>Gestión de redes sociales</h3>
                                        <p>Mercado Local · Remoto</p>
                                        <strong>$28.000</strong>
                                    </div>
                                </article>
                            </div>

                            <div class="col-md-4">
                                <article class="labxp-mini-experience">
                                    <div class="labxp-mini-icon green">
                                        <i class="bi bi-box-seam"></i>
                                    </div>
                                    <div>
                                        <span class="labxp-mini-match">82% Match</span>
                                        <h3>Control de inventario</h3>
                                        <p>Tienda Urbana · Santiago Norte</p>
                                        <strong>$24.000</strong>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="labxp-inclusion-section">
                    <div class="container">

                        <div class="labxp-section-title center">
                            <div>
                                <span>INCLUSIÓN ASISTIDA</span>
                                <h2>Experiencias diseñadas para cada persona</h2>
                                <p>
                                    Las preferencias de accesibilidad forman parte del Match
                                    para reducir barreras antes de comenzar la experiencia.
                                </p>
                            </div>
                        </div>

                        <div class="row g-3">

                            <div class="col-md-6 col-lg-3">
                                <div class="labxp-inclusion-card">
                                    <i class="bi bi-universal-access"></i>
                                    <h3>Accesibilidad motriz</h3>
                                    <p>Espacios adaptados, movilidad reducida y estaciones sentadas.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="labxp-inclusion-card green">
                                    <i class="bi bi-soundwave"></i>
                                    <h3>Entornos sensoriales</h3>
                                    <p>Preferencias de ruido, iluminación y condiciones del entorno.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="labxp-inclusion-card blue">
                                    <i class="bi bi-chat-square-text"></i>
                                    <h3>Comunicación accesible</h3>
                                    <p>Instrucciones escritas, comunicación clara y ajustes razonables.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="labxp-inclusion-card orange">
                                    <i class="bi bi-house"></i>
                                    <h3>Teletrabajo</h3>
                                    <p>Microexperiencias 100% remotas para ampliar las oportunidades.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="labxp-how-section">
                    <div class="container">
                        <div class="row align-items-center g-5">

                            <div class="col-lg-7">
                                <span class="labxp-section-label">CÓMO FUNCIONA</span>
                                <h2>De no tener experiencia a tener un historial laboral demostrable.</h2>

                                <div class="labxp-steps">

                                    <div class="labxp-step">
                                        <div class="labxp-step-number">01</div>
                                        <div>
                                            <h3>Completa tu perfil</h3>
                                            <p>Indica habilidades, disponibilidad, ubicación y preferencias de accesibilidad.</p>
                                        </div>
                                    </div>

                                    <div class="labxp-step">
                                        <div class="labxp-step-number">02</div>
                                        <div>
                                            <h3>Encuentra tu Match</h3>
                                            <p>JOBXP prioriza microexperiencias compatibles con tus características y necesidades.</p>
                                        </div>
                                    </div>

                                    <div class="labxp-step">
                                        <div class="labxp-step-number">03</div>
                                        <div>
                                            <h3>Realiza la experiencia</h3>
                                            <p>Completa una tarea concreta en un entorno previamente informado y adaptado.</p>
                                        </div>
                                    </div>

                                    <div class="labxp-step">
                                        <div class="labxp-step-number">04</div>
                                        <div>
                                            <h3>Certifica y avanza</h3>
                                            <p>Obtén evaluaciones, certificaciones y un Pasaporte Laboral que puedas demostrar.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="labxp-passport">
                                    <div class="labxp-passport-top">
                                        <div>
                                            <span>JOBXP</span>
                                            <h3>Tu Pasaporte Laboral</h3>
                                        </div>
                                        <i class="bi bi-award"></i>
                                    </div>

                                    <div class="labxp-passport-stats">
                                        <div><b>3</b><span>Experiencias</span></div>
                                        <div><b>42</b><span>Horas</span></div>
                                        <div><b>4.8</b><span>Promedio</span></div>
                                    </div>

                                    <div class="labxp-certified">
                                        <i class="bi bi-patch-check-fill"></i>
                                        <div>
                                            <span>EXPERIENCIA CERTIFICADA</span>
                                            <strong>Digitalización de documentos</strong>
                                            <small>Café Santiago · 4 horas</small>
                                        </div>
                                    </div>

                                    <div class="labxp-skills">
                                        <span>✓ Organización</span>
                                        <span>✓ Herramientas digitales</span>
                                        <span>✓ Responsabilidad</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="labxp-company-section">
                    <div class="container">
                        <div class="labxp-company-banner">
                            <div>
                                <span class="labxp-section-label">PARA EMPRESAS</span>
                                <h2>Resuelve tareas concretas y encuentra talento.</h2>
                                <p>
                                    Publica microexperiencias, define las condiciones del entorno
                                    y encuentra jóvenes compatibles con tus necesidades.
                                </p>

                                <a href="#/inicio" class="btn labxp-primary-btn">
                                    Publicar una microexperiencia
                                    <i class="bi bi-arrow-right ms-2"></i>
                                </a>
                            </div>

                            <div class="labxp-company-points">
                                <div><i class="bi bi-check-circle"></i><span>Match inclusivo</span></div>
                                <div><i class="bi bi-shield-check"></i><span>Reglas anti-abuso</span></div>
                                <div><i class="bi bi-clipboard-check"></i><span>Evaluación bidireccional</span></div>
                                <div><i class="bi bi-patch-check"></i><span>Sello Empresa Inclusiva</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="labxp-final-cta">
                    <div class="container">
                        <div>
                            <span>JOBXP</span>
                            <h2>Transformamos la falta de experiencia en experiencia demostrable.</h2>
                            <p>Match + Inclusión + Protección + Experiencia + Certificación + Oportunidad.</p>
                        </div>

                        <div class="labxp-cta-actions">
                            <a href="#/registro" class="btn labxp-primary-btn">Crear mi perfil</a>
                            <a href="#/explorar" class="btn labxp-white-btn">Explorar experiencias</a>
                        </div>
                    </div>
                </section>

                <footer class="labxp-footer">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <div class="labxp-footer-brand">JOB<span>XP</span></div>
                                <p>Microexperiencias laborales inclusivas para construir experiencia real.</p>
                            </div>

                            <div class="col-6 col-lg-2">
                                <strong>Plataforma</strong>
                                <a href="#/home">Inicio</a>
                                <a href="#/explorar">Explorar</a>
                                <a href="#/como-funciona">Cómo funciona</a>
                            </div>

                            <div class="col-6 col-lg-2">
                                <strong>Para jóvenes</strong>
                                <a href="#/registro">Crear perfil</a>
                                <a href="#/explorar">Postular</a>
                                <a href="#/pasaporte">Pasaporte laboral</a>
                            </div>

                            <div class="col-6 col-lg-2">
                                <strong>Para empresas</strong>
                                <a href="#/inicio">Publicar experiencia</a>
                                <a href="#/inicio">Encontrar talento</a>
                                <a href="#/inicio">Evaluaciones</a>
                            </div>

                            <div class="col-6 col-lg-2">
                                <strong>Proyecto</strong>
                                <span>Prototipo demostrativo</span>
                                <span>ODS 8 · Trabajo Decente</span>
                            </div>
                        </div>

                        <div class="labxp-footer-bottom">
                            <span>© 2026 JOBXP</span>
                            <span>Construimos oportunidades.</span>
                        </div>
                    </div>
                </footer>

            </div>
        `;
    },

    // ==========================================
    // 1. SISTEMA DE AUTENTICACIÓN (OPERATIVO)
    // ==========================================

    renderLogin: function () {
        const content = document.getElementById('app-content');
        content.innerHTML = `
            <div class="container py-5 d-flex justify-content-center">
                <div class="jxp-card p-4 p-md-5 w-100" style="max-width: 450px;">
                    <div class="text-center mb-4">
                        <h2 class="fw-bold text-primary mb-3">JOBXP</h2>
                        <h5 class="fw-bold">Iniciar Sesión</h5>
                        <p class="text-secondary small">Prototipo Demostrativo</p>
                    </div>
                    
                    <form id="loginForm" onsubmit="UI.handleLogin(event)">
                        <div class="mb-3">
                            <label class="form-label fw-medium">Selecciona tu Perfil Demo</label>
                            <select class="form-select mb-3" id="loginRole" required>
                                <option value="" selected disabled>Elige un perfil...</option>
                                <option value="joven">👤 Joven (Buscando oportunidades)</option>
                                <option value="empresa">🏢 Empresa (Ofreciendo experiencias)</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 py-2 fw-bold mb-3">Entrar a mi cuenta</button>
                    </form>
                    
                    <div class="text-center mt-3">
                        <span class="text-secondary">¿No tienes cuenta?</span> 
                        <a href="#/registro" class="text-primary fw-bold text-decoration-none">Regístrate aquí</a>
                    </div>
                </div>
            </div>
        `;
    },

    handleLogin: function (e) {
        e.preventDefault();
        const role = document.getElementById('loginRole').value;
        const users = StorageDB.get('jxp_users') || [];

        // Buscar el primer usuario que coincida con el rol (simulación)
        const user = users.find(u => u.rol === role);

        if (user) {
            StorageDB.set('jxp_current_user', user);
            window.location.hash = '#/inicio';
        } else {
            alert("Error: No se encontró un usuario demo para este rol. Por favor, regístrate primero.");
        }
    },

    renderRegistro: function () {
        const content = document.getElementById('app-content');
        content.innerHTML = `
            <div class="container py-5 d-flex justify-content-center">
                <div class="jxp-card p-4 p-md-5 w-100" style="max-width: 500px;">
                    <div class="text-center mb-4">
                        <h4 class="fw-bold">Crea tu cuenta en JOBXP</h4>
                        <p class="text-secondary small">Conecta con tu primera experiencia laboral</p>
                    </div>
                    
                    <form id="registroForm" onsubmit="UI.handleRegistro(event)">
                        <div class="mb-3">
                            <label class="form-label fw-medium">Tipo de cuenta</label>
                            <div class="d-flex gap-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="regRole" id="regJoven" value="joven" checked>
                                    <label class="form-check-label" for="regJoven">Soy Joven</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="regRole" id="regEmpresa" value="empresa">
                                    <label class="form-check-label" for="regEmpresa">Soy Empresa</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label fw-medium">Nombre Completo / Razón Social</label>
                            <input type="text" class="form-control" id="regName" placeholder="Ej: Juan Pérez o TechCorp SpA" required>
                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-medium">Ubicación</label>
                            <input type="text" class="form-control" id="regLocation" placeholder="Ej: Santiago Centro" required>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100 py-2 fw-bold mb-3">Registrar y entrar</button>
                    </form>
                    
                    <div class="text-center mt-3">
                        <span class="text-secondary">¿Ya tienes cuenta?</span> 
                        <a href="#/login" class="text-primary fw-bold text-decoration-none">Inicia sesión</a>
                    </div>
                </div>
            </div>
        `;
    },

    handleRegistro: function (e) {
        e.preventDefault();
        const role = document.querySelector('input[name="regRole"]:checked').value;
        const nombreIngresado = document.getElementById('regName').value;
        const ubicacionIngresada = document.getElementById('regLocation').value;

        let users = StorageDB.get('jxp_users') || [];

        // Crear un objeto JSON base según el rol
        const newUser = {
            id: Date.now(),
            nombre: nombreIngresado,
            rol: role,
            ubicacion: ubicacionIngresada,
            // Datos por defecto para que la app no se rompa al explorar
            habilidades: role === 'joven' ? ["Organización", "Herramientas digitales"] : [],
            disponibilidad: role === 'joven' ? ["Mañana", "Tarde"] : [],
            modalidad_preferida: "Presencial",
            accesibilidad: [],
            estadisticas: { experiencias: 0, horas: 0, promedio: 0 }
        };

        users.push(newUser);
        StorageDB.set('jxp_users', users);
        StorageDB.set('jxp_current_user', newUser); // Autologuear

        alert("¡Registro exitoso! Tus datos se guardaron en LocalStorage.");
        window.location.hash = '#/inicio';
    },
    logout: function () {
        // Limpiamos el usuario actual del LocalStorage
        StorageDB.set('jxp_current_user', null);
        // Redirigimos a la pantalla de Login
        window.location.hash = '#/login';
    },
    // ==========================================
    // 2. FLUJO DEL JOVEN (DASHBOARD Y EXPLORAR)
    // ==========================================

    renderDashboardJoven: function () {
        const user = StorageDB.get('jxp_current_user');
        if (!user) { window.location.hash = '#/login'; return; }

        const experiencias = StorageDB.get('jxp_experiences') || [];
        const content = document.getElementById('app-content');

        // Tomamos la primera experiencia como destacada y calculamos su Match
        const expDestacada = experiencias[0];
        let html = '';

        if (expDestacada) {
            const matchResult = MatchEngine.calculate(user, expDestacada);
            html = `
                <div class="container py-4">
                    <div class="row mb-4">
                        <div class="col-12">
                            <h2 class="fw-bold">¡Hola, ${user.nombre.split(' ')[0]}! 👋</h2>
                            <p class="text-secondary">Estas son experiencias recomendadas para ti.</p>
                        </div>
                    </div>

                    <div class="row g-4">
                        <!-- Tarjeta de Experiencia Destacada -->
                        <div class="col-lg-8">
                            <div class="jxp-card p-4 h-100">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h4 class="fw-bold mb-1">${expDestacada.titulo}</h4>
                                        <p class="text-secondary mb-2">
                                            <i class="bi bi-shop"></i> ${expDestacada.empresa} 
                                            ${expDestacada.verificada ? '<i class="bi bi-patch-check-fill text-primary"></i>' : ''}
                                        </p>
                                        <div class="d-flex gap-3 text-secondary small mb-3">
                                            <span><i class="bi bi-clock"></i> ${expDestacada.duracion_horas} horas</span>
                                            <span><i class="bi bi-geo-alt"></i> ${expDestacada.ubicacion}</span>
                                            <span><i class="bi bi-laptop"></i> ${expDestacada.modalidad}</span>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="match-circle mb-1 ms-auto">${matchResult.total}%</div>
                                        <small class="text-secondary fw-medium">MATCH</small>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <span class="d-block text-secondary small">Pago</span>
                                    <span class="fs-4 fw-bold text-success">$${expDestacada.pago.toLocaleString('es-CL')}</span>
                                </div>

                                <div class="d-flex flex-wrap gap-2 mb-4">
                                    ${expDestacada.accesibilidad.map(acc =>
                `<span class="badge-accessibility"><i class="bi bi-check-circle text-success"></i> ${acc.replace('_', ' ')}</span>`
            ).join('')}
                                </div>

                                <a href="#/experiencia/${expDestacada.id}" class="btn btn-primary w-100 py-2 fw-medium">Ver experiencia</a>
                            </div>
                        </div>

                        <!-- Panel de Progreso lateral -->
                        <div class="col-lg-4">
                            <div class="jxp-card p-4 h-100 d-flex flex-column justify-content-center">
                                <h6 class="fw-bold mb-4">Tu progreso</h6>
                                <div class="d-flex justify-content-between text-center">
                                    <div>
                                        <h2 class="fw-bold text-primary mb-0">${user.estadisticas.experiencias}</h2>
                                        <small class="text-secondary">Experiencias</small>
                                    </div>
                                    <div>
                                        <h2 class="fw-bold text-primary mb-0">${user.estadisticas.horas}</h2>
                                        <small class="text-secondary">Horas</small>
                                    </div>
                                    <div>
                                        <h2 class="fw-bold text-warning mb-0">${user.estadisticas.promedio} <i class="bi bi-star-fill fs-6"></i></h2>
                                        <small class="text-secondary">Promedio</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            html = `<div class="container py-5 text-center"><h4>No hay experiencias disponibles en este momento.</h4></div>`;
        }
        content.innerHTML = html;
    },

    renderExplorar: function () {
        const user = StorageDB.get('jxp_current_user');
        if (!user) { window.location.hash = '#/login'; return; }

        const experiencias = StorageDB.get('jxp_experiences') || [];
        const content = document.getElementById('app-content');

        let html = `
            <div class="container py-4">
                <div class="row mb-4 align-items-center">
                    <div class="col-md-8">
                        <h3 class="fw-bold">Encuentra una experiencia para ti</h3>
                        <p class="text-secondary">Explora oportunidades adaptadas a tus preferencias y habilidades.</p>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control rounded-pill" placeholder="¿Qué te gustaría hacer?">
                    </div>
                </div>
                <div class="row g-4">
        `;

        experiencias.forEach(exp => {
            const match = MatchEngine.calculate(user, exp);
            html += `
                <div class="col-md-6 col-lg-4">
                    <div class="jxp-card p-4 h-100 d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill px-3 py-2">
                                <i class="bi bi-heart-fill"></i> ${match.total}% Match
                            </span>
                            <button class="btn btn-link text-secondary p-0"><i class="bi bi-bookmark fs-5"></i></button>
                        </div>
                        <h5 class="fw-bold mb-1">${exp.titulo}</h5>
                        <p class="text-secondary small mb-3"><i class="bi bi-shop"></i> ${exp.empresa}</p>
                        
                        <div class="d-flex gap-2 text-secondary small mb-3 flex-wrap">
                            <span><i class="bi bi-geo-alt"></i> ${exp.ubicacion}</span>
                            <span><i class="bi bi-clock"></i> ${exp.duracion_horas}h</span>
                        </div>

                        <div class="mt-auto">
                            <p class="text-success fw-bold fs-5 mb-3">$${exp.pago.toLocaleString('es-CL')}</p>
                            <a href="#/experiencia/${exp.id}" class="btn btn-outline-primary w-100 fw-medium">Ver experiencia</a>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        content.innerHTML = html;
    },

    renderDetalleExperiencia: function (id) {
        const user = StorageDB.get('jxp_current_user');
        if (!user) { window.location.hash = '#/login'; return; }

        const experiencias = StorageDB.get('jxp_experiences') || [];
        const exp = experiencias.find(e => e.id == id);
        const content = document.getElementById('app-content');

        if (!exp) {
            this.render404();
            return;
        }

        const match = MatchEngine.calculate(user, exp);

        content.innerHTML = `
            <div class="container py-4">
                <a href="#/explorar" class="text-decoration-none text-secondary mb-4 d-inline-block">
                    <i class="bi bi-arrow-left"></i> Volver a explorar
                </a>
                
                <div class="row g-4">
                    <div class="col-lg-8">
                        <div class="jxp-card p-4 p-md-5">
                            <div class="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                    <span class="badge bg-light text-secondary border mb-3">${exp.modalidad}</span>
                                    <h2 class="fw-bold">${exp.titulo}</h2>
                                    <p class="fs-5 text-secondary"><i class="bi bi-shop"></i> ${exp.empresa}</p>
                                </div>
                                <div class="text-center">
                                    <div class="match-circle fs-4 mx-auto mb-1">${match.total}%</div>
                                    <small class="text-success fw-bold">MATCH</small>
                                </div>
                            </div>

                            <h5 class="fw-bold mt-5 mb-3">Accesibilidad del entorno</h5>
                            <div class="d-flex flex-column gap-2 mb-4">
                                ${exp.accesibilidad.map(acc => `
                                    <div class="d-flex align-items-center gap-3 p-3 bg-light rounded-3 border">
                                        <i class="bi bi-check-circle-fill text-success fs-5"></i>
                                        <span class="fw-medium text-capitalize">${acc.replace('_', ' ')} garantizado</span>
                                    </div>
                                `).join('')}
                            </div>

                            <h5 class="fw-bold mt-5 mb-3">Habilidades que desarrollarás</h5>
                            <div class="d-flex flex-wrap gap-2">
                                ${exp.habilidades.map(hab => `
                                    <span class="badge bg-primary bg-opacity-10 text-primary border border-primary px-3 py-2 rounded-pill">${hab}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="jxp-card p-4 sticky-top" style="top: 100px;">
                            <h4 class="text-success fw-bold mb-1">$${exp.pago.toLocaleString('es-CL')}</h4>
                            <p class="text-secondary small mb-4">Pago por experiencia</p>
                            
                            <ul class="list-unstyled mb-4 text-secondary">
                                <li class="mb-2"><i class="bi bi-clock me-2"></i> ${exp.duracion_horas} horas totales</li>
                                <li class="mb-2"><i class="bi bi-geo-alt me-2"></i> ${exp.ubicacion}</li>
                                <li class="mb-2"><i class="bi bi-calendar me-2"></i> ${exp.horario_tipo}</li>
                            </ul>

                            <button onclick="UI.postular(${exp.id})" class="btn btn-primary w-100 py-3 fw-bold mb-2">Postular a esta experiencia</button>
                            <button class="btn btn-outline-secondary w-100 py-2 fw-medium">Guardar para después</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderPasaporte: function () {
        const user = StorageDB.get('jxp_current_user');
        if (!user) { window.location.hash = '#/login'; return; }

        const content = document.getElementById('app-content');

        content.innerHTML = `
            <div class="container py-4">
                <div class="jxp-card p-4 p-md-5 bg-primary text-white mb-5 position-relative overflow-hidden">
                    <div class="position-relative z-index-1">
                        <h2 class="fw-bold mb-3"><i class="bi bi-award"></i> Tu Pasaporte Laboral</h2>
                        <p class="fs-5 text-white-50 mb-0">El registro oficial de tus experiencias, habilidades y certificaciones obtenidas en JOBXP.</p>
                    </div>
                    <i class="bi bi-patch-check-fill position-absolute text-white opacity-10" style="font-size: 15rem; right: -2rem; top: -3rem;"></i>
                </div>

                <h4 class="fw-bold mb-4">Experiencias Certificadas</h4>
                
                <div class="row">
                    <div class="col-lg-8">
                        <div class="jxp-card p-4 mb-4 border-success border-2">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <span class="badge bg-success mb-2"><i class="bi bi-check-circle"></i> EXPERIENCIA CERTIFICADA</span>
                                    <h4 class="fw-bold">Digitalización de documentos</h4>
                                    <p class="text-secondary mb-1">Café Santiago • 4 horas • Agosto 2026</p>
                                </div>
                                <div class="text-end">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=JXP-2026-0015" alt="QR Certificado" class="img-fluid rounded mb-2">
                                    <div class="small text-secondary fw-bold">ID: JXP-2026-0015</div>
                                </div>
                            </div>
                            
                            <hr class="text-secondary opacity-25">
                            
                            <h6 class="fw-bold text-secondary">Habilidades demostradas:</h6>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <span class="badge bg-light text-dark border"><i class="bi bi-check text-success"></i> Organización</span>
                                <span class="badge bg-light text-dark border"><i class="bi bi-check text-success"></i> Herramientas digitales</span>
                                <span class="badge bg-light text-dark border"><i class="bi bi-check text-success"></i> Responsabilidad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    postular: function (id) {
        alert("¡Excelente! 🎉\nTu postulación fue enviada correctamente. El sistema la registrará en tu perfil.");
        window.location.hash = '#/inicio';
    },

    // ==========================================
    // 3. ZONAS DE DESARROLLO ESTUDIANTIL
    // ==========================================

    renderPlaceholder: function (param, currentHash) {
        const content = document.getElementById('app-content');

        const retos = {
            '#/perfil': {
                titulo: 'Mi Perfil & Preferencias',
                instruccion: 'Debes construir el formulario donde el joven pueda editar sus habilidades y marcar casillas (checkbox) de accesibilidad (ej: "Bajo ruido"). Luego, guardar los cambios en el LocalStorage.'
            },
            '#/empresa': {
                titulo: 'Dashboard de Empresa',
                instruccion: 'Debes diseñar el panel de administración. Aquí la empresa debe ver cuántas experiencias activas tiene, cuántos jóvenes han postulado y su calificación promedio.'
            },
            '#/empresa/publicar': {
                titulo: 'Publicar Microexperiencia',
                instruccion: 'Debes crear el formulario para publicar ofertas. IMPORTANTE: Aquí debes programar en JavaScript las reglas anti-abuso (ej: Si es microempresa, bloquear si ya tiene 1 joven activo).'
            },
            '#/asistencia': {
                titulo: 'Simulador IoT (Código QR)',
                instruccion: 'Debes crear una vista con la imagen de un código QR. Al hacer clic en un botón "Simular Escaneo", usa JS para registrar la hora de entrada/salida y guárdalo en LocalStorage.'
            },
            '#/evaluaciones': {
                titulo: 'Sistema de Evaluación',
                instruccion: 'Diseña el formulario para calificar a la empresa o al joven con estrellas, enviando esta data al LocalStorage para actualizar el promedio.'
            }
        };

        const retoActual = retos[currentHash] || {
            titulo: 'Módulo en Desarrollo',
            instruccion: 'Este módulo está pendiente de implementación. Revisa los requerimientos del proyecto.'
        };

        content.innerHTML = `
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <div class="jxp-card p-5 border-warning border-top border-4 shadow-sm bg-white">
                            <div class="mb-4">
                                <i class="bi bi-tools text-warning" style="font-size: 4rem;"></i>
                            </div>
                            <h2 class="fw-bold mb-3">${retoActual.titulo}</h2>
                            <div class="alert alert-warning text-dark text-start border-0 bg-warning bg-opacity-10 mb-4">
                                <strong><i class="bi bi-exclamation-triangle-fill me-2"></i>DESAFÍO TÉCNICO: ¡Debes trabajar en esto!</strong>
                                <p class="mt-2 mb-0">${retoActual.instruccion}</p>
                            </div>
                            <p class="text-secondary mb-4">Abre el archivo <code>js/ui.js</code>, busca la ruta correspondiente en <code>router.js</code> y reemplaza esta pantalla conectando HTML dinámico y manipulación del DOM.</p>
                            <div class="d-flex justify-content-center gap-3">
                                <a href="javascript:history.back()" class="btn btn-outline-secondary px-4">Volver atrás</a>
                                <a href="#/inicio" class="btn btn-primary px-4">Ir al Inicio Seguro</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    render404: function () {
        document.getElementById('app-content').innerHTML = `
            <div class="container text-center py-5">
                <i class="bi bi-emoji-frown fs-1 text-secondary mb-3 d-block"></i>
                <h2 class="fw-bold">Página no encontrada</h2>
                <p class="text-secondary">La ruta a la que intentas acceder no existe en este prototipo.</p>
                <a href="javascript:history.back()" class="btn btn-primary mt-3 px-4">Regresar</a>
            </div>
        `;
    }
     // 👇 NUEVO CÓDIGO
    renderAsistencia: function () {
        const appContent = document.querySelector("#app-content");

        appContent.innerHTML = `
            <div class="container py-4">
                <div class="jxp-card text-center mx-auto" 
                    style="max-width:380px;">

                    <h2>📡 Asistencia IoT</h2>

                    <p>
                        Escanea el código QR para registrar asistencia
                    </p>

                    <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=JobXp-IoT"
                    class="img-fluid mb-3"
                    alt="Código QR">

                    <button> 
                    class="btn btn-success w-100 mb-2"
                    onclick="UI.registrarAsistencia('Entrada')">
                    🟢 Simular Entrada
                    </button>

                    <button 
                    class="btn btn-danger w-100"
                    onclick="UI.registrarAsistencia('Salida')">
                    🔴 Simular Salida
                    </button>

                </div>
            </div>
        `;
    },


    registrarAsistencia: function(tipo) {

        const ahora = new Date();

        const fecha = ahora.toLocaleDateString("es-CL");
        const hora = ahora.toLocaleTimeString("es-CL");


        alert(
            `✅ Asistencia registrada\n\n` +
            `Tipo: ${tipo}\n` +
            `Fecha: ${fecha}\n` +
            `Hora: ${hora}`
        );


        window.location.hash = "#/inicio";
    }

};
