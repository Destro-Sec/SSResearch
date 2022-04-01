 $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }

        })
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [1000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })