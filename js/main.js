
var modal = document.getElementById('modal-window');
var modalBtn = document.getElementById('modal-btn');
var closeBtn = document.getElementsByClassName('close')[0];

$("#modal-btn").on("click",openModal);
$(".close").on("click",closeModal);
$(window).on("click",outsideClick);


function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}


function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
} 


  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });

$('.box h2').click(function(e){
	var a = $(this).parent().children('div');
	a.fadeToggle(1500);
})