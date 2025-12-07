
function startCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    let timer = setInterval(() => {
        current++;
        element.textContent = current;

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

startCounter("counter", 0, 78, 2000); // id, start, end, duration(ms)

// faq

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all other answers
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
      i.querySelector('.faq-answer').style.display = 'none';
    });

    // Toggle current answer
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.toggle('active');
    answer.style.display = isOpen ? 'block' : 'none';
  });
});

// ===loader
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000); 
  });


  // ===navbar 

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav_bar');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open_nav_bar'); // slide menu
  hamburger.classList.toggle('active'); // toggle open/close icon
}
);
// const navBar = document.getElementsByClassName("nav-menu");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Jab neeche scroll ho → menu hide
  if (scrollTop > lastScrollTop) {
      nav.classList.remove('open_nav_bar'); 
    hamburger.classList.remove('active');
  }
  lastScrollTop = scrollTop;

});
