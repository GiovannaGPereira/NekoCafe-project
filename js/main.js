document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.menu-carousel');
  const btnLeft = document.querySelector('.carousel-btn.left');
  const btnRight = document.querySelector('.carousel-btn.right');
  
  // Define o quanto rolar. Você pode ajustar esse valor.
  const scrollAmount = 400; 

  // --- BOTÃO DIREITA (>) ---
  btnRight.addEventListener('click', () => {
    // Calcula o ponto máximo de scroll
    // (Largura Total - Largura Visível)
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Verifica se estamos perto do fim (com uma margem de 1px para garantir)
    if (carousel.scrollLeft >= (maxScrollLeft - 1)) {
      // Se sim, volta ao início
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Se não, rola normalmente
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  });

  // --- BOTÃO ESQUERDA (<) ---
  btnLeft.addEventListener('click', () => {
    // Verifica se estamos no início
    if (carousel.scrollLeft <= 0) {
      // Se sim, pula para o fim
      carousel.scrollTo({
        left: carousel.scrollWidth,
        behavior: 'smooth'
      });
    } else {
      // Se não, rola normalmente
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  });
});

// --- CÓDIGO DO SLIDER DE GATOS ---
  
  // 1. Capturar os elementos
  const gatoSlides = document.querySelectorAll('.gato-slide');
  const gatoBtnLeft = document.querySelector('.gato-btn.left');
  const gatoBtnRight = document.querySelector('.gato-btn.right');
  
  // 2. Definir o slide inicial
  let currentGatoSlide = 0;

  // 3. Função para mostrar o slide
  function showGatoSlide(index) {
    // Esconde todos os slides
    gatoSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Mostra o slide do 'index' (número) que a gente quer
    gatoSlides[index].classList.add('active');
  }

  // 4. Evento do Botão Direito
  gatoBtnRight.addEventListener('click', () => {
    // Tira o 'active' do slide atual
    gatoSlides[currentGatoSlide].classList.remove('active');
    
    // Avança o contador
    currentGatoSlide++;
    
    // Verifica se chegamos no fim (Loop)
    if (currentGatoSlide >= gatoSlides.length) {
      currentGatoSlide = 0; // Volta para o primeiro
    }
    
    // Mostra o novo slide
    gatoSlides[currentGatoSlide].classList.add('active');
  });

  // 5. Evento do Botão Esquerdo
  gatoBtnLeft.addEventListener('click', () => {
    // Tira o 'active' do slide atual
    gatoSlides[currentGatoSlide].classList.remove('active');
    
    // Diminui o contador
    currentGatoSlide--;
    
    // Verifica se chegamos no começo (Loop)
    if (currentGatoSlide < 0) {
      currentGatoSlide = gatoSlides.length - 1; // Vai para o último
    }
    
    // Mostra o novo slide
    gatoSlides[currentGatoSlide].classList.add('active');
  });

