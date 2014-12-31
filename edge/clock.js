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
	ctx.font = "170px MyFont";
}

function draw(){

	
	//新規に時間を取得
    var now = new Date();
    var msec = now.getMilliseconds();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    // var hr  = now.getHours() % 12; 0~11時での表示
    var hr  = now.getHours(); // 0~23時での表示
	
	//画面をクリア
    ctx.clearRect(0, 0, clock.width, clock.height);
	
	//裏
 //    ctx.fillStyle='#000';  
 //    ctx.textAlign="left"; 
 //    for(i=0; i< 100; i++){
	// ctx.fillText(Math.random(), Math.random()*clock.width, Math.random()*clock.height*4.0-clock.height*2.0);
 //    }

	
	//時間
	ctx.beginPath();
	// ADJUSTME: set color
	ctx.textAlign="center";
	ctx.textBaseline = 'middle';
    ctx.fillStyle='#222';
	ctx.fillText("00:00:00", clock.width/2.0, clock.height/2.0);
    ctx.fillStyle='#777';
	ctx.fillText(("0" + hr).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2), clock.width/2.0, clock.height/2.0);
    ctx.closePath();
	ctx.fill();

    //表
 //    ctx.fillStyle='#000'; 
 //    ctx.textAlign="left";  
 //    for(i=0; i< 100; i++){
	// ctx.fillText(Math.random(), Math.random()*clock.width, Math.random()*clock.height*4.0-clock.height*2.0);
 //    }
}

