GameScreen = function(width,height)
{
    GameScreen.superclass.constructor.apply(this,arguments);
	this.background = new Sprite(this,"grass")
	this.spider = new Anim(this,"spider",5,4,19,true)
};
GameScreen.prototype =
{	
	updateScreen:function(event){
		this.spider.move()
	},
	click: function(event){

	}
}
extend(GameScreen,TGE.Window);


