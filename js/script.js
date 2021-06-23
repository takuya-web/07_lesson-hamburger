$(function() {
  $(".p-menu__button").click(function() {
    $(".c-sidebar").show("slide" , {direction: "right"} , 200);

    $(function() {
      $(".c-close__button").click(function() {
        $(".c-sidebar").hide("slide" , {direction: "right"} , 200);
      });
    });
  });
});