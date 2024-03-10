document.addEventListener('DOMContentLoaded', function () {
    let autoSlideIndex = 0;
    showAutoSlides();
    
    function showAutoSlides() {
      let slides = document.querySelectorAll('.autoSlides img');
      slides.forEach(slide => slide.classList.remove('active'));
      
      autoSlideIndex++;
      if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1
      }    
      slides[autoSlideIndex-1].classList.add('active');  
      setTimeout(showAutoSlides, 7000);
    }
  });