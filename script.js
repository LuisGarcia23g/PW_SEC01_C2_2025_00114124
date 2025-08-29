document.addEventListener('DOMContentLoaded', () => {
  const btnReordenar = document.getElementById('reordenar');
  const btnCambiarTitulo = document.getElementById('cambiar-titulo');
  const btnCambiarSubtitulo = document.getElementById('cambiar-subtitulo');
  const btnAgregarImagen = document.getElementById('agregar-imagen');

  const contenedor = document.getElementById('contenedor');
  const titulo = document.querySelector('header h1');
  const subtitulos = document.querySelectorAll('main h2');
  const header = document.getElementById('titulo');


  btnReordenar.addEventListener('click', () => {
    const secciones = Array.from(contenedor.children);
    secciones.reverse();
    contenedor.innerHTML = '';
    secciones.forEach(sec => contenedor.appendChild(sec));
  }
  );

  btnCambiarTitulo.addEventListener('click', () => {
    const nuevoTitulo = prompt('Ingrese el nuevo título:', titulo.textContent);
    if (nuevoTitulo !== null && nuevoTitulo.trim() !== '') {
      titulo.textContent = nuevoTitulo.trim();
    }
  }
  );
  btnCambiarSubtitulo.addEventListener('click', () => {
    subtitulos.forEach(h2 => {
      h2.style.color = 'purple';
      h2.style.fontFamily = '"Montserrat", Arial, sans-serif';
    });
  });
  btnAgregarImagen.addEventListener('click', () => {
    if (!document.getElementById('imagen-header')) {
      const img = document.createElement('img');
      img.id = 'imagen-header';
      img.src = 'imagen/imagen.jpg';
      const url = prompt('Ingrese la URL o ruta local de la imagen:', 'imagen/imagen.jpg');
      if (url && url.trim() !== '') {
        img.src = url.trim();
      }
      img.alt = 'Imagen del libro';
      img.width = 300;
      img.height = 200;
      img.style.display = 'block';
      img.style.margin = '10px auto';
      const aside = document.querySelector('aside');
      aside.appendChild(img);
    } else {
      alert('La imagen ya fue agregada.');
    }
  });
});