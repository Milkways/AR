
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * mapPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function mapPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _bg_Asia = this.game.add.sprite(0.0, 0.0, 'bg_Asia', null, this);
	
	var _bg_Africa = this.game.add.sprite(0.0, 0.0, 'bg_Africa', null, this);
	
	var _bg_Europe = this.game.add.sprite(0.0, 0.0, 'bg_Europe', null, this);
	
	var _bg_Island = this.game.add.sprite(0.0, 0.0, 'bg_Island', null, this);
	
	var _bg_America = this.game.add.sprite(0.0, 0.0, 'bg_America', null, this);
	
	
	
	// public fields
	
	this.fBg_Asia = _bg_Asia;
	this.fBg_Africa = _bg_Africa;
	this.fBg_Europe = _bg_Europe;
	this.fBg_Island = _bg_Island;
	this.fBg_America = _bg_America;
	
	this.Create();
	
}

/** @type Phaser.Group */
var mapPrefab_proto = Object.create(Phaser.Group.prototype);
mapPrefab.prototype = mapPrefab_proto;
mapPrefab.prototype.constructor = mapPrefab;

/* --- end generated code --- */
// -- user code here --
mapPrefab.prototype.Create = function(){
	this.nameMaps = new Array();
	this.nameMaps.push("EUROPE");
	this.nameMaps.push("AFRICA");
	this.nameMaps.push("AMERICAS");
	this.nameMaps.push("ASIA");
	this.nameMaps.push("ISLANDS");
	
	this.maps = new Array();
	this.maps.push(this.fBg_Europe);
	this.maps.push(this.fBg_Africa);
	this.maps.push(this.fBg_America);
	this.maps.push(this.fBg_Asia);
	this.maps.push(this.fBg_Island);
	
	this.visibleMaps(false);
}
mapPrefab.prototype.visibleMaps = function(visible){
	for(var i= 0 ;i<this.maps.length;i++){
		
		this.maps[i].visible= visible;
	}
}

mapPrefab.prototype.showMap = function(mapIndex){
		this.visibleMaps(false);
	
		this.maps[mapIndex].visible= true;
}
