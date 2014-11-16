EndScreen = function() {
    EndScreen.superclass.constructor.apply(this, arguments);
    
    // Background image
	this.background = new Sprite(this,"endScreen");
    
	this.addChild(this.scoreDisplay = new TGE.Text().setup({
        x : 20,
        y : 20,
        font : "36px Karmatic Arcade",
		color : "#fff",
    }));
    
    // Try Again button
    this.addChild(new TGE.Button().setup({
        x : 140,
        y : 390,
        scaleX : 0.5,
        scaleY : 0.5,
        image: "playAgain",
        pressFunction : this.PlayAgain.bind(this),
    }));
    
    return this;
}

EndScreen.prototype = {

	setup : function(params) {
		EndScreen.superclass.setup.call(this, params);

		//this.scoreDisplay.text = params.score.toString();
	    
	    return this;
	},
	updateScreen : function() {
	
	},

	PlayAgain : function() {
	    this.transitionToWindow({
	        windowClass : GameScreen,
	        fadeTime : 0.75
	    });
	}
}


extend(EndScreen, TGE.Window);
