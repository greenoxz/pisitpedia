document.addEventListener('DOMContentLoaded', function() {
    var fadeElems = document.querySelectorAll('.fade-in');
    
    fadeElems.forEach(function(elem) {
        elem.classList.add('show');
    });
});
