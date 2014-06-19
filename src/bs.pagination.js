/*
    script to apply bootstrap pagination in asp.net gridview
    by Issam Ali 
    http://issamsoft.com

    Usage:
    ------
    set gridview property: PagerStyle-CssClass="bs-pagination" 
*/

$(document).ready(function () {
  $('.bs-pagination td table').each(function (index, obj) {
    convertToPagination(obj)
  });
});

function convertToPagination(obj) {
  var liststring = '<ul class="pagination">';

  $(obj).find("tbody tr").each(function () {
    $(this).children().map(function () {
      liststring = liststring + "<li>" + $(this).html() + "</li>";
    });
  });
  liststring = liststring + "</ul>";
  var list = $(liststring);
  list.find('span').parent().addClass('active');

  $(obj).replaceWith(list);
}
           
