/* JOBXP - prototipo académico en JavaScript puro + Bootstrap.
   Los datos se guardan en localStorage para poder probar la aplicación sin backend. */
const DB_KEY = 'jobxp_db_v4';

const seed = {
  users: [
    {id:1,role:'joven',name:'Camila Rojas',email:'camila@jobxp.cl',password:'123456',birth:'2005-05-14',zone:'Santiago Centro',cv:'Camila_Rojas_CV.pdf',disability:true,needs:['bajo_ruido','instrucciones_escritas','estacion_sentada'],skills:['Organización','Herramientas digitales','Atención al detalle','Responsabilidad'],availability:'Mañana',rating:4.8,experiences:3},
    {id:2,role:'empresa',name:'JOBXP',email:'empresa@jobxp.cl',password:'123456',zone:'Santiago Centro',companySize:'pequena',totalWorkers:25,activeYouth:0,rating:4.7,inclusive:true,companyDescription:'Plataforma de microexperiencias laborales que conecta jóvenes con empresas de forma segura, transparente e inclusiva.',companySeeking:'Buscamos jóvenes responsables, con ganas de aprender y desarrollar habilidades mediante experiencias reales.'}
  ],
  jobs: [
    {id:101,title:'Digitalización de documentos',company:'Café Santiago',companyId:11,zone:'Santiago Centro',mode:'Presencial',hours:4,pay:25000,negotiable:false,schedule:'09:00 - 13:00',experience:'Administración y gestión documental',skills:['Organización','Herramientas digitales','Atención al detalle','Responsabilidad'],tags:['bajo_ruido','instrucciones_escritas','estacion_sentada'],description:'Apoyo en la digitalización y organización de documentos administrativos. Ideal para tareas ordenadas y detallistas.',inclusive:true,rating:4.8,applications:6,image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'},
    {id:102,title:'Gestión de redes sociales',company:'Mercado Local',companyId:12,zone:'Providencia',mode:'Remoto',hours:4,pay:28000,negotiable:true,schedule:'Horario flexible',experience:'Marketing digital y comunicación',skills:['Herramientas digitales','Comunicación escrita'],tags:['instrucciones_escritas','teletrabajo'],description:'Programación de publicaciones, revisión de mensajes y apoyo en contenidos para redes sociales.',inclusive:true,rating:4.9,applications:9,image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'},
    {id:103,title:'Control de inventario',company:'Tienda Urbana',companyId:13,zone:'Santiago Norte',mode:'Presencial',hours:4,pay:24000,negotiable:false,schedule:'14:00 - 18:00',experience:'Logística y control de stock',skills:['Organización','Atención al detalle'],tags:['estacion_sentada','movilidad_reducida'],description:'Registro de productos, conteo y actualización de inventario siguiendo instrucciones visuales.',inclusive:true,rating:4.5,applications:4,image:'https://images.unsplash.com/photo-1586528116493-da8c2b7d2d6b?auto=format&fit=crop&w=900&q=80'},
    {id:104,title:'Apoyo en diseño de piezas gráficas',company:'Estudio Creativo',companyId:14,zone:'Ñuñoa',mode:'Remoto',hours:3,pay:22000,negotiable:true,schedule:'Flexible',experience:'Diseño gráfico básico',skills:['Herramientas digitales','Creatividad'],tags:['teletrabajo','instrucciones_escritas'],description:'Creación de piezas simples para redes y catálogos con acompañamiento del equipo.',inclusive:true,rating:4.6,applications:3,image:'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80'},
    {id:105,title:'Soporte de chat para clientes',company:'Servicios Digitales',companyId:15,zone:'Las Condes',mode:'Remoto',hours:4,pay:30000,negotiable:true,schedule:'10:00 - 14:00',experience:'Atención al cliente digital',skills:['Comunicación escrita','Responsabilidad'],tags:['teletrabajo','instrucciones_escritas'],description:'Responder consultas por chat y registrar solicitudes en una plataforma digital.',inclusive:true,rating:4.9,applications:8,image:'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80'}
  ],
  companies:[
    {id:11,name:'Café Santiago',zone:'Santiago Centro',size:'micro',workers:8,rating:4.8,inclusive:true,description:'Cafetería local con experiencias administrativas.'},
    {id:12,name:'Mercado Local',zone:'Providencia',size:'pequena',workers:25,rating:4.9,inclusive:true,description:'Comercio local y proyectos digitales.'},
    {id:13,name:'Tienda Urbana',zone:'Santiago Norte',size:'pequena',workers:35,rating:4.5,inclusive:true,description:'Tienda y operaciones de inventario.'},
    {id:14,name:'Estudio Creativo',zone:'Ñuñoa',size:'micro',workers:6,rating:4.6,inclusive:true,description:'Diseño y comunicación digital.'},
    {id:15,name:'Servicios Digitales',zone:'Las Condes',size:'mediana',workers:90,rating:4.9,inclusive:true,description:'Servicios de atención y soporte remoto.'}
  ],
  applications:[], ratings:[], reports:[], attendance:[], messages:[], cvFiles:{}
};

function db(){
  let data = JSON.parse(localStorage.getItem(DB_KEY) || 'null');
  if(!data){ data = structuredClone(seed); }
  data.applications ||= []; data.messages ||= []; data.ratings ||= []; data.reports ||= []; data.attendance ||= []; data.cvFiles ||= {};
  data.users.forEach(u=>{u.needs ||= []; u.conditions ||= []; u.otherCondition ||= ''; if(u.role==='empresa'){u.companyDescription ||= ''; u.companySeeking ||= '';}}); if(!data.companies.some(c=>c.id===2)){data.companies.push({id:2,name:'JOBXP',zone:'Santiago Centro',size:'pequena',workers:25,rating:4.7,inclusive:true,description:'Plataforma de microexperiencias laborales que conecta jóvenes con empresas de forma segura, transparente e inclusiva.',seeking:'Buscamos jóvenes responsables, con ganas de aprender y desarrollar habilidades mediante experiencias reales.'});}
  saveDB(data);
  return data;
}
function saveDB(data){localStorage.setItem(DB_KEY,JSON.stringify(data));}
function currentUser(){return db().users.find(u=>u.id===Number(localStorage.getItem('jobxp_current'))) || null}
function setCurrent(id){localStorage.setItem('jobxp_current',id);}
function logout(){
  localStorage.removeItem('jobxp_current');
  // Si ya estamos en #/inicio, cambiar el hash no dispara hashchange; renderizamos manualmente.
  if(location.hash === '#/inicio' || location.hash === '') render();
  else { location.hash='#/inicio'; setTimeout(render,0); }
  toast('Sesión cerrada correctamente','success');
}
function money(n){return '$'+Number(n).toLocaleString('es-CL')}
function esc(s){return String(s??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
function initials(name){return esc((name||'JOBXP').split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase())}
function toast(msg,type='success'){const id='t'+Date.now();document.querySelector('#toastContainer').insertAdjacentHTML('beforeend',`<div id="${id}" class="toast align-items-center text-bg-${type} border-0" role="alert"><div class="d-flex"><div class="toast-body">${msg}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div></div>`);new bootstrap.Toast(document.getElementById(id),{delay:3200}).show()}
function requireLogin(){if(!currentUser()){location.hash='#/login';return false}return true}
function goEmpresa(){
  const u=currentUser();
  if(!u){ location.hash='#/login'; return; }
  if(u.role!=='empresa'){ location.hash='#/inicio'; return; }
  if(location.hash==='#/empresa'){ empresa(); }
  else { location.hash='#/empresa'; }
}
function closeMobileNav(){const nav=document.getElementById('mainNav');if(nav?.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(nav).hide()}

const TAGS={bajo_ruido:'Bajo nivel de ruido',instrucciones_escritas:'Instrucciones escritas',estacion_sentada:'Estación sentada',movilidad_reducida:'Movilidad reducida',teletrabajo:'Teletrabajo',accesibilidad_motriz:'Accesibilidad motriz',luz_tenue:'Luz tenue'};
function tag(t){return `<span class="tag ${t==='teletrabajo'?'green':''}"><i class="bi bi-check2"></i>${TAGS[t]||esc(t)}</span>`}
function matchJob(user,job){
  if(!user || user.role!=='joven') return 80;
  const needs=user.needs||[]; const tags=job.tags||[];
  if(!needs.length)return 78;
  const hits=needs.filter(n=>tags.includes(n)).length;
  return Math.min(99,78+Math.round((hits/needs.length)*21));
}
function recommendedJobs(user,jobs){return [...jobs].sort((a,b)=>matchJob(user,b)-matchJob(user,a))}
function jobCard(job,user){const m=matchJob(user,job);return `<div class="cardx job-card p-3">
  <img class="job-img w-100 mb-3" src="${job.image}" alt="Imagen de ${esc(job.title)}">
  <div class="d-flex justify-content-between gap-2"><span class="match">${m}% Match</span><button class="btn btn-sm btn-light rounded-circle" onclick="saveJob(${job.id})" aria-label="Guardar"><i class="bi bi-heart"></i></button></div>
  <h5 class="fw-bold mt-3 mb-1">${esc(job.title)}</h5><div class="text-muted small mb-2">${esc(job.company)} ${job.inclusive?'<span class="badge badge-inclusive ms-1">✓ Inclusiva</span>':''}</div>
  <div class="small text-muted d-flex flex-wrap gap-2 mb-2"><span><i class="bi bi-clock"></i> ${job.hours} h</span><span><i class="bi bi-geo-alt"></i> ${esc(job.zone)}</span><span><i class="bi bi-house"></i> ${esc(job.mode)}</span></div>
  <div class="fw-bold text-success fs-5">${money(job.pay)}</div><div class="small ${job.negotiable?'text-primary':'text-danger'} mb-2">${job.negotiable?'Sueldo negociable':'Sueldo no negociable'}</div>
  <div class="d-flex flex-wrap gap-1 mb-3">${job.tags.slice(0,3).map(tag).join('')}</div>
  <a class="btn btn-primary w-100" href="#/experiencia/${job.id}">Ver experiencia</a>
</div>`}

function renderNav(){
  const u=currentUser(); const box=document.getElementById('navAccount');
  box.innerHTML=u?`<div class="d-flex align-items-center gap-2"><div class="dropdown"><button class="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown"><span class="avatar d-inline-grid me-2" style="width:32px;height:32px;font-size:.7rem">${initials(u.name)}</span>${esc(u.name.split(' ')[0])}</button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#/perfil"><i class="bi bi-person me-2"></i>Mi perfil</a></li>${u.role==='joven'?'<li><a class="dropdown-item" href="#/postulaciones"><i class="bi bi-send me-2"></i>Mis postulaciones</a></li><li><a class="dropdown-item" href="#/mensajes"><i class="bi bi-chat-dots me-2"></i>Mensajes</a></li><li><a class="dropdown-item" href="#/pasaporte"><i class="bi bi-award me-2"></i>Pasaporte laboral</a></li><li><a class="dropdown-item" href="#/evaluaciones"><i class="bi bi-star me-2"></i>Evaluar empresas</a></li>':'<li><a class="dropdown-item" href="#/postulaciones"><i class="bi bi-people me-2"></i>Postulaciones recibidas</a></li><li><a class="dropdown-item" href="#/mensajes"><i class="bi bi-chat-dots me-2"></i>Mensajes</a></li><li><a class="dropdown-item" href="#/evaluaciones"><i class="bi bi-star me-2"></i>Evaluar jóvenes</a></li>'}<li><hr class="dropdown-divider"></li><li><button type="button" class="dropdown-item text-danger" id="logoutBtn"><i class="bi bi-box-arrow-right me-2"></i>Cerrar sesión</button></li></ul></div></div>`:`<a href="#/login" class="btn btn-outline-primary">Iniciar sesión</a><a href="#/registro" class="btn btn-primary">Registrarme</a>`;
  const logoutBtn=document.getElementById('logoutBtn');
  if(logoutBtn) logoutBtn.addEventListener('click',logout);
}

function render(){
  renderNav(); closeMobileNav();
  const hash=location.hash||'#/inicio'; const parts=hash.split('/'); const route=parts[1]||'inicio'; const id=parts[2];
  const routes={inicio:home,login:login,registro:registro,explorar:explorar,experiencia:()=>detalle(Number(id)),perfil:()=>currentUser()?.role==='empresa'?empresaPerfil():perfil,pasaporte:pasaporte,empresa:(()=>id?empresaDetalle(Number(id)):empresa),publicar:publicar,'como-funciona':comoFunciona,inclusion:inclusion,empresas:empresas,evaluaciones:evaluaciones,asistencia:asistencia,postulaciones:postulaciones,mensajes:mensajes};
  if(route==='empresa' && !id && !currentUser()){ location.hash='#/login'; return; }
  if(route==='empresa' && !id && currentUser()?.role!=='empresa'){ location.hash='#/inicio'; return; }
  (routes[route]||notFound)();
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===hash || (route==='experiencia'&&a.getAttribute('href')==='#/explorar')));
}

function home(){
  const u=currentUser(); const data=db(); const jobs= data.jobs;
  if(u?.role==='empresa'){empresa();return}
  const list=recommendedJobs(u,jobs).slice(0,3);
  document.querySelector('#app').innerHTML=`<section class="hero mb-5"><div class="row align-items-center g-4"><div class="col-lg-7"><span class="badge rounded-pill text-primary bg-white border px-3 py-2 mb-3">PLATAFORMA INCLUSIVA</span><h1>Tu primera <span>experiencia laboral</span> comienza aquí.</h1><p class="mt-3">Conecta con microexperiencias reales, desarrolla habilidades y construye un historial laboral certificado, incluso si aún no tienes experiencia.</p><div class="d-flex flex-wrap gap-2 mt-4"><a href="#/explorar" class="btn btn-primary btn-lg px-4">Explorar experiencias</a>${u?'<a href="#/perfil" class="btn btn-light btn-lg px-4 border">Editar mi perfil</a>':'<a href="#/registro" class="btn btn-light btn-lg px-4 border">Crear cuenta</a>'}</div><div class="d-flex flex-wrap gap-4 mt-4 small fw-semibold"><span><i class="bi bi-briefcase text-success"></i> Sin experiencia previa</span><span><i class="bi bi-heart text-success"></i> Match personalizado</span><span><i class="bi bi-person-check text-success"></i> Inclusión asistida</span><span><i class="bi bi-patch-check text-success"></i> Experiencia certificada</span></div></div><div class="col-lg-5"><div class="hero-art"><div class="mini-phone"><div class="mini-screen"><div class="d-flex justify-content-between mb-3"><strong>JOBXP</strong><span class="badge bg-success-subtle text-success">96% Match</span></div><div class="cardx p-3"><div class="small text-muted">Recomendado para ti</div><h6 class="fw-bold mt-2">Digitalización de documentos</h6><div class="small text-muted">Santiago Centro · 4 horas</div><div class="fw-bold text-success mt-2">$25.000</div><div class="d-flex flex-wrap gap-1 mt-2">${tag('bajo_ruido')}${tag('instrucciones_escritas')}</div></div></div></div></div></div></div></section><section class="mb-5"><div class="d-flex justify-content-between align-items-end mb-3"><div><h2 class="section-title mb-1">Experiencias recomendadas para ti</h2><div class="text-muted">Priorizamos las opciones que coinciden con tu zona y preferencias de accesibilidad.</div></div><a href="#/explorar" class="fw-bold text-decoration-none">Ver todas →</a></div><div class="row g-3">${list.map(j=>`<div class="col-md-6 col-lg-4">${jobCard(j,u)}</div>`).join('')}</div></section><section class="row g-4 mb-4"><div class="col-lg-7"><div class="cardx p-4 h-100"><h3 class="section-title">¿Cómo funciona?</h3><div class="row g-3 mt-2"><div class="col-md-3"><strong class="text-primary">01</strong><h6 class="fw-bold mt-2">Crea tu perfil</h6><small class="text-muted">Indica habilidades, zona, disponibilidad y preferencias.</small></div><div class="col-md-3"><strong class="text-primary">02</strong><h6 class="fw-bold mt-2">Encuentra tu match</h6><small class="text-muted">El algoritmo prioriza experiencias aptas para ti.</small></div><div class="col-md-3"><strong class="text-primary">03</strong><h6 class="fw-bold mt-2">Realiza la experiencia</h6><small class="text-muted">Cumple tareas reales con acompañamiento.</small></div><div class="col-md-3"><strong class="text-primary">04</strong><h6 class="fw-bold mt-2">Certifica</h6><small class="text-muted">Recibe evaluación y suma experiencia.</small></div></div></div></div><div class="col-lg-5"><div class="cardx p-4 h-100"><h3 class="section-title">Inclusión asistida</h3><p class="text-muted">Las empresas pueden indicar adaptaciones concretas y recibir una etiqueta de Empresa Inclusiva.</p><div class="d-flex flex-wrap gap-2">${tag('accesibilidad_motriz')}${tag('teletrabajo')}${tag('bajo_ruido')}${tag('instrucciones_escritas')}</div><a href="#/inclusion" class="btn btn-soft mt-3">Conocer las adaptaciones</a></div></div></section>`;
}

function login(){document.querySelector('#app').innerHTML=`<div class="row justify-content-center py-5"><div class="col-md-7 col-lg-5"><div class="cardx p-4 p-md-5"><div class="text-center mb-4"><div class="brand mb-2">JOB<span>XP</span></div><h2 class="fw-bold">Iniciar sesión</h2><p class="text-muted">Solo necesitas tu correo y contraseña.</p></div><form onsubmit="handleLogin(event)"><div class="mb-3"><label class="form-label fw-semibold">Correo electrónico</label><input id="loginEmail" type="email" class="form-control" required placeholder="tu@correo.cl"></div><div class="mb-3"><label class="form-label fw-semibold">Contraseña</label><input id="loginPass" type="password" class="form-control" required minlength="6" placeholder="••••••"></div><button type="submit" class="btn btn-primary w-100 py-2">Entrar</button></form><div class="alert alert-light border mt-4 small"><strong>Cuenta demo:</strong><br>Joven: camila@jobxp.cl / 123456<br>Empresa: empresa@jobxp.cl / 123456</div><p class="text-center mt-3 mb-0 text-muted">¿No tienes cuenta? <a href="#/registro">Registrarme</a></p></div></div></div>`}
function handleLogin(e){e.preventDefault();const d=db();const u=d.users.find(x=>x.email.toLowerCase()===document.getElementById('loginEmail').value.toLowerCase()&&x.password===document.getElementById('loginPass').value);if(!u){toast('Correo o contraseña incorrectos','danger');return}setCurrent(u.id);toast('Sesión iniciada correctamente');location.hash=u.role==='joven'?'#/inicio':'#/empresa'}

function registro(){document.querySelector('#app').innerHTML=`<div class="row justify-content-center py-3"><div class="col-lg-8"><div class="cardx p-4 p-md-5"><div class="text-center mb-4"><h2 class="fw-bold">Crea tu cuenta en JOBXP</h2><p class="text-muted">Completa tus datos para encontrar microexperiencias seguras e inclusivas.</p></div><div class="btn-group w-100 mb-4" role="group"><input type="radio" class="btn-check" name="role" id="roleJ" value="joven" checked onchange="toggleRegRole()"><label class="btn btn-outline-primary" for="roleJ">👤 Soy joven</label><input type="radio" class="btn-check" name="role" id="roleE" value="empresa" onchange="toggleRegRole()"><label class="btn btn-outline-primary" for="roleE">🏢 Soy empresa</label></div><form onsubmit="handleRegistro(event)"><div id="youngFields"><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Nombre completo</label><input id="regName" class="form-control" required></div><div class="col-md-6"><label class="form-label fw-semibold">Fecha de nacimiento</label><input id="regBirth" type="date" class="form-control" required></div><div class="col-md-6"><label class="form-label fw-semibold">Correo electrónico</label><input id="regEmail" type="email" class="form-control" required></div><div class="col-md-6"><label class="form-label fw-semibold">Contraseña</label><input id="regPass" type="password" minlength="6" class="form-control" required></div><div class="col-md-6"><label class="form-label fw-semibold">Zona / comuna</label><input id="regZone" class="form-control" placeholder="Ej. Santiago Centro" required></div><div class="col-md-6"><label class="form-label fw-semibold">Currículum</label><input id="regCV" type="file" class="form-control" accept=".pdf,.doc,.docx"></div></div><hr class="my-4"><label class="form-label fw-semibold">¿Tienes alguna discapacidad, neurodivergencia o necesitas adaptaciones?</label><select id="regDisability" class="form-select" onchange="document.getElementById('needsBox').classList.toggle('d-none',this.value!=='si')"><option value="no">No / Prefiero no indicarlo</option><option value="si">Sí, quiero configurar mis preferencias</option></select><div id="needsBox" class="mt-3 d-none"><div class="privacy-note mb-3"><i class="bi bi-lock me-1"></i> Estas preferencias son privadas y se usan para mejorar tus recomendaciones.</div><h6 class="fw-bold">Condición o espectro (opcional)</h6><div class="row g-2 mb-3">${Object.entries({tdah:'TDAH',tea:'TEA / espectro autista',tourette:'Síndrome de Tourette',ansiedad_social:'Ansiedad social',movilidad_reducida:'Movilidad reducida',discapacidad_fisica:'Discapacidad física',sordera_hipoacusia:'Sordera / hipoacusia',baja_vision_ceguera:'Baja visión / ceguera'}).map(([v,l])=>`<div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input me-2 condition" type="checkbox" value="${v}"> ${l}</label></div>`).join('')}</div><label class="form-label fw-semibold">Otra condición, enfermedad o necesidad (opcional)</label><input id="regOtherCondition" class="form-control mb-3" placeholder="Escribe aquí algo que no aparezca en la lista"><h6 class="fw-bold">Preferencias de accesibilidad</h6><div class="row g-2">${Object.entries({movilidad_reducida:'Movilidad reducida',accesibilidad_motriz:'Accesibilidad motriz',bajo_ruido:'Bajo nivel de ruido',luz_tenue:'Luz tenue',instrucciones_escritas:'Instrucciones escritas',teletrabajo:'Prefiero teletrabajo'}).map(([v,l])=>`<div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input me-2 need" type="checkbox" value="${v}"> ${l}</label></div>`).join('')}</div></div></div><div id="companyFields" class="d-none"><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Nombre de la empresa</label><input id="regCompanyName" class="form-control"></div><div class="col-md-6"><label class="form-label fw-semibold">Correo empresarial</label><input id="regCompanyEmail" type="email" class="form-control"></div><div class="col-md-6"><label class="form-label fw-semibold">Contraseña</label><input id="regCompanyPass" type="password" minlength="6" class="form-control"></div><div class="col-md-6"><label class="form-label fw-semibold">Zona / comuna</label><input id="regCompanyZone" class="form-control"></div><div class="col-md-6"><label class="form-label fw-semibold">Tamaño</label><select id="regCompanySize" class="form-select"><option value="micro">Microempresa (1–9)</option><option value="pequena">Pequeña (10–49)</option><option value="mediana">Mediana (50–199)</option><option value="grande">Grande (200+)</option></select></div><div class="col-md-6"><label class="form-label fw-semibold">Dotación total</label><input id="regWorkers" type="number" min="1" class="form-control" value="5"></div></div></div><button type="submit" class="btn btn-primary w-100 mt-4 py-2">Crear cuenta y entrar</button></form><p class="text-center mt-3 mb-0 text-muted">¿Ya tienes cuenta? <a href="#/login">Iniciar sesión</a></p></div></div></div>`}
function toggleRegRole(){const joven=document.getElementById('roleJ').checked;document.getElementById('youngFields').classList.toggle('d-none',!joven);document.getElementById('companyFields').classList.toggle('d-none',joven);document.querySelectorAll('#youngFields input,#youngFields select').forEach(x=>x.required=joven);document.querySelectorAll('#companyFields input,#companyFields select').forEach(x=>x.required=!joven)}
function handleRegistro(e){e.preventDefault();const d=db();const role=document.querySelector('input[name=role]:checked').value;if(role==='joven'){const name=document.getElementById('regName').value.trim(),email=document.getElementById('regEmail').value.trim();if(d.users.some(u=>u.email===email)){toast('Ese correo ya está registrado','danger');return}const file=document.getElementById('regCV').files[0];const u={id:Date.now(),role:'joven',name,email,password:document.getElementById('regPass').value,birth:document.getElementById('regBirth').value,zone:document.getElementById('regZone').value,cv:file?file.name:'Sin CV subido',disability:document.getElementById('regDisability').value==='si',needs:[...document.querySelectorAll('.need:checked')].map(x=>x.value),conditions:[...document.querySelectorAll('.condition:checked')].map(x=>x.value),otherCondition:document.getElementById('regOtherCondition')?.value.trim()||'',skills:[],availability:'Flexible',rating:0,experiences:0};d.users.push(u);d.cvFiles[u.id]=file?file.name:'';saveDB(d);setCurrent(u.id);toast('Cuenta creada. ¡Bienvenido/a a JOBXP!');location.hash='#/inicio'}else{const name=document.getElementById('regCompanyName').value.trim(),email=document.getElementById('regCompanyEmail').value.trim();if(d.users.some(u=>u.email===email)){toast('Ese correo ya está registrado','danger');return}const u={id:Date.now(),role:'empresa',name,email,password:document.getElementById('regCompanyPass').value,zone:document.getElementById('regCompanyZone').value,companySize:document.getElementById('regCompanySize').value,totalWorkers:Number(document.getElementById('regWorkers').value),activeYouth:0,rating:0,inclusive:false};d.users.push(u);d.companies.push({id:Date.now()+1,name,zone:u.zone,size:u.companySize,workers:u.totalWorkers,rating:0,inclusive:false,description:'Empresa registrada en JOBXP.'});saveDB(d);setCurrent(u.id);toast('Cuenta empresarial creada');location.hash='#/empresa'}}

function explorar(){const d=db(),u=currentUser();const publicJobs=d.jobs.filter(j=>j.active!==false);const zones=[...new Set(publicJobs.map(j=>j.zone))];document.querySelector('#app').innerHTML=`<div class="mb-4"><h1 class="section-title">Explorar experiencias</h1><p class="text-muted">Filtra por zona, sueldo, modalidad, accesibilidad y habilidades.</p></div><div class="cardx p-3 mb-4"><div class="row g-2"><div class="col-md-3"><input id="fText" class="form-control" placeholder="¿Qué te gustaría hacer?" oninput="filterJobs()"></div><div class="col-md-2"><select id="fZone" class="form-select" onchange="filterJobs()"><option value="">Todas las zonas</option>${zones.map(z=>`<option>${esc(z)}</option>`).join('')}</select></div><div class="col-md-2"><select id="fMode" class="form-select" onchange="filterJobs()"><option value="">Modalidad</option><option>Presencial</option><option>Remoto</option></select></div><div class="col-md-2"><select id="fNegotiable" class="form-select" onchange="filterJobs()"><option value="">Sueldo</option><option value="si">Negociable</option><option value="no">No negociable</option></select></div><div class="col-md-3"><select id="fAccess" class="form-select" onchange="filterJobs()"><option value="">Accesibilidad</option>${Object.entries(TAGS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></div></div></div><div id="jobsGrid" class="row g-3"></div>`;filterJobs()}
function filterJobs(){const d=db(),u=currentUser();let jobs=d.jobs.filter(j=>j.active!==false).filter(j=>{const t=(document.getElementById('fText')?.value||'').toLowerCase(),z=document.getElementById('fZone')?.value||'',m=document.getElementById('fMode')?.value||'',n=document.getElementById('fNegotiable')?.value||'',a=document.getElementById('fAccess')?.value||'';return (!t||`${j.title} ${j.company} ${j.skills.join(' ')}`.toLowerCase().includes(t))&&(!z||j.zone===z)&&(!m||j.mode===m)&&(!n||(n==='si'?j.negotiable:!j.negotiable))&&(!a||j.tags.includes(a))});jobs=recommendedJobs(u,jobs);document.getElementById('jobsGrid').innerHTML=jobs.length?jobs.map(j=>`<div class="col-md-6 col-lg-4">${jobCard(j,u)}</div>`).join(''):`<div class="col-12"><div class="cardx empty"><i class="bi bi-search fs-1"></i><h4 class="fw-bold mt-3">No encontramos experiencias</h4><p>Prueba cambiando la zona o los filtros.</p></div></div>`}
function saveJob(id){const saved=JSON.parse(localStorage.getItem('jobxp_saved')||'[]');if(!saved.includes(id))saved.push(id);localStorage.setItem('jobxp_saved',JSON.stringify(saved));toast('Experiencia guardada para después')}

function detalle(id){const d=db(),u=currentUser(),j=d.jobs.find(x=>x.id===id);if(!j){notFound();return}const c=d.companies.find(x=>x.id===j.companyId);const m=matchJob(u,j);document.querySelector('#app').innerHTML=`<div class="mb-3"><a href="#/explorar" class="text-decoration-none"><i class="bi bi-arrow-left"></i> Volver a explorar</a></div><div class="row g-4"><div class="col-lg-8"><div class="cardx p-3 p-md-4"><img class="detail-img mb-4" src="${j.image}" alt="${esc(j.title)}"><div class="d-flex justify-content-between align-items-start gap-3"><div><div class="d-flex flex-wrap gap-2 mb-2"><span class="badge bg-success-subtle text-success">${j.mode}</span>${j.inclusive?'<span class="badge badge-inclusive">✓ Empresa inclusiva</span>':''}</div><h1 class="fw-bold">${esc(j.title)}</h1><p class="text-muted">${esc(j.company)} · ${esc(j.zone)}</p></div><span class="match">${m}% MATCH</span></div><hr><h4 class="fw-bold">Sobre la experiencia</h4><p class="text-muted">${esc(j.description)}</p><div class="row g-3 my-3"><div class="col-md-6"><div class="cardx p-3"><small class="text-muted">Tipo de experiencia</small><div class="fw-bold mt-1">${esc(j.experience)}</div></div></div><div class="col-md-6"><div class="cardx p-3"><small class="text-muted">Horario</small><div class="fw-bold mt-1">${esc(j.schedule)}</div></div></div></div><h5 class="fw-bold mt-4">Habilidades que desarrollarás</h5><div class="d-flex flex-wrap gap-2">${j.skills.map(s=>`<span class="tag">${esc(s)}</span>`).join('')}</div><h5 class="fw-bold mt-4">Accesibilidad del entorno</h5><div class="d-flex flex-wrap gap-2">${j.tags.map(tag).join('')}</div><div class="alert alert-soft mt-4 mb-0"><strong>${j.negotiable?'Sueldo negociable':'Sueldo no negociable'}</strong>${j.negotiable?' · Puedes conversar el monto con la empresa antes de aceptar.':' · El monto publicado es fijo y no puede modificarse.'}</div></div></div><div class="col-lg-4"><div class="cardx p-4 sidebar-card"><div class="text-success fw-bold fs-2">${money(j.pay)}</div><div class="text-muted small mb-3">Pago por experiencia</div><ul class="list-unstyled text-muted"><li class="mb-2"><i class="bi bi-clock me-2"></i>${j.hours} horas</li><li class="mb-2"><i class="bi bi-calendar3 me-2"></i>${esc(j.schedule)}</li><li class="mb-2"><i class="bi bi-geo-alt me-2"></i>${esc(j.zone)}</li><li><i class="bi bi-star me-2"></i>${j.rating.toFixed(1)} / 5</li></ul>${u?.role==='joven'?`<button class="btn btn-primary w-100 py-2" onclick="applyJob(${j.id})">Postular a esta experiencia</button>`:'<a href="#/login" class="btn btn-primary w-100">Inicia sesión para postular</a>'}<a href="#/empresa/${j.companyId}" class="btn btn-outline-secondary w-100 mt-2">Ver empresa y trabajos relacionados</a></div></div></div>`}
function applyJob(id){if(!requireLogin())return;const d=db(),u=currentUser();if(u.role!=='joven'){toast('Solo las cuentas jóvenes pueden postular','danger');return}const job=d.jobs.find(j=>j.id===id);if(!job){toast('Experiencia no encontrada','danger');return}if(!d.applications.some(a=>a.jobId===id&&a.userId===u.id)){d.applications.push({id:Date.now(),jobId:id,userId:u.id,status:'Enviada',createdAt:new Date().toISOString()});job.applications=(job.applications||0)+1;d.messages.push({id:Date.now()+1,jobId:id,from:job.companyId,to:u.id,senderRole:'empresa',text:`Hola ${u.name.split(' ')[0]}, recibimos tu postulación a “${job.title}”. Puedes revisar el estado desde Mis postulaciones.`,createdAt:new Date().toISOString()});saveDB(d);toast('¡Postulación enviada correctamente!')}else toast('Ya postulaste a esta experiencia','warning')}

function perfil(){if(!requireLogin())return;const d=db(),u=currentUser();if(u.role==='empresa'){empresaPerfil();return}document.querySelector('#app').innerHTML=`<div class="profile-cover mb-4"><div class="d-flex align-items-center gap-3"><div class="avatar">${initials(u.name)}</div><div><h2 class="fw-bold mb-0">${esc(u.name)}</h2><div class="opacity-75">${esc(u.email)} · ${esc(u.zone)}</div></div></div></div><div class="row g-4"><div class="col-lg-8"><div class="cardx p-4"><h4 class="fw-bold mb-3">Editar perfil</h4><form onsubmit="saveProfile(event)"><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Nombre completo</label><input id="pName" class="form-control" value="${esc(u.name)}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Fecha de nacimiento</label><input id="pBirth" type="date" class="form-control" value="${esc(u.birth||'')}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Zona</label><input id="pZone" class="form-control" value="${esc(u.zone)}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Disponibilidad</label><select id="pAvailability" class="form-select"><option ${u.availability==='Mañana'?'selected':''}>Mañana</option><option ${u.availability==='Tarde'?'selected':''}>Tarde</option><option ${u.availability==='Flexible'?'selected':''}>Flexible</option></select></div><div class="col-12"><label class="form-label fw-semibold">Habilidades</label><input id="pSkills" class="form-control" value="${esc((u.skills||[]).join(', '))}" placeholder="Organización, Excel, comunicación escrita"></div><div class="col-12"><label class="form-label fw-semibold">Currículum</label><input id="pCV" type="file" class="form-control" accept=".pdf,.doc,.docx"><small class="text-muted">Actual: ${esc(u.cv||'Sin CV')}</small></div></div><hr class="my-4"><h5 class="fw-bold">Discapacidad, neurodivergencia y accesibilidad</h5><div class="privacy-note mb-3"><i class="bi bi-lock"></i> Esta información es privada y se usa para recomendarte experiencias compatibles.</div><div class="row g-2 mb-3">${Object.entries({tdah:'TDAH',tea:'TEA / espectro autista',tourette:'Síndrome de Tourette',ansiedad_social:'Ansiedad social',movilidad_reducida:'Movilidad reducida',discapacidad_fisica:'Discapacidad física',sordera_hipoacusia:'Sordera / hipoacusia',baja_vision_ceguera:'Baja visión / ceguera'}).map(([k,v])=>`<div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input profileCondition" type="checkbox" value="${k}" ${u.conditions?.includes(k)?'checked':''}> ${v}</label></div>`).join('')}</div><label class="form-label fw-semibold">Otra condición, enfermedad o necesidad (opcional)</label><input id="pOtherCondition" class="form-control mb-3" value="${esc(u.otherCondition||'')}" placeholder="Escribe aquí algo que no aparezca en la lista"><h6 class="fw-bold">Preferencias de accesibilidad</h6><div class="row g-2">${Object.entries(TAGS).map(([k,v])=>`<div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input profileNeed" type="checkbox" value="${k}" ${u.needs?.includes(k)?'checked':''}> ${v}</label></div>`).join('')}</div><button type="submit" class="btn btn-primary mt-4">Guardar cambios</button></form></div></div><div class="col-lg-4"><div class="cardx p-4"><h5 class="fw-bold">Tu resumen</h5><div class="row g-3 mt-1"><div class="col-6"><div class="metric">${u.experiences||0}</div><small class="text-muted">Experiencias</small></div><div class="col-6"><div class="metric">${u.rating?u.rating.toFixed(1):'—'}</div><small class="text-muted">Promedio</small></div></div><hr><div><strong>Currículum</strong><div class="small text-muted mt-1"><i class="bi bi-file-earmark-pdf"></i> ${esc(u.cv||'No subido')}</div></div><a href="#/pasaporte" class="btn btn-soft w-100 mt-3">Ver pasaporte laboral</a></div></div></div>`}
function saveProfile(e){e.preventDefault();const d=db(),u=currentUser();u.name=document.getElementById('pName').value;u.birth=document.getElementById('pBirth').value;u.zone=document.getElementById('pZone').value;u.availability=document.getElementById('pAvailability').value;u.skills=document.getElementById('pSkills').value.split(',').map(s=>s.trim()).filter(Boolean);u.needs=[...document.querySelectorAll('.profileNeed:checked')].map(x=>x.value);u.conditions=[...document.querySelectorAll('.profileCondition:checked')].map(x=>x.value);u.otherCondition=document.getElementById('pOtherCondition')?.value.trim()||'';u.disability=u.conditions.length>0||!!u.otherCondition||u.needs.length>0;const file=document.getElementById('pCV').files[0];if(file)u.cv=file.name;saveDB(d);toast('Perfil actualizado');render()}

function pasaporte(){if(!requireLogin())return;const u=currentUser();document.querySelector('#app').innerHTML=`<div class="profile-cover mb-4"><h2 class="fw-bold">Tu Pasaporte Laboral</h2><p class="mb-0 opacity-75">Historial digital de experiencias y habilidades certificadas.</p></div><div class="row g-3"><div class="col-md-4"><div class="cardx p-4"><div class="metric">${u.experiences||0}</div><div class="text-muted">Experiencias</div></div></div><div class="col-md-4"><div class="cardx p-4"><div class="metric">42</div><div class="text-muted">Horas acumuladas</div></div></div><div class="col-md-4"><div class="cardx p-4"><div class="metric">${u.rating?u.rating.toFixed(1):'—'}</div><div class="text-muted">Evaluación promedio</div></div></div></div><div class="cardx p-4 mt-4"><span class="badge bg-success mb-2">✓ EXPERIENCIA CERTIFICADA</span><h4 class="fw-bold">Digitalización de documentos</h4><p class="text-muted">Café Santiago · 4 horas · Agosto 2026</p><div class="d-flex flex-wrap gap-2">${['Organización','Herramientas digitales','Responsabilidad'].map(s=>`<span class="tag green">✓ ${s}</span>`).join('')}</div><hr><div class="small text-muted">Este historial se fortalece con evaluaciones y asistencia verificable.</div></div>`}

function empresa(){
  if(!requireLogin())return;
  const u=currentUser();
  if(u.role!=='empresa'){location.hash='#/inicio';return}
  const d=db();
  const company=d.companies.find(c=>c.id===u.id)||d.companies.find(c=>c.name===u.name)||{};
  const mine=d.jobs.filter(j=>j.companyId===u.id||j.company===u.name);
  const activeJobs=mine.filter(j=>j.active!==false);
  const applications=d.applications.filter(a=>mine.some(j=>j.id===a.jobId));
  const pending=applications.filter(a=>a.status==='Enviada');
  const accepted=applications.filter(a=>a.status==='Aceptada');
  const rating=Number(u.rating||company.rating||0);
  const limit=companyLimit(u);
  const recent=applications.slice().sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0)).slice(0,5);

  const stat=(icon,value,label,extra='')=>`<div class="company-stat"><div class="company-stat-icon"><i class="bi ${icon}"></i></div><div><div class="company-stat-value">${value}</div><div class="company-stat-label">${label}</div>${extra?`<div class="company-stat-extra">${extra}</div>`:''}</div></div>`;
  const status=(st)=>st==='Aceptada'?'<span class="company-status success"><i class="bi bi-check-circle-fill"></i>Aceptada</span>':st==='Rechazada'?'<span class="company-status danger"><i class="bi bi-x-circle-fill"></i>Rechazada</span>':'<span class="company-status pending"><i class="bi bi-clock-fill"></i>Pendiente</span>';

  document.querySelector('#app').innerHTML=`
    <div class="company-dashboard">
      <div class="company-dashboard-top">
        <div>
          <div class="company-kicker"><i class="bi bi-building"></i> PANEL DE EMPRESA</div>
          <h1>Hola, ${esc(u.name.split(' ')[0])} 👋</h1>
          <p>Administra tus experiencias, revisa postulaciones y mantén actualizado el perfil de tu empresa.</p>
        </div>
        <div class="company-top-actions">
          <a href="#/perfil" class="company-outline-btn"><i class="bi bi-pencil-square"></i> Editar perfil</a>
          <a href="#/publicar" class="company-primary-btn"><i class="bi bi-plus-lg"></i> Nueva experiencia</a>
        </div>
      </div>

      <div class="company-layout">
        <aside class="company-sidebar">
          <div class="company-side-profile">
            <div class="company-avatar">${initials(u.name)}</div>
            <div><strong>${esc(u.name)}</strong><span>${esc(u.zone||'Sin zona')}</span></div>
          </div>
          <nav class="company-side-nav">
            <a class="active" href="#/empresa"><i class="bi bi-grid-1x2-fill"></i>Resumen</a>
            <a href="#/publicar"><i class="bi bi-plus-circle"></i>Publicar experiencia</a>
            <a href="#/postulaciones"><i class="bi bi-people"></i>Postulaciones <b>${pending.length}</b></a>
            <a href="#/mensajes"><i class="bi bi-chat-dots"></i>Mensajes</a>
            <a href="#/evaluaciones"><i class="bi bi-star"></i>Evaluar jóvenes</a>
            <a href="#/perfil"><i class="bi bi-building"></i>Perfil de empresa</a>
          </nav>
          <div class="company-side-help">
            <i class="bi bi-shield-check"></i>
            <strong>Empresa Inclusiva</strong>
            <span>${u.inclusive!==false?'Tu perfil tiene activo el sello de inclusión.':'Completa tus adaptaciones para activarlo.'}</span>
          </div>
        </aside>

        <section class="company-main">
          <div class="company-stats-grid">
            ${stat('bi-briefcase-fill',activeJobs.length,'Experiencias activas',`${mine.length} publicada${mine.length===1?'':'s'} en total`)}
            ${stat('bi-people-fill',applications.length,'Postulaciones recibidas',`${pending.length} pendiente${pending.length===1?'':'s'} de revisar`)}
            ${stat('bi-person-check-fill',u.activeYouth||0,'Jóvenes activos',`Límite actual: ${limit}`)}
            ${stat('bi-star-fill',rating?rating.toFixed(1):'—','Calificación',rating?'sobre 5.0':'Aún sin evaluaciones')}
          </div>

          <div class="company-content-grid">
            <div class="company-panel-card company-experiences-card">
              <div class="company-panel-head">
                <div><h2>Mis experiencias</h2><p>Gestiona las oportunidades que tienes publicadas.</p></div>
                <a href="#/publicar" class="company-link">Crear nueva <i class="bi bi-arrow-right"></i></a>
              </div>
              ${mine.length?`<div class="company-experience-list">${mine.map(j=>{
                const apps=applications.filter(a=>a.jobId===j.id);
                const pendingJob=apps.filter(a=>a.status==='Enviada').length;
                const isActive=j.active!==false;
                return `<article class="company-experience-item ${isActive?'':'paused'}">
                  <div class="company-exp-icon"><i class="bi ${isActive?'bi-briefcase-fill':'bi-pause-circle-fill'}"></i></div>
                  <div class="company-exp-body">
                    <div class="company-exp-title-row"><div><h3>${esc(j.title)}</h3><div class="company-exp-meta"><span><i class="bi bi-geo-alt"></i>${esc(j.zone)}</span><span><i class="bi bi-clock"></i>${j.hours} h</span><span><i class="bi bi-cash-stack"></i>${money(j.pay)}</span><span><i class="bi bi-${j.mode==='Remoto'?'wifi':'shop'}"></i>${esc(j.mode)}</span></div></div>${isActive?'<span class="company-status active">Activa</span>':'<span class="company-status paused">Pausada</span>'}</div>
                    <div class="company-exp-bottom"><span><i class="bi bi-people"></i> ${apps.length} postulacion${apps.length===1?'':'es'}${pendingJob?` · <b>${pendingJob} nueva${pendingJob===1?'':'s'}</b>`:''}</span><div class="company-exp-actions"><a href="#/experiencia/${j.id}">Ver</a><button type="button" onclick="toggleJobStatus(${j.id})">${isActive?'Pausar':'Activar'}</button><button type="button" class="danger" onclick="deleteCompanyJob(${j.id})">Eliminar</button></div></div>
                  </div>
                </article>`;
              }).join('')}</div>`:`<div class="company-empty"><div><i class="bi bi-briefcase"></i></div><h3>Aún no tienes experiencias</h3><p>Publica tu primera microexperiencia para comenzar a recibir postulaciones.</p><a href="#/publicar" class="company-primary-btn">Publicar experiencia</a></div>`}
            </div>

            <div class="company-panel-card company-apps-card">
              <div class="company-panel-head"><div><h2>Últimas postulaciones</h2><p>Revisa rápidamente quién está interesado.</p></div><a href="#/postulaciones" class="company-link">Ver todas <i class="bi bi-arrow-right"></i></a></div>
              ${recent.length?`<div class="company-app-list">${recent.map(a=>{const j=mine.find(x=>x.id===a.jobId),young=d.users.find(x=>x.id===a.userId);if(!j||!young)return '';return `<a class="company-app-item" href="#/postulaciones"><div class="company-app-avatar">${initials(young.name)}</div><div class="company-app-info"><strong>${esc(young.name)}</strong><span>${esc(j.title)}</span></div><div>${status(a.status)}</div></a>`}).join('')}</div>`:`<div class="company-mini-empty"><i class="bi bi-people"></i><p>No tienes postulaciones todavía.</p></div>`}
            </div>
          </div>

          <div class="company-bottom-grid">
            <div class="company-panel-card company-profile-summary">
              <div class="company-panel-head"><div><h2>Perfil de empresa</h2><p>Así ven tu información los jóvenes.</p></div><a href="#/perfil" class="company-link">Editar <i class="bi bi-pencil"></i></a></div>
              <div class="company-profile-row"><div class="company-avatar large">${initials(u.name)}</div><div><h3>${esc(u.name)}</h3><span><i class="bi bi-geo-alt"></i>${esc(u.zone||'Zona no definida')}</span><span><i class="bi bi-people"></i>${Number(u.totalWorkers||company.workers||0)} trabajadores · ${esc(u.companySize||company.size||'Tamaño no definido')}</span></div></div>
              <p class="company-description">${esc(u.companyDescription||company.description||'Todavía no has agregado una descripción de tu empresa.')}</p>
              ${u.companySeeking||company.seeking?`<div class="company-seeking"><strong>¿Qué buscas?</strong><span>${esc(u.companySeeking||company.seeking)}</span></div>`:''}
            </div>
            <div class="company-panel-card company-rules-card">
              <div class="company-panel-head"><div><h2>Estado de inclusión</h2><p>Condiciones que ayudan al match.</p></div><i class="bi bi-universal-access company-panel-icon"></i></div>
              <div class="company-inclusive-box"><div class="company-inclusive-icon"><i class="bi bi-check-lg"></i></div><div><strong>${u.inclusive!==false?'Empresa Inclusiva':'Completar perfil'}</strong><span>${u.inclusive!==false?'Tu empresa está habilitada para experiencias inclusivas.':'Agrega información de accesibilidad para mejorar tus matches.'}</span></div></div>
              <div class="company-limit-box"><div><strong>${u.activeYouth||0} / ${limit}</strong><span>jóvenes activos permitidos</span></div><div class="company-progress"><span style="width:${Math.min(100,limit?((u.activeYouth||0)/limit)*100:0)}%"></span></div></div>
              <a href="#/inclusion" class="company-soft-btn">Ver opciones de accesibilidad <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </section>
      </div>
    </div>`;
}

function toggleJobStatus(jobId){
  if(!requireLogin())return;
  const d=db(),u=currentUser();
  if(u.role!=='empresa')return;
  const j=d.jobs.find(x=>Number(x.id)===Number(jobId));
  if(!j || (j.companyId!==u.id && j.company!==u.name)){toast('No tienes permiso para modificar esta experiencia','danger');return}
  j.active=j.active===false;
  saveDB(d);
  toast(j.active?'Experiencia activada':'Experiencia pausada',j.active?'success':'warning');
  empresa();
}

function deleteCompanyJob(jobId){
  if(!requireLogin())return;
  const d=db(),u=currentUser();
  if(u.role!=='empresa')return;
  const j=d.jobs.find(x=>Number(x.id)===Number(jobId));
  if(!j || (j.companyId!==u.id && j.company!==u.name)){toast('No tienes permiso para eliminar esta experiencia','danger');return}
  if(d.applications.some(a=>a.jobId===j.id)){toast('No puedes eliminar una experiencia que ya tiene postulaciones. Puedes pausarla.','warning');return}
  if(!confirm(`¿Eliminar “${j.title}”? Esta acción no se puede deshacer.`))return;
  d.jobs=d.jobs.filter(x=>x.id!==j.id);
  saveDB(d);toast('Experiencia eliminada','success');empresa();
}

function companyLimit(u){const limits={micro:1,pequena:2,mediana:3,grande:5};return Math.min(limits[u.companySize]||1,Math.floor((u.totalWorkers||1)*.2))}
function publicar(){if(!requireLogin())return;const u=currentUser();if(u.role!=='empresa'){location.hash='#/inicio';return}document.querySelector('#app').innerHTML=`<div class="row justify-content-center"><div class="col-lg-9"><div class="cardx p-4 p-md-5"><div class="mb-4"><h2 class="fw-bold">Publicar microexperiencia</h2><p class="text-muted">Completa el checklist de infraestructura para que JOBXP pueda recomendar tu oferta a las personas adecuadas.</p></div><form onsubmit="publishJob(event)"><div class="row g-3"><div class="col-md-7"><label class="form-label fw-semibold">Título</label><input id="jTitle" class="form-control" required placeholder="Ej. Control de inventario"></div><div class="col-md-5"><label class="form-label fw-semibold">Zona / comuna</label><input id="jZone" class="form-control" value="${esc(u.zone)}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Tipo de experiencia</label><input id="jExperience" class="form-control" required placeholder="Administración, marketing..."></div><div class="col-md-6"><label class="form-label fw-semibold">Habilidades</label><input id="jSkills" class="form-control" required placeholder="Separadas por coma"></div><div class="col-md-4"><label class="form-label fw-semibold">Horario</label><input id="jSchedule" class="form-control" required placeholder="09:00 - 13:00"></div><div class="col-md-4"><label class="form-label fw-semibold">Duración (horas)</label><input id="jHours" type="number" min="1" max="12" class="form-control" required value="4"></div><div class="col-md-4"><label class="form-label fw-semibold">Sueldo / pago</label><input id="jPay" type="number" min="1" class="form-control" required value="25000"></div><div class="col-12"><label class="form-label fw-semibold">Descripción</label><textarea id="jDescription" class="form-control" rows="3" required></textarea></div><div class="col-md-6"><label class="form-label fw-semibold">¿Sueldo negociable?</label><select id="jNegotiable" class="form-select"><option value="no">No</option><option value="si">Sí</option></select></div><div class="col-md-6"><label class="form-label fw-semibold">Modalidad</label><select id="jMode" class="form-select" onchange="document.getElementById('jModeTags').classList.toggle('d-none',this.value!=='Presencial')"><option>Presencial</option><option>Remoto</option></select></div></div><hr class="my-4"><h5 class="fw-bold">Checklist de inclusión y accesibilidad</h5><div class="row g-2" id="jModeTags"><div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input jobTag" type="checkbox" value="accesibilidad_motriz"> ♿ Accesibilidad motriz completa</label></div><div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input jobTag" type="checkbox" value="movilidad_reducida"> 🪑 Movilidad reducida / estación sentada</label></div><div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input jobTag" type="checkbox" value="bajo_ruido"> 🔇 Bajo nivel de ruido</label></div><div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input jobTag" type="checkbox" value="instrucciones_escritas"> 📝 Instrucciones escritas</label></div><div class="col-md-6"><label class="form-check border rounded-3 p-3"><input class="form-check-input jobTag" type="checkbox" value="luz_tenue"> 💡 Luz tenue</label></div></div><div class="form-check border rounded-3 p-3 mt-3"><input id="jTelework" class="form-check-input" type="checkbox" value="teletrabajo"><label class="form-check-label fw-semibold" for="jTelework">🏠 Apto para teletrabajo</label></div><button type="submit" class="btn btn-primary w-100 py-2 mt-4">Publicar microexperiencia</button></form></div></div></div>`}
function publishJob(e){e.preventDefault();const d=db(),u=currentUser();const active=d.users.find(x=>x.id===u.id).activeYouth||0,limit=companyLimit(u);if(active>=limit){toast(`No puedes publicar: tu empresa ya alcanzó el límite de ${limit} joven(es) activo(s).`,'danger');return}const title=document.getElementById('jTitle').value.trim();const duplicate=d.jobs.some(j=>j.company===u.name&&j.title.toLowerCase()===title.toLowerCase());if(duplicate){toast('Esta oferta ya existe. JOBXP bloquea publicaciones duplicadas para evitar reemplazar empleos formales.','danger');return}let tags=[...document.querySelectorAll('.jobTag:checked')].map(x=>x.value);if(document.getElementById('jTelework').checked)tags.push('teletrabajo');if(document.getElementById('jMode').value==='Remoto'&&!tags.includes('teletrabajo'))tags.push('teletrabajo');const job={id:Date.now(),title,company:u.name,companyId:u.id,zone:document.getElementById('jZone').value,mode:document.getElementById('jMode').value,hours:Number(document.getElementById('jHours').value),pay:Number(document.getElementById('jPay').value),negotiable:document.getElementById('jNegotiable').value==='si',schedule:document.getElementById('jSchedule').value,experience:document.getElementById('jExperience').value,skills:document.getElementById('jSkills').value.split(',').map(x=>x.trim()).filter(Boolean),tags,description:document.getElementById('jDescription').value,inclusive:tags.length>0,rating:0,applications:0,active:true,image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80'};d.jobs.push(job);saveDB(d);toast('Microexperiencia publicada correctamente');location.hash='#/empresa'}

function empresas(){const d=db();document.querySelector('#app').innerHTML=`<div class="mb-4"><h1 class="section-title">Empresas relacionadas</h1><p class="text-muted">Conoce organizaciones y revisa las microexperiencias disponibles en cada una.</p></div><div class="row g-3">${d.companies.map(c=>`<div class="col-md-6 col-lg-4"><div class="cardx p-4 h-100"><div class="d-flex gap-3"><div class="company-logo">${initials(c.name)}</div><div><h5 class="fw-bold mb-1">${esc(c.name)}</h5><div class="small text-muted">${esc(c.zone)}</div></div></div><div class="mt-3">${c.inclusive?'<span class="badge badge-inclusive">✓ Empresa Inclusiva</span>':''}<span class="badge text-bg-light border ms-1">${c.rating?c.rating.toFixed(1):'Nueva'} ★</span></div><p class="text-muted small mt-3">${esc(c.description)}</p><a href="#/empresa/${c.id}" class="btn btn-outline-primary w-100">Ver trabajos disponibles</a></div></div>`).join('')}</div>`}
function empresaDetalle(id){const d=db(),c=d.companies.find(x=>x.id===id);if(!c){notFound();return}const jobs=d.jobs.filter(j=>j.companyId===c.id&&j.active!==false);document.querySelector('#app').innerHTML=`<div class="mb-3"><a href="#/empresas" class="text-decoration-none"><i class="bi bi-arrow-left"></i> Volver a empresas</a></div><div class="cardx p-4 mb-4"><div class="d-flex align-items-center gap-3"><div class="company-logo">${initials(c.name)}</div><div><h1 class="fw-bold mb-1">${esc(c.name)}</h1><div class="text-muted">${esc(c.zone)} · ${c.rating?c.rating.toFixed(1):'Nueva'} ★</div></div></div><div class="mt-3">${c.inclusive?'<span class="badge badge-inclusive">✓ Empresa Inclusiva</span>':''}</div><p class="text-muted mt-3 mb-2">${esc(c.description)}</p>${c.seeking?`<div class="alert alert-soft mt-3 mb-0"><strong>¿Qué busca?</strong><br>${esc(c.seeking)}</div>`:''}</div><h3 class="section-title mb-3">Trabajos disponibles</h3><div class="row g-3">${jobs.length?jobs.map(j=>`<div class="col-md-6 col-lg-4">${jobCard(j,currentUser())}</div>`).join(''):'<div class="col-12"><div class="cardx empty">Esta empresa no tiene microexperiencias disponibles ahora.</div></div>'}</div>`}

function applicationStatusBadge(status){const map={Enviada:'bg-primary-subtle text-primary',Aceptada:'bg-success-subtle text-success',Rechazada:'bg-danger-subtle text-danger'};return `<span class="badge ${map[status]||'bg-light text-dark'}">${esc(status)}</span>`}
function postulaciones(){if(!requireLogin())return;const d=db(),u=currentUser();if(u.role==='empresa'){postulacionesEmpresa();return}const apps=d.applications.filter(a=>a.userId===u.id).sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));document.querySelector('#app').innerHTML=`<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4"><div><h1 class="section-title">Mis postulaciones</h1><p class="text-muted mb-0">Revisa el estado de tus postulaciones aceptadas, enviadas o rechazadas.</p></div><a href="#/mensajes" class="btn btn-outline-primary"><i class="bi bi-chat-dots me-1"></i>Ver mensajes</a></div><div class="row g-3">${apps.length?apps.map(a=>{const j=d.jobs.find(x=>x.id===a.jobId);if(!j)return '';const last=(d.messages.filter(m=>(m.jobId===j.id)&&((m.from===j.companyId&&m.to===u.id)||(m.from===u.id&&m.to===j.companyId))).sort((x,y)=>new Date(y.createdAt)-new Date(x.createdAt))[0]);return `<div class="col-12"><div class="cardx p-4"><div class="d-flex flex-wrap justify-content-between gap-3"><div><h5 class="fw-bold mb-1">${esc(j.title)}</h5><div class="text-muted small">${esc(j.company)} · ${esc(j.zone)} · ${money(j.pay)}</div></div>${applicationStatusBadge(a.status)}</div><div class="d-flex flex-wrap gap-2 mt-3"><span class="tag">${esc(j.schedule)}</span><span class="tag">${esc(j.mode)}</span>${j.inclusive?'<span class="badge badge-inclusive">✓ Empresa inclusiva</span>':''}</div>${last?`<div class="alert alert-light border mt-3 mb-0"><strong>Último mensaje:</strong> ${esc(last.text)}</div>`:''}<div class="d-flex flex-wrap gap-2 mt-3"><a class="btn btn-primary" href="#/mensajes/${a.id}"><i class="bi bi-chat-dots me-1"></i>Conversar con la empresa</a>${a.status==='Aceptada'?'<span class="btn btn-success disabled">✓ Postulación aceptada</span>':''}</div></div></div>`}).join(''):`<div class="col-12"><div class="cardx empty"><i class="bi bi-send fs-1"></i><h4 class="fw-bold mt-3">Aún no tienes postulaciones</h4><p>Explora una experiencia y postula para comenzar.</p><a href="#/explorar" class="btn btn-primary">Explorar experiencias</a></div></div>`}</div>`}
function postulacionesEmpresa(){const d=db(),u=currentUser();const jobs=d.jobs.filter(j=>j.companyId===u.id||j.company===u.name);const apps=d.applications.filter(a=>jobs.some(j=>j.id===a.jobId));document.querySelector('#app').innerHTML=`<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4"><div><h1 class="section-title">Postulaciones recibidas</h1><p class="text-muted mb-0">Revisa perfiles, CV, accesibilidad y conversa con quienes postularon.</p></div><a href="#/mensajes" class="btn btn-outline-primary"><i class="bi bi-chat-dots me-1"></i>Mensajes</a></div><div class="row g-3">${apps.length?apps.map(a=>{const j=jobs.find(x=>x.id===a.jobId),young=d.users.find(x=>x.id===a.userId);if(!j||!young)return '';return `<div class="col-12"><div class="cardx p-4"><div class="d-flex flex-wrap justify-content-between gap-3"><div class="d-flex gap-3"><div class="avatar">${initials(young.name)}</div><div><h5 class="fw-bold mb-1">${esc(young.name)}</h5><div class="small text-muted">Postuló a <strong>${esc(j.title)}</strong> · ${esc(young.zone)}</div></div></div>${applicationStatusBadge(a.status)}</div><div class="row g-3 mt-2"><div class="col-md-4"><div class="small text-muted">Currículum</div><div class="fw-semibold">${esc(young.cv||'Sin CV')}</div></div><div class="col-md-4"><div class="small text-muted">Preferencias / condiciones</div><div class="fw-semibold">${[...(young.conditions||[]),young.otherCondition].filter(Boolean).map(esc).join(', ')||'No indicadas'}</div></div><div class="col-md-4"><div class="small text-muted">Habilidades</div><div class="fw-semibold">${esc((young.skills||[]).join(', ')||'Por definir')}</div></div></div><div class="d-flex flex-wrap gap-2 mt-3">${a.status==='Enviada'?`<button class="btn btn-success" onclick="updateApplication(${a.id},'Aceptada')"><i class="bi bi-check-lg me-1"></i>Aceptar</button><button class="btn btn-outline-danger" onclick="updateApplication(${a.id},'Rechazada')"><i class="bi bi-x-lg me-1"></i>Rechazar</button>`:''}<a class="btn btn-primary" href="#/mensajes/${a.id}"><i class="bi bi-chat-dots me-1"></i>Conversar</a>${young.cv&&young.cv!=='Sin CV'?`<span class="btn btn-outline-secondary disabled"><i class="bi bi-file-earmark-text me-1"></i>${esc(young.cv)}</span>`:''}</div></div></div>`}).join(''):`<div class="col-12"><div class="cardx empty"><i class="bi bi-people fs-1"></i><h4 class="fw-bold mt-3">No hay postulaciones todavía</h4><p>Cuando alguien postule a tus experiencias aparecerá aquí.</p></div></div>`}</div>`}
function updateApplication(appId,status){if(!requireLogin())return;const d=db(),u=currentUser();if(u.role!=='empresa')return;const a=d.applications.find(x=>x.id===appId);if(!a){toast('Postulación no encontrada','danger');return}const job=d.jobs.find(j=>j.id===a.jobId);if(!job||(job.companyId!==u.id&&job.company!==u.name)){toast('No tienes permiso para modificar esta postulación','danger');return}if(status==='Aceptada'&&a.status!=='Aceptada'){const active=u.activeYouth||0;if(active>=companyLimit(u)){toast(`No puedes aceptar: alcanzaste el límite de ${companyLimit(u)} joven(es) activo(s).`,'danger');return}u.activeYouth=active+1}if(a.status==='Aceptada'&&status!=='Aceptada')u.activeYouth=Math.max(0,(u.activeYouth||0)-1);a.status=status;a.updatedAt=new Date().toISOString();const young=d.users.find(x=>x.id===a.userId);d.messages.push({id:Date.now(),jobId:job.id,from:u.id,to:a.userId,senderRole:'empresa',text:status==='Aceptada'?`¡Hola ${young?.name?.split(' ')[0]||''}! Tu postulación a “${job.title}” fue aceptada. Escríbeme por este chat para coordinar los detalles.`:`Hola ${young?.name?.split(' ')[0]||''}. Gracias por postular a “${job.title}”. En esta ocasión no continuaremos con la postulación.`,createdAt:new Date().toISOString()});saveDB(d);toast(status==='Aceptada'?'Postulación aceptada. Se envió un mensaje al joven.':'Postulación rechazada. Se envió una notificación.');postulacionesEmpresa()}
function mensajes(){if(!requireLogin())return;const d=db(),u=currentUser();const apps=u.role==='joven'?d.applications.filter(a=>a.userId===u.id):d.applications.filter(a=>{const j=d.jobs.find(x=>x.id===a.jobId);return j&&(j.companyId===u.id||j.company===u.name)});const convs=apps.map(a=>{const j=d.jobs.find(x=>x.id===a.jobId),other=u.role==='joven'?j?.companyId:d.users.find(x=>x.id===a.userId)?.id;return {a,j,other}}).filter(x=>x.j);const activeId=Number(location.hash.split('/')[2])||convs[0]?.a.id;document.querySelector('#app').innerHTML=`<div class="mb-4"><h1 class="section-title">Mensajes</h1><p class="text-muted">Conversa directamente con la otra parte de cada postulación.</p></div><div class="row g-3"><div class="col-lg-4"><div class="cardx p-2"><h5 class="fw-bold p-3 mb-0">Conversaciones</h5>${convs.length?convs.map(c=>`<a class="d-block text-decoration-none text-dark border-top p-3 ${c.a.id===activeId?'bg-light rounded-3':''}" href="#/mensajes/${c.a.id}"><div class="fw-semibold">${esc(u.role==='joven'?c.j.company:d.users.find(x=>x.id===c.a.userId)?.name||'Postulante')}</div><div class="small text-muted">${esc(c.j.title)} · ${applicationStatusBadge(c.a.status)}</div></a>`).join(''):'<div class="p-3 text-muted">No tienes conversaciones todavía.</div>'}</div></div><div class="col-lg-8"><div class="cardx p-4">${renderConversation(activeId,convs,u)} </div></div></div>`}
function renderConversation(appId,convs,u){const c=convs.find(x=>x.a.id===appId);if(!c)return `<div class="empty"><i class="bi bi-chat-dots fs-1"></i><p class="mt-3">Selecciona una conversación.</p></div>`;const d=db(),msgs=d.messages.filter(m=>m.jobId===c.j.id&&((m.from===u.id&&m.to===c.other)||(m.to===u.id&&m.from===c.other))).sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));return `<div><div class="border-bottom pb-3 mb-3"><h4 class="fw-bold mb-1">${esc(c.j.title)}</h4><div class="small text-muted">${esc(u.role==='joven'?c.j.company:d.users.find(x=>x.id===c.a.userId)?.name||'Postulante')} · ${applicationStatusBadge(c.a.status)}</div></div><div class="chat-box mb-3">${msgs.length?msgs.map(m=>`<div class="d-flex ${m.from===u.id?'justify-content-end':''} mb-2"><div class="chat-bubble ${m.from===u.id?'mine':''}">${esc(m.text)}<div class="small opacity-75 mt-1">${new Date(m.createdAt).toLocaleString('es-CL')}</div></div></div>`).join(''):'<div class="text-muted text-center py-4">No hay mensajes todavía.</div>'}</div><form onsubmit="sendMessage(event,${c.a.id})"><div class="input-group"><input id="messageText" class="form-control" required maxlength="500" placeholder="Escribe un mensaje..."><button class="btn btn-primary"><i class="bi bi-send"></i></button></div></form></div>`}
function sendMessage(e,appId){e.preventDefault();if(!requireLogin())return;const d=db(),u=currentUser(),a=d.applications.find(x=>x.id===appId);if(!a){toast('Conversación no encontrada','danger');return}const j=d.jobs.find(x=>x.id===a.jobId);const allowed=u.role==='joven'?(a.userId===u.id):(j&&(j.companyId===u.id||j.company===u.name));if(!allowed){toast('No tienes permiso para esta conversación','danger');return}const to=u.role==='joven'?(j.companyId||d.users.find(x=>x.name===j.company)?.id):a.userId;d.messages.push({id:Date.now(),jobId:j.id,from:u.id,to,senderRole:u.role,text:document.getElementById('messageText').value.trim(),createdAt:new Date().toISOString()});saveDB(d);mensajes()}

