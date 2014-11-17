EndScreen = function() {
    EndScreen.superclass.constructor.apply(this, arguments);
    
	this.background = new Sprite(this,"endScreen");    
	this.scoreText = new Text(this);
    this.scoreText.textColor("white");
	this.scoreText.moveTo(50,50);
	this.playAgain = new Sprite(this,"playAgain",true);
}
EndScreen.prototype = {
	setup : function(params) {
		EndScreen.superclass.setup.call(this, params);
		this.scoreText.display("Final Score : " + params.score.toString());
	},
	updateScreen : function(event) {
	
	},
	click : function (event){
		showScreen(this,StartScreen);
	},
}
extend(EndScreen, TGE.Window);

