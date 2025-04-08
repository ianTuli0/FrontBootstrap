
/*Barra vertical*/
window.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.getElementById('barravertical');

    function adjustToggleButton() {
        if (window.innerWidth > 768) {
            toggleButton.style.display = 'none'; // Oculta o botão quando a tela for maior que 900px
            toggleButton.removeAttribute('data-toggle');
            barravertical.classList.remove('collapse');
        } else {
            toggleButton.style.display = 'block'; // Mostra o botão quando a tela for menor ou igual a 900px
            toggleButton.setAttribute('data-toggle', 'collapse');
            toggleButton.setAttribute('data-target', '#barravertical');
        }
    }

    // Chamando a função ao carregar a página
    adjustToggleButton();

    window.addEventListener('resize', function() {
        // Chamando a função ao redimensionar a janela
        adjustToggleButton();
    });
});
/*Barra vertical data-toggle*/


/*script player de video*/


  let listVideos = document.querySelectorAll('#video-lista .video-list .vid');
  let mainVideo = document.querySelector('#video-lista .main-video video');
  let title = document.querySelector('#video-lista .main-video .title');
  let currentIndex = 0;

  // Função para atualizar o vídeo principal
  function updateMainVideo(index) {
    let video = listVideos[index];
    let src = video.querySelector('video').getAttribute('src');
    let text = video.querySelector('.title').innerHTML;
    mainVideo.src = src;
    title.innerHTML = text;
  }

  // Adiciona evento de clique para o botão Próximo
  document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % listVideos.length;
    updateMainVideo(currentIndex);
  });

  // Adiciona evento de clique para o botão Anterior
  document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + listVideos.length) % listVideos.length;
    updateMainVideo(currentIndex);
  });

  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.vertical-nav').classList.toggle('open');
  });



/*Fim script player de video */

