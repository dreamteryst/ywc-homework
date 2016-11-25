/*
* @Author: dreamtery
* @Date:   2016-11-26 01:48:03
* @Last Modified by:   dreamtery
* @Last Modified time: 2016-11-26 02:03:43
*/
$(document).ready(function (){

  $(".navbar-nav>li>a,#continue").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 500);
  });
});