
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * gameOverPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function gameOverPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _congratulation_BG = this.game.add.sprite(-2.0, 126.0, 'BG_chooseMap', null, this);
	_congratulation_BG.scale.setTo(1.0, 1.3);
	
	var _menu_BG = this.game.add.sprite(17.0, 475.0, 'menu BG', null, this);
	_menu_BG.scale.setTo(0.95, 0.3);
	
	var __grp_watch_Video = this.game.add.group(this);
	__grp_watch_Video.position.setTo(-8.0, 20.0);
	
	var _txt_Watch_Video_Title = this.game.add.text(1010.0, 766.0, 'Watch Video', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, __grp_watch_Video);
	_txt_Watch_Video_Title.anchor.setTo(0.5, 0.0);
	
	var _btn_watchVideo = this.game.add.button(199.0, 783.0, 'HUDAtlas', null, this, null, 'button 02', null, null, __grp_watch_Video);
	_btn_watchVideo.scale.setTo(0.6, 0.6);
	
	this.game.add.sprite(252.0, 802.0, 'HUD2Atlas', 'watch_video_icon', __grp_watch_Video);
	
	var _txt_get = this.game.add.text(310.0, 805.0, 'Get', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, __grp_watch_Video);
	
	var _diamond1 = this.game.add.sprite(404.0, 796.0, 'HUDAtlas', 'diamond', __grp_watch_Video);
	_diamond1.scale.setTo(0.7, 0.7);
	
	this.game.add.text(370.0, 802.0, 'x2', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, __grp_watch_Video);
	
	var __grp_Claim = this.game.add.group(this);
	__grp_Claim.position.setTo(-8.0, 20.0);
	
	var _btn_mainMenu = this.game.add.button(199.0, 866.0, 'HUDAtlas', null, this, null, 'button 02', null, null, __grp_Claim);
	_btn_mainMenu.scale.setTo(0.6, 0.6);
	
	var _txt_Claim = this.game.add.text(328.0, 887.0, 'Claim', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, __grp_Claim);
	_txt_Claim.anchor.setTo(0.5, 0.0);
	
	var _txt_bestsEfficency_gameOver = this.game.add.text(545.0, 677.0, '10', {"font":"bold 30px Arial","fill":"#f7ff0a","stroke":"#ffffff"}, this);
	
	var _txt_efficiency_gameOver = this.game.add.text(344.0, 676.0, '10', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_best_HeadShot_gameOver = this.game.add.text(545.0, 608.0, '10', {"font":"bold 30px Arial","fill":"#fff104","stroke":"#ffffff"}, this);
	
	var _txt_HeadShot_gameOver = this.game.add.text(344.0, 608.0, '10', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_Score_gameOver = this.game.add.text(344.0, 544.0, '10', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_best_Score_gameOver = this.game.add.text(545.0, 544.0, '10', {"font":"bold 30px Arial","fill":"#fffe10","stroke":"#ffeb10"}, this);
	
	var _txt_headShot = this.game.add.text(39.0, 606.0, 'Headshot :', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_efficiency = this.game.add.text(39.0, 677.0, 'Efficiency :', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_Score = this.game.add.text(39.0, 543.0, 'Score :', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_high = this.game.add.text(532.0, 493.0, 'High', {"font":"30px Arial","fill":"#fefb00","stroke":"#ffffff"}, this);
	
	var _txt_Current = this.game.add.text(312.0, 493.0, 'Current', {"font":"30px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_playAgain = this.game.add.text(393.0, 147.0, 'CONGRATULATIONS!', {"font":"50px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	_txt_playAgain.anchor.setTo(0.5, 0.0);
	
	this.game.add.text(230.0, 423.0, '+', {"font":"35px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	this.game.add.text(372.0, 422.0, '+', {"font":"35px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_exp_index = this.game.add.text(253.0, 423.0, '1', {"font":"35px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _txt_gem_index = this.game.add.text(395.0, 422.0, '1', {"font":"35px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	var _star_off_2 = this.game.add.sprite(557.0, 338.0, 'HUD2Atlas', 'star_off', this);
	_star_off_2.angle = 45.0;
	_star_off_2.scale.setTo(1.5, 1.5);
	_star_off_2.anchor.setTo(0.5, 0.5);
	
	var _star_off_1 = this.game.add.sprite(348.0, 216.0, 'HUD2Atlas', 'star_off', this);
	_star_off_1.scale.setTo(1.5, 1.5);
	_star_off_1.anchor.setTo(0.5, 0.0);
	
	var _star_off_0 = this.game.add.sprite(149.0, 338.0, 'HUD2Atlas', 'star_off', this);
	_star_off_0.angle = -45.0;
	_star_off_0.scale.setTo(1.5, 1.5);
	_star_off_0.anchor.setTo(0.5, 0.5);
	
	var _Star = this.game.add.sprite(149.0, 338.0, 'HUD2Atlas', 'star', this);
	_Star.angle = -45.0;
	_Star.scale.setTo(1.5, 1.5);
	_Star.anchor.setTo(0.5, 0.5);
	
	var _Star_1 = this.game.add.sprite(348.0, 286.0, 'HUD2Atlas', 'star', this);
	_Star_1.scale.setTo(1.5, 1.5);
	_Star_1.anchor.setTo(0.5, 0.5);
	
	var _Star_2 = this.game.add.sprite(557.0, 338.0, 'HUD2Atlas', 'star', this);
	_Star_2.angle = 45.0;
	_Star_2.scale.setTo(1.5, 1.5);
	_Star_2.anchor.setTo(0.5, 0.5);
	
	var _diamond = this.game.add.sprite(434.0, 418.0, 'HUDAtlas', 'diamond', this);
	_diamond.scale.setTo(0.7, 0.7);
	
	this.game.add.text(278.0, 424.0, 'XP', {"font":"35px Arial","fill":"#ffffff","stroke":"#ffffff"}, this);
	
	
	this.position.setTo(-6.0, 0.0);
	
	// public fields
	
	this.fGroup = this;
	this.fCongratulation_BG = _congratulation_BG;
	this.f_grp_watch_Video = __grp_watch_Video;
	this.fTxt_Watch_Video_Title = _txt_Watch_Video_Title;
	this.fBtn_watchVideo = _btn_watchVideo;
	this.fTxt_get = _txt_get;
	this.f_grp_Claim = __grp_Claim;
	this.fBtn_mainMenu = _btn_mainMenu;
	this.fTxt_Claim = _txt_Claim;
	this.fTxt_bestsEfficency_gameOver = _txt_bestsEfficency_gameOver;
	this.fTxt_efficiency_gameOver = _txt_efficiency_gameOver;
	this.fTxt_best_HeadShot_gameOver = _txt_best_HeadShot_gameOver;
	this.fTxt_HeadShot_gameOver = _txt_HeadShot_gameOver;
	this.fTxt_Score_gameOver = _txt_Score_gameOver;
	this.fTxt_best_Score_gameOver = _txt_best_Score_gameOver;
	this.fTxt_headShot = _txt_headShot;
	this.fTxt_efficiency = _txt_efficiency;
	this.fTxt_Score = _txt_Score;
	this.fTxt_high = _txt_high;
	this.fTxt_Current = _txt_Current;
	this.fTxt_playAgain = _txt_playAgain;
	this.fTxt_exp_index = _txt_exp_index;
	this.fTxt_gem_index = _txt_gem_index;
	this.fStar_off_2 = _star_off_2;
	this.fStar_off_1 = _star_off_1;
	this.fStar_off_0 = _star_off_0;
	this.fStar = _Star;
	this.fStar_1 = _Star_1;
	this.fStar_2 = _Star_2;
	
	this.Create();
	
}

/** @type Phaser.Group */
var gameOverPrefab_proto = Object.create(Phaser.Group.prototype);
gameOverPrefab.prototype = gameOverPrefab_proto;
gameOverPrefab.prototype.constructor = gameOverPrefab;

/* --- end generated code --- */
// -- user code here --
gameOverPrefab.prototype.Create = function (){
	this.stars = new Array();
	this.stars.push(this.fStar);
	this.stars.push(this.fStar_1);
	this.stars.push(this.fStar_2);
	
	for( var i = 0 ;i<this.stars.length ; i++){
		this.stars[i].scale.setTo(6);
		this.stars[i].visible = false;
	}
	
	this.currentStar = 0;
	this.currentExp = 0;
	this.currentGem = 0;
	this.fBtn_mainMenu.onInputUp.add(this.onEventMainMenu, this);
	this.fBtn_watchVideo.onInputUp.add(this.onEventWatchVideo, this);
	
	if(this.game.device.desktop){
		this.f_grp_watch_Video.visible = false;
		this.f_grp_Claim.position.setTo(0,-60);
		this.fBtn_mainMenu.scale.setTo(0.6,0.8);
		this.fTxt_Claim.y= 895;
	}

	this.fTxt_Watch_Video_Title.visible = false;
}
gameOverPrefab.prototype.onEventMainMenu = function (){
	//localData.gems += this.currentGem;

	//check star to unlock next level
	level.f_grpWorldMapScene.checkNextLevel(this.currentStar);
	//Add Gems
	level.f_grpMainMenuPrefab.addGems(this.currentGem);
	this.gemValue = localData.gems;
	//Add Exp
	level.f_grpInforPrefab.levelManager.addExp(this.currentExp);

	//level.levelHandler();
	level.saveData();
	
	
	GlobalSetting.preventClickButtonWorldMap = false;

	
	game.state.start("Level");
	
	
}

gameOverPrefab.prototype.onEventWatchVideo = function (){
	
	if (game.device.desktop)  return;
	
	level.caseWatchRewardVideo = 1;
	FBshowRewardedVideo();
	
}

gameOverPrefab.prototype.doubleGemsWatchVideo = function (){
	
	this.currentGem = level.f_grp_GameOver.currentGem  * 2 ;
	this.updateInforGem(level.f_grp_GameOver.currentGem);
	this.f_grp_watch_Video.visible = false;
	this.f_grp_Claim.position.setTo(0,-60);
    this.fBtn_mainMenu.scale.setTo(0.6,0.8);
	this.fTxt_Claim.y= 895;
	
}

gameOverPrefab.prototype.updateScore = function (currentScore,bestScore){
	this.fTxt_Score_gameOver.text = (currentScore<=9) ?"0" +currentScore:currentScore;
	this.fTxt_best_Score_gameOver.text = (bestScore<=9) ?"0" +bestScore:bestScore;
}

gameOverPrefab.prototype.updateHeadShot = function (currentHeadShot,bestHeadShot){
	this.fTxt_HeadShot_gameOver.text = (currentHeadShot<=9) ?"0" +currentHeadShot:currentHeadShot;
	this.fTxt_best_HeadShot_gameOver.text = (bestHeadShot<=9) ?"0" +bestHeadShot:bestHeadShot;
}

gameOverPrefab.prototype.updateEfficiency = function (currentEfficiency ,bestEfficiency ){
	this.fTxt_efficiency_gameOver.text = currentEfficiency +"%";
	this.fTxt_bestsEfficency_gameOver.text = bestEfficiency +"%";

}

gameOverPrefab.prototype.updateInforGem = function (gems){
	this.fTxt_gem_index.text = gems;
}
gameOverPrefab.prototype.caculatorResult = function (time,enemyKill ){
	if(time <20 && enemyKill >=3 ){
		//3 star
		this.currentStar =3;
		this.currentExp = 3;
		this.currentGem = 30;
	}
	else if(time <30 && enemyKill >=2 ){
		//2 star
		this.currentStar =2;
		this.currentExp = 2;
		this.currentGem = 20;
	}
	
	else if(time <40 && enemyKill >=1 ){
		//1 star
		this.currentStar =1;
		this.currentExp = 1;
		this.currentGem = 10;
	}
	else{
		this.currentStar =0;
		this.currentExp = 0;
		this.currentGem = 0;
	}
	

	console.log("Game Over");



	if(this.currentStar >=1){
		setTimeout(function () {
			level.f_grp_GameOver.stars[0].visible = true;
			game.add.tween( level.f_grp_GameOver.stars[0].scale).to( { x: 1.5, y: 1.5 }, 500, Phaser.Easing.Linear.None, true);
			game.add.tween(level.f_grp_GameOver.stars[0]).to( { angle: 315 }, 500, Phaser.Easing.Linear.None, true);
		}, 200);
	}

	 if(this.currentStar >=2){
	setTimeout(function () {
		level.f_grp_GameOver.stars[1].visible = true;
		game.add.tween( level.f_grp_GameOver.stars[1].scale).to( { x: 1.5, y: 1.5 }, 500, Phaser.Easing.Linear.None, true);
		game.add.tween(level.f_grp_GameOver.stars[1]).to( { angle: 360 }, 500, Phaser.Easing.Linear.None, true);
		}, 700);
	}

	if(this.currentStar >=3){
	setTimeout(function () {
		level.f_grp_GameOver.stars[2].visible = true;
		game.add.tween( level.f_grp_GameOver.stars[2].scale).to( { x: 1.5, y: 1.5 }, 500, Phaser.Easing.Linear.None, true);
		game.add.tween(level.f_grp_GameOver.stars[2]).to( { angle: 405 }, 500, Phaser.Easing.Linear.None, true);
	}, 1200);
	}




	
	
	//Show Information
	this.fTxt_gem_index.text = (this.currentGem<=9) ?"0"+this.currentGem:this.currentGem;
	this.fTxt_exp_index.text = this.currentExp;
	 
	
	//Hide All Star
	for( var i = 0 ;i<this.stars.length ; i++){
		this.stars[i].visible = false;
	}
	
}
gameOverPrefab.prototype.updateTextAlignCenter = function (){
	this.fTxt_playAgain.x = this.fCongratulation_BG.x + this.fCongratulation_BG.width /2;
	this.fTxt_Claim.x = this.fBtn_mainMenu.x + this.fBtn_mainMenu.width /2;
	this.fTxt_Watch_Video_Title.x = this.fCongratulation_BG.x + this.fCongratulation_BG.width /2;
}

