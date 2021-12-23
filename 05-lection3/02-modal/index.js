(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const backboard = document.getElementById('backboard');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'flex';
        backboard.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        backboard.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();