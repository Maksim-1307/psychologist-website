$('.slider-3__image').on('click', function(){
    $(this).parent().children().removeClass('slider-3__image--current');
    $(this).addClass('slider-3__image--current');
    change_slider3($(this).parent());
});

function change_slider3($img_block){
    $images = $($img_block).children();
    //$margin = $($img_block).css('margin-left');
    $width = getComputedStyle(document.documentElement).getPropertyValue('--img-width');
    $images.each(function(i){
        if ($(this).hasClass('slider-3__image--current')){
            $margin = i * $width;
            $($img_block).css('margin-left', 'calc((100vw - var(--img-width) * 0.85 * 2 - var(--img-width) - 40px) / 2 - ' + (i - 1) + ' * var(--img-width) * 0.85 - '+ (i-1)*20 +'px)');
        }
    });
}