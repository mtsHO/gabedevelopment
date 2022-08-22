// Scroll automático do menu para sessão //

const menuItens = document.querySelectorAll('.cabecalho-nav');



menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});


function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    const pais = element.getAttribute('data-idioma');

    if(id == null){
      window.location.href = pais;
    } else {
      return document.querySelector(id).offsetTop;
    }

}

function scrollToIdOnClick(event) {
    event.preventDefault();
    console.log(event.target);
    const to = getScrollTopByHref(event.target);

    scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 1200;
    alturaMenu.classList.toggle('menu-mobile-completo');
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };





