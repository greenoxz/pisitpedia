document.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  });
  