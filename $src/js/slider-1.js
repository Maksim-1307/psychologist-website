function change_slide($slider, $next = true){
    //$slider.css('background', 'red');
    $slider.trigger('change_slide', [$next]);
    
}

function set_image($obj, $url){
    $($obj).css('background-image', 'url("' + $url + '")');
    $($obj).find('img').attr('src', $url);
}

$('.adaptive-image').on('set_image', function(event, url){
    console.log('trigged');
    $(this).css('background-clor', 'red');
    console.log('sdf' + $(this).css('background'));
});


function setOnclickSildes() {
    $('.slider-1__image-1').on('click', function () {
        change_slide($(this).parent().parent().parent(), true);
    });
    $('.slider-1__image-3').on('click', function () {
        change_slide($(this).parent().parent().parent(), true);
    });
}


$(document).ready(function(){
    $('.slider-1').trigger('init');
});
$('.slider-1').on('init', function (event){
    $slides_obj = $(this).find('.slider-1__images');
    $slides = $($slides_obj).children();
    //$move = next * 2 - 1;
    $img_urls = $(this).find('.slider-1__images-urls').children();
    $count = $($img_urls).length;
    $current = parseInt($(this).find('.slider-1__current-slide').text());
    $texts = $(this).find('.slider-1__text-contents').children();
    $url = 'none';
    for(let i = 0; i < 5; i++){
        $ID = i + $current;
        if ($ID < 0) $ID += $count;
        $slideID = $ID - 2;
        if ($slideID < 0) $slideID += $count;
        $url = $($img_urls[$slideID]).text();
        console.log('element class: ' + $($slides[$ID]).attr('class'));
        console.log('element url: ' + $url);
        set_image($slides[$ID], $url);
    }
    // if (next) {
    //     $id = $current + 2;
    //     if ($id >= $count) $id -= $count;
    //     $url = $($img_urls[$id]).text();

    // } else {
    //     $id = $current - 2;
    //     if ($id < 0) $id = $count - 1;
    //     $url = $($img_urls[$id]).text();
    // }

    console.log($url);

    $(this).find('.slider-1__text').html($($texts[$current]).text());
});

$('.slider-1').on('change_slide', function(event, next){
    $slides_obj = $(this).find('.slider-1__images');
    $slides = $($slides_obj).children();
    $move = next * 2 - 1;
    $img_urls = $(this).find('.slider-1__images-urls').children();
    $count = $($img_urls).length;
    $current = parseInt($(this).find('.slider-1__current-slide').text());
    $current = $current - $move;
    if ($current > $count) $current -= $count;
    if ($current < 0) $current = $count - 1;
    $(this).find('.slider-1__current-slide').html(parseInt($current));
    $texts = $(this).find('.slider-1__text-contents').children();
    $url = 'none';
    if (next){
        $id = $current - 2;
        if ($id < 0) $id += $count;
        $url = $($img_urls[$id]).text();     
        console.log($id);
    } else {
        $id = $current + 2;
        if ($id >= $count) $id -= $count;
        $url = $($img_urls[$id]).text();
        
    }
    
    console.log($url);

    $(this).find('.slider-1__text').html($($texts[$current]).text());

    if (next){
        $slides.each(function(id){
            $($slides[id]).removeClass('slider-1__image-' + id);
            $($slides[id]).addClass('slider-1__image-' + (id + $move));
            if (id == $slides.length - 1){
                $slides_obj.prepend('<div class="adaptive-image slider-1__image-0"><img src=""></div>');
                $slides[id].remove();

                
            }
        });
        $slides_obj = $(this).find('.slider-1__images');
        $slides = $($slides_obj).children();

        set_image($slides[0], $url);
        console.log($slides[0]);
    } else {
        $slides.each(function (id) {
            $ID = $slides.length - id - 1;
            $($slides[$ID]).removeClass('slider-1__image-' + $ID);
            $($slides[$ID]).addClass('slider-1__image-' + ($ID + $move));
            if ($ID == 0) {
                $slides[0].remove();
                $slides_obj.append('<div class="adaptive-image slider-1__image-4"><img src=""></div>');
                //set_image(, $url);
            }
        });
        $slides_obj = $(this).find('.slider-1__images');
        $slides = $($slides_obj).children();

        set_image($slides[4], $url);
    }
});


$('.slider-1__button-1').on('click', function(){
    change_slide($(this).parent().parent().parent(), true);
});
$('.slider-1__button-2').on('click', function () {
    change_slide($(this).parent().parent().parent(), false);
});
$('.slider-1__bg-button-1').on('click', function () {
    change_slide($(this).parent().parent().parent(), true);
});
$('.slider-1__bg-button-2').on('click', function () {
    change_slide($(this).parent().parent().parent(), false);
});
