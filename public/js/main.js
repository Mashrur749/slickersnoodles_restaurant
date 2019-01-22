var modal = document.getElementById('modal-window');
var modalBtn = document.getElementById('modal-btn');
var closeBtn = document.getElementsByClassName('close')[0];

$("#modal-btn").on("click", openModal);
$(".close").on("click", closeModal);
$(window).on("click", outsideClick);


function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}


function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


$("a").on('click', function (event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function () {
      window.location.hash = hash;
    });
  }
});

$('.box h3').click(function () {
  var boxes = $('.box');
  var boxdetail = $(this).parent().children('div');
  boxdetail.fadeToggle(800);
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].children[1].style.display = 'block' && boxes[i].children[1] != boxdetail[0s]) {
      boxes[i].children[1].style.display = 'none';
    }
  }
})