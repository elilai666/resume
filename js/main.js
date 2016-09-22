;$(function()
{
    var sidebar = $('#sidebar'), //选择侧栏
        mask = $('.mask'),
        backButton = $('#back-to-top'),
        sidebarTrigger = $('#sidebar-trigger');

    function showSideBar(){
        mask.fadeIn(500);
        sidebar.css('right', 0);
    }
    function hideSideBar(){
        mask.fadeOut(500);
        sidebar.css('right', -sidebar.width());
    }
    function backToTop() {
        $('html, body').animate({
            scrollTop:0
        }, 800);
    }


    sidebarTrigger.on('click', showSideBar);
    mask.on('click', hideSideBar);
    backButton.on('click', backToTop)

    $(window).on('scroll', function () {
        if($(window).scrollTop() > $(window).height()) {
            backButton.fadeIn();
        } else {
            backButton.fadeOut();
        }
    })

    
    //平滑滚动导航
    $('#sidebar a, .logo a, .more a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 50}, 600);
        event.preventDefault();
    });

    $(window).trigger('scroll');
})