
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
