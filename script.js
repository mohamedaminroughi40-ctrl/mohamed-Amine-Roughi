$(document).ready( function () {
    
    $('header a').on("click",function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html , body').animate(
                { scrollTop: target.offset().top -50},
            1000)
        }
    });

    $('#skills').mouseenter(function () {
        $('.bar').each(function(){
            if ( Number( $(this).attr("data-moved") == 1 )) {
            let width = $(this).attr("data-level");
            $(this).css("width",width);
            $(this).attr("data-moved", "2");
            }
        })
        
    })
})