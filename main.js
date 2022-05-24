const ready = (callback) => {
    if (document.readyState!='loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

ready(() => {

    let navbarOpen = false;

    const navbar = document.querySelector('.navbar');

    document.querySelector('.open-navbar-btn').onclick = () => {
        navbar.classList.add('open');
    }

    document.querySelector('.navbar').onclick = () => {
        navbar.classList.remove('open');
    }
});