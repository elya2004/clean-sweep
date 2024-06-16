const tableSectionTitle = document.querySelectorAll('.table__section-title');

tableSectionTitle.forEach((item) => {
    item.addEventListener('click', function() {
        this.classList.toggle('active')
    });
});