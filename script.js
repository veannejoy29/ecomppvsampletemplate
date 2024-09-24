function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

    // Event listener for nav links
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#home');
    });

    document.getElementById('products-link').addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#products');
    });

    document.getElementById('order-link').addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#order');
    });

    document.getElementById('newarrivals-link').addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#new-arrivals');
    });

    document.getElementById('contactus-link').addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#contact-us');
    });

