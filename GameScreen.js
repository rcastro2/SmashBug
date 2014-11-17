GameScreen = function(width,height)
{
    GameScreen.superclass.constructor.apply(this,arguments);
	this.background = new Sprite(this,"grass")

};
GameScreen.prototype =
{	
	updateScreen:function(event){
		
	},
	click: function(event){


	}
}
extend(GameScreen,TGE.Window);


