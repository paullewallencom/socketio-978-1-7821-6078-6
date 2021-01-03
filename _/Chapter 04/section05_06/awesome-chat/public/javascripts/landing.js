$(function(){
   $('#startchat').click(function(){
     document.cookie = "nickname=" + $('#nickname').val() + ";; path=/";
     window.location = "/rooms";
   });
});