$(document).ready(function () {
    var fixedbarArray = [
            document.getElementById("fixedbar1").style,
            document.getElementById("fixedbar2").style,
            document.getElementById("fixedbar3").style
        ],

        topPos,
        newWidth,
        mainNav = $(".sidenav"),
        magicLine = $("#bar"),
        scrollBool = [true, true, true];

    // initialize the sidenav
    magicLine.css("top", $(".current_page_item").position().top)


    clickHooks()

    // Scrolling attributes
    $(window).bind('scroll resize', function () {
        var scrollValue = $(this).scrollTop();

        fixedBarDynamic(scrollValue);
        animateSidenav(scrollValue);
        titleMover(scrollValue);
    });

    function clickHooks () {
        $('#aboutNav').mousedown(function () {
            $('html, body').animate({
                'scrollTop': $('#about').offset().top}, 'fast', 'swing');
        });
        $('#projectsNav').mousedown(function () {
            $('html, body').animate({
                'scrollTop': $('#projects').offset().top}, 'fast', 'swing');
        });
        $('#contactNav').mousedown(function () {
            $('html, body').animate({
                'scrollTop': $('#contact').offset().top}, 'fast', 'swing');
        });
    }


    function titleMover (scrollValue) {
        var topArray = [
                $('#about').offset().top,
                $('#projects').offset().top,
                $('#contact').offset().top
            ];

        for (var i = 0; i < fixedbarArray.length; i += 1) {
            if (scrollValue <= topArray[i]) {
                arr = topArray[0] - 400;
                fixedbarArray[i].position = "absolute";
                fixedbarArray[i].marginTop = arr + "px";
            } else if (scrollValue >= topArray[i] && scrollValue < topArray[i + 1] - 58) {
                fixedbarArray[i].position = "fixed";
                fixedbarArray[i].marginTop = -topArray[i] + "px";
            } else if (scrollValue >= topArray[i + 1] - 58) {
                fixedbarArray[i].position = "absolute";
                fixedbarArray[i].marginTop = topArray[i + 1] - topArray[i] - 58 + "px";
            }
        }
    }


    function animateSidenav (scrollValue) {
        if (scrollValue < $('#projects').offset().top) {
            if (scrollBool[0]) {
                topPos = $('#aboutNav').position().top;
                magicLine.stop().animate({
                    top: topPos,
                });
                scrollBool = [false, true, true];
            }

        } else if (scrollValue >= $('#projects').offset().top && scrollValue < $('#contact').offset().top) {
            if (scrollBool[1]) {
                topPos = $('#projectsNav').position().top;
                magicLine.stop().animate({
                    top: topPos,
                });
                scrollBool = [true, false, true];
            }

        } else if (scrollValue >= $('#contact').offset().top) {
            if (scrollBool[2]) {
                topPos = $('#contactNav').position().top;
                magicLine.stop().animate({
                    top: topPos,
                });
                scrollBool = [true, true, false];
            }
        }
    }


    function fixedBarDynamic (scrollValue) {
        var scrollEnd = 400;

        if (scrollValue < scrollEnd) {
            document.getElementById("sidenav").style.position = "absolute";
            document.getElementById("sidenav").style.margin = "0px 0px 0px 0px";
            document.getElementById("bar").style.position = "absolute";
            document.getElementById("bar").style.margin = "15px 0px 0px 0px";
            document.getElementById("barbar").style.position = "absolute";
            document.getElementById("barbar").style.margin = "0px 0px 0px 4px";

        } else if (scrollValue >= scrollEnd) {
            document.getElementById("sidenav").style.margin = "-400px 0px 0px 0px";
            document.getElementById("sidenav").style.position = "fixed";
            document.getElementById("bar").style.margin = "15px 0px 0px 0px";
            document.getElementById("bar").style.position = "fixed";
            document.getElementById("barbar").style.margin = "0px 0px 0px 4px";
            document.getElementById("barbar").style.position = "fixed";
        }
    }
});