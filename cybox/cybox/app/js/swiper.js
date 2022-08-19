var swiper =  new Swiper(".slider-main", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-next-main",
        prevEl: ".btn-prev-main",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

var swiper =  new Swiper(".sl-post", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".sl-post2", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".sl-parner", {
    slidesPerView:2,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 60,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 60,
        },
    },
});

var swiper =  new Swiper(".sl-post3", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".sl-roadmap", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 60,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
});
var swiper =  new Swiper(".sl-roadmap2", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 12,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
    },
});

var swiper =  new Swiper(".sl-team", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-next-team",
        prevEl: ".button-prev-team",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".mySwiper1", {
    // direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
    delay: 0.3, 
    }, 
    // autoplay:false,
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true
    });
    $(".mySwiper1").hover(function() {
        (this).swiper.autoplay.stop();
    }, 
    function() {
        (this).swiper.autoplay.start();
    });

var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 0.3, 
    reverseDirection: true,
    }, 
    // autoplay:false,
    freeMode: true, 
    speed: 2200,
    disableOnInteraction: true
    });

    $(".mySwiper2").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    var swiper = new Swiper(".mySwiper3", {
        // direction: "vertical",
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        },
        observer: true,
        observeParents: true,
        shortSwipes: false,
        longSwipes: false,
        allowTouchMove: true,
        reverseDirection: true,
        autoplay: {
        delay: 0.3, 
        }, 
        // autoplay:false,
        freeMode: true, 
        speed: 2000,
        disableOnInteraction: true
        });
        $(".mySwiper3").hover(function() {
            (this).swiper.autoplay.stop();
        }, 
        function() {
            (this).swiper.autoplay.start();
        });
    
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        },
        observer: true,
        observeParents: true,
        shortSwipes: false,
        longSwipes: false,
        allowTouchMove: true,
        autoplay: {
        delay: 0.3, 
        reverseDirection: true,
        }, 
        // autoplay:false,
        freeMode: true, 
        speed: 2200,
        disableOnInteraction: true
        });
    
        $(".mySwiper4").hover(function() {
            (this).swiper.autoplay.stop();
        }, function() {
            (this).swiper.autoplay.start();
        });

var swiper = new Swiper(".gallery-thumbs", {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        860: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
  });
  var swiper2 = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".btn-next-team",
      prevEl: ".btn-prev-team",
    },
    thumbs: {
      swiper: swiper,
    },
  });