StartScreen = function() {
    StartScreen.superclass.constructor.apply(this, arguments);
       
    //background image
	this.background = new Sprite(this,"startScreen");
	this.title = new Sprite(this,"title");
	this.play = new Sprite(this,"play",true);
	this.play.moveTo(700,420);
	this.spider = new Anim(this,"spider",5,4,19);

}

StartScreen.prototype = {
	updateScreen : function(){
		this.spider.move()
	},
	click : function(event){
		this.removeChild(this.spider);
		showScreen(this,GameScreen);
	}    
}
extend(StartScreen, TGE.Window);