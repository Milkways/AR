
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * IAPPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function IAPPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0.0, 159.0, 'bg_IAP', null, this);
	
	this.game.add.sprite(0.0, 299.0, 'shop_IAP', null, this);
	
	var _10k = this.game.add.group(this);
	_10k.position.setTo(4.0, 150.0);
	
	var _btn_10k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _10k);
	
	var _txt_10k = this.game.add.text(127.0, 405.0, '$1.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _10k);
	_txt_10k.anchor.setTo(0.5, 0.5);
	
	var _30k = this.game.add.group(this);
	_30k.position.setTo(232.0, 150.0);
	
	var _btn_30k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _30k);
	
	var _txt_30k = this.game.add.text(128.0, 405.0, '$4.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _30k);
	_txt_30k.anchor.setTo(0.5, 0.5);
	
	var _60k = this.game.add.group(this);
	_60k.position.setTo(461.0, 150.0);
	
	var _btn_60k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _60k);
	
	var _txt_60k = this.game.add.text(128.0, 405.0, '$9.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _60k);
	_txt_60k.anchor.setTo(0.5, 0.5);
	
	var _btn_closeIAP = this.game.add.button(619.0, 182.0, 'HUDAtlas', null, this, null, 'close button', null, null, this);
	
	var _60k1 = this.game.add.group(this);
	_60k1.position.setTo(1.0, 452.0);
	
	var _btn_120k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _60k1);
	
	var _txt_60k1 = this.game.add.text(125.0, 406.0, '$19.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _60k1);
	_txt_60k1.anchor.setTo(0.5, 0.5);
	
	var _60k2 = this.game.add.group(this);
	_60k2.position.setTo(233.0, 453.0);
	
	var _btn_240k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _60k2);
	
	var _txt_60k2 = this.game.add.text(125.0, 405.0, '$29.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _60k2);
	_txt_60k2.anchor.setTo(0.5, 0.5);
	
	var _60k3 = this.game.add.group(this);
	_60k3.position.setTo(460.0, 453.0);
	
	var _btn_500k = this.game.add.button(28.0, 363.0, 'HUD2Atlas', null, this, null, 'button_IAP', null, null, _60k3);
	
	var _txt_60k3 = this.game.add.text(125.0, 406.0, '$49.99', {"font":"bold 35px Arial","fill":"#ffffff"}, _60k3);
	_txt_60k3.anchor.setTo(0.5, 0.5);
	
	
	
	// public fields
	
	this.fBtn_10k = _btn_10k;
	this.fTxt_10k = _txt_10k;
	this.fBtn_30k = _btn_30k;
	this.fTxt_30k = _txt_30k;
	this.fBtn_60k = _btn_60k;
	this.fTxt_60k = _txt_60k;
	this.fBtn_closeIAP = _btn_closeIAP;
	this.fBtn_120k = _btn_120k;
	this.fTxt_60k1 = _txt_60k1;
	this.fBtn_240k = _btn_240k;
	this.fTxt_60k2 = _txt_60k2;
	this.fBtn_500k = _btn_500k;
	this.fTxt_60k3 = _txt_60k3;
	
	this.Create();
	
}

/** @type Phaser.Group */
var IAPPrefab_proto = Object.create(Phaser.Group.prototype);
IAPPrefab.prototype = IAPPrefab_proto;
IAPPrefab.prototype.constructor = IAPPrefab;

/* --- end generated code --- */
// -- user code here --
IAPPrefab.prototype.Create = function(){
	this.fBtn_closeIAP.onInputUp.add(this.onEventCloseIAP,this);
	this.fBtn_10k.onInputUp.add(function(){this.onEventIAP(0)},this);
	this.fBtn_30k.onInputUp.add(function(){this.onEventIAP(1)},this);
	this.fBtn_60k.onInputUp.add(function(){this.onEventIAP(2)},this);
	this.fBtn_120k.onInputUp.add(function(){this.onEventIAP(3)},this);
	this.fBtn_240k.onInputUp.add(function(){this.onEventIAP(4)},this);
	this.fBtn_500k.onInputUp.add(function(){this.onEventIAP(5)},this);
	
	
	FBInstant.payments.getCatalogAsync().then(function (catalog) {
		  console.log(catalog); // [{productID: '12345', ...}, ...]
		});
}

IAPPrefab.prototype.onEventCloseIAP = function(){
	console.log("onEventCloseIAP");
	level.f_grp_IAP.visible = false;
	GlobalSetting.currentMenuState = MENUSTATE.NONE;
	level.f_grpWorldMapScene.startScroll();
	
	
	
	
}

IAPPrefab.prototype.onEventIAP = function(currentIAP){
	console.log("IAP");
	FBInstant.payments.purchaseAsync({
		  productID: '12345',
		  developerPayload: 'foobar',
		}).then(function (purchase) {
		  console.log("purchase" +purchase);
		  // {productID: '12345', purchaseToken: '54321', developerPayload: 'foobar', ...}
		});
	
	
	
	FBInstant.payments.consumePurchaseAsync('12345').then(function () {
		  // Purchase successfully consumed!
		console.log("Buy Success");
		  // Game should now provision the product to the player
		}).catch(function(error) {
		  // Handle error
			console.log("error" +error);
		});
	
	FBInstant.payments.getPurchasesAsync().then(function (purchases) {
		  console.log("purchases 1" +purchases); // [{productID: '12345', ...}, ...]
		});
	
	
	
	FBInstant.payments.onReady(function () {
		  console.log('Payments Ready!');
		});
}
