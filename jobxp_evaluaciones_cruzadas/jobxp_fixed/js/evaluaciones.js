// js/evaluaciones.js
// Sistema de Evaluaciones Bidireccional de JOBXP.
// Guarda evaluaciones ficticias en LocalStorage para el prototipo.

(function () {
    const STORAGE_KEY = 'jxp_evaluaciones';

    const criteria = {
        jovenEmpresa: [
            { key: 'ambiente', label: 'Ambiente laboral', icon: 'bi-house-heart' },
            { key: 'trato', label: 'Trato y respeto', icon: 'bi-people' },
            { key: 'pago', label: 'Cumplimiento de pago', icon: 'bi-cash-coin' }
        ],
        empresaJoven: [
            { key: 'puntualidad', label: 'Puntualidad', icon: 'bi-clock' },
            { key: 'responsabilidad', label: 'Responsabilidad', icon: 'bi-check2-circle' },
            { key: 'adaptacion', label: 'Adaptación a la tarea', icon: 'bi-stars' }
        ]
    };

    const getEvaluations = () => {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (error) {
            return [];
        }
    };

    const saveEvaluation = (evaluation) => {
        const evaluations = getEvaluations();
        evaluations.push(evaluation);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(evaluations));
        localStorage.setItem('evaluaciones', JSON.stringify(evaluations));
    };

    const renderStars = (name, criterionKey) => `
        <div class="jxp-rating" role="radiogroup" aria-label="Calificación de ${criterionKey}">
            ${[1, 2, 3, 4, 5].map(number => `
                <button
                    type="button"
                    class="jxp-star"
                    data-rating-group="${name}"
                    data-criterion="${criterionKey}"
                    data-value="${number}"
                    role="radio"
                    aria-checked="false"
                    aria-label="${number} de 5 estrellas"
                >
                    <i class="bi bi-star"></i>
                </button>
            `).join('')}
        </div>
    `;

    const renderCriterion = (mode, item) => `
        <div class="jxp-evaluation-criterion">
            <div class="jxp-criterion-info">
                <span class="jxp-criterion-icon">
                    <i class="bi ${item.icon}"></i>
                </span>
                <div>
                    <strong>${item.label}</strong>
                    <small>Selecciona de 1 a 5 estrellas</small>
                </div>
            </div>
            ${renderStars(mode, item.key)}
        </div>
    `;

    const buildEvaluationForm = (mode) => {
        const isYoung = mode === 'jovenEmpresa';
        const list = isYoung ? criteria.jovenEmpresa : criteria.empresaJoven;

        return `
            <form class="jxp-evaluation-form" data-evaluation-mode="${mode}" novalidate>
                <div class="jxp-form-header">
                    <span class="jxp-form-badge">
                        <i class="bi ${isYoung ? 'bi-person' : 'bi-building'}"></i>
                        ${isYoung ? 'Joven → Empresa' : 'Empresa → Joven'}
                    </span>
                    <h3>${isYoung ? 'Evalúa tu experiencia en la empresa' : 'Evalúa el desempeño del joven'}</h3>
                    <p>
                        ${isYoung
                            ? 'Cuéntanos si la experiencia cumplió las condiciones acordadas.'
                            : 'Evalúa el desempeño según los objetivos definidos para la microexperiencia.'}
                    </p>
                </div>

                <div class="jxp-criteria-list">
                    ${list.map(item => renderCriterion(mode, item)).join('')}
                </div>

                <div class="jxp-comment">
                    <label for="comment-${mode}">Comentario <span>Opcional</span></label>
                    <textarea
                        id="comment-${mode}"
                        name="comentario"
                        maxlength="500"
                        rows="5"
                        placeholder="${isYoung ? '¿Qué destacarías de esta experiencia?' : '¿Cómo fue el desempeño durante la experiencia?'}"
                    ></textarea>
                    <div class="jxp-character-count">
                        <span>Tu comentario es privado hasta completar el proceso.</span>
                        <strong data-count-for="comment-${mode}">0/500</strong>
                    </div>
                </div>

                <div class="jxp-form-actions">
                    <button type="button" class="btn jxp-secondary-action" data-clear-form="${mode}">Limpiar</button>
                    <button type="submit" class="btn jxp-primary-action">
                        <i class="bi bi-send me-2"></i>Enviar evaluación
                    </button>
                </div>

                <div class="jxp-form-message" role="status" aria-live="polite"></div>
            </form>
        `;
    };

    UI.renderEvaluaciones = function () {
        const content = document.getElementById('app-content');
        const currentUser = StorageDB.get('jxp_current_user') || {
            id: 1,
            nombre: 'Camila R.',
            rol: 'joven'
        };

        content.innerHTML = `
            <section class="jxp-evaluations-page">
                <div class="jxp-evaluations-hero">
                    <div class="container">
                        <a href="#/inicio" class="jxp-back-link"><i class="bi bi-arrow-left"></i> Volver a mi experiencia</a>
                        <div class="jxp-evaluations-hero-grid">
                            <div>
                                <span class="jxp-page-kicker">CIERRE DE EXPERIENCIA</span>
                                <h1>Tu experiencia también <span>se construye con tu opinión.</span></h1>
                                <p>Al terminar una microexperiencia, ambas partes entregan retroalimentación.</p>
                            </div>
                            <div class="jxp-experience-summary">
                                <div class="jxp-summary-top">
                                    <div class="jxp-summary-icon"><i class="bi bi-file-earmark-check"></i></div>
                                    <span class="jxp-completed-badge"><i class="bi bi-check-circle-fill"></i> Experiencia finalizada</span>
                                </div>
                                <h2>Digitalización de documentos</h2>
                                <p><i class="bi bi-building"></i> Café Santiago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-5">
                    <div class="jxp-evaluation-switcher" role="tablist">
                        <button type="button" class="jxp-evaluation-tab active" data-evaluation-tab="jovenEmpresa" role="tab" aria-selected="true">
                            <span><strong>Tú evalúas a la empresa</strong></span>
                        </button>
                        <button type="button" class="jxp-evaluation-tab" data-evaluation-tab="empresaJoven" role="tab" aria-selected="false">
                            <span><strong>La empresa evalúa al joven</strong></span>
                        </button>
                    </div>

                    <div class="jxp-evaluation-panels">
                        <div class="jxp-evaluation-panel active" data-evaluation-panel="jovenEmpresa">
                            ${buildEvaluationForm('jovenEmpresa')}
                        </div>
                        <div class="jxp-evaluation-panel" data-evaluation-panel="empresaJoven">
                            ${buildEvaluationForm('empresaJoven')}
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Modificación principal en la gestión del Submit
        document.querySelectorAll('.jxp-evaluation-form').forEach(form => {
            const mode = form.dataset.evaluationMode;
            const textarea = form.querySelector('textarea');
            const counter = form.querySelector(`[data-count-for="${textarea.id}"]`);

            textarea.addEventListener('input', () => counter.textContent = `${textarea.value.length}/500`);

            form.addEventListener('submit', event => {
                event.preventDefault();
                const message = form.querySelector('.jxp-form-message');

                // 1. Validar que el rol del usuario coincida con el formulario utilizado
                const isYoungForm = mode === 'jovenEmpresa';
                if ((isYoungForm && currentUser.rol !== 'joven') || (!isYoungForm && currentUser.rol !== 'empresa')) {
                    message.className = 'jxp-form-message error';
                    message.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> No tienes permisos para evaluar como ${isYoungForm ? 'trabajador' : 'empresa'}.`;
                    return;
                }

                // 2. Validar que todos los campos requeridos tengan una estrella asignada
                const ratings = {};
                form.querySelectorAll('.jxp-star.selected').forEach(star => {
                    ratings[star.dataset.criterion] = Number(star.dataset.value);
                });

                const requiredCriteria = criteria[mode].map(item => item.key);
                if (!requiredCriteria.every(key => ratings[key])) {
                    message.className = 'jxp-form-message error';
                    message.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> Completa todas las calificaciones.`;
                    return;
                }

                // 3. Guardar la evaluación si pasó las validaciones de rol y contenido
                const evaluation = {
                    id: Date.now(),
                    experienciaId: 101,
                    empresa: 'Café Santiago',
                    joven: currentUser.nombre,
                    emisor: currentUser.rol,
                    receptor: currentUser.rol === 'joven' ? 'empresa' : 'joven',
                    tipo: mode,
                    puntajes: ratings,
                    comentario: textarea.value.trim(),
                    fecha: new Date().toISOString()
                };

                saveEvaluation(evaluation);

                message.className = 'jxp-form-message success';
                message.innerHTML = `<i class="bi bi-check-circle-fill"></i> Evaluación enviada correctamente.`;
            });
        });
    };
})();