// Malla completa Ingeniería Comercial UBB 2023
const malla = [
  { semestre: 1, nombre: "I SEMESTRE", ramos: [
    { nombre: "Administración General", tipo: "profesional", prerreq: [] },
    { nombre: "Derecho Empresarial", tipo: "profesional", prerreq: [] },
    { nombre: "Algebra I", tipo: "basica", prerreq: [] },
    { nombre: "Habilidades Sociales", tipo: "formacion", prerreq: [] },
    { nombre: "Contabilidad I", tipo: "profesional", prerreq: [] },
    { nombre: "Formación Integral Oferta Institucional I", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 2, nombre: "II SEMESTRE", ramos: [
    { nombre: "Administración Estratégica", tipo: "profesional", prerreq: ["Administración General"] },
    { nombre: "Álgebra II", tipo: "basica", prerreq: ["Algebra I"] },
    { nombre: "Cálculo I", tipo: "basica", prerreq: ["Álgebra II"] },
    { nombre: "Introducción a la Economía", tipo: "basica", prerreq: [] },
    { nombre: "Contabilidad II", tipo: "profesional", prerreq: ["Contabilidad I"] },
    { nombre: "Inglés I", tipo: "formacion", prerreq: [] },
    { nombre: "Formación Integral Act. Extraprogramática I", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 3, nombre: "III SEMESTRE", ramos: [
    { nombre: "Marketing I", tipo: "profesional", prerreq: [] },
    { nombre: "Cálculo II", tipo: "basica", prerreq: ["Cálculo I"] },
    { nombre: "Microeconomía I", tipo: "basica", prerreq: ["Introducción a la Economía"] },
    { nombre: "Costos", tipo: "profesional", prerreq: ["Contabilidad II"] },
    { nombre: "Inglés II", tipo: "formacion", prerreq: ["Inglés I"] },
    { nombre: "Formación Integral Oferta Institucional II", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 4, nombre: "IV SEMESTRE", ramos: [
    { nombre: "Marketing II", tipo: "profesional", prerreq: ["Marketing I"] },
    { nombre: "Estadística I", tipo: "basica", prerreq: [] },
    { nombre: "Macroeconomía I", tipo: "basica", prerreq: ["Microeconomía I"] },
    { nombre: "Microeconomía II", tipo: "basica", prerreq: ["Microeconomía I"] },
    { nombre: "Inglés para Negocios I", tipo: "formacion", prerreq: ["Inglés II"] },
    { nombre: "Inglés III", tipo: "formacion", prerreq: ["Inglés II"] },
  ]},
  { semestre: 5, nombre: "V SEMESTRE", ramos: [
    { nombre: "Gestión de Recursos Humanos I", tipo: "profesional", prerreq: [] },
    { nombre: "Sistemas de Información", tipo: "profesional", prerreq: [] },
    { nombre: "Estadísticas II", tipo: "basica", prerreq: ["Estadística I"] },
    { nombre: "Macroeconomía II", tipo: "basica", prerreq: ["Macroeconomía I"] },
    { nombre: "Gestión Financiera de Corto Plazo", tipo: "profesional", prerreq: ["Costos"] },
    { nombre: "Inglés para Negocios II", tipo: "formacion", prerreq: ["Inglés III"] },
    { nombre: "Formación Integral Act. Extraprogramática II", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 6, nombre: "VI SEMESTRE", ramos: [
    { nombre: "Comportamiento Organizacional", tipo: "profesional", prerreq: ["Gestión de Recursos Humanos I"] },
    { nombre: "Econometría", tipo: "profesional", prerreq: ["Estadísticas II"] },
    { nombre: "Economía Internacional", tipo: "profesional", prerreq: ["Macroeconomía II"] },
    { nombre: "Mercados de Capitales", tipo: "profesional", prerreq: ["Gestión Financiera de Corto Plazo"] },
    { nombre: "Inglés para Negocios III", tipo: "formacion", prerreq: ["Inglés para Negocios II"] },
    { nombre: "Práctica Profesional I", tipo: "profesional", prerreq: [] },
  ]},
  { semestre: 7, nombre: "VII SEMESTRE", ramos: [
    { nombre: "Comercio Exterior", tipo: "profesional", prerreq: ["Economía Internacional"] },
    { nombre: "Gestión de Recursos Humanos II", tipo: "profesional", prerreq: ["Comportamiento Organizacional"] },
    { nombre: "Administración de la Producción", tipo: "profesional", prerreq: ["Gestión Financiera de Corto Plazo"] },
    { nombre: "Control de Gestión", tipo: "profesional", prerreq: ["Costos"] },
    { nombre: "Formulación y Evaluación de Proyectos", tipo: "profesional", prerreq: ["Administración Estratégica"] },
    { nombre: "Formación Integral Act. Extraprogramática III", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 8, nombre: "VIII SEMESTRE", ramos: [
    { nombre: "Emprendimiento", tipo: "profesional", prerreq: [] },
    { nombre: "Desarrollo Organizacional", tipo: "profesional", prerreq: ["Comportamiento Organizacional"] },
    { nombre: "Responsabilidad Social", tipo: "profesional", prerreq: [] },
    { nombre: "Dirección Estratégica I", tipo: "profesional", prerreq: ["Administración Estratégica"] },
    { nombre: "Gestión Financiera de Largo Plazo", tipo: "profesional", prerreq: ["Gestión Financiera de Corto Plazo"] },
    { nombre: "Formación Integral Oferta Institucional III", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 9, nombre: "IX SEMESTRE", ramos: [
    { nombre: "Electivo I", tipo: "optativa", prerreq: [] },
    { nombre: "Electivo II", tipo: "optativa", prerreq: [] },
    { nombre: "Electivo III", tipo: "optativa", prerreq: [] },
    { nombre: "Dirección Estratégica II", tipo: "profesional", prerreq: ["Dirección Estratégica I"] },
    { nombre: "Práctica Profesional II", tipo: "profesional", prerreq: ["Práctica Profesional I"] },
    { nombre: "Formación Integral Oferta institucional IV", tipo: "formacion", prerreq: [] },
  ]},
  { semestre: 10, nombre: "X SEMESTRE", ramos: [
    { nombre: "Habilitación Profesional", tipo: "profesional", prerreq: ["Dirección Estratégica II"] },
    { nombre: "Electivo IV", tipo: "optativa", prerreq: [] },
    { nombre: "Electivo V", tipo: "optativa", prerreq: [] },
    { nombre: "Taller Integrado", tipo: "profesional", prerreq: ["Habilitación Profesional"] },
    { nombre: "Formación Integral Act. Extraprogramática IV", tipo: "formacion", prerreq: [] },
  ]},
];

let aprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

function guardarEstado() {
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function estaDesbloqueado(ramo) {
  return ramo.prerreq.every(req => aprobados.includes(req));
}

function toggleRamo(nombre) {
  const index = aprobados.indexOf(nombre);
  if (index >= 0) {
    aprobados.splice(index, 1);
  } else {
    aprobados.push(nombre);
  }
  guardarEstado();
  renderMalla();
}

function mostrarDetalle(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = "-";
  document.getElementById("detalle-tipo").textContent = ramo.tipo;
  document.getElementById("detalle-prerrequisitos").textContent = ramo.prerreq.length ? ramo.prerreq.join(", ") : "Ninguno";
  document.getElementById("info-detalle").style.display = "block";
}

function cerrarDetalle() {
  document.getElementById("info-detalle").style.display = "none";
}

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  malla.forEach(sem => {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = sem.nombre;
    col.appendChild(title);

    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      const aprobado = aprobados.includes(ramo.nombre);
      const desbloqueado = estaDesbloqueado(ramo);

      div.textContent = aprobado ? "✔️ " + ramo.nombre : desbloqueado ? ramo.nombre : "🔒 " + ramo.nombre;
      if (aprobado) div.classList.add("aprobado");
      else if (!desbloqueado) div.classList.add("bloqueado");

      if (desbloqueado) {
        div.addEventListener("click", () => toggleRamo(ramo.nombre));
      }

      div.addEventListener("dblclick", () => mostrarDetalle(ramo));
      col.appendChild(div);
    });

    container.appendChild(col);
  });
}

renderMalla();
#malla-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  min-width: 1200px;
  overflow-x: auto;
}

.semestre {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  flex-shrink: 0;
}

.semestre h2 {
  background-color: #f8bbd0;
  padding: 8px;
  text-align: center;
  border-radius: 8px;
  color: #880e4f;
}

.ramo {
  padding: 10px;
  background-color: #fce4ec;
  border: 2px solid #f8bbd0;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  user-select: none;
  font-size: 0.9rem;
}

.ramo:hover {
  background-color: #f8bbd0;
  transform: scale(1.03);
}

.ramo.aprobado {
  background-color: #f48fb1 !important;
  color: white;
  font-weight: bold;
  border-color: #c2185b;
}

.ramo.bloqueado {
  background-color: #e0e0e0;
  color: #999;
  cursor: not-allowed;
  border-style: dashed;
}

/* Tipos de formación */
.ramo.basica { border-left: 5px solid #f48fb1; }
.ramo.profesional { border-left: 5px solid #f06292; }
.ramo.formacion { border-left: 5px solid #ce93d8; }
.ramo.optativa { border-left: 5px solid #ba68c8; }

body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
  background-color: #fff0f5;
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #880e4f;
}

#info-detalle {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 2px solid #c2185b;
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  display: none;
  z-index: 1000;
}

#info-detalle button {
  float: right;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #c2185b;
}
