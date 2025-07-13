window.addEventListener('DOMContentLoaded', function () {


    setTimeout(() => {
        $('#intro').addClass('on');
    }, 500)
    //timeout:500 원본

    setTimeout(() => {
        $('#section01').addClass('on');
    }, 4500)



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        /* 우측 list 클릭했을 때 */
        if (scrollTop >= 0 && scrollTop <= 3581) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list01').addClass('on');
        }

        if (scrollTop >= 3581 && scrollTop <= 6485) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list02').addClass('on');
        }

         if (scrollTop >= 6485 && scrollTop <= 21005) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list03').addClass('on');
        }

         if (scrollTop >= 21005 && scrollTop <= 22941) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list04').addClass('on');
        }

         if (scrollTop >= 22941 && scrollTop <= 34557) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list05').addClass('on');
        }

         if (scrollTop >= 34557 && scrollTop <= 47200) {
            $('.right_navi .page .list').removeClass('on');
            $('.right_navi .page .list06').addClass('on');
        }


    });


   /* /!*  slide,click event section *!/
    $('.right_navi .hamburger').click(function () {
        $('#mega').toggleClass('on');
        $(this).toggleClass('on');
    })


    let value = 0;
    $('#mega .list > div').click(function () {
        $('#mega').removeClass('on')
        let idx = $('#mega .list > div').index(this);
        console.log(idx)

        if (idx === 0) value = 0; /!* 메뉴 클릭 했을 떄*!/
        if (idx === 1) value = 2000;
        if (idx === 2) value = 3000;
        if (idx === 3) value = 4000;
        if (idx === 4) value = 5000;


        container.scrollTo(0, value, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });*/

    /*  slide,click event section */
    $('.right_navi .hamburger').click(function () {
        $('#mega').toggleClass('on');
        $(this).toggleClass('on');
    })


    let value = 0;
    $('#mega .list > div').click(function () {
        $('#mega').removeClass('on')
        let idx = $('#mega .list > div').index(this);
        console.log(idx)

        $('.right_navi .hamburger').removeClass('on');

        if (idx === 0) value = 0; /* 메뉴 클릭 했을 떄*/
        if (idx === 1) value = 3581;
        if (idx === 2) value = 6485;
        if (idx === 3) value = 21005;
        if (idx === 4) value = 22941;
        if (idx === 5) value = 34557;


        container.scrollTo(0, value, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });




    let value2 = 0;
    $('.right_navi .page > div').click(function () {

        let idx2 = $('.right_navi .page > div').index(this);
        console.log(idx2)

        $('.right_navi .page > div').removeClass('on');
        $('.right_navi .page > div').eq(idx2).addClass('on');

        if (idx2 === 0) value2 = 0; /* 메뉴 클릭 했을 떄*/
        if (idx2 === 1) value2 = 3581;
        if (idx2 === 2) value2 = 6485;
        if (idx2 === 3) value2 = 21005;
        if (idx2 === 4) value2 = 22941;
        if (idx2 === 5) value2 = 34557;


        container.scrollTo(0, value2, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });



    gsap.to('#section01 .fix-this-01', {
        scrollTrigger: {
            trigger: "#section01 .trigger-this-01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section01 .dim2', {
        scale: 40,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 50000,
            /*end: () => "+=" + 800,*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .dim1, #section01 .sound_box', {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .text > div > img', {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section01",
            start: "200 top",
            /*end: () => "+=" + 500,*/
            end: () => "+=" + 1800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .scroll_group', {
        y : 100,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section02 .fix-this-02', {
        scrollTrigger: {
            trigger: "#section02 .trigger-this-02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    /*https://bennettfeely.com/clippy/*/

    // gsap.to('#section02 .frame', {
    //     clipPath: "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
    //     scrollTrigger: {
    //         trigger: "#section02",
    //         start: "top top",
    //         end: () => "+=" + 1000,
    //         // end: 'bottom bottom',
    //         scrub: true,
    //     }
    // });


    let vid02 = document.querySelector('#vid02');

    gsap.to('#section02 .frame', {
        scale:20,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: 'bottom bottom',
            /*end: () => "+=" + 1000, 원본*/
            // end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                vid02.play();
                console.log('ddd');
            },
        }
    });

    gsap.to('#section03 .fix-this-03', {
        scrollTrigger: {
            trigger: "#section03 .trigger-this-03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    /*1번쨰 구동*/
    gsap.to('#section03 .se03_cnt02', { // 움직일 대상
        clipPath: "inset(0% 0% 0% 0%)", //움직임
        scrollTrigger: {
            trigger: "#section03", //기준점
            start: "800 top", //시작점
            // end: () => "+=" + 6000, /*end: () => "+=" + 6000,*/ //끝나는 점
            end: () => "+=" + 20000, /*end: () => "+=" + 6000,*/ //끝나는 점
            /*end: 'bottom bottom', //끝나는 점 없을 시 사용*/
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02', {
        /*y:-833,*/ y: -1391,
        scrollTrigger: {
            trigger: "#section03",
            start: "3200 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner .title_center', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section03",
            start: "4100 top",
            /*end: () => "+=" + 500,*/
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner', {
        y: -3768, /*y: -640,*/
        scrollTrigger: {
            trigger: "#section03",
            start: "5400 top",
            end: () => "+=" + 4000, /*end: () => "+=" + 800,*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner .title_center', {
        y: 3768, /*y: 640,*/
        scrollTrigger: {
            trigger: "#section03",
            start: "5400 top",
            end: () => "+=" + 4000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner .title_center > img', {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section03",
            start: "7600 top",
            end: () => "+=" + 1800,
            /*end: () => "+=" + 800, 원본*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });
 /*   gsap.to('#section03 .se03_cnt02 .content2_up', {
        y: -3412,
        scrollTrigger: {
            trigger: "#section03",
            start: "7400 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .content2_down', {
        y: -3412,
        scrollTrigger: {
            trigger: "#section03",
            start: "7400 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });*/

    gsap.to('#section03 .se03_cnt02 .content2_up .image_table_dimmed', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section03",
            /*start: "9400 top",
            end: () => "+=" + 1800, 원본*/
            start: "9400 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .content2_up .scroll', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section03",
            start: "9800 top",
            end: () => "+=" + 2000,/*end: () => "+=" + 3060,*/
            /*start: "10400 top",
            end: () => "+=" + 6000, 원본*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .content2_up .btn', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section03",
            start: "11800 top",
            end: () => "+=" + 300,
            /*start: "10400 top",
            end: () => "+=" + 6000, 원본*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    /*----------------------------*/

    /*
    gsap.to('#section03 .se03_cnt02', {
        /!*y:-90,*!/y:-833,
        scrollTrigger: {
            trigger: "#section03",
            start: "2800 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner .title_center', {
        opacity:1,
        scrollTrigger: {
            trigger: "#section03",
            start: "3500 top",
            end: () => "+=" + 500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner', {
        y:-640,
        scrollTrigger: {
            trigger: "#section03",
            start: "4000 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .inner .title_center', {
        y:640,
        scrollTrigger: {
            trigger: "#section03",
            start: "4000 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section03 .se03_cnt02 .content2_up', {
        y:-3500,
        scrollTrigger: {
            trigger: "#section03",
            start: "5000 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .se03_cnt02 .content2_down', {
        y:-3500,
        scrollTrigger: {
            trigger: "#section03",
            start: "5000 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
*/


    gsap.to('#section05 .fix-this-05', {
        scrollTrigger: {
            trigger: "#section05 .trigger-this-05",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section05 .background .bg_01', {
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            /*end: () => "+=" + 30000, 원본*/
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .image_02', {
        x: 295,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            /*end: () => "+=" + 1000,*/
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .image_03', {
        x: 450,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_01', {
        x: 581,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_02', {
        x: 692,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .image_06', {
        x: 830,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .image_07', {
        x: 947,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .image_08', {
        x: 1097,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_03', {
        x: 1243,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 6000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_01 .text_01', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section05",
            start: "7960 top",
            end: () => "+=" + 3800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_02 .text_02', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section05",
            start: "7960 top",
            end: () => "+=" + 3800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .component .group_03 .text_03', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section05",
            start: "7960 top",
            end: () => "+=" + 3800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section05 .background .bg_dimmed', {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section05",
            start: "7960 top",
            end: () => "+=" + 3800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });




    gsap.to('#section06 .fix-this-06', {
        scrollTrigger: {
            trigger: "#section06 .trigger-this-06",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section06 .footer', {
        y:0,
        scrollTrigger: {
            trigger: "#section06",
            start: "7800 top", /*13000*/
            end: () => "+=" + 3000,
            /*start: "3000 top",
            end: () => "+=" + 600, 원본*/
            // end: 'bottom bottom',
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section06 .content .image_02', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section06",
            /*start: "9400 top",
            end: () => "+=" + 1800, 원본*/
            start: "3000 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section06 .content .text_center_01', {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section06",
            /*start: "9400 top",
            end: () => "+=" + 1800, 원본*/
            start: "3000 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section06 .content .text_center_02', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#section06",
            /*start: "9400 top",
            end: () => "+=" + 1800, 원본*/
            start: "3000 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

   /* gsap.to('#section06 .bg_dimmed', {
        opacity: 0.6,
        scrollTrigger: {
            trigger: "#section06",
            /!*start: "9400 top",
            end: () => "+=" + 1800, 원본*!/
            start: "3000 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });*/


    gsap.to('#section04 .fix-this-04', {
        scrollTrigger: {
            trigger: "#section04 .trigger-this-04",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    $('#section04 .se04_slide').slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $(''), //prev
        nextArrow: $(''), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 9000,
        /*autoplaySpeed: 3000, // auto speed 원본*/
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: false, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    })


})


