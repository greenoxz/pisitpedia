document.addEventListener('DOMContentLoaded', function() {
    var fadeElems = document.querySelectorAll('.fade-in');
    
    fadeElems.forEach(function(elem) {
        elem.classList.add('show');
    });
});

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function updateAge() {
    const birthdate = '2005-08-01'; // Format: YYYY-MM-DD
    const ageElement = document.getElementById('age');
    ageElement.textContent = calculateAge(birthdate);
}

document.addEventListener('DOMContentLoaded', function() {
    updateAge();
    setInterval(updateAge, 1000 * 60 * 60 * 24); // Update every day
});