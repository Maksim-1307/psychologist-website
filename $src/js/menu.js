var menuHeight = $('.burger-menu').css('height');
var menuOpened = false;
console.log(menuHeight);
$('.burger-menu').css('top', '-' + menuHeight);

$('.burger-button').on('click', function (event) {
    if (menuOpened) {
        $('.burger-menu').css('top', '-' + menuHeight);
        $('.burger-button').removeClass('burger-button--active');

    } else {
        $('.burger-menu').css('top', '0');
        $('.burger-button').addClass('burger-button--active');
    }
    menuOpened = !menuOpened;
});