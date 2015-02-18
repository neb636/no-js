;(function($) {
    $.fn.noJs = function() {
        $(this).find('*').each(function () {
            $(this).text(function(i,text){
                return text.replace(/j/gi, '');
            });
        });
    }
}(jQuery));