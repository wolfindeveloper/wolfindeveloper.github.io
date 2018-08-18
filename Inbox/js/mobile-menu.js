(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.mobile-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }

      $('.mobile-header a').click(function(){
    var list = $('.mobile-header');
      list.removeClass('menu-opened');
    });
}());