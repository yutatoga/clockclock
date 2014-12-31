var fontSize;
// JavaScript Document
var ctx;

onload = function(){
	setup();
}

function setup(){
	var canvas = document.getElementById('clock');
	    if ( !canvas || !canvas.getContext ) {
        return false;
    }
    var b = document.body;
    var d = document.documentElement;
    canvas.width = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
    canvas.height = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);


	ctx = canvas.getContext('2d');
	setInterval(draw, 30);
	// AJUSTME: font size
	fontSize = 100;
	ctx.font = fontSize+"px MyFont";
}

function draw(){

	
	//新規に時間を取得
    var now = new Date();
    var msec = now.getMilliseconds();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours() % 12;
	
	//画面をクリア
    ctx.clearRect(0, 0, clock.width, clock.height);
	
	//裏
 //    ctx.fillStyle='#000';  
 //    ctx.textAlign="left"; 
 //    for(i=0; i< 100; i++){
	// ctx.fillText(Math.random(), Math.random()*clock.width, Math.random()*clock.height*4.0-clock.height*2.0);
 //    }

	
	//時間
	// ctx.beginPath();
	// // ADJUSTME: set color
 //    ctx.fillStyle='#FFFFFF';
	// ctx.textAlign="center"; 
	// ctx.fillText(("0" + hr).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2), clock.width/2.0, clock.height/2.0);
 //    ctx.closePath();
	// ctx.fill();

    //表
    ctx.fillStyle='#000'; 
    ctx.textAlign="left";  
    for(i=0; i< 200; i++){
	ctx.fillText(Math.random(), Math.random()*clock.width, Math.random()*clock.height*4.0-clock.height*2.0);
    }
}

document.onkeydown = function (e){
	// for InternetExplorer
	if (!e)	e = window.event;

	// change font size
	switch (event.keyIdentifier){
		case 'Up':
			fontSize++;
			ctx.font = fontSize+"px MyFont";
		break;
		case 'Down':
			fontSize--;
			ctx.font = fontSize+"px MyFont";		
		break;
		default:
		break;
	}
};
