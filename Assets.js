MyGame = function()
{
    //Main game constructor
    MyGame.superclass.constructor.call(this);

    //Load media
    var gameAssets = [
		//Graphics
        {id: 'spider',   	url:'images/spider_crawl.png'},
		{id: 'grass',		url: 'images/grass.png'},
		{id: 'blood',		url: 'images/blood.png'},
		{id: 'startScreen',	url: 'images/start_screen.jpg'},
		{id: 'endScreen',	url: 'images/end_screen.jpg'},
		{id: 'title',		url: 'images/logo.png'},
		{id: 'play',		url: 'images/play.png'},
		{id: 'playAgain',	url: 'images/playAgain.png'},
		
		//Sounds
        {id:'background_music',	url:'sounds/background_music.ogg',			backup_url:'sounds/background_music.mp3',		assetType:"audio"},
        {id:'hit_sound',		url:'sounds/hitCoin_sound.ogg',				backup_url:'sounds/hitCoin_sound.mp3',			assetType:"audio"}, 
    ];
    //this.assetManager.assignImageAssetList("required", gameAssets);
	this.assetManager.addAssets("required",gameAssets);

    //Go to the StartScreen after loading
    TGE.FirstGameWindow = GameScreen;
}
//MyGame functions
MyGame.prototype =
{
    //No global functions in this tutorial
}
extend(MyGame,TGE.Game);