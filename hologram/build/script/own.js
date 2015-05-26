(function ($) {


var $container = $('.masonry-wrapper');
// initialize
$container.masonry({
  columnWidth: 200,
  itemSelector: 'article'
});


var msnry = $container.data('masonry');



})(jQuery);
