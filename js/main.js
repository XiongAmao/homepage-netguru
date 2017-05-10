$(document).ready(function () {
    var swiper = new Swiper('.header-swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
    });

    // section service->img:hover

    let servicesItemsImgUrl = {
        'nomarl': [
            'img/n_web.png', 'img/n_mobile.png', 'img/n_design.png'
        ],
        'hover': [
            'img/n_web_hover.png', 'img/n_mobile_hover.png', 'img/n_design_hover.png'
        ],

    }
    let $serviceItems = $('.services-items')
    for (let i = 0; i < $serviceItems.length; i++) {
        $serviceItems.eq(i)
            .mouseenter(function (e) {
                $(this).find('img').attr('src', servicesItemsImgUrl.hover[i])

            })
            .mouseleave(function (e) {
                $(this).find('img').attr('src', servicesItemsImgUrl.nomarl[i])
            })

    }


});
