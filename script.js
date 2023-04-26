document.addEventListener("DOMContentLoaded", function(event) {

    const link = document.querySelector('#target');
    const hidden = document.querySelector('.hidden');


    link.addEventListener("click", function(event){
        hidden.classList.remove('hidden');
        link.classList.add('hidden');
        event.preventDefault();
    });




});