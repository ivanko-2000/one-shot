var $imagesCarousel = jQuery('.carouselOfImages').flickity({
  /* options, defaults listed */

  accessibility: false,
  /* enable keyboard navigation, pressing left & right keys */

  autoPlay: false,
  pauseAutoPlayOnHover: false,
  /* advances to the next cell
  if true, default is 3 seconds
  or set time between advances in milliseconds
  i.e. `autoPlay: 1000` will advance every 1 second */

  cellAlign: 'center',
  /* alignment of cells, 'center', 'left', or 'right'
  or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) */

  // cellSelector: '.topic-switcher__item',
  /* specify selector for cell elements */

  contain: false,
  /* will contain cells to container
  so no excess scroll at beginning or end
  has no effect if wrapAround is enabled */

  draggable: true,
  /* enables dragging & flickin
  freeScroll: false,
  enables content to be freely scrolled and flicked
  without aligning cells */

  friction: 0.2,
  /* smaller number = easier to flick farther */

  initialIndex: 0,
  /* zero-based index of the initial selected cell */

  lazyLoad: false,
  /* enable lazy-loading images
  set img data-flickity-lazyload="src.jpg"
  set to number to load images adjacent cells */

  percentPosition: true,
  /* sets positioning in percent values, rather than pixels
  Enable if items have percent widths
  Disable if items have pixel widths, like images */

  prevNextButtons: false,
  /* creates and enables buttons to click to previous & next cells */

  pageDots: false,
  /* create and enable page dots */

  resize: true,
  /* listens to window resize events to adjust size & positions */

  rightToLeft: false,
  /* enables right-to-left layout */

  setGallerySize: true,
  /* sets the height of gallery
  disable if gallery already has height set with CSS */

  watchCSS: false,
  /* watches the content of :after of the element
  activates if #element:after { content: 'flickity' }
  IE8 and Android 2.3 do not support watching :after
  set watch: 'fallbackOn' to enable for these browsers */

  wrapAround: true
    /* at end of cells, wraps-around to first for infinite scrolling */
});

function resizeCells() {
  var flkty = $imagesCarousel.data('flickity');
  var $current = flkty.selectedIndex;
  var $length = flkty.cells.length;
  var $imageNumLimit = 5;
  if ($length < $imageNumLimit) {
    $imagesCarousel.flickity('destroy');
  }
  jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft");
  jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight");
  jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft2");
  jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight2");
  jQuery('.carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelectedLeft");
  jQuery('.carouselOfImages .carouselImage').eq($current - 2).addClass("nextToSelectedLeft2");
  var $endCell;
  if ($current + 1 == $length) {
    $endCell = "0";
  } else {
    $endCell = $current + 1;
  }
  jQuery('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelectedRight");
  if($endCell + 1 < $imageNumLimit){
    jQuery('.carouselOfImages .carouselImage').eq($endCell + 1).addClass("nextToSelectedRight2"); 
  } else {
    jQuery('.carouselOfImages .carouselImage').eq(0).addClass("nextToSelectedRight2");
  }
}
resizeCells();

$imagesCarousel.on('scroll.flickity', function() {
  resizeCells();
});


//HOVER FUNCTIONS
$('.carouselImage').bind("mouseover", function(){
  if (this.className === 'carouselImage nextToSelectedLeft') {
    $imagesCarousel.flickity('playLeftSlowPlayer');
  } else if (this.className === 'carouselImage nextToSelectedLeft2') {
    $imagesCarousel.flickity('playLeftFastPlayer');
  } else if (this.className === 'carouselImage nextToSelectedRight') {
    $imagesCarousel.flickity('playRightSlowPlayer');
  } else if (this.className === 'carouselImage nextToSelectedRight2') {
    $imagesCarousel.flickity('playRightFastPlayer');
  }
});

$('.carouselImage').bind("mouseout", function(){
  $imagesCarousel.flickity('pausePlayer');
});