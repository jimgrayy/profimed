$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    });

    // Add navbar scrolling effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling for navbar links
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $(".navbar").outerHeight() // Adjust for fixed navbar
            }, 20, function(){ // Changed from 800 to 400 milliseconds
                window.location.hash = hash;
            });
        }
    });

    // Navbar link hover and active state
    $(".navbar-nav .nav-link").hover(
        function() {
            $(this).addClass("nav-hover");
        },
        function() {
            $(this).removeClass("nav-hover");
        }
    );

    // Set active nav item on scroll
    $(window).on('scroll', function() {
        $('.nav-link').removeClass('nav-active');
        let currentSection = '';
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            if ($(window).scrollTop() >= sectionTop - 60) {
                currentSection = $(this).attr('id');
            }
        });
        $('.navbar-nav .nav-link[data-section="' + currentSection + '"]').addClass('nav-active');
    });

    // Set active nav item on click
    $(".navbar-nav .nav-link").on('click', function() {
        $('.navbar-nav .nav-link').removeClass('nav-active');
        $(this).addClass('nav-active');
    });

    // Close mobile navbar when an item is clicked
    $(".navbar-box .nav-link").on('click', function() {
        $('.navbar-box').removeClass('navbar-box-show');
    });
});
