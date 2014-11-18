GameScreen = function(width,height)
{
    GameScreen.superclass.constructor.apply(this,arguments);
	this.background = new Sprite(this,"grass");
	this.blood = new Anim(this,"blood",4,4,9)
	this.blood.visible(false);
	this.spider = new Anim(this,"spider",5,4,19,true);
	this.scoreText = new Text(this);
	this.score = 0;
	this.timeText = new Text(this);
	this.timeText.moveTo(200,40);
	this.time = 20;
	playSound('background_music',1)

};
GameScreen.prototype =
{	
	updateScreen:function(event){
		this.spider.move();
		this.scoreText.display("Score: " + this.score);
		this.blood.stop()
		this.timeText.display("Time: " + round(this.time));
		this.time -= event.elapsedTime * 0.25;
		
		//End game when time expires
		if(this.time < 1){
			this.removeChild(this.spider);
			showScreen(this,EndScreen);
		}
	},
	click: function(event){
		this.score += 10
		this.blood.moveTo(this.spider)
		this.blood.play(27);
		playSound('hit_sound');
		
		choose = randomNumber(1,5);
		console.log(choose);
		if( choose == 1)
			this.spider.speed += 2
		else if(choose == 2)
			this.spider.resize(-5)
		else if(choose ==3)
			this.spider.angle = randomNumber(45,345);
		else{
			x = randomNumber(100,700)
			y = randomNumber(100,500)
			this.spider.moveTo(x,y)
		}

	}
}
extend(GameScreen,TGE.Window);


