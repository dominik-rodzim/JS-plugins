var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
});

var reset = document.querySelector('#reset');

reset.addEventListener( 'click', function() {
  flkty.select( 0 );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// map

window.initMap = function() {
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 15, 
      	center: sliderData[0].coords
      });
  for(let i = 0; i < sliderData.length; i++){
  	var marker = new google.maps.Marker({
  		position: sliderData[i].coords, 
  		map: map
  	});
  	marker.addListener( 'click', function() {
	  flkty.select( i );
	})
  } 
	flkty.on( 'change', function( index ) {
		var center = new google.maps.LatLng(sliderData[index].coords);
		map.panTo(center);
	});
}




