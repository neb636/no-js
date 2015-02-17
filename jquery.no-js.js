;(function($) {
    $.fn.noJs = function() {
        var childElements = this.selector + ' *';

        $(childElements).each(function () {
            var innerText = $(this).text().replace(/J/g, '').replace(/j/g, '');
            $(this).text(innerText);
        });
    }
}(jQuery));