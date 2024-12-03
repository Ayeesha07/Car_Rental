// Example to add hover effect on the "Book Now" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
});
