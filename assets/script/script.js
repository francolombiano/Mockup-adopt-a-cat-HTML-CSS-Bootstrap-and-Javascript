
// Agrega este código JavaScript para activar el carrusel automático
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,  // Establece el intervalo de tiempo en milisegundos (2 segundos en este ejemplo)
  wrap: true,  // Indica si el carrusel debe volver a empezar cuando llega al último elemento
})


/*
otra manera de hacer el carousel con javascript es esta:
vincular las librebrias de jquery y el plugin slick en el HTML

<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
</head>

 <div class="carousel md-col-12">
                <div><img src="./assets/img/chat_1.jpg"></div>
                <div><img src="./assets/img/chat_2.jpg"></div>
                <div><img src="./assets/img/chat_3.jpg"></div>
              </div>

luego lo manipulas desde JS, el tiempo y ls veces que pasa se pueden 
programar desde sick

$(document).ready(function(){
    $('.carousel').slick();
  });*/
