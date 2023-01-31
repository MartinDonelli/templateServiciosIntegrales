const toggleDarkModeButton = document.querySelector('#switch');


toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleDarkModeButton.toggle('active');

});


  