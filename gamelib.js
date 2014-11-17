// Text Object
function Text(game,x,y){
	this.game = game
	this.text = new TGE.Text().setup({
        x:20,
        y:40,
        text: "",
        font:"bold 28px Tahoma",
        color:"#000",
    });
	game.addChild(this.text)
	this.x = x || 20
	this.y = y || 40
	this.display = function(msg){
		this.text.y = this.y;
		this.text.x = this.x + this.text.width;
		this.text.text = msg;
	}
	this.moveTo = function(x,y) { this.x = x; this.y = y; };
	this.textColor = function(c) { this.text.textColor = c; };
}

// Sprite Object
function Sprite(game, img,e){
	this.game = game
	this.img = new TGE.Sprite().setup({
				image:img,
				x: game.width/2,
				y: game.height/2,
			})
	game.addChild(this.img)
	if (e == true)
		this.img.addEventListener("mousedown",game.click.bind(game));
	else if(e != null && e != "undefined" ) 
		this.img.addEventListener("mousedown",e);
	this.img.addEventListener("update",game.updateScreen.bind(game));
	
	this.dx = 0; this.dy = 0; this.dxsign = 1; this.dysign = 1; this.speed = 1; this.angle = Math.PI / Math.floor(Math.random() * 8 + 3);
	this.move = function(){ myMove(this) }
	this.moveTo = function(x,y){ 
		if(y!=null)
			myMoveTo(this.img,x,y) 
		else
			myMoveTo(this.img,x.img.x,x.img.y)
	}
	this.x = function(){ return this.img.x }
	this.y = function(){ return this.img.y }
	this.visible = function(visible){
		this.img.visible = visible;
	}
	this.setSpeed = function(speed,angle){ mySetSpeed(this,speed,angle) };
	this.resize = function(percent) {myResize(this, percent / 100); }
}

// Animation Object
function Anim(game,sheet,r,c,f,e){
	this.game = game
	this.img = new TGE.SpriteSheetAnimation().setup({
					image:sheet,
					columns:c,
					rows:r,
					x: randomNumber(200,game.width-200),
					y: randomNumber(200,game.height-200),
					totalFrames:f,
					fps:f,
		})
	this.img.play();
	game.addChild(this.img)
	
	if (e == true)
		this.img.addEventListener("mousedown",game.click.bind(game));
	else if(e != null && e != "undefined" ) 
		this.img.addEventListener("mousedown",e);
		
	this.img.addEventListener("update",game.updateScreen.bind(game));
	
	this.dx = 0; this.dy = 0; this.dxsign = 1; this.dysign = 1; this.speed = 1; this.angle = Math.PI / Math.floor(Math.random() * 8 + 3); this.totalFrames = f; this.hit = false;

	this.frame = function(loop){
		return this.img.currentFrame();
	}
	this.move = function(){myMove(this)};
	this.moveTo = function(x,y){ 
		if(y!=null)
			myMoveTo(this.img,x,y) 
		else
			myMoveTo(this.img,x.img.x,x.img.y)
	}
	this.x = function(){ return this.img.x }
	this.y = function(){ return this.img.y }
	this.setSpeed = function(speed,angle){ mySetSpeed(this,speed,angle) };
	this.resize = function(percent) {myResize(this, percent / 100); }
	this.stop = function(){
		if(this.img.currentFrame() == this.totalFrames - 1){
			this.img.stop()
			this.img.visible = false;
		}
	}
	this.visible = function(visible){
		this.img.visible = visible;
	}
	this.play = function(fps){
		this.img.fps = fps || this.totalFrames
		this.img.visible = true
		this.img.gotoAndPlay(0)
	}
}

//Support Functions
function myResize(obj, p){
	obj.img.scaleX += p; obj.img.scaleY += p;
}
function mySetSpeed(obj,s,a){
	obj.angle = Math.PI * a / 180; obj.speed = s;
}
function myMoveTo(obj, x, y){
	obj.x = x; obj.y = y;
}
function myMove(obj){
	if(obj.img.x - obj.img.width / 2 < 0 || obj.img.x + obj.img.width / 2 > obj.game.width) obj.dxsign *= -1
	if(obj.img.y - obj.img.height /2 < 0 || obj.img.y + obj.img.height / 2 > obj.game.height) obj.dysign *= -1
	obj.dx = obj.speed * Math.sin(obj.angle - Math.PI)
    obj.dy = obj.speed * Math.cos(obj.angle - Math.PI)
	obj.img.x += obj.dx * obj.dxsign;
	obj.img.y += obj.dy * obj.dysign;
	offset = (obj.dxsign < 0 ) ? Math.PI/2: -Math.PI/2;
	
	obj.img.rotation = (Math.atan((obj.dy * obj.dysign)/(obj.dx * obj.dxsign)) + offset )* 180 / Math.PI
}
function randomNumber(start,end){
	return Math.floor(Math.random() * (end - start + 1) + start);
}
function playSound(sound,f){
	loop = f || 0
	TGE.Game.GetInstance().audioManager.Play({
		id : sound,
		loop : loop
	});
}
function showScreen(obj,s){
	TGE.Game.GetInstance().audioManager.StopAll();
    obj.transitionToWindow({
            windowClass : s,
            fadeTime : 0.75,
			score : obj.score
    });
}
function round(number){
	return Math.floor(number);
}
