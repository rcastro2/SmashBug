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
	this.time = 10;
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
		if(this.time < 1)
			showScreen(this,EndScreen);
	},
	click: function(event){
		this.score += 10
		this.blood.moveTo(this.spider)
		this.blood.play(27);
		playSound('hit_sound');
		
		//Speed up the spider
		this.spider.speed += 0.5
		
		//Make the spider smaller
		this.spider.resize(-5)
		
		//Move spider to random location
		x = randomNumber(100,700)
		y = randomNumber(100,500)
		this.spider.moveTo(x,y)
		

	}
}
extend(GameScreen,TGE.Window);


