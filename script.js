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
    
    $('.bar').each( function (index,element) {
        let W = $(element).attr("data-level");
        $(element).css("width",W);
    })
})