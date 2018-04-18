$(function() {

    var AppPlugins = {


        tabs: function () {

            $('.categoryItems li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('.categoryItems li').removeClass('current');
                $('.grid').removeClass('current');
                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })
        }
    };


    /* ------ Plugins Init ------ */

    AppPlugins.tabs();

});