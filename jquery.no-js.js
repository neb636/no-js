;(function($) {
    $.fn.noJs = function() {
        $(this).find(":not(iframe)").addBack()
            .contents().filter(function() { return this.nodeType == 3; }) //return only text nodes
            .each(function () {
                $(this).replaceWith( $(this).text().replace(/j/gi,'') );
            });
        return $(this);
    }
}(jQuery));