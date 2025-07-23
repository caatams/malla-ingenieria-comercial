const malla = [
  { semestre: 1, ramos: [
    { nombre: "Administración General", creditos: 6, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Derecho Empresarial", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Algebra I", creditos: 6, tipo: "basica", prerrequisitos: "-" },
    { nombre: "Habilidades Sociales", creditos: 4, tipo: "formacion", prerrequisitos: "-" },
    { nombre: "Contabilidad I", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Formación Integral Oferta Institucional I", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 2, ramos: [
    { nombre: "Administración Estratégica", creditos: 6, tipo: "profesional", prerrequisitos: "Administración General" },
    { nombre: "Álgebra II", creditos: 6, tipo: "basica", prerrequisitos: "Algebra I" },
    { nombre: "Cálculo I", creditos: 6, tipo: "basica", prerrequisitos: "Álgebra II" },
    { nombre: "Introducción a la Economía", creditos: 5, tipo: "basica", prerrequisitos: "-" },
    { nombre: "Contabilidad II", creditos: 5, tipo: "profesional", prerrequisitos: "Contabilidad I" },
    { nombre: "Inglés I", creditos: 4, tipo: "formacion", prerrequisitos: "-" },
    { nombre: "Formación Integral Act. Extraprogramática I", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 3, ramos: [
    { nombre: "Marketing I", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Cálculo II", creditos: 6, tipo: "basica", prerrequisitos: "Cálculo I" },
    { nombre: "Microeconomía I", creditos: 5, tipo: "basica", prerrequisitos: "-" },
    { nombre: "Costos", creditos: 5, tipo: "profesional", prerrequisitos: "Contabilidad II" },
    { nombre: "Inglés II", creditos: 4, tipo: "formacion", prerrequisitos: "Inglés I" },
    { nombre: "Formación Integral Oferta Institucional II", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 4, ramos: [
    { nombre: "Marketing II", creditos: 5, tipo: "profesional", prerrequisitos: "Marketing I" },
    { nombre: "Estadística I", creditos: 5, tipo: "basica", prerrequisitos: "-" },
    { nombre: "Macroeconomía I", creditos: 5, tipo: "basica", prerrequisitos: "Microeconomía I" },
    { nombre: "Microeconomía II", creditos: 5, tipo: "basica", prerrequisitos: "Microeconomía I" },
    { nombre: "Inglés para Negocios I", creditos: 4, tipo: "formacion", prerrequisitos: "Inglés II" },
    { nombre: "Inglés III", creditos: 4, tipo: "formacion", prerrequisitos: "Inglés II" },
  ]},
  { semestre: 5, ramos: [
    { nombre: "Gestión de Recursos Humanos I", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Sistemas de Información", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Estadísticas II", creditos: 5, tipo: "basica", prerrequisitos: "Estadística I" },
    { nombre: "Macroeconomía II", creditos: 5, tipo: "basica", prerrequisitos: "Macroeconomía I" },
    { nombre: "Gestión Financiera de Corto Plazo", creditos: 5, tipo: "profesional", prerrequisitos: "Costos" },
    { nombre: "Inglés para Negocios II", creditos: 4, tipo: "formacion", prerrequisitos: "Inglés III" },
    { nombre: "Formación Integral Act. Extraprogramática II", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 6, ramos: [
    { nombre: "Comportamiento Organizacional", creditos: 5, tipo: "profesional", prerrequisitos: "Gestión de Recursos Humanos I" },
    { nombre: "Econometría", creditos: 5, tipo: "profesional", prerrequisitos: "Estadísticas II" },
    { nombre: "Economía Internacional", creditos: 5, tipo: "profesional", prerrequisitos: "Macroeconomía II" },
    { nombre: "Mercados de Capitales", creditos: 5, tipo: "profesional", prerrequisitos: "Gestión Financiera de Corto Plazo" },
    { nombre: "Inglés para Negocios III", creditos: 4, tipo: "formacion", prerrequisitos: "Inglés para Negocios II" },
    { nombre: "Práctica Profesional I", creditos: 10, tipo: "profesional", prerrequisitos: "-" },
  ]},
  { semestre: 7, ramos: [
    { nombre: "Comercio Exterior", creditos: 5, tipo: "profesional", prerrequisitos: "Economía Internacional" },
    { nombre: "Gestión de Recursos Humanos II", creditos: 5, tipo: "profesional", prerrequisitos: "Comportamiento Organizacional" },
    { nombre: "Administración de la Producción", creditos: 5, tipo: "profesional", prerrequisitos: "Gestión Financiera de Corto Plazo" },
    { nombre: "Control de Gestión", creditos: 5, tipo: "profesional", prerrequisitos: "Costos" },
    { nombre: "Formulación y Evaluación de Proyectos", creditos: 5, tipo: "profesional", prerrequisitos: "Administración Estratégica" },
    { nombre: "Formación Integral Act. Extraprogramática III", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 8, ramos: [
    { nombre: "Emprendimiento", creditos: 5, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Desarrollo Organizacional", creditos: 5, tipo: "profesional", prerrequisitos: "Comportamiento Organizacional" },
    { nombre: "Responsabilidad Social", creditos: 4, tipo: "profesional", prerrequisitos: "-" },
    { nombre: "Dirección Estratégica I", creditos: 5, tipo: "profesional", prerrequisitos: "Administración Estratégica" },
    { nombre: "Gestión Financiera de Largo Plazo", creditos: 5, tipo: "profesional", prerrequisitos: "Gestión Financiera de Corto Plazo" },
    { nombre: "Formación Integral Oferta Institucional III", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 9, ramos: [
    { nombre: "Electivo I", creditos: 4, tipo: "optativa", prerrequisitos: "-" },
    { nombre: "Electivo II", creditos: 4, tipo: "optativa", prerrequisitos: "-" },
    { nombre: "Electivo III", creditos: 4, tipo: "optativa", prerrequisitos: "-" },
    { nombre: "Dirección Estratégica II", creditos: 6, tipo: "profesional", prerrequisitos: "Dirección Estratégica I" },
    { nombre: "Práctica Profesional II", creditos: 10, tipo: "profesional", prerrequisitos: "Práctica Profesional I" },
    { nombre: "Formación Integral Oferta Institucional IV", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
  { semestre: 10, ramos: [
    { nombre: "Habilitación Profesional", creditos: 6, tipo: "profesional", prerrequisitos: "Dirección Estratégica II" },
    { nombre: "Electivo IV", creditos: 4, tipo: "optativa", prerrequisitos: "-" },
    { nombre: "Electivo V", creditos: 4, tipo: "optativa", prerrequisitos: "-" },
    { nombre: "Taller Integrado", creditos: 5, tipo: "profesional", prerrequisitos: "Habilitación Profesional" },
    { nombre: "Formación Integral Act. Extraprogramática IV", creditos: 3, tipo: "formacion", prerrequisitos: "-" },
  ]},
];

function crearMalla() {
  const contenedor = document.getElementById('malla-container');
  contenedor.innerHTML = '';

  malla.forEach((sem) => {
    // Título semestre
    const divSemestre = document.createElement('div');
    divSemestre.className = 'semestre';
    divSemestre.textContent = `Semestre ${sem.semestre}`;
    contenedor.appendChild(divSemestre);

    // Ramo por ramo
    sem.ramos.forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.className = `ramo ${ramo.tipo}`;
      divRamo.textContent = ramo.nombre;
      divRamo.title = `${ramo.nombre}\nCréditos: ${ramo.creditos}\nPrerrequisitos: ${ramo.prerrequisitos}`;
      divRamo.onclick = () => mostrarDetalle(ramo);
      contenedor.appendChild(divRamo);
    });
  });
}

function mostrarDetalle(ramo) {
  document.getElementById('detalle-nombre').textContent = ramo.nombre;
  document.getElementById('detalle-creditos').textContent = ramo.creditos;
  document.getElementById('detalle-tipo').textContent = ramo.tipo.charAt(0).toUpperCase() + ramo.tipo.slice(1);
  document.getElementById('detalle-prerrequisitos').textContent = ramo.prerrequisitos;
  document.getElementById('info-detalle').style.display = 'block';
}

function cerrarDetalle() {
  document.getElementById('info-detalle').style.display = 'none';
}

crearMalla();
