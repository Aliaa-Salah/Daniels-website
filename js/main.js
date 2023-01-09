let aboutOffset = $('#about').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() > aboutOffset){
        $('nav').css('backgroundColor' , 'rgb(0, 0, 0 , 0.6)')
        $('.backToTop').fadeIn(500).css('display' , 'flex')
    }

    else{
        $('nav').css("backgroundColor" , "transparent")
        $('.backToTop').fadeOut(500)
    }
})


$('.backToTop').click(function(){

    $('html , body').animate({ scrollTop: 0}, 300)
})

$('.navbar-nav .nav-item a').click(function(){
console.log($(this).attr('href'));

    let clickedAnchorHref = $(this).attr('href');
    let sectionOffset = $(clickedAnchorHref).offset().top;
    $('html , body').animate({scrollTop: sectionOffset} , 500);
})