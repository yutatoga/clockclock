var uiVisible = false;
function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refresh() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "body" ).css( "background-color", "#" + hex );
  }

  $(function() {
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refresh,
      change: refresh
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 255 );
    $( "#blue" ).slider( "value", 255 );
    $("#red").hide();
    $("#green").hide();
    $("#blue").hide();
  });

$(document).keypress(function(e) {
	// for InternetExplorer
    if (!e)	e = window.event;
	keychar = String.fromCharCode(event.keyCode).toUpperCase();
	switch (keychar){
		case 'G':
			uiToggle();
		break;
		default:
		break;
	}
});

function uiToggle(){
	uiVisible = !uiVisible;
	if(uiVisible){
		document.body.style.cursor = 'default';
		$("#red").show();
		$("#green").show();
		$("#blue").show();		
	}else{
		document.body.style.cursor = 'none';
		$("#red").hide();
		$("#green").hide();
		$("#blue").hide();
	}
};