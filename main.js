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

    document.querySelector(':not(.open-navbar-btn)') .onclick = () => {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
        }
    }
});