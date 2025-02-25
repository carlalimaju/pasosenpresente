// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
  // Guardar la reflexión del usuario
  const guardarBtn = document.getElementById('guardar');
  const respuestaTextarea = document.getElementById('respuesta');
  const mensajeDiv = document.getElementById('mensaje');

  guardarBtn.addEventListener('click', function() {
    const respuesta = respuestaTextarea.value.trim();
    if (respuesta) {
      // Se podría ampliar para guardar en localStorage o enviar a un servidor
      localStorage.setItem('reflexion', respuesta);
      mensajeDiv.textContent = 'Tu reflexión ha sido guardada. ¡Gracias por compartir!';
      respuestaTextarea.value = '';
    } else {
      mensajeDiv.textContent = 'Por favor, escribe tu reflexión antes de guardar.';
    }
  });

  // Citas inspiradoras
  const citas = [
    '"La felicidad depende de nosotros mismos." - Aristóteles',
    '"El secreto de la salud mental y corporal radica en no lamentarse por el pasado, no preocuparse por el futuro, sino vivir el presente con sabiduría." - Buda',
    '"No puedes evitar que los pájaros de la tristeza vuelen sobre tu cabeza, pero sí puedes evitar que aniden en tu cabello." - Proverbio chino',
    '"La gratitud es la memoria del corazón." - Lao-Tsé',
    '"La verdadera felicidad no se alcanza a través de la autocomplacencia, sino a través de la fidelidad a un propósito mayor." - Helen Keller'
  ];

  const nuevaCitaBtn = document.getElementById('nuevaCita');
  const citaBlockquote = document.getElementById('cita');

  nuevaCitaBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * citas.length);
    citaBlockquote.textContent = citas[randomIndex];
  });
});
