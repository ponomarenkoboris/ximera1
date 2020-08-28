$(window).on('load', function () {
        $preloader = $('.himera'),
                $loader = $preloader.find('.himera-animation');

        $loader.delay(2500).fadeOut();
        $preloader.delay(3000).fadeOut('slow');
});