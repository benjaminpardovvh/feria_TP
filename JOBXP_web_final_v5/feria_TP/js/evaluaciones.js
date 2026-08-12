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

    const escapeHtml = (value) => {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
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

        // Alias solicitado por el modelo de datos del proyecto.
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

                    <h3>
                        ${isYoung
                            ? 'Evalúa tu experiencia en la empresa'
                            : 'Evalúa el desempeño del joven'}
                    </h3>

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
                    <label for="comment-${mode}">
                        Comentario
                        <span>Opcional</span>
                    </label>

                    <textarea
                        id="comment-${mode}"
                        name="comentario"
                        maxlength="500"
                        rows="5"
                        placeholder="${isYoung
                            ? '¿Qué destacarías de esta experiencia?'
                            : '¿Cómo fue el desempeño durante la experiencia?'}"
                    ></textarea>

                    <div class="jxp-character-count">
                        <span>Tu comentario es privado hasta completar el proceso.</span>
                        <strong data-count-for="comment-${mode}">0/500</strong>
                    </div>
                </div>

                <div class="jxp-form-actions">
                    <button type="button" class="btn jxp-secondary-action" data-clear-form="${mode}">
                        Limpiar
                    </button>

                    <button type="submit" class="btn jxp-primary-action">
                        <i class="bi bi-send me-2"></i>
                        Enviar evaluación
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

                        <a href="#/inicio" class="jxp-back-link">
                            <i class="bi bi-arrow-left"></i>
                            Volver a mi experiencia
                        </a>

                        <div class="jxp-evaluations-hero-grid">

                            <div>
                                <span class="jxp-page-kicker">
                                    CIERRE DE EXPERIENCIA
                                </span>

                                <h1>
                                    Tu experiencia también
                                    <span>se construye con tu opinión.</span>
                                </h1>

                                <p>
                                    Al terminar una microexperiencia, ambas partes
                                    entregan retroalimentación. Así JOBXP construye
                                    reputación, confianza y mejores oportunidades.
                                </p>
                            </div>

                            <div class="jxp-experience-summary">
                                <div class="jxp-summary-top">
                                    <div class="jxp-summary-icon">
                                        <i class="bi bi-file-earmark-check"></i>
                                    </div>

                                    <span class="jxp-completed-badge">
                                        <i class="bi bi-check-circle-fill"></i>
                                        Experiencia finalizada
                                    </span>
                                </div>

                                <h2>Digitalización de documentos</h2>

                                <p>
                                    <i class="bi bi-building"></i>
                                    Café Santiago
                                </p>

                                <div class="jxp-summary-meta">
                                    <span><i class="bi bi-clock"></i> 4 horas</span>
                                    <span><i class="bi bi-calendar3"></i> Agosto 2026</span>
                                    <span><i class="bi bi-geo-alt"></i> Santiago Centro</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container py-5">

                    <div class="jxp-evaluation-progress">
                        <div class="jxp-progress-step completed">
                            <span><i class="bi bi-check"></i></span>
                            <div>
                                <strong>Experiencia realizada</strong>
                                <small>La tarea fue completada</small>
                            </div>
                        </div>

                        <div class="jxp-progress-line"></div>

                        <div class="jxp-progress-step active">
                            <span>2</span>
                            <div>
                                <strong>Evaluación mutua</strong>
                                <small>Ambas partes dejan su opinión</small>
                            </div>
                        </div>

                        <div class="jxp-progress-line"></div>

                        <div class="jxp-progress-step">
                            <span>3</span>
                            <div>
                                <strong>Experiencia certificada</strong>
                                <small>Se actualiza tu Pasaporte Laboral</small>
                            </div>
                        </div>
                    </div>

                    <div class="jxp-evaluation-switcher" role="tablist" aria-label="Tipo de evaluación">

                        <button
                            type="button"
                            class="jxp-evaluation-tab active"
                            data-evaluation-tab="jovenEmpresa"
                            role="tab"
                            aria-selected="true"
                        >
                            <span class="jxp-tab-icon green">
                                <i class="bi bi-person-heart"></i>
                            </span>

                            <span>
                                <strong>Tú evalúas a la empresa</strong>
                                <small>Ambiente, trato y pago</small>
                            </span>

                            <i class="bi bi-chevron-right"></i>
                        </button>

                        <button
                            type="button"
                            class="jxp-evaluation-tab"
                            data-evaluation-tab="empresaJoven"
                            role="tab"
                            aria-selected="false"
                        >
                            <span class="jxp-tab-icon purple">
                                <i class="bi bi-building-check"></i>
                            </span>

                            <span>
                                <strong>La empresa evalúa al joven</strong>
                                <small>Puntualidad, responsabilidad y adaptación</small>
                            </span>

                            <i class="bi bi-chevron-right"></i>
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

                    <div class="jxp-trust-box">
                        <div class="jxp-trust-icon">
                            <i class="bi bi-shield-check"></i>
                        </div>

                        <div>
                            <strong>Evaluación justa y protegida</strong>
                            <p>
                                Las evaluaciones de JOBXP se enfocan en el cumplimiento
                                de lo acordado. En el caso del joven, no se consideran
                                criterios basados en lenguaje corporal, tics o habilidades
                                sociales tradicionales.
                            </p>
                        </div>
                    </div>

                    <div class="jxp-report-box">
                        <div>
                            <span class="jxp-report-icon">
                                <i class="bi bi-flag"></i>
                            </span>

                            <div>
                                <strong>¿Algo no salió como estaba acordado?</strong>
                                <p>
                                    Si hubo maltrato, incumplimiento de pago, discriminación
                                    o condiciones diferentes a las publicadas, puedes realizar
                                    una denuncia.
                                </p>
                            </div>
                        </div>

                        <a href="#/denuncias" class="btn jxp-report-btn">
                            Reportar un problema
                        </a>
                    </div>

                </div>
            </section>
        `;

        const setStars = (group, criterion, value) => {
            document.querySelectorAll(
                `.jxp-star[data-rating-group="${group}"][data-criterion="${criterion}"]`
            ).forEach(star => {
                const number = Number(star.dataset.value);
                const icon = star.querySelector('i');
                const selected = number <= value;

                icon.classList.toggle('bi-star-fill', selected);
                icon.classList.toggle('bi-star', !selected);
                star.classList.toggle('selected', selected);
                star.setAttribute('aria-checked', number === value ? 'true' : 'false');
            });
        };

        document.querySelectorAll('.jxp-star').forEach(star => {
            star.addEventListener('click', () => {
                const group = star.dataset.ratingGroup;
                const criterion = star.dataset.criterion;
                const value = Number(star.dataset.value);

                setStars(group, criterion, value);
            });

            star.addEventListener('keydown', event => {
                if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    const next = star.nextElementSibling;
                    if (next) next.focus();
                }

                if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    const previous = star.previousElementSibling;
                    if (previous) previous.focus();
                }
            });
        });

        document.querySelectorAll('[data-evaluation-tab]').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.evaluationTab;

                document.querySelectorAll('[data-evaluation-tab]').forEach(item => {
                    const active = item === tab;
                    item.classList.toggle('active', active);
                    item.setAttribute('aria-selected', String(active));
                });

                document.querySelectorAll('[data-evaluation-panel]').forEach(panel => {
                    panel.classList.toggle(
                        'active',
                        panel.dataset.evaluationPanel === target
                    );
                });
            });
        });

        document.querySelectorAll('.jxp-evaluation-form').forEach(form => {
            const mode = form.dataset.evaluationMode;
            const textarea = form.querySelector('textarea');
            const counter = form.querySelector(`[data-count-for="${textarea.id}"]`);

            textarea.addEventListener('input', () => {
                counter.textContent = `${textarea.value.length}/500`;
            });

            form.querySelector('[data-clear-form]').addEventListener('click', () => {
                form.reset();
                counter.textContent = '0/500';

                form.querySelectorAll('.jxp-star').forEach(star => {
                    star.classList.remove('selected');
                    star.querySelector('i').classList.remove('bi-star-fill');
                    star.querySelector('i').classList.add('bi-star');
                    star.setAttribute('aria-checked', 'false');
                });

                form.querySelector('.jxp-form-message').innerHTML = '';
            });

            form.addEventListener('submit', event => {
                event.preventDefault();

                const ratings = {};
                form.querySelectorAll('.jxp-star.selected').forEach(star => {
                    ratings[star.dataset.criterion] = Number(star.dataset.value);
                });

                const requiredCriteria = criteria[mode].map(item => item.key);
                const complete = requiredCriteria.every(key => ratings[key]);

                const message = form.querySelector('.jxp-form-message');

                if (!complete) {
                    message.className = 'jxp-form-message error';
                    message.innerHTML = `
                        <i class="bi bi-exclamation-circle-fill"></i>
                        Completa todas las calificaciones antes de enviar.
                    `;
                    return;
                }

                const isYoung = mode === 'jovenEmpresa';

                const evaluation = {
                    id: Date.now(),
                    experienciaId: 101,
                    experiencia: 'Digitalización de documentos',
                    empresa: 'Café Santiago',
                    joven: currentUser.nombre || 'Camila R.',
                    emisor: isYoung ? 'joven' : 'empresa',
                    receptor: isYoung ? 'empresa' : 'joven',
                    tipo: mode,
                    puntajes: ratings,
                    comentario: textarea.value.trim(),
                    promedio: Number(
                        (
                            Object.values(ratings).reduce((a, b) => a + b, 0) /
                            Object.values(ratings).length
                        ).toFixed(1)
                    ),
                    fecha: new Date().toISOString()
                };

                saveEvaluation(evaluation);

                message.className = 'jxp-form-message success';
                message.innerHTML = `
                    <i class="bi bi-check-circle-fill"></i>
                    Evaluación enviada correctamente. ¡Gracias por tu retroalimentación!
                `;

                form.querySelectorAll('.jxp-star').forEach(star => {
                    star.disabled = true;
                });

                form.querySelector('textarea').disabled = true;
                form.querySelector('button[type="submit"]').disabled = true;

                setTimeout(() => {
                    const nextTab = isYoung ? 'empresaJoven' : null;

                    if (nextTab) {
                        document.querySelector(`[data-evaluation-tab="${nextTab}"]`)?.click();
                    }
                }, 900);
            });
        });
    };
})();
