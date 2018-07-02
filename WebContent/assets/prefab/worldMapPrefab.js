
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * worldMapPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function worldMapPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _BackGround = this.game.add.sprite(0.0, 0.0, 'worldMap', null, this);
	
	var _BackGround_Line = this.game.add.sprite(3.0, 4.0, 'World_Map_Line', null, this);
	
	var _point0 = this.game.add.sprite(322.0, 3629.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point0.scale.setTo(0.8, 1.0);
	_point0.anchor.setTo(0.5, 0.5);
	
	var _point1 = this.game.add.sprite(572.0, 3558.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point1.scale.setTo(0.8, 1.0);
	_point1.anchor.setTo(0.5, 0.5);
	
	var _point2 = this.game.add.sprite(607.0, 3370.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point2.scale.setTo(0.8, 0.8);
	_point2.anchor.setTo(0.5, 0.5);
	
	var _point3 = this.game.add.sprite(402.0, 3297.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point3.scale.setTo(0.8, 0.8);
	_point3.anchor.setTo(0.5, 0.5);
	
	var _point4 = this.game.add.sprite(264.0, 3167.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point4.scale.setTo(0.8, 0.8);
	_point4.anchor.setTo(0.5, 0.5);
	
	var _point5 = this.game.add.sprite(557.0, 3118.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point5.scale.setTo(0.8, 0.8);
	_point5.anchor.setTo(0.5, 0.5);
	
	var _point6 = this.game.add.sprite(391.0, 2820.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point6.scale.setTo(0.8, 0.8);
	_point6.anchor.setTo(0.5, 0.5);
	
	var _point7 = this.game.add.sprite(435.0, 2519.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point7.scale.setTo(0.8, 0.8);
	_point7.anchor.setTo(0.5, 0.5);
	
	var _point8 = this.game.add.sprite(302.0, 2292.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point8.scale.setTo(0.8, 0.8);
	_point8.anchor.setTo(0.5, 0.5);
	
	var _point9 = this.game.add.sprite(619.0, 2129.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point9.scale.setTo(1.1, 1.1);
	_point9.anchor.setTo(0.5, 0.5);
	
	var _point10 = this.game.add.sprite(304.0, 2155.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point10.scale.setTo(0.8, 0.8);
	_point10.anchor.setTo(0.5, 0.5);
	
	var _point11 = this.game.add.sprite(454.0, 1955.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point11.scale.setTo(0.8, 0.8);
	_point11.anchor.setTo(0.5, 0.5);
	
	var _point12 = this.game.add.sprite(136.0, 1797.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point12.scale.setTo(0.8, 0.8);
	_point12.anchor.setTo(0.5, 0.5);
	
	var _point13 = this.game.add.sprite(350.0, 1404.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point13.scale.setTo(0.8, 0.8);
	_point13.anchor.setTo(0.5, 0.5);
	
	var _point14 = this.game.add.sprite(639.0, 1224.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point14.scale.setTo(0.8, 0.8);
	_point14.anchor.setTo(0.5, 0.5);
	
	var _point15 = this.game.add.sprite(555.0, 996.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point15.scale.setTo(0.8, 0.8);
	_point15.anchor.setTo(0.5, 0.5);
	
	var _point16 = this.game.add.sprite(352.0, 850.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point16.scale.setTo(0.8, 0.8);
	_point16.anchor.setTo(0.5, 0.5);
	
	var _point17 = this.game.add.sprite(282.0, 644.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point17.scale.setTo(0.8, 0.8);
	_point17.anchor.setTo(0.5, 0.5);
	
	var _point18 = this.game.add.sprite(459.0, 624.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point18.scale.setTo(0.8, 0.8);
	_point18.anchor.setTo(0.5, 0.5);
	
	var _point19 = this.game.add.sprite(587.0, 483.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point19.scale.setTo(1.1, 1.1);
	_point19.anchor.setTo(0.5, 0.5);
	
	var _point20 = this.game.add.sprite(2472.0, 2073.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point20.anchor.setTo(0.5, 0.5);
	
	var _point21 = this.game.add.sprite(2441.0, 1961.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point21.anchor.setTo(0.5, 0.5);
	
	var _point22 = this.game.add.sprite(2285.0, 2022.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point22.anchor.setTo(0.5, 0.5);
	
	var _point23 = this.game.add.sprite(2113.0, 2079.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point23.anchor.setTo(0.5, 0.5);
	
	var _point24 = this.game.add.sprite(2076.0, 1971.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point24.anchor.setTo(0.5, 0.5);
	
	var _point25 = this.game.add.sprite(2229.0, 1890.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point25.anchor.setTo(0.5, 0.5);
	
	var _point26 = this.game.add.sprite(2353.0, 1788.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point26.anchor.setTo(0.5, 0.5);
	
	var _point27 = this.game.add.sprite(2154.0, 1777.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point27.anchor.setTo(0.5, 0.5);
	
	var _point28 = this.game.add.sprite(1962.0, 1724.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point28.anchor.setTo(0.5, 0.5);
	
	var _point29 = this.game.add.sprite(1921.0, 1553.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point29.scale.setTo(1.5, 1.5);
	_point29.anchor.setTo(0.5, 0.5);
	
	var _point30 = this.game.add.sprite(2042.0, 1373.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point30.anchor.setTo(0.5, 0.5);
	
	var _point31 = this.game.add.sprite(2218.0, 1292.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point31.anchor.setTo(0.5, 0.5);
	
	var _point32 = this.game.add.sprite(2407.0, 1190.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point32.anchor.setTo(0.5, 0.5);
	
	var _point33 = this.game.add.sprite(2484.0, 1061.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point33.anchor.setTo(0.5, 0.5);
	
	var _point34 = this.game.add.sprite(2405.0, 903.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point34.anchor.setTo(0.5, 0.5);
	
	var _point35 = this.game.add.sprite(2202.0, 822.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point35.anchor.setTo(0.5, 0.5);
	
	var _point36 = this.game.add.sprite(2206.0, 680.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point36.anchor.setTo(0.5, 0.5);
	
	var _point37 = this.game.add.sprite(2107.0, 539.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point37.anchor.setTo(0.5, 0.5);
	
	var _point38 = this.game.add.sprite(2318.0, 528.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point38.anchor.setTo(0.5, 0.5);
	
	var _point39 = this.game.add.sprite(2972.0, 425.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point39.scale.setTo(1.5, 1.5);
	_point39.anchor.setTo(0.5, 0.5);
	
	var _point40 = this.game.add.sprite(3162.0, 2260.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point40.scale.setTo(0.75, 0.75);
	_point40.anchor.setTo(0.5, 0.5);
	
	var _point41 = this.game.add.sprite(3202.0, 2207.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point41.scale.setTo(0.75, 0.75);
	_point41.anchor.setTo(0.5, 0.5);
	
	var _point42 = this.game.add.sprite(3285.0, 2195.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point42.scale.setTo(0.75, 0.75);
	_point42.anchor.setTo(0.5, 0.5);
	
	var _point43 = this.game.add.sprite(3367.0, 2186.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point43.scale.setTo(0.75, 0.75);
	_point43.anchor.setTo(0.5, 0.5);
	
	var _point44 = this.game.add.sprite(3452.0, 2175.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point44.scale.setTo(0.75, 0.75);
	_point44.anchor.setTo(0.5, 0.5);
	
	var _point45 = this.game.add.sprite(3537.0, 2148.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point45.scale.setTo(0.75, 0.75);
	_point45.anchor.setTo(0.5, 0.5);
	
	var _point46 = this.game.add.sprite(3573.0, 2084.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point46.scale.setTo(0.75, 0.75);
	_point46.anchor.setTo(0.5, 0.5);
	
	var _point47 = this.game.add.sprite(3553.0, 2021.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point47.scale.setTo(0.75, 0.75);
	_point47.anchor.setTo(0.5, 0.5);
	
	var _point48 = this.game.add.sprite(3458.0, 2037.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point48.scale.setTo(0.75, 0.75);
	_point48.anchor.setTo(0.5, 0.5);
	
	var _point49 = this.game.add.sprite(3361.0, 2076.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point49.scale.setTo(1.2, 1.2);
	_point49.anchor.setTo(0.5, 0.5);
	
	var _point50 = this.game.add.sprite(3267.0, 2110.0, 'HUD2Atlas', 'AR_worldmap_button02', this);
	_point50.scale.setTo(0.75, 0.75);
	_point50.anchor.setTo(0.5, 0.5);
	
	var _player_animation_Idle = this.game.add.sprite(227.0, 3608.0, 'characterAtlas', 'player_idle', this);
	_player_animation_Idle.scale.setTo(0.7, 0.7);
	_player_animation_Idle.anchor.setTo(1.0, 1.0);
	
	var _BG_Cloud = this.game.add.sprite(1790.0, 5.0, 'BG_Cloud', null, this);
	
	this.game.add.sprite(700.0, 4023.0, 'HUD2Atlas', 'star', this);
	
	this.game.add.sprite(-41.0, 2448.0, 'ItemShop1Atlas', 'char_0', this);
	
	var _grp_characters = this.game.add.group(this);
	
	var _Astoria = new astoriaPrefab(this.game, _grp_characters);
	_Astoria.position.setTo(-683.0, 2446.0);
	
	
	
	// public fields
	
	this.fBackGround = _BackGround;
	this.fBackGround_Line = _BackGround_Line;
	this.fPoint0 = _point0;
	this.fPoint1 = _point1;
	this.fPoint2 = _point2;
	this.fPoint3 = _point3;
	this.fPoint4 = _point4;
	this.fPoint5 = _point5;
	this.fPoint6 = _point6;
	this.fPoint7 = _point7;
	this.fPoint8 = _point8;
	this.fPoint9 = _point9;
	this.fPoint10 = _point10;
	this.fPoint11 = _point11;
	this.fPoint12 = _point12;
	this.fPoint13 = _point13;
	this.fPoint14 = _point14;
	this.fPoint15 = _point15;
	this.fPoint16 = _point16;
	this.fPoint17 = _point17;
	this.fPoint18 = _point18;
	this.fPoint19 = _point19;
	this.fPoint20 = _point20;
	this.fPoint21 = _point21;
	this.fPoint22 = _point22;
	this.fPoint23 = _point23;
	this.fPoint24 = _point24;
	this.fPoint25 = _point25;
	this.fPoint26 = _point26;
	this.fPoint27 = _point27;
	this.fPoint28 = _point28;
	this.fPoint29 = _point29;
	this.fPoint30 = _point30;
	this.fPoint31 = _point31;
	this.fPoint32 = _point32;
	this.fPoint33 = _point33;
	this.fPoint34 = _point34;
	this.fPoint35 = _point35;
	this.fPoint36 = _point36;
	this.fPoint37 = _point37;
	this.fPoint38 = _point38;
	this.fPoint39 = _point39;
	this.fPoint40 = _point40;
	this.fPoint41 = _point41;
	this.fPoint42 = _point42;
	this.fPoint43 = _point43;
	this.fPoint44 = _point44;
	this.fPoint45 = _point45;
	this.fPoint46 = _point46;
	this.fPoint47 = _point47;
	this.fPoint48 = _point48;
	this.fPoint49 = _point49;
	this.fPoint50 = _point50;
	this.fPlayer_animation_Idle = _player_animation_Idle;
	this.fBG_Cloud = _BG_Cloud;
	this.fAstoria = _Astoria;
	
	this.Create();
	
}

/** @type Phaser.Group */
var worldMapPrefab_proto = Object.create(Phaser.Group.prototype);
worldMapPrefab.prototype = worldMapPrefab_proto;
worldMapPrefab.prototype.constructor = worldMapPrefab;

/* --- end generated code --- */
// -- user code here --
 var worlMapfirstScroll = true;
worldMapPrefab.prototype.Create = function () {
 	  this.jsonPoint = '{"Point1":{"x0":"307","y0":"3609","x1":"342.6086956521739","y1":"3639.5427728613568","x2":"612.1739130434783","y2":"3627.3598820058996","x3":"557","y3":"3538"},"Point2":{"x0":"557","y0":"3538","x1":"683.4782608695652","y1":"3528.156342182891","x2":"659.1304347826086","y2":"3355.1917404129795","x3":"592","y3":"3350"},"Point3":{"x0":"592","y0":"3350","x1":"520","y1":"3287.156342182891","x2":"432","y2":"3327","x3":"387","y3":"3277"},"Point4":{"x0":"387","y0":"3277","x1":"276.52173913043475","y1":"3328.4209749085558","x2":"243.47826086956522","y2":"3187.4475235811224","x3":"249","y3":"3147"},"Point5":{"x0":"249","y0":"3147","x1":"337.39130434782606","y1":"3087.6969319141085","x2":"514.7826086956521","y2":"3205.9250950416235","x3":"542","y3":"3098"},"Point6":{"x0":"542","y0":"3098","x1":"580.8695652173913","y1":"3004.4175881483015","x2":"234.78260869565216","y2":"2939.2071732796053","x3":"376","y3":"2800"},"Point7":{"x0":"376","y0":"2800","x1":"377.39130434782606","y1":"2772.720490221036","x2":"493.9130434782609","y2":"2559.3458589525994","x3":"420","y3":"2499"},"Point8":{"x0":"420","y0":"2499","x1":"459.1304347826087","y1":"2455.7823294062405","x2":"288.69565217391306","y2":"2351.3575506451784","x3":"287","y3":"2272"},"Point9":{"x0":"287","y0":"2272","x1":"356.52173913043475","y1":"2189.8439689158618","x2":"690.4347826086956","y2":"2264.535653038822","x3":"604","y3":"2109"},"Point10":{"x0":"604","y0":"2109","x1":"560","y1":"2020.2050580815876","x2":"332.17391304347825","y2":"2230.519077509415","x3":"289","y3":"2135"},"Point11":{"x0":"289","y0":"2135","x1":"81.73913043478261","y1":"2066.7211571789635","x2":"549.5652173913044","y2":"2041.8011599491733","x3":"439","y3":"1935"},"Point12":{"x0":"121","y0":"1777","x1":"6.956521739130435","y1":"1667.3479459593907","x2":"213.91304347826087","y2":"1415.538609704632","x3":"335","y3":"1384"},"Point13":{"x0":"335","y0":"1384","x1":"365.2173913043478","y1":"1439.5546499424522","x2":"685.2173913043478","y2":"1261.2714641017442","x3":"624","y3":"1204"},"Point14":{"x0":"624","y0":"1204","x1":"700.8695652173913","y1":"1177.9180858525074","x2":"626.0869565217391","y2":"970.481507681416","x3":"540","y3":"976"},"Point15":{"x0":"540","y0":"976","x1":"481.7391304347826","y1":"986.8595893592591","x2":"248.69565217391303","y2":"875.30796694038","x3":"337","y3":"830"},"Point16":{"x0":"337","y0":"830","x1":"412.17391304347825","y1":"778.0160915915804","x2":"139.1304347826087","y2":"650.914454277286","x3":"267","y3":"624"},"Point17":{"x0":"444","y0":"604","x1":"535.6521739130435","y1":"663.0973451327433","x2":"718.2608695652174","y2":"485.575221238938","x3":"572","y3":"463"}}';
	  this.jsonPoint = JSON.parse(this.jsonPoint);

	this.fBG_Cloud.position.setTo(0,0);
	var startY = 0;
	var y = 40;
	var distance = 72;
	this.STAGE_UNLOCK_MAP =0;
	this.scroller = game.add.existing(new ScrollableArea(0, startY, 720, 1180, {
		horizontalScroll: false,
		verticalScroll: true,
		timeConstantScroll: 0
	},false));
	
	this.limitScrollVertical  = -1300;
	this.wayPoints = new Array();
	this.numberWayPoints = new Array();
	this.characters = new Array();
	this.addWayPoint();
	this.maxPoint = 0;
	
	if(!isNaN(localData.currentStage))
	this.maxPoint = localData.currentStage;
	this.currentPoint = 0;
	this.isPlayCurrentStage = false; //when user playing current Stage in game
	this.timeCurve = 0;
	

	this.scroller.inputEnabled = true;
	
	this.scroller.addChild(this.fBackGround);
	this.scroller.addChild(this.fBackGround_Line);
	
	for(var i = 0 ; i< this.wayPoints.length ;i++){
		//this.wayPoints[i].animations.play('block');
		this.scroller.addChild(this.wayPoints[i]);
		this.wayPoints[i].visible = false;
	}
	
	this.createWorldMapUI();
	this.createEventButtonPoint();
	this.loadSkin(localData.currentSkin);
	
	this.scroller.start();

   
	this.unlockMap();

	 //Start Scene Game Begin
	 this.visibleScene(true);
	 


	
	this.key8 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.keyJson = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.keyMove = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	this.keyReset = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
	this.keyLoadNewPoint = game.input.keyboard.addKey(Phaser.Keyboard.SIX);

	this.currentPointBezier = -1;
	this.pointBezier = new Array();

	//this.bezier = new bezierCurve();
	for(var i =0 ;i< 4 ;i++){
	var button = this.game.add.button(1068.0, 1648.0, 'HUDAtlas', null, this, null, 'input_Point', null, null, this);
	button.position.setTo(this.playerStand.x,this.playerStand.y);
	button.anchor.setTo(0.5,0.5);
	this.pointBezier.push(button);
	button.visible = false;
	//console.log(" "+this.pointBezier);
	this.scroller.addChild(button);
	//this.scroller.addChild(bezierGraphics);
	}
	/*
	this.pointBezier[0].position.setTo(this.playerStand.x,this.playerStand.y);
	this.pointBezier[1].position.setTo(this.playerStand.x +30,this.playerStand.y +30);
	this.pointBezier[2].position.setTo(this.wayPoints[this.maxPoint+1].x +30,this.wayPoints[this.maxPoint+1].y +30);
	this.pointBezier[3].position.setTo(this.wayPoints[this.maxPoint+1].x-15,this.wayPoints[this.maxPoint+1].y-20);
	this.pointBezier[3].tint = 0x0000ff;
	this.pointBezier[0].tint = 0x00ffff;
	this.pointBezier[0].onInputUp.add(function() {this.onEventDragPoint(0)},this);
	this.pointBezier[1].onInputUp.add(function() {this.onEventDragPoint(1)},this);
	this.pointBezier[2].onInputUp.add(function() {this.onEventDragPoint(2)},this);
	this.pointBezier[3].onInputUp.add(function() {this.onEventDragPoint(3)},this);

	
	
	

	for(var i =0 ;i< pointsArray.length ;i++){
		pointsArray[i].x =this.pointBezier[i].x;
		pointsArray[i].y =this.pointBezier[i].y;
	}

	*/


	this.circleEffect.visible = !GlobalSetting.moveInWorldMap;
	var currentStage = this.maxPoint;
	this.moveIndMap =false;
	if(GlobalSetting.moveInWorldMap){
		this.setPointMoveInWorldMap();
		GlobalSetting.moveInWorldMap = false;
		setTimeout(function () {
			level.f_grpWorldMapScene.moveIndMap = true;
		}, 500);
		this.setPlayerStand(this.maxPoint-1);
		currentStage = this.maxPoint - 1;
	}
	

	this.unlockPoint(currentStage);
	
}

worldMapPrefab.prototype.onEventDragPoint = function (pointIndex) {
	
	this.currentPointBezier  =pointIndex;
}

worldMapPrefab.prototype.createWorldMapUI = function () {


	//eff rig
	this.circleEffect = this.game.add.sprite(227.0, 3608.0, 'HUD2Atlas', 'line_effect_button', this);
	
	this.circleEffect.anchor.setTo(0.5, 0.5);

	this.scroller.addChild(this.circleEffect);

	this.buttonWayPoints = new Array();
	this.starInStages = new Array();
	for(var i = 0 ; i< this.wayPoints.length ;i++){
		this.wayPoints[i].scale.setTo(0.8,1);
		//Create Button
		var buttonPoint = this.game.add.button(847.0, 4219.0, 'HUD2Atlas', null, this, null, 'AR_worldmap_button02', null, null, this);
		buttonPoint.anchor.setTo(0.5, 0.5);
		buttonPoint.position.setTo(this.wayPoints[i].x ,this.wayPoints[i].y);
		buttonPoint.scale.setTo(this.wayPoints[i].scale.x,this.wayPoints[i].scale.y);
		buttonPoint.visible = false;
		this.wayPoints[i].visible = false;
		this.scroller.addChild(buttonPoint);
		this.buttonWayPoints.push(buttonPoint);
	


		//Create Text
		var txt_number = this.game.add.text(696.0, 3114.0, '10', {"font":"bold 20px Arial","fill":"#ffffff"}, this);
		txt_number.anchor.setTo(0.5, 0);
		txt_number.fontSize = 42;
		txt_number.visible = false;
		this.numberWayPoints.push(txt_number);
		this.scroller.addChild(this.numberWayPoints[i]);
		this.numberWayPoints[i].position.setTo(this.wayPoints[i].x,this.wayPoints[i].y-47);
		this.numberWayPoints[i].text = (i+1);

		for(var j = 0 ; j< 3 ;j++){
			var starSprite= this.game.add.sprite(700.0, 4023.0, 'HUD2Atlas', 'star', this);
			starSprite.scale.setTo(0.3);
			starSprite.anchor.setTo(0.5,0);
			var distance = 20;
			var range = 245;
			if(j===0){
				starSprite.position.setTo(buttonPoint.x -distance,buttonPoint.y  +(buttonPoint.height - (buttonPoint.scale.x * range -15 ) ));
				starSprite.angle = 45;
			}
			else if(j===1){
				starSprite.position.setTo(buttonPoint.x,buttonPoint.y  +(buttonPoint.height - (buttonPoint.scale.x* range-5  ) ));
			}
			else{
				starSprite.position.setTo(buttonPoint.x+ distance,buttonPoint.y  +(buttonPoint.height - (buttonPoint.scale.x * range -15 ) ));
				starSprite.angle = -45;
			}

			starSprite.visible = false;
			this.scroller.addChild(starSprite);
			this.starInStages.push(starSprite);

			
		}

	}



	

	//Add Characters
	this.characters.push(this.fAstoria);

	for(var i = 0 ;i <this.characters.length ; i++){
		this.characters[i].Scale(0.5);
		this.scroller.addChild(this.characters[i]);
		//character.visible = false;
	}
	

	
	


	
}

worldMapPrefab.prototype.onEventSelectPoint = function (pointIndex) {

	setTimeout(function () {
		if(GlobalSetting.preventClickButtonWorldMap) return;
		level.f_grp_SelectStagePrefab.visible  = true;
		level.f_grp_SelectStagePrefab.showPopup(pointIndex);
		level.f_grpWorldMapScene.stopScroll();
		level.f_grpMainMenuPrefab.visibleButtonHome(false);
		level.f_grpMainMenuPrefab.visibleButtonControl(false);

		if(level.f_grpWorldMapScene.currentPoint === level.f_grpWorldMapScene.maxPoint){
			//active check next level
			level.f_grpWorldMapScene.isPlayCurrentStage = true;
		}
    }, 100);


	
	this.currentPoint = pointIndex;
	
}

worldMapPrefab.prototype.unlockMap = function () {
	if(localData.currentStage >=this.STAGE_UNLOCK_MAP){
		//hide cloud
		this.fBG_Cloud.visible = false;
 
		this.limitScrollVertical = 60;
	}
	else{
			this.scroller.addChild(this.fBG_Cloud);
	}
	
}

worldMapPrefab.prototype.loadSkin = function (currentSkin) {
	
	
	this.playerStand =this.characters[currentSkin];

	//Hide All Character
	for(var i =0;i<this.characters.length;i++)
	this.characters[i].visible = false;

	this.playerStand.visible = true;
	//this.setPlayerStand(this.maxPoint);
}


worldMapPrefab.prototype.visibleScene = function (visible) {
	
	this.fBackGround.visible = visible;
	this.fBackGround_Line.visible = visible;
	 
	for(var i = this.currentPoint+1 ; i< this.wayPoints.length ;i++){
		
		
		this.wayPoints[i].visible = visible;
	}

	/*
	
	for(var i = 0 ; i<this.starInStages.length ;i++){
		
		this.starInStages[i].visible = true;
	}
	*/
	var addPoint = 1;
	if(GlobalSetting.moveInWorldMap) addPoint =0;
	for(var i = 0 ; i<this.maxPoint + addPoint ;i++){
		
		this.numberWayPoints[i].visible = visible;
	}

	//console.log("localData.starInStages.length "+localData.starInStages.length);
	for(var i = 0 ; i< this.maxPoint + addPoint ;i++){
		
		var beginStar = i*3;
		//console.log("localData.starInStages[i] "+localData.starInStages[i]);
		for(j = 0 ; j< localData.starInStages[i] ;j++){
			this.starInStages[beginStar+j].visible = true;
		}
	}
	
	this.fPlayer_animation_Idle.visible = visible;
	
	this.fBG_Cloud.visible = visible;
}

worldMapPrefab.prototype.stopScroll = function () {
	
	this.scroller.stop();
}

worldMapPrefab.prototype.startScroll = function () {
	
	this.scroller.start();
}


worldMapPrefab.prototype.setPlayerStand = function (currentPoint) {
	
	
	this.playerStand.position.setTo(this.wayPoints[currentPoint].x-60,this.wayPoints[currentPoint].y-205);

	this.circleEffect.scale.setTo(1, 1);
	
	this.circleEffect.position.setTo(this.wayPoints[currentPoint].x,this.wayPoints[currentPoint].y+10);

	this.scrollTo();
}

worldMapPrefab.prototype.setCurrentStage = function () {
	//when player press play single button in add gems or something
	this.maxPoint = localData.currentStage;
	
	this.isPlayCurrentStage = true;
}

worldMapPrefab.prototype.unlockPoint = function (currentLevel) {
	
	
	//Block All Way Point
	for(var i = 0 ; i< this.wayPoints.length ;i++){
		this.wayPoints[i].animations.play('block');
		this.buttonWayPoints[i].animations.play('block');
		 
	}
	
	//Unblock way point when character Update Level
	for(var i = 0 ; i <= currentLevel ;i++){
		this.wayPoints[i].visible = false;
		this.buttonWayPoints[i].visible = true;
		
		
	}
	
	this.setPlayerStand(currentLevel);
}

//check star to unlock next level
worldMapPrefab.prototype.checkNextLevel = function (star) {

	//when use playing prev stage
	if(this.isPlayCurrentStage){
		//if has 1 star unlock next level
		if(star >= 1){
			
			localData.currentStage +=1;
		
			//save Star in stage to data
			if(level.starInStages ===null ||level.starInStages ===undefined) level.starInStages =new Array();
			
			localData.starInStages.push(star);
			GlobalSetting.moveInWorldMap = true;
			
		}
	}

		//check number star in data
		
		if( localData.starInStages != undefined){
			
			if(star > localData.starInStages[this.currentPoint] ){
			
				localData.starInStages[this.currentPoint] = star;
			}
		}
	//save Data 
	level.saveData();

}

worldMapPrefab.prototype.setPointMoveInWorldMap = function (star) {
	var tempJson = this.jsonPoint.Point1;
	console.log("localData.currentStage " + localData.currentStage);
	switch(localData.currentStage){
		case 1:  tempJson = this.jsonPoint.Point1; break;
		case 2:  tempJson = this.jsonPoint.Point2; break;
		case 3:  tempJson = this.jsonPoint.Point3; break;
		case 4:  tempJson = this.jsonPoint.Point4; break;
		case 5:  tempJson = this.jsonPoint.Point5; break;
		case 6:  tempJson = this.jsonPoint.Point6; break;
		case 7:  tempJson = this.jsonPoint.Point7; break;
		case 8:  tempJson = this.jsonPoint.Point8; break;
		case 9:  tempJson = this.jsonPoint.Point9; break;
		case 10:  tempJson = this.jsonPoint.Point10; break;
		case 11:  tempJson = this.jsonPoint.Point11; break;
		case 12:  tempJson = this.jsonPoint.Point12; break;
		case 13:  tempJson = this.jsonPoint.Point13; break;
		case 14:  tempJson = this.jsonPoint.Point14; break;
		case 15:  tempJson = this.jsonPoint.Point15; break;
		case 16:  tempJson = this.jsonPoint.Point16; break;
		case 17:  tempJson = this.jsonPoint.Point17; break;
	}


	this.pointBezier[0].x = parseFloat (tempJson.x0);
	this.pointBezier[0].y = parseFloat(tempJson.y0);
	this.pointBezier[1].position.setTo(parseFloat(tempJson.x1),parseFloat(tempJson.y1));
	this.pointBezier[2].position.setTo(parseFloat(tempJson.x2),parseFloat(tempJson.y2));

	this.pointBezier[3].x = parseFloat(tempJson.x3);
	this.pointBezier[3].y = parseFloat(tempJson.y3);

}




worldMapPrefab.prototype.scrollTo = function () {

	this.scroller.PressedDown(false);
	this.scroller.activeLimitScrollVertical(true,this.limitScrollVertical);
	this.scroller.UpdatePosition(0,-this.playerStand.position.y );
}

worldMapPrefab.prototype.manualUpdate = function () {

	var maxScale = 1.05;
	 level.fadeScaleMax(this.circleEffect,0.7,maxScale,0.01);
	this.circleEffect.alpha = maxScale/this.circleEffect.scale.x - 0.5;

	if(this.moveIndMap){
		
		this.timeCurve +=0.01;
		if(this.timeCurve>1) {
			this.moveIndMap = false;
			this.unlockPoint(this.maxPoint);
			this.circleEffect.visible = true;
			this.numberWayPoints[this.maxPoint].visible = true;
		}
		var p = bezierPoint(this.pointBezier[0], this.pointBezier[1], this.pointBezier[2], this.pointBezier[3], this.timeCurve);
		this.playerStand.position.setTo(p.x -50  ,p.y-195);
		
		
		this.scrollTo();
		
	}



	/*

	if(this.currentPointBezier>=0){
		this.pointBezier[this.currentPointBezier].x = game.input.mousePointer.x;
		this.pointBezier[this.currentPointBezier].y = game.input.mousePointer.y  -this.scroller.y;

		pointsArray[this.currentPointBezier].x =this.pointBezier[this.currentPointBezier].x
		pointsArray[this.currentPointBezier].y =this.pointBezier[this.currentPointBezier].y
		//startDrag();
		updateDrag();
		//stopDrag();
	}
	//console.log("Point y" +this.scroller.y );
	//console.log("y" +game.input.mousePointer.y);


	if(this.key8.isDown){
		this.currentPointBezier = - 1;
	}

	if(this.keyJson.isDown){
		var message ='{"Point1": {"x0": "'+pointsArray[0].x +
		'" ,"y0": "'+pointsArray[0].y
		 +'", "x1": "'+pointsArray[1].x+ '", "y1": "'+pointsArray[1].y
		 + '", "x2": "'+pointsArray[2].x+ '", "y2": "'+pointsArray[2].y+
		  '", "x3": "'+pointsArray[3].x+ '", "y3": "'+pointsArray[3].y+ '"	}}';

		  console.log(message);

		 
	}

	if(this.keyMove.isDown){
		
		
		this.timeCurve +=0.01;
		if(this.timeCurve>1) return;
		var p = bezierPoint(pointsArray[0], pointsArray[1], pointsArray[2], pointsArray[3], this.timeCurve);
		console.log("Px " +this.playerStand.x);
		console.log("Py " +this.playerStand.y);
		this.playerStand.position.setTo(p.x  ,p.y);
		
		
		this.scrollTo();
		
	}


	if(this.keyReset.isDown){
		

		
		this.timeCurve =0;
		this.maxPoint=0;
		
	}


	if(this.keyLoadNewPoint.isDown){
		

		
		this.maxPoint+=1;
	
		this.setPlayerStand(this.maxPoint);


		this.pointBezier[0].position.setTo(this.playerStand.x,this.playerStand.y);
		this.pointBezier[1].position.setTo(this.playerStand.x +30,this.playerStand.y +30);
		this.pointBezier[2].position.setTo(this.wayPoints[this.maxPoint+1].x +30,this.wayPoints[this.maxPoint+1].y +30);
		this.pointBezier[3].position.setTo(this.wayPoints[this.maxPoint+1].x-15,this.wayPoints[this.maxPoint+1].y-20);
		this.pointBezier[3].tint = 0x0000ff;
		this.pointBezier[0].tint = 0x00ffff;
	

	
	

	for(var i =0 ;i< pointsArray.length ;i++){
		pointsArray[i].x =this.pointBezier[i].x;
		pointsArray[i].y =this.pointBezier[i].y;
	}
		
	}

	*/

}



worldMapPrefab.prototype.createEventButtonPoint = function () {
	this.buttonWayPoints[0].onInputUp.add(function() {this.onEventSelectPoint(0)},this);
	this.buttonWayPoints[1].onInputUp.add(function() {this.onEventSelectPoint(1)},this);
	this.buttonWayPoints[2].onInputUp.add(function() {this.onEventSelectPoint(2)},this);
	this.buttonWayPoints[3].onInputUp.add(function() {this.onEventSelectPoint(3)},this);
	this.buttonWayPoints[4].onInputUp.add(function() {this.onEventSelectPoint(4)},this);
	this.buttonWayPoints[5].onInputUp.add(function() {this.onEventSelectPoint(5)},this);
	this.buttonWayPoints[6].onInputUp.add(function() {this.onEventSelectPoint(6)},this);
	this.buttonWayPoints[7].onInputUp.add(function() {this.onEventSelectPoint(7)},this);
	this.buttonWayPoints[8].onInputUp.add(function() {this.onEventSelectPoint(8)},this);
	this.buttonWayPoints[9].onInputUp.add(function() {this.onEventSelectPoint(9)},this);

	this.buttonWayPoints[10].onInputUp.add(function() {this.onEventSelectPoint(10)},this);
	this.buttonWayPoints[11].onInputUp.add(function() {this.onEventSelectPoint(11)},this);
	this.buttonWayPoints[12].onInputUp.add(function() {this.onEventSelectPoint(12)},this);
	this.buttonWayPoints[13].onInputUp.add(function() {this.onEventSelectPoint(13)},this);
	this.buttonWayPoints[14].onInputUp.add(function() {this.onEventSelectPoint(14)},this);
	this.buttonWayPoints[15].onInputUp.add(function() {this.onEventSelectPoint(15)},this);
	this.buttonWayPoints[16].onInputUp.add(function() {this.onEventSelectPoint(16)},this);
	this.buttonWayPoints[17].onInputUp.add(function() {this.onEventSelectPoint(17)},this);
	this.buttonWayPoints[18].onInputUp.add(function() {this.onEventSelectPoint(18)},this);
	this.buttonWayPoints[19].onInputUp.add(function() {this.onEventSelectPoint(19)},this);

	this.buttonWayPoints[20].onInputUp.add(function() {this.onEventSelectPoint(20)},this);
	this.buttonWayPoints[21].onInputUp.add(function() {this.onEventSelectPoint(21)},this);
	this.buttonWayPoints[22].onInputUp.add(function() {this.onEventSelectPoint(22)},this);
	this.buttonWayPoints[23].onInputUp.add(function() {this.onEventSelectPoint(23)},this);
	this.buttonWayPoints[24].onInputUp.add(function() {this.onEventSelectPoint(24)},this);
	this.buttonWayPoints[25].onInputUp.add(function() {this.onEventSelectPoint(25)},this);
	this.buttonWayPoints[26].onInputUp.add(function() {this.onEventSelectPoint(26)},this);
	this.buttonWayPoints[27].onInputUp.add(function() {this.onEventSelectPoint(27)},this);
	this.buttonWayPoints[28].onInputUp.add(function() {this.onEventSelectPoint(28)},this);
	this.buttonWayPoints[29].onInputUp.add(function() {this.onEventSelectPoint(29)},this);

	this.buttonWayPoints[30].onInputUp.add(function() {this.onEventSelectPoint(30)},this);
	this.buttonWayPoints[31].onInputUp.add(function() {this.onEventSelectPoint(31)},this);
	this.buttonWayPoints[32].onInputUp.add(function() {this.onEventSelectPoint(32)},this);
	this.buttonWayPoints[33].onInputUp.add(function() {this.onEventSelectPoint(33)},this);
	this.buttonWayPoints[34].onInputUp.add(function() {this.onEventSelectPoint(34)},this);
	this.buttonWayPoints[35].onInputUp.add(function() {this.onEventSelectPoint(35)},this);
	this.buttonWayPoints[36].onInputUp.add(function() {this.onEventSelectPoint(36)},this);
	this.buttonWayPoints[37].onInputUp.add(function() {this.onEventSelectPoint(37)},this);
	this.buttonWayPoints[38].onInputUp.add(function() {this.onEventSelectPoint(38)},this);
	this.buttonWayPoints[39].onInputUp.add(function() {this.onEventSelectPoint(39)},this);

	this.buttonWayPoints[40].onInputUp.add(function() {this.onEventSelectPoint(40)},this);
	this.buttonWayPoints[41].onInputUp.add(function() {this.onEventSelectPoint(41)},this);
	this.buttonWayPoints[42].onInputUp.add(function() {this.onEventSelectPoint(42)},this);
	this.buttonWayPoints[43].onInputUp.add(function() {this.onEventSelectPoint(43)},this);
	this.buttonWayPoints[44].onInputUp.add(function() {this.onEventSelectPoint(44)},this);
	this.buttonWayPoints[45].onInputUp.add(function() {this.onEventSelectPoint(45)},this);
	this.buttonWayPoints[46].onInputUp.add(function() {this.onEventSelectPoint(46)},this);
	this.buttonWayPoints[47].onInputUp.add(function() {this.onEventSelectPoint(47)},this);
	this.buttonWayPoints[48].onInputUp.add(function() {this.onEventSelectPoint(48)},this);
	this.buttonWayPoints[49].onInputUp.add(function() {this.onEventSelectPoint(49)},this);
}

worldMapPrefab.prototype.addWayPoint = function () {
	
	
	this.wayPoints.push(this.fPoint0);
	this.wayPoints.push(this.fPoint1);
	this.wayPoints.push(this.fPoint2);
	this.wayPoints.push(this.fPoint3);
	this.wayPoints.push(this.fPoint4);
	this.wayPoints.push(this.fPoint5);
	this.wayPoints.push(this.fPoint6);
	this.wayPoints.push(this.fPoint7);
	this.wayPoints.push(this.fPoint8);
	this.wayPoints.push(this.fPoint9);
	this.wayPoints.push(this.fPoint10);
	this.wayPoints.push(this.fPoint11);
	this.wayPoints.push(this.fPoint12);
	this.wayPoints.push(this.fPoint13);
	this.wayPoints.push(this.fPoint14);
	this.wayPoints.push(this.fPoint15);
	this.wayPoints.push(this.fPoint16);
	this.wayPoints.push(this.fPoint17);
	this.wayPoints.push(this.fPoint18);
	this.wayPoints.push(this.fPoint19);
	this.wayPoints.push(this.fPoint20);
	this.wayPoints.push(this.fPoint21);
	this.wayPoints.push(this.fPoint22);
	this.wayPoints.push(this.fPoint23);
	this.wayPoints.push(this.fPoint24);
	this.wayPoints.push(this.fPoint25);
	this.wayPoints.push(this.fPoint26);
	this.wayPoints.push(this.fPoint27);
	this.wayPoints.push(this.fPoint28);
	this.wayPoints.push(this.fPoint29);
	this.wayPoints.push(this.fPoint30);
	this.wayPoints.push(this.fPoint31);
	this.wayPoints.push(this.fPoint32);
	this.wayPoints.push(this.fPoint33);
	this.wayPoints.push(this.fPoint34);
	this.wayPoints.push(this.fPoint35);
	this.wayPoints.push(this.fPoint36);
	this.wayPoints.push(this.fPoint37);
	this.wayPoints.push(this.fPoint38);
	this.wayPoints.push(this.fPoint39);
	this.wayPoints.push(this.fPoint40);
	this.wayPoints.push(this.fPoint41);
	this.wayPoints.push(this.fPoint42);
	this.wayPoints.push(this.fPoint43);
	this.wayPoints.push(this.fPoint44);
	this.wayPoints.push(this.fPoint45);
	this.wayPoints.push(this.fPoint46);
	this.wayPoints.push(this.fPoint47);
	this.wayPoints.push(this.fPoint48);
	this.wayPoints.push(this.fPoint49);
	this.wayPoints.push(this.fPoint50);

	/*
	this.wayPoints.push(this.fPoint51);
	this.wayPoints.push(this.fPoint52);
	this.wayPoints.push(this.fPoint53);
	this.wayPoints.push(this.fPoint54);
	this.wayPoints.push(this.fPoint55);
	this.wayPoints.push(this.fPoint56);
	this.wayPoints.push(this.fPoint57);
	this.wayPoints.push(this.fPoint58);
	this.wayPoints.push(this.fPoint59);
	this.wayPoints.push(this.fPoint60);
	this.wayPoints.push(this.fPoint61);
	this.wayPoints.push(this.fPoint62);
	this.wayPoints.push(this.fPoint63);
	this.wayPoints.push(this.fPoint64);
	this.wayPoints.push(this.fPoint65);
	this.wayPoints.push(this.fPoint66);
	this.wayPoints.push(this.fPoint67);
	this.wayPoints.push(this.fPoint68);
	this.wayPoints.push(this.fPoint69);
	this.wayPoints.push(this.fPoint70);
	this.wayPoints.push(this.fPoint71);
	this.wayPoints.push(this.fPoint72);
	this.wayPoints.push(this.fPoint73);
	this.wayPoints.push(this.fPoint74);
	this.wayPoints.push(this.fPoint75);
	this.wayPoints.push(this.fPoint76);
	this.wayPoints.push(this.fPoint77);
	this.wayPoints.push(this.fPoint78);
	this.wayPoints.push(this.fPoint79);
	this.wayPoints.push(this.fPoint80);
	this.wayPoints.push(this.fPoint81);
	this.wayPoints.push(this.fPoint82);
	this.wayPoints.push(this.fPoint83);
	this.wayPoints.push(this.fPoint84);
	this.wayPoints.push(this.fPoint85);
	this.wayPoints.push(this.fPoint86);
	this.wayPoints.push(this.fPoint87);
	this.wayPoints.push(this.fPoint88);
	this.wayPoints.push(this.fPoint89);
	this.wayPoints.push(this.fPoint90);
	this.wayPoints.push(this.fPoint91);
	this.wayPoints.push(this.fPoint92);
	this.wayPoints.push(this.fPoint93);
	this.wayPoints.push(this.fPoint94);
	this.wayPoints.push(this.fPoint95);
	*/
	//Add Animation
	for(var i = 1 ; i< this.wayPoints.length ;i++){
		this.wayPoints[i].animations.add('block', ['AR_worldmap_button01'], 60, false);
		this.wayPoints[i].animations.add('unlock', ['AR_worldmap_button02'], 60, false);
	}
	

}



