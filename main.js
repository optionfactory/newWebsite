const ready = (callback) => {
    if (document.readyState!='loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

ready(() => {

    const navbar = document.querySelector('.navbar');

    document.querySelector('.open-navbar-btn').onclick = (event) => {
        event.stopPropagation();
        navbar.classList.add('open');
    }

    document.querySelector(':not(.open-navbar-btn)').onclick = () => {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
        }
    }

    document.querySelectorAll('.project-details-btn').forEach(el => {
        el.onclick = (event) => {
            const pId = event.target.closest('.project-details-btn').dataset.projectId;
            document.querySelector(`#project-${pId}-modal`).showModal();
        }
    });
    document.querySelectorAll('.close-modal-btn').forEach(el => {
        el.onclick = (event) => {
            const modal = event.target.closest('.project-modal');
            modal.setAttribute('closing', '');
            modal.addEventListener('animationend', () => {
                modal.close();
                modal.removeAttribute('closing');
            }, {once: true});
        }
    });
});