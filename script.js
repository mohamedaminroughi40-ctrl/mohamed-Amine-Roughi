$(document).ready( function () {

    $('#hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('#nav-menu').toggleClass('active');
    });


    $('#nav-menu a').on('click', function() {
        $('#hamburger').removeClass('active');
        $('#nav-menu').removeClass('active');
    });

    
    $(document).on('click', function(e) {
        if (!$(e.target).closest('header').length) {
            $('#hamburger').removeClass('active');
            $('#nav-menu').removeClass('active');
        }
    });

    
    $('header a').on("click",function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html , body').animate(
                { scrollTop: target.offset().top -50},
            1000)
        }
    });

    $(window).on('scroll', function() {
    let skillsTop = $('#skills').offset().top + 300;
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    if (skillsTop < windowBottom) {
        $('.bar').each(function() {
            let W = $(this).attr('data-level');
            $(this).css('width', W);
        });
    }
    });
})