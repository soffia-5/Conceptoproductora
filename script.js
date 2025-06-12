function mostrarSeccion(id) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

  // Mostrar la sección seleccionada
  document.getElementById(id).classList.add('active');

  // Mostrar el botón de volver
  document.querySelector('.volver-container').style.display = 'block';

  // Ocultar subtítulo y botones de navegación
  document.querySelector('.subtitle').style.display = 'none';
  document.querySelector('.sectors').style.display = 'none';
}

function volverInicio() {
  // Mostrar solo la sección de inicio
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById('inicio').classList.add('active');

  // Ocultar el botón de volver
  document.querySelector('.volver-container').style.display = 'none';

  // Mostrar subtítulo y botones de navegación
  document.querySelector('.subtitle').style.display = 'block';
  document.querySelector('.sectors').style.display = 'flex';
}
