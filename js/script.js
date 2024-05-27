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

// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex'; // แสดง Popup
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none'; // ซ่อน Popup
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none'; // ซ่อน Popup เมื่อคลิกภายนอก
        }
    });
});
