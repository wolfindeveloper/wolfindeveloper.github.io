$(document).ready(function(){
	// select
	$(function(){
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var i, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
});

// POPUP
$('.popup').click(function(){
	var popup = $(this).find('.mypopup');
	popup.toggleClass('show');
});

// BLOCKS-TABLE
// 
$('.block-icon').click(function(){
	var viewBlock = $('.content-block');
	var iconBlock = $(this).find('img');
	var iconTable = $('.table-icon').find('img');
	if (viewBlock.is(':hidden')) {
		viewBlock.fadeIn(400);
		$('.content-table').fadeOut();
		$('.content-block').removeClass('view-active');
		iconTable.attr({
			src: "img/table-icon.png"
		});
		iconBlock.attr({
			src: "img/block-icon.png"
		});
	}
});

$('.table-icon').click(function(){
	var viewList = $('.content-table');
	var iconTable = $(this).find('img');
	var iconBlock = $('.block-icon').find('img');
	if (viewList.is(':hidden')) {
		viewList.fadeIn(400);
		$('.content-block').fadeOut();
		$('.content-table').removeClass('view-active');
		iconTable.attr({
			src: "img/table-icon-active.png"
		});
		iconBlock.attr({
			src: "img/block-icon-no.png"
		});

	}
});

// LIKE-REPORT-ICONS
$('.like-icon').click(function(){
	$(this).toggleClass('active');
});

$('.report-icon').click(function(){
	$(this).toggleClass('active');
});

$('.star-icon').click(function(){
	$(this).toggleClass('active');
});

// UP-DOWN-ICON
$('.drop-icon').click(function(){
	$(this).find('img').toggleClass('rotate');
});


}); //end



// TABS
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// TABS2
function openCity1(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();

// RANGE
for( input of document.querySelectorAll("input[type=range]")){
   actualizarInput(input) 
}

document.addEventListener("input", function(evt) {
   var input = evt.target;
   actualizarInput(input)
});

function actualizarInput(input){
   var label = input.parentElement.querySelector("label");
   label.innerHTML = input.value;
   var inputMin = input.getAttribute("min");
   var inputMax = input.getAttribute("max");
   var unidad = (inputMax - inputMin) / 100;
   input.style.setProperty("--value", (input.value - inputMin)/unidad);  
}


// doublescroll
$(function(){

$("#doublescroll")
	.before($("<div class='doublescroll'></div>")
		.append($("<div></div>")
  			.css({
  				"padding-top":"1px",
  				"width": $("#doublescroll")[0].scrollWidth+"px"
  			})
  			.text('\xA0')
  		)
		.css({
			"overflow":"auto",
			"overflowY":"hidden",
			"position":"fixed",
			"width":"100%",
			"bottom":"0"
		}).
		bind("scroll",function(){
			$("#doublescroll")[0].scrollLeft = $(this)[0].scrollLeft;
		})
	)
	.bind("scroll",function(){
		$(this).prev()[0].scrollLeft = $(this)[0].scrollLeft;
	})
});

$('.tablinks2').click(function(){
	var table = $('#Paris');
	if (table.is(':hidden')) {
		console.log('hello');
$("#doublescroll2")
	.before($("<div class='doublescroll'></div>")
		.append($("<div></div>")
  			.css({
  				"padding-top":"1px",
  				"width": $("#doublescroll2")[0].scrollWidth+"px"
  			})
  			.text('\xA0')
  		)
		.css({
			"display":"block",
			"overflow":"auto",
			"overflowY":"hidden",
			"position":"fixed",
			"width":"100%",
			"bottom":"0"
		}).
		bind("scroll",function(){
			$("#doublescroll2")[0].scrollLeft = $(this)[0].scrollLeft;
		})
	)
	.bind("scroll",function(){
		$(this).prev()[0].scrollLeft = $(this)[0].scrollLeft;
	})
}
});

// TABS-FUNCTION

$(function(){
$('.ico').click(function(){
var ico1 = $('.ico1');
var ended1 = $('.ended1');
if ($(this).hasClass('active')) {
  ico1.addClass('active');
  $('#London1').css('display', 'block');
  ended1.removeClass('active');

}
});

$('.ico1').click(function(){
var ico = $('.ico');
var ended = $('.ended');
if ($(this).hasClass('active')) {
  ico.addClass('active');
  $('#London').css('display', 'block');
  ended.removeClass('active');

}
});

$('.ended').click(function(){
var ended1 = $('.ended1');
var ico1 = $('.ico1');
if ($(this).hasClass('active')) {
  ended1.addClass('active');
  $('#Paris1').css('display', 'block');
  $('#London1').css('display', 'none');
  ico1.removeClass('active');

}
});

$('.ended1').click(function(){
var ended1 = $('.ended');
var ico1 = $('.ico');
if ($(this).hasClass('active')) {
  ended1.addClass('active');
  $('#Paris').css('display', 'block');
  $('#London').css('display', 'none');
  ico1.removeClass('active');

}
});
});