function empresaPerfil(){if(!requireLogin())return;const d=db(),u=currentUser();if(u.role!=='empresa'){location.hash='#/inicio';return}const c=d.companies.find(x=>x.id===u.id)||d.companies.find(x=>x.name===u.name)||{};document.querySelector('#app').innerHTML=`<div class="row justify-content-center"><div class="col-lg-9"><div class="cardx p-4 p-md-5"><div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4"><div><h2 class="fw-bold mb-1">Perfil de empresa</h2><p class="text-muted mb-0">Edita la información que verán los jóvenes antes de postular.</p></div><span class="badge badge-inclusive">✓ Perfil JOBXP</span></div><form onsubmit="saveCompanyProfile(event)"><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Nombre de la empresa</label><input id="cpName" class="form-control" value="${esc(u.name)}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Correo</label><input class="form-control" value="${esc(u.email)}" disabled></div><div class="col-md-6"><label class="form-label fw-semibold">Zona / comuna</label><input id="cpZone" class="form-control" value="${esc(u.zone||c.zone||'')}" required></div><div class="col-md-6"><label class="form-label fw-semibold">Tamaño de empresa</label><select id="cpSize" class="form-select"><option value="micro" ${(u.companySize||c.size)==='micro'?'selected':''}>Microempresa (1–9)</option><option value="pequena" ${(u.companySize||c.size)==='pequena'?'selected':''}>Pequeña (10–49)</option><option value="mediana" ${(u.companySize||c.size)==='mediana'?'selected':''}>Mediana (50–199)</option><option value="grande" ${(u.companySize||c.size)==='grande'?'selected':''}>Grande (200+)</option></select></div><div class="col-md-6"><label class="form-label fw-semibold">Dotación total</label><input id="cpWorkers" type="number" min="1" class="form-control" value="${Number(u.totalWorkers||c.workers||1)}" required></div><div class="col-12"><label class="form-label fw-semibold">¿Qué es tu empresa?</label><textarea id="cpDescription" class="form-control" rows="4" maxlength="600" placeholder="Describe brevemente a qué se dedica tu empresa...">${esc(u.companyDescription||c.description||'')}</textarea></div><div class="col-12"><label class="form-label fw-semibold">¿Qué buscas en los jóvenes?</label><textarea id="cpSeeking" class="form-control" rows="4" maxlength="600" placeholder="Ej. Buscamos personas responsables, con ganas de aprender y habilidades digitales...">${esc(u.companySeeking||c.seeking||'')}</textarea><div class="form-text">Esta descripción aparecerá en el perfil de tu empresa.</div></div></div><button type="submit" class="btn btn-primary mt-4"><i class="bi bi-check-lg me-1"></i>Guardar cambios</button><a href="#/empresa" class="btn btn-outline-secondary mt-4 ms-2">Volver al panel</a></form></div></div></div>`} 
function saveCompanyProfile(e){e.preventDefault();const d=db(),u=currentUser();if(!u||u.role!=='empresa')return;const oldName=u.name;const name=document.getElementById('cpName').value.trim();u.name=name;u.zone=document.getElementById('cpZone').value.trim();u.companySize=document.getElementById('cpSize').value;u.totalWorkers=Number(document.getElementById('cpWorkers').value);u.companyDescription=document.getElementById('cpDescription').value.trim();u.companySeeking=document.getElementById('cpSeeking').value.trim();let c=d.companies.find(x=>x.id===u.id)||d.companies.find(x=>x.name===oldName);if(!c){c={id:u.id,name,zone:u.zone,size:u.companySize,workers:u.totalWorkers,rating:u.rating||0,inclusive:u.inclusive!==false,description:u.companyDescription,seeking:u.companySeeking};d.companies.push(c)}else{c.name=name;c.zone=u.zone;c.size=u.companySize;c.workers=u.totalWorkers;c.description=u.companyDescription;c.seeking=u.companySeeking;c.inclusive=u.inclusive!==false;}d.jobs.forEach(j=>{if(j.companyId===u.id||j.company===oldName){j.companyId=u.id;j.company=name;}});saveDB(d);toast('Perfil de empresa actualizado');render()}

function comoFunciona(){document.querySelector('#app').innerHTML=`<div class="text-center mb-5"><h1 class="section-title">¿Cómo funciona JOBXP?</h1><p class="text-muted">Un camino simple para convertir microexperiencias en experiencia laboral certificada.</p></div><div class="row g-3">${[['01','Crea tu perfil','Agrega tus datos, habilidades, disponibilidad y preferencias de accesibilidad.'],['02','Encuentra tu match','JOBXP prioriza ofertas según zona, modalidad y necesidades de accesibilidad.'],['03','Realiza la experiencia','La empresa entrega instrucciones y condiciones claras.'],['04','Evalúa y certifica','Ambas partes se evalúan y el joven suma experiencia a su pasaporte.']].map(x=>`<div class="col-md-6 col-lg-3"><div class="cardx p-4 h-100"><div class="display-6 fw-bold text-primary">${x[0]}</div><h4 class="fw-bold mt-3">${x[1]}</h4><p class="text-muted">${x[2]}</p></div></div>`).join('')}</div><div class="cardx p-4 mt-4"><h3 class="fw-bold">Reglas antiabuso</h3><p class="text-muted">JOBXP limita la cantidad de jóvenes simultáneos según el tamaño de la empresa, prohíbe duplicar ofertas para reemplazar puestos permanentes y establece un máximo del 20% de la dotación proveniente de la plataforma.</p></div>`}
function inclusion(){document.querySelector('#app').innerHTML=`<div class="mb-4"><h1 class="section-title">Inclusión asistida</h1><p class="text-muted">La accesibilidad no es un extra: forma parte del match y de la preparación de cada experiencia.</p></div><div class="row g-3">${[['♿','Movilidad reducida','Estaciones sentadas, desplazamientos mínimos y accesos adaptados.'],['🔇','Entornos sensoriales','Bajo ruido, luz tenue y condiciones previsibles.'],['📝','Comunicación accesible','Instrucciones escritas, chat y comunicación clara.'],['🏠','Teletrabajo','Experiencias 100% remotas para quienes lo prefieran.'],['🧩','Neurodivergencia','Guía de anticipación, paso a paso visual y botón de pausa para regulación.'],['👁️','Baja visión / ceguera','Interfaz compatible con lectores de pantalla y opciones de alto contraste.']].map(x=>`<div class="col-md-6 col-lg-4"><div class="cardx p-4 h-100"><div class="fs-2">${x[0]}</div><h5 class="fw-bold mt-2">${x[1]}</h5><p class="text-muted mb-0">${x[2]}</p></div></div>`).join('')}</div><div class="cardx p-4 mt-4"><h4 class="fw-bold">Sello “Empresa Inclusiva”</h4><p class="text-muted mb-0">Las empresas que completan experiencias con jóvenes con discapacidad o neurodivergencia pueden recibir una insignia especial para aumentar la confianza de futuros postulantes.</p></div>`}

function evaluationTargetRole(targetRole){return targetRole==='joven'?'joven':'empresa';}
function getEvaluationAverage(d,targetRole,targetId){
  const rows=d.ratings.filter(r=>r.receptorRole===targetRole && Number(r.receptorId)===Number(targetId));
  if(!rows.length)return null;
  return Number((rows.reduce((sum,r)=>sum+Number(r.puntaje||0),0)/rows.length).toFixed(1));
}
function evaluaciones(){
  if(!requireLogin())return;
  const d=db(),u=currentUser();
  const isYoung=u.role==='joven';
  const targetRole=isYoung?'empresa':'joven';

  const companies=(d.companies||[]).map(c=>({id:c.id,name:c.name,zone:c.zone||c.location||''}));
  const youngs=(d.users||[]).filter(x=>x.role==='joven').map(y=>({id:y.id,name:y.name,zone:y.zone||''}));
  const targets=isYoung?companies:youngs;
  const myExisting=(d.ratings||[]).filter(r=>Number(r.emisorId||r.emisor)===Number(u.id));

  const targetOptions=targets.map(t=>{
    const avg=getEvaluationAverage(d,targetRole,t.id);
    return `<option value="${t.id}">${esc(t.name)}${t.zone?' · '+esc(t.zone):''}${avg?` · ${avg} ★`:''}</option>`;
  }).join('');

  const criteria=isYoung
    ? ['Ambiente laboral','Trato y respeto','Cumplimiento del pago','Respeto de adecuaciones']
    : ['Puntualidad','Responsabilidad','Cumplimiento','Adaptación a la tarea'];

  const accessibility=isYoung ? [
    ['movilidad','Movilidad reducida','bi-universal-access'],
    ['visual','Discapacidad visual','bi-eye'],
    ['auditiva','Discapacidad auditiva','bi-ear'],
    ['cognitiva','Discapacidad cognitiva','bi-brain'],
    ['mental','Salud mental','bi-heart-pulse'],
    ['otra','Otra discapacidad','bi-person-wheelchair']
  ] : [];

  document.querySelector('#app').innerHTML=`
    <div class="eval-page">
      <div class="eval-shell">
        <div class="eval-heading">
          <div>
            <span class="eval-kicker"><i class="bi bi-stars"></i> REPUTACIÓN JOBXP</span>
            <h1>Evaluaciones</h1>
            <p>La reputación funciona en ambos sentidos: los jóvenes evalúan empresas y las empresas evalúan jóvenes.</p>
          </div>
        </div>

        <div class="eval-rule">
          <div class="eval-rule-icon"><i class="bi bi-arrow-left-right"></i></div>
          <div><strong>Regla de evaluación</strong><span>Solo puedes evaluar a una cuenta de la clase contraria. Un joven no puede evaluar a otro joven y una empresa no puede evaluar a otra empresa.</span></div>
        </div>

        <div class="eval-grid">
          <section class="eval-card eval-main-card">
            <div class="eval-card-title">
              <div class="eval-title-icon">${isYoung?'<i class="bi bi-person-fill"></i>':'<i class="bi bi-building-fill"></i>'}</div>
              <div><h2>${isYoung?'Evalúa a una empresa':'Evalúa a un joven'}</h2><p>${isYoung?'Cuéntanos cómo fue la experiencia laboral con la empresa.':'Evalúa el desempeño del joven durante la microexperiencia.'}</p></div>
            </div>

            <div class="eval-account">
              <span>Tu cuenta</span><strong>${esc(u.name)}</strong><b class="eval-role ${isYoung?'green':'purple'}">${isYoung?'JOVEN':'EMPRESA'}</b>
            </div>

            <form id="evaluationForm" novalidate>
              <div class="eval-field">
                <label for="rateTarget">¿A quién quieres evaluar?</label>
                <select id="rateTarget" class="eval-select" required>
                  <option value="">Selecciona ${isYoung?'una empresa':'un joven'}</option>
                  ${targetOptions}
                </select>
                <small>La lista solo contiene cuentas de la clase contraria a la tuya.</small>
              </div>

              <div class="eval-field">
                <label>Puntuación</label>
                <div class="eval-stars" id="stars" role="radiogroup" aria-label="Puntuación de 1 a 5 estrellas">
                  ${[1,2,3,4,5].map(i=>`<button type="button" data-star="${i}" aria-label="${i} estrellas" aria-checked="false"><i class="bi bi-star-fill"></i></button>`).join('')}
                </div>
                <small id="ratingHint">Selecciona una puntuación de 1 a 5.</small>
              </div>

              <div class="eval-field">
                <label for="ratingComment">Comentario <em>(opcional)</em></label>
                <textarea id="ratingComment" class="eval-textarea" rows="4" maxlength="500" placeholder="${isYoung?'Ambiente laboral, trato, cumplimiento del pago y adecuaciones acordadas.':'Puntualidad, responsabilidad, cumplimiento y adaptación a las tareas.'}"></textarea>
                <div class="eval-counter"><span>Tu comentario ayuda a mejorar la experiencia.</span><strong id="ratingCounter">0/500</strong></div>
              </div>

              ${isYoung?`<div class="eval-accessibility">
                <div class="eval-section-heading"><div><h3>Adecuaciones para personas con discapacidad</h3><p>Indica qué tipos de adecuaciones mostró la empresa durante la experiencia.</p></div><i class="bi bi-universal-access"></i></div>
                <div class="eval-check-grid">
                  ${accessibility.map(([key,label,icon])=>`<label class="eval-check"><input type="checkbox" name="accommodation" value="${key}"><span class="eval-check-box"><i class="bi bi-check"></i></span><span class="eval-check-content"><i class="bi ${icon}"></i>${label}</span></label>`).join('')}
                </div>
              </div>`:''}

              <div class="eval-actions">
                <button type="button" class="eval-btn secondary" id="clearEvaluation">Limpiar</button>
                <button type="submit" class="eval-btn primary"><i class="bi bi-send"></i> Enviar evaluación</button>
              </div>
              <div id="evaluationMessage" class="eval-message" role="status" aria-live="polite"></div>
            </form>
          </section>

          <aside class="eval-side">
            <div class="eval-card eval-how">
              <h2>¿Cómo funciona?</h2>
              <div class="eval-steps">
                <div><b class="one">1</b><p><strong>Termina la experiencia</strong><span>La evaluación ocurre después de una microexperiencia.</span></p></div>
                <div><b class="two">2</b><p><strong>Evalúa a la contraparte</strong><span>${isYoung?'Tú evalúas a la empresa.':'La empresa evalúa al joven.'}</span></p></div>
                <div><b class="three">3</b><p><strong>Se actualiza la reputación</strong><span>El promedio queda asociado al perfil evaluado.</span></p></div>
              </div>
              <hr>
              <h3>Criterios ${isYoung?'para empresas':'para jóvenes'}</h3>
              <div class="eval-tags">${criteria.map(x=>`<span>${esc(x)}</span>`).join('')}</div>
              <div class="eval-protection"><i class="bi bi-shield-check"></i><p><strong>Evaluación justa</strong><br>No se utilizan criterios basados en apariencia, lenguaje corporal, tics o habilidades sociales tradicionales.</p></div>
            </div>
          </aside>
        </div>

        <section class="eval-card eval-history">
          <div class="eval-history-head"><div><h2>Mis evaluaciones enviadas</h2><p>Revisa las evaluaciones que ya registraste.</p></div><span>${myExisting.length}</span></div>
          ${myExisting.length?`<div class="eval-history-grid">${myExisting.slice().reverse().map(r=>`<article><div class="eval-history-top"><strong>${esc(r.receptorNombre||'Cuenta evaluada')}</strong><span>${'★'.repeat(Number(r.puntaje||0))}${'☆'.repeat(5-Number(r.puntaje||0))}</span></div><small>${r.receptorRole==='empresa'?'Empresa':'Joven'} · ${new Date(r.fecha).toLocaleDateString('es-CL')}</small>${r.comentario?`<p>“${esc(r.comentario)}”</p>`:''}</article>`).join('')}</div>`:'<div class="eval-empty"><i class="bi bi-chat-square-text"></i><p>Todavía no has enviado evaluaciones.</p></div>'}
        </section>
      </div>
    </div>`;

  selectedRating=0;
  const form=document.getElementById('evaluationForm');
  const counter=document.getElementById('ratingCounter');
  const textarea=document.getElementById('ratingComment');
  textarea.addEventListener('input',()=>counter.textContent=`${textarea.value.length}/500`);

  document.querySelectorAll('[data-star]').forEach(btn=>{
    btn.addEventListener('click',()=>setRating(Number(btn.dataset.star)));
    btn.addEventListener('keydown',e=>{
      if(e.key==='ArrowRight'||e.key==='ArrowUp'){e.preventDefault();btn.nextElementSibling?.focus()}
      if(e.key==='ArrowLeft'||e.key==='ArrowDown'){e.preventDefault();btn.previousElementSibling?.focus()}
      if(e.key==='Enter'||e.key===' '){e.preventDefault();setRating(Number(btn.dataset.star))}
    });
  });
  document.getElementById('clearEvaluation').addEventListener('click',()=>{
    form.reset(); selectedRating=0; setRating(0); counter.textContent='0/500'; document.getElementById('evaluationMessage').className='eval-message'; document.getElementById('evaluationMessage').textContent='';
  });

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const targetId=Number(document.getElementById('rateTarget').value);
    const target=targetRole==='joven'?d.users.find(x=>x.role==='joven'&&Number(x.id)===targetId):d.companies.find(x=>Number(x.id)===targetId);
    const msg=document.getElementById('evaluationMessage');
    if(!targetId){msg.className='eval-message error';msg.textContent='Selecciona a quién quieres evaluar.';return}
    if(!selectedRating){msg.className='eval-message error';msg.textContent='Selecciona una puntuación antes de enviar.';return}
    if(!target){msg.className='eval-message error';msg.textContent='La cuenta seleccionada no existe.';return}
    const duplicate=d.ratings.some(r=>Number(r.emisorId||r.emisor)===Number(u.id)&&r.receptorRole===targetRole&&Number(r.receptorId)===targetId);
    if(duplicate){msg.className='eval-message error';msg.textContent='Ya has evaluado a esta cuenta en este prototipo.';return}

    const accommodations=[...form.querySelectorAll('input[name="accommodation"]:checked')].map(x=>x.value);
    const evaluation={id:Date.now(),emisorId:u.id,emisorRole:u.role,emisorNombre:u.name,receptorId:target.id,receptorRole:targetRole,receptorNombre:target.name,puntaje:selectedRating,comentario:textarea.value.trim(),adecuaciones:accommodations,fecha:new Date().toISOString()};
    d.ratings.push(evaluation);
    const avg=getEvaluationAverage(d,targetRole,target.id);
    if(targetRole==='empresa'){const c=d.companies.find(x=>Number(x.id)===Number(target.id));if(c)c.rating=avg}else{const y=d.users.find(x=>x.role==='joven'&&Number(x.id)===Number(target.id));if(y)y.rating=avg}
    saveDB(d);
    msg.className='eval-message success';msg.textContent='Evaluación enviada correctamente. ¡Gracias por tu retroalimentación!';
    form.querySelectorAll('input,select,textarea,button').forEach(el=>{if(el.id!=='clearEvaluation')el.disabled=true});
  });
}

