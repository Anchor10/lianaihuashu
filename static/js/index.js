$(function(){
    //轮播图
    var swiper1 = new Swiper('#swiper1', {
        autoplay: {
            delay: 5000,
        },
        loop:true,
        pagination: {
            el: '#pagination1',
        },

    })

    //情感攻略
    $(".qgType").on("mouseenter",".type",function(){
        $(this).addClass("ac").siblings(".type").removeClass("ac");
        $(".con-list").eq($(this).index()).show().siblings(".con-list").hide();
    })
})