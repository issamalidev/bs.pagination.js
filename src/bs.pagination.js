/*
    script to apply bootstrap pagination in asp.net gridview
    by Issam Ali 
    http://issamsoft.com

    Usage:
    ------
    set gridvew property: PagerStyle-CssClass="bs-pagination" 
*/

$(document).ready(function () {
                $('.bs-pagination td table').each(function (index, obj) {
                    convertToPagination(obj)
                });    
});

function convertToPagination(obj) {
    var list = $('<ul class="pagination"/>');

    $(obj).find("tbody tr").each(function () {
        var p = $(this).children().map(function () {
            return "<li>" + $(this).html() + "</li>";
            return $(this).html();
        });

        list.append("<li>" + $.makeArray(p).join("") + "</li>");
    });
    list.find('span').parent().addClass('active');

    $(obj).replaceWith(list);
}
           
