document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    if (name === '') {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    
    if (email === '') {
        showError('emailError', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    
    if (message === '') {
        showError('messageError', 'Message is required.');
        isValid = false;
    }

    
    if (isValid) {
        
        window.location.href = "success.html";
    }
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}


function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.innerText = '');
}
