$(document).ready(function () {

    /* First element should be white, with sea-green color */
    $('.sideNav1 ul li:first a').addClass('text-white btn-custom');
    $('.sideNav2 ul li:first a').addClass('text-white btn-custom');

    /* Only show first element */
    $('.tcPublications:not(:first)').css({ "display": "none" });
    $('.tcResearchProjects:not(:first)').css({ "display": "none" });

    //$('.sideNav1 ul li a, .sideNav2 ul li a').mouseover(function (event) {
    //    Toggle(event, $(this));
    //});

    $('.sideNav1 ul li a, .sideNav2 ul li a').click(function (event) {
        Toggle(event, $(this));
    });

    function Toggle(event, context) {
        event.preventDefault();
        var content = context.attr('href');
        context.addClass('text-white btn-custom');
        /* (this) is anchor tag, so go for its parent which is (li), then look for its siblings and its children (a), then apply css */
        var childrenOfSiblings = context.parent().siblings().children();
        childrenOfSiblings.removeClass('text-white btn-custom'); $(document).ready(function () {

            /* First element should be white, with sea-green color */
            $('.sideNav1 ul li:first a').addClass('text-white btn-custom');
            $('.sideNav2 ul li:first a').addClass('text-white btn-custom');

            /* Only show first element */
            $('.tcPublications:not(:first)').css({ "display": "none" });
            $('.tcResearchProjects:not(:first)').css({ "display": "none" });

            //$('.sideNav1 ul li a, .sideNav2 ul li a').mouseover(function (event) {
            //    Toggle(event, $(this));
            //});

            $('.sideNav1 ul li a, .sideNav2 ul li a').click(function (event) {
                Toggle(event, $(this));
            });

            function Toggle(event, context) {
                event.preventDefault();
                var content = context.attr('href');
                context.addClass('text-white btn-custom');
                /* (this) is anchor tag, so go for its parent which is (li), then look for its siblings and its children (a), then apply css */
                var childrenOfSiblings = context.parent().siblings().children();
                childrenOfSiblings.removeClass('text-white btn-custom');
                /* show the div associated with the anchor, and hide all other siblings */
                $(content).css({ "display": "block" });
                $(content).siblings('.tab-content').css({ "display": "none" });
            }
        });
        /* show the div associated with the anchor, and hide all other siblings */
        $(content).css({ "display": "block" });
        $(content).siblings('.tab-content').css({ "display": "none" });
    }
});


    