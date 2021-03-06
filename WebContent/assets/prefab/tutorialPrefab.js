
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * tutorialPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function tutorialPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var __grp_Master = this.game.add.group(this);
	
	var _tutorial_circle = this.game.add.sprite(549.0, 482.0, 'HUDAtlas', 'tutorial_circle', __grp_Master);
	_tutorial_circle.scale.setTo(0.5, 0.5);
	_tutorial_circle.anchor.setTo(0.5, 0.5);
	
	var _tutorialline_sheet = this.game.add.sprite(545.0, 477.0, 'HUDAtlas', 'tutorialline-sheet0', __grp_Master);
	_tutorialline_sheet.scale.setTo(0.0, 0.2);
	
	var _tutorial_hand = this.game.add.sprite(520.0, 469.0, 'HUDAtlas', 'tutorial_hand', __grp_Master);
	
	var __grp_Client = this.game.add.group(this);
	
	var _tutorial_circle_client = this.game.add.sprite(109.0, 482.0, 'HUDAtlas', 'tutorial_circle', __grp_Client);
	_tutorial_circle_client.scale.setTo(0.5, 0.5);
	_tutorial_circle_client.anchor.setTo(0.5, 0.5);
	
	var _tutorialline_sheet_client = this.game.add.sprite(105.0, 477.0, 'HUDAtlas', 'tutorialline-sheet0', __grp_Client);
	_tutorialline_sheet_client.scale.setTo(0.0, 0.2);
	
	var _tutorial_hand_client = this.game.add.sprite(80.0, 469.0, 'HUDAtlas', 'tutorial_hand', __grp_Client);
	
	
	
	// public fields
	
	this.fGroup = this;
	this.f_grp_Master = __grp_Master;
	this.fTutorial_circle = _tutorial_circle;
	this.fTutorialline_sheet = _tutorialline_sheet;
	this.fTutorial_hand = _tutorial_hand;
	this.f_grp_Client = __grp_Client;
	this.fTutorial_circle_client = _tutorial_circle_client;
	this.fTutorialline_sheet_client = _tutorialline_sheet_client;
	this.fTutorial_hand_client = _tutorial_hand_client;
	
}

/** @type Phaser.Group */
var tutorialPrefab_proto = Object.create(Phaser.Group.prototype);
tutorialPrefab.prototype = tutorialPrefab_proto;
tutorialPrefab.prototype.constructor = tutorialPrefab;

/* --- end generated code --- */
// -- user code here --

tutorialPrefab.prototype.addColor = function(colorCode){
	
	this.fTutorial_circle.tint = colorCode;
	this.fTutorialline_sheet.tint = colorCode;
}

tutorialPrefab.prototype.addColorClient = function(colorCode){
	
	this.fTutorial_circle_client.tint = colorCode;
	this.fTutorialline_sheet_client.tint = colorCode;
}
tutorialPrefab.prototype.manualUpdate = function(){
	//this.fTutorial_hand = true;
	   this.fTutorial_hand.x -= 2.5;
	
       if (this.fTutorial_hand.x <= 200) {
    	   this.fTutorial_hand.x = 520;
       }
       var scale = this.fTutorial_circle.scale.x;
       scale += 0.025;
       this.fTutorial_circle.scale.setTo(scale);
       if (scale >= 1) {
    	   this.fTutorial_circle.scale.setTo(0.5);
       }


       var scaleLine = game.math.distance(520, 80, this.fTutorial_hand.x, 80).toFixed(2) / 240;
       this.fTutorialline_sheet.scale.setTo(-scaleLine, 0.2);
       if (scaleLine <= -1.3) {
    	   this.fTutorialline_sheet.scale.setTo(0, 0.2);
       }
       
       
       
       

	   this.fTutorial_hand_client.x += 2.5;
	
       if (this.fTutorial_hand_client.x >= 520) {
    	   this.fTutorial_hand_client.x = 200;
       }
       var scale = this.fTutorial_circle_client.scale.x;
       scale += 0.025;
       this.fTutorial_circle_client.scale.setTo(scale);
       if (scale >= 1) {
    	   this.fTutorial_circle_client.scale.setTo(0.5);
       }


       var scaleLineOther = game.math.distance(this.fTutorial_hand_client.x, 0, 520, 0).toFixed(2) / 240;
       this.fTutorialline_sheet_client.scale.setTo(1.9-scaleLineOther, 0.2);
       if (scaleLineOther <= 0) {
    	   this.fTutorialline_sheet_client.scale.setTo(0, 0.2);
       }
}