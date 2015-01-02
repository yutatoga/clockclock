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
  function refreshBackgroundColor() {
    var red = $( "#backgroundRed" ).slider( "value" ),
      green = $( "#backgroundGreen" ).slider( "value" ),
      blue = $( "#backgroundBlue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "body" ).css( "background-color", "#" + hex );
  }

  function refreshBackgroundNumberColor  () {
    var red = $( "#backgroundNumberRed" ).slider( "value" ),
      green = $( "#backgroundNumberGreen" ).slider( "value" ),
      blue = $( "#backgroundNumberBlue" ).slider( "value" ),
      hex = "#"+hexFromRGB( red, green, blue );
      backgroundNumberColor = hex;
  }

  function refreshNumberColor  () {
    var red = $( "#numberRed" ).slider( "value" ),
      green = $( "#numberGreen" ).slider( "value" ),
      blue = $( "#numberBlue" ).slider( "value" ),
      hex = "#"+hexFromRGB( red, green, blue );
      numberColor = hex;
  }

  $(function() {
    $( "#backgroundRed, #backgroundGreen, #backgroundBlue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshBackgroundColor,
      change: refreshBackgroundColor
    });

    $( "#backgroundNumberRed, #backgroundNumberGreen, #backgroundNumberBlue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshBackgroundNumberColor,
      change: refreshBackgroundNumberColor
    });

    $( "#numberRed, #numberGreen, #numberBlue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshNumberColor,
      change: refreshNumberColor
    });


    $("#backgroundRed").slider( "value", 0 );
    $("#backgroundGreen").slider( "value", 0 );
    $("#backgroundBlue").slider( "value", 0 );
    $("#backgroundRed").hide();
    $("#backgroundGreen").hide();
    $("#backgroundBlue").hide();

    $("#backgroundNumberRed").slider( "value", 34 );
    $("#backgroundNumberGreen").slider( "value", 34 );
    $("#backgroundNumberBlue").slider( "value", 34 );
    $("#backgroundNumberRed").hide();
    $("#backgroundNumberGreen").hide();
    $("#backgroundNumberBlue").hide();

    $("#numberRed").slider( "value", 119 );
    $("#numberGreen").slider( "value", 119 );
    $("#numberBlue").slider( "value", 119 );
    $("#numberRed").hide();
    $("#numberGreen").hide();
    $("#numberBlue").hide();
  });

$(document).keypress(function(e) {
  // for InternetExplorer
    if (!e) e = window.event;
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
    $("#backgroundRed").show();
    $("#backgroundGreen").show();
    $("#backgroundBlue").show();

    $("#backgroundNumberRed").show();
    $("#backgroundNumberGreen").show();
    $("#backgroundNumberBlue").show();

    $("#numberRed").show();
    $("#numberGreen").show();
    $("#numberBlue").show();    
  }else{
    document.body.style.cursor = 'none';
    $("#backgroundRed").hide();
    $("#backgroundGreen").hide();
    $("#backgroundBlue").hide();

    $("#backgroundNumberRed").hide();
    $("#backgroundNumberGreen").hide();
    $("#backgroundNumberBlue").hide();

    $("#numberRed").hide();
    $("#numberGreen").hide();
    $("#numberBlue").hide();
  }
};