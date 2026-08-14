# JOBXP — Plataforma de Microexperiencias Laborales Inclusivas

Prototipo web académico hecho con **HTML, CSS, Bootstrap y JavaScript puro**. Está inspirado en el documento del proyecto y en los mockups entregados.

## Funciones implementadas
- Registro de cuentas de joven y empresa.
- Inicio de sesión con **solo correo y contraseña**.
- Cerrar sesión.
- Perfil joven con nombre completo, fecha de nacimiento, zona, habilidades, CV y preferencias de accesibilidad.
- Recomendaciones por zona y match de accesibilidad.
- Exploración y filtros por zona, modalidad, sueldo negociable/no negociable y accesibilidad.
- Detalle de experiencia: sueldo, horario, duración, habilidades, tipo de experiencia y etiquetas inclusivas.
- Mensaje explícito cuando el sueldo no es negociable.
- Empresas relacionadas y sus experiencias disponibles.
- Panel de empresa para publicar microexperiencias.
- Checklist de accesibilidad y teletrabajo.
- Reglas antiabuso: límite de jóvenes por tamaño y máximo del 20% de dotación; bloqueo de ofertas duplicadas.
- Evaluación bidireccional con estrellas.
- Denuncias.
- Simulación de asistencia mediante QR.
- Pasaporte laboral.
- Navbar responsive con botón hamburguesa en pantallas pequeñas.

## Datos de prueba
**Joven:** `camila@jobxp.cl` / `123456`  
**Empresa:** `empresa@jobxp.cl` / `123456`


- **Evaluación cruzada por clase:** los jóvenes pueden calificar empresas y las empresas pueden calificar jóvenes. El selector y la validación JavaScript bloquean cualquier intento de evaluar una cuenta de la misma clase; además se evita duplicar la evaluación de la misma contraparte desde una cuenta.

## Importante
Este es un prototipo frontend. La autenticación, CV y datos se guardan en `localStorage`; no hay backend ni Firebase conectado todavía. La verificación biométrica, QR/IoT y geolocalización son simulaciones.

El contenido funcional se basa en el documento del proyecto: público joven mayor de 18 años, inclusión asistida, match de accesibilidad, pasaporte de experiencia, evaluación mutua, denuncias y reglas antiabuso.

## Actualización de funcionalidades
- Mis postulaciones: el joven puede revisar estado Enviada/Aceptada/Rechazada.
- Postulaciones recibidas: la empresa puede aceptar o rechazar postulantes y revisar CV, habilidades y preferencias/condiciones indicadas.
- Mensajería bidireccional por cada postulación.
- Perfil inclusivo ampliado: TDAH, TEA/espectro autista, Tourette, ansiedad social, movilidad reducida, discapacidad física, sordera/hipoacusia y baja visión/ceguera.
- Campo libre para indicar otra condición, enfermedad o necesidad que no aparezca en la lista.
- Las nuevas postulaciones y cambios de estado generan mensajes automáticos dentro de la conversación.