let selectedRating=0;
function setRating(n){
  selectedRating=n;
  document.querySelectorAll('[data-star]').forEach(b=>{
    const value=Number(b.dataset.star);
    const active=value<=n;
    b.classList.toggle('off',!active);
    b.classList.toggle('active',active);
    b.setAttribute('aria-checked',value===n?'true':'false');
  });
  const hint=document.getElementById('ratingHint');
  if(hint) hint.textContent=n?`Has seleccionado ${n} de 5 estrellas.`:'Selecciona una puntuación de 1 a 5.';
}
function submitRating(){
  const d=db(),u=currentUser();
  const targetEl=document.getElementById('rateTarget');
  const targetId=Number(targetEl?.value);
  const targetRole=u.role==='joven'?'empresa':'joven';
  if(!targetId){toast('Selecciona a quién quieres evaluar','warning');return}
  if(!selectedRating){toast('Selecciona una puntuación','warning');return}

  // Regla de seguridad: jamás permitir evaluaciones entre cuentas de la misma clase.
  const target=targetRole==='joven'
    ? d.users.find(x=>x.role==='joven' && Number(x.id)===targetId)
    : d.companies.find(x=>Number(x.id)===targetId);
  if(!target){toast('La cuenta seleccionada no existe','danger');return}
  if(targetRole===u.role){toast('No puedes evaluar a una cuenta de tu misma clase','danger');return}

  // Evita que el mismo emisor duplique una evaluación sobre la misma contraparte.
  const duplicate=d.ratings.some(r=>Number(r.emisorId||r.emisor)===Number(u.id) && r.receptorRole===targetRole && Number(r.receptorId)===targetId);
  if(duplicate){toast('Ya evaluaste a esta cuenta en el prototipo','warning');return}

  const evaluation={
    id:Date.now(),
    emisorId:u.id,
    emisorRole:u.role,
    emisorNombre:u.name,
    receptorId:target.id,
    receptorRole:targetRole,
    receptorNombre:target.name,
    puntaje:selectedRating,
    comentario:document.getElementById('ratingComment').value.trim(),
    fecha:new Date().toISOString()
  };
  d.ratings.push(evaluation);
  const avg=getEvaluationAverage(d,targetRole,target.id);
  if(targetRole==='empresa'){
    const c=d.companies.find(x=>Number(x.id)===Number(target.id));
    if(c)c.rating=avg;
  }else{
    const y=d.users.find(x=>x.role==='joven' && Number(x.id)===Number(target.id));
    if(y)y.rating=avg;
  }
  saveDB(d);
  selectedRating=0;
  document.querySelectorAll('[data-star]').forEach(b=>b.classList.add('off'));
  toast('Evaluación guardada correctamente','success');
  setTimeout(evaluaciones,100);
}
function reportIssue(){const d=db(),u=currentUser();const reason=prompt('Escribe el motivo de la denuncia:');if(!reason)return;d.reports.push({id:Date.now(),userId:u.id,reason,status:'Pendiente'});saveDB(d);toast('Denuncia registrada para revisión','warning')}
function asistencia(){if(!requireLogin())return;const d=db(),u=currentUser();document.querySelector('#app').innerHTML=`<div class="row justify-content-center"><div class="col-md-7"><div class="cardx p-4 text-center"><h2 class="fw-bold">Asistencia</h2><p class="text-muted">Simulación del QR único de la empresa. En una implementación real, este QR registra entrada y salida.</p><div class="border rounded-4 p-4 my-4"><div class="display-1">▦</div><strong>Código JOBXP-DEMO-001</strong></div><button class="btn btn-primary" onclick="scanQR()">Simular escaneo</button><div id="attendanceResult" class="mt-3"></div></div></div></div>`}
function scanQR(){const d=db(),u=currentUser();const now=new Date().toLocaleString('es-CL');d.attendance.push({userId:u.id,date:new Date().toISOString(),type:'entrada',display:now,company:'JOBXP'});saveDB(d);document.getElementById('attendanceResult').innerHTML=`<div class="alert alert-success">✓ Entrada registrada: ${now}<br><small>La ubicación se registraría solo con autorización del usuario.</small></div>`}
function notFound(){document.querySelector('#app').innerHTML=`<div class="empty"><h2 class="fw-bold">Página no encontrada</h2><a href="#/inicio" class="btn btn-primary mt-2">Volver al inicio</a></div>`}

// Evita envíos accidentales: los formularios solo se envían al pulsar su botón de envío.
document.addEventListener('keydown',function(e){if(e.key==='Enter' && e.target.closest('form') && e.target.tagName!=='TEXTAREA'){e.preventDefault();}});

window.applyJob=applyJob;window.updateApplication=updateApplication;window.sendMessage=sendMessage;window.saveJob=saveJob;window.filterJobs=filterJobs;window.handleLogin=handleLogin;window.handleRegistro=handleRegistro;window.toggleRegRole=toggleRegRole;window.saveProfile=saveProfile;window.saveCompanyProfile=saveCompanyProfile;window.goEmpresa=goEmpresa;window.toggleJobStatus=toggleJobStatus;window.deleteCompanyJob=deleteCompanyJob;window.publishJob=publishJob;window.setRating=setRating;window.submitRating=submitRating;window.reportIssue=reportIssue;window.scanQR=scanQR;window.logout=logout;
window.addEventListener('hashchange',render);window.addEventListener('DOMContentLoaded',()=>{db();render();});
