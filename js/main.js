var instance = new vidbg('.video', {
    webm: 'video/world.webm', // URL or relative path to webm video
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    poster: 'img/worlderrorload.png', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  });

var rellax = new Rellax('.rellax');
window.onresize = function(event) {
  if (document.body.clientWidth < 767) {
    rellax.destroy();
  }
  if (document.body.clientWidth > 767) {
    rellax.refresh();
  }
};
if (document.body.clientWidth < 767) {
  rellax.destroy();
}
var videos = document.querySelector('video');
videos.setAttribute("pip", false)
