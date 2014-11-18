==========================================================
//Slide 9 - Sprite Object

//Place in setup behavior
this.background = new Sprite(this,"grass");

==========================================================
//Slide 10 - Anim Object

//Place in setup behavior
this.spider = new Anim(this,"spider",5,4,19,true);

==========================================================
//Slide 11 - Behavior

//Place in update behavior
this.spider.move();

==========================================================
//Slide 12 - Text Object and Score

//Place in setup
this.scoreText = new Text(this);
this.score = 0;

//Place in update behavior
this.scoreText.display("Score: " + this.score);

//Place in click behavior
this.score += 10

==========================================================
//Slide 13 - SPLAT!

//Place in setup
this.blood = new Anim(this,"blood",4,4,9)
this.blood.visible(false);

//Place in click behavior
this.blood.moveTo(this.spider)
this.blood.play(27);

//Place in update behavior
this.blood.stop()

==========================================================
//Slide 14 - Increased Challenges

//Place in click behavior

this.spider.speed += 2
this.spider.resize(-5)
x = randomNumber(100,700)
y = randomNumber(100,500)
this.spider.moveTo(x,y)

==========================================================
//Slide 15 - End Game

// Place in setup
this.timeText = new Text(this);
this.timeText.moveTo(200,40);
this.time = 20;

// Place in click behavior
this.timeText.display("Time: " + round(this.time));
this.time -= event.elapsedTime * 0.25;

if(this.time < 1){
	this.removeChild(this.spider);
	showScreen(this,EndScreen);
}

==========================================================
//Slide 17 - Enhancements

//Place in setup
playSound('background_music',1)

//Place in click behavior
playSound('hit_sound');

//Replace increased challenges
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