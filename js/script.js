$(window).scroll(function() {
   var hT = $('#passion').offset().top,
       hH = $('#passion').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1521811628991-7a3ea581f7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')";
   } else {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1476635243339-c8d9e8778218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')";
   }
});