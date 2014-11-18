EndScreen = function() {
    EndScreen.superclass.constructor.apply(this, arguments);
    
	this.background = new Sprite(this,"endScreen");    
	this.scoreText = new Text(this);
    this.scoreText.textColor("red");
	this.scoreText.moveTo(45,35);
	this.playAgain = new Sprite(this,"playAgain",true);
	return this;
}
EndScreen.prototype = {
	setup : function(params) {
		EndScreen.superclass.setup.call(this, params);
		this.scoreText.display("Final Score : " + params.score.toString());
		return this;
	},
	updateScreen : function(event) {
	
	},
	click : function (event){
		showScreen(this,StartScreen);
	},
}
extend(EndScreen, TGE.Window);

