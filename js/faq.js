const faqButtons = document.querySelectorAll('.faq__button');

faqButtons.forEach(function (faqButton) {
   faqButton.addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
   });
});