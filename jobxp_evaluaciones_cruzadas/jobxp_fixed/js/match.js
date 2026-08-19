// js/match.js
class MatchEngine {
    static calculate(joven, experiencia) {
        let score = 0;
        const desglose = { accesibilidad: 0, habilidades: 0, disponibilidad: 0, modalidad: 0 };

        // 1. Accesibilidad (40%) - El peso más alto
        if (experiencia.accesibilidad.length > 0) {
            const accMatch = experiencia.accesibilidad.filter(req => joven.accesibilidad.includes(req));
            desglose.accesibilidad = (accMatch.length / experiencia.accesibilidad.length) * 40;
            score += desglose.accesibilidad;
        } else {
            score += 40; // Si no requiere adaptaciones específicas, suma total
        }

        // 2. Habilidades (30%)
        if (experiencia.habilidades.length > 0) {
            const habMatch = experiencia.habilidades.filter(hab => joven.habilidades.includes(hab));
            desglose.habilidades = (habMatch.length / experiencia.habilidades.length) * 30;
            score += desglose.habilidades;
        }

        // 3. Disponibilidad (20%)
        if (joven.disponibilidad.includes(experiencia.horario_tipo)) {
            desglose.disponibilidad = 20;
            score += 20;
        }

        // 4. Modalidad (10%)
        if (joven.modalidad_preferida === experiencia.modalidad || experiencia.modalidad === 'Híbrido') {
            desglose.modalidad = 10;
            score += 10;
        }

        return {
            total: Math.round(score),
            desglose: desglose,
            etiqueta: this.getEtiqueta(score)
        };
    }

    static getEtiqueta(score) {
        if (score >= 90) return 'Excelente compatibilidad';
        if (score >= 75) return 'Buena compatibilidad';
        if (score >= 60) return 'Compatibilidad parcial';
        return 'Baja compatibilidad';
    }
}