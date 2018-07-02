// -- user code here --
/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * preLoad.
 */
function preLoad() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var preLoad_proto = Object.create(Phaser.State.prototype);
preLoad.prototype = preLoad_proto;
preLoad.prototype.constructor = preLoad;

preLoad.prototype.init = function () {
	
	this.Init();
	
};

preLoad.prototype.preload = function () {
	
	this.load.pack('section', 'assets/pack.json');
	
	this.Preload();
	
};

preLoad.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'BG_01');
	
	
	this.Create();
	
};

/* --- end generated code --- */
// -- user code here --


var facebookStuff = {
    name: "",
    picture: ""
}

var backUpGems = 0;
var backUpCoins = 0;
var backUpGemSaveData = 0;
var localData = {

    FacebookID: 0,
    Score :0,
    BestScore: 0,
    Efficiency :0,
    BestEfficiency: 0,
    HeadShot :0,
    BestHeadShot: 0,
    currentEXP: 0,
    currentLevel: 0,
    currentStage: 0,
    bgmSetting: 1,
    seSetting: 1,
    gems: 120,
    gemsBackUp: 120,
    coins: 700000,
    languageIndex : 0,
    bowItem :new Array(),
    skinItem :new Array(),
    currentSkin: 0,
    currentBow  : 0,
    isFirstPlay: false,
    scrollMap  : 0,
    contextIDs : new Array(),
    friendIDs :new Array(),
    starInStages : new Array(),
    photoOtherPlayer:"",
}
var MENUSTATE = {
    NONE: 0,
    HOME: 1,
    WORLDMAP: 2,
    LEADERBOARD: 3,
    INFOR: 4,
    SETTING: 5,
    TERMS :6,
    IAP:7,
    LANGUAGE:8,
    ADDGEMS :9,
}

var MAPTYPE = {
    NONE: 0,
    ASIA: 1,
    SOUTH_AFRICA: 2,
    USA: 3,
    JAPAN: 4,
    EUROPE: 5,
}


var lobby_ASIA = {}
lobby_ASIA.mapType = MAPTYPE.ASIA;
lobby_ASIA.rooms = new Array();

var lobby_SOUTH_AFRICA = {}
lobby_SOUTH_AFRICA.mapType = MAPTYPE.SOUTH_AFRICA;
lobby_SOUTH_AFRICA.rooms = new Array();

var lobby_USA = {}
lobby_USA.mapType = MAPTYPE.USA;
lobby_USA.rooms = new Array();

var lobby_JAPAN = {}
lobby_JAPAN.mapType = MAPTYPE.JAPAN;
lobby_JAPAN.rooms = new Array();

var lobby_EUROPE = {}
lobby_EUROPE.mapType = MAPTYPE.EUROPE;
lobby_EUROPE.rooms = new Array();


var lobbyList = new Array();

var isRewardVideoSuccess = false;

GlobalSetting = {}
GlobalSetting.leaderBoardScore = 'global_score';
GlobalSetting.leaderBoardHeadShot = 'global_headShot';
GlobalSetting.showPlayerInfor = false;
GlobalSetting.BGMVolume = 1;
GlobalSetting.SEVolume = 1;
GlobalSetting.BGM;
GlobalSetting.currentMenuState = MENUSTATE.HOME;
GlobalSetting.photonManager;
GlobalSetting.isPause = false;
GlobalSetting.entryPointData =null;
GlobalSetting.contextID =0;
GlobalSetting.preventClickButtonWorldMap = false;
GlobalSetting.pauseGame = false;
GlobalSetting.clientPhoto = "";
GlobalSetting.moveInWorldMap = false;
var isShowAds = false;

var friendList = new Array();
var friendListID = new Array();
var friendListPhoto = new Array();

var prevFriendChallengeWithMe ={}
prevFriendChallengeWithMe.id = 0;
prevFriendChallengeWithMe.name = "";
prevFriendChallengeWithMe.photo = "";
var prevFriendChallengeWithMeID= 0;

const INTERSTITIAL_PLACEMENT_ID = '1818288891806541_1821121948189902';
const REWARDED_PLACEMENT_ID = '1818288891806541_1825465617755535';
const MAX_PLAYER_JOIN_ROOM = 2;

var watchedInterstitials = 0;
var watchedRewardedVideos = 0;
var preloadedRewardedVideo = null;
var preloadedInterstitial = null;


preLoad.prototype.Init = function() {
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.stage.backgroundColor = '#000000';
    //Scale Screen for all device
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    //Register plugin PlayFab
    game.PlayFab = game.plugins.add(Phaser.Plugin.PlayFab);

   

    

}

preLoad.prototype.Preload = function() {

    game.load.onFileComplete.add(this.fileLoad, this);
    game.load.onLoadComplete.add(this.loadComplete, this);

    GlobalSetting.photonManager = new photonManager();
    GlobalSetting.photonManager.start();
}
preLoad.prototype.Create = function() {
    lobbyList.push(lobby_ASIA);
    lobbyList.push(lobby_SOUTH_AFRICA);
    lobbyList.push(lobby_USA);
    lobbyList.push(lobby_JAPAN);
    lobbyList.push(lobby_EUROPE);
    
    
  //  game.state.start("Level");
   
     
}


preLoad.prototype.fileLoad = function(progress, cacheKey, success, totalLoaded, totalFiles) {
	console.log("progress " + progress);
	if(progress >5){
		FBInstant.setLoadingProgress(progress);
	}
	
    FBInstant.initializeAsync().then(function() {
    	
        FBInstant.setLoadingProgress(progress);

    
    });
};

preLoad.prototype.render = function() {

    if (isShowAds) {
        var x = 1000;
        var y = 0;
        var i = 20;
        this.game.debug.text("show ADs", x, y += i);
        if (preloadedInterstitial != null) {
            this.game.debug.text("preloadedInterstitial " + ADS.preloadedInterstitial, x, y += i);
        }

        this.game.debug.text("errorMSG " + errorMSG, x, y += i);

    }
}


preLoad.prototype.loadComplete = function() {
    // Finished loading. Start the game

    FBInstant.startGameAsync().then(function() {

        var playerId = FBInstant.player.getID();
        var playerName = FBInstant.player.getName();
        facebookStuff.name = playerName;
        facebookStuff.picture = FBInstant.player.getPhoto();
        localData.FacebookID =playerId;
      
        //Load Image
        loader = new Phaser.Loader(game);
        loader.crossOrigin = "anonymous";
        loader.image("profilePicture", facebookStuff.picture);

        loader.start();
        
      GlobalSetting.photonManager.setUserId(FBInstant.player.getID()); 
        
   
        
       
       
       GlobalSetting.entryPointData =FBInstant.getEntryPointData();
      

        if (!game.device.desktop) {
            //Load ADS
            var supportedAPIs = FBInstant.getSupportedAPIs();
            if (supportedAPIs.includes('getInterstitialAdAsync') && supportedAPIs.includes('getRewardedVideoAsync')) {
                //
                // Preload Interstitial
                //
                FBInstant.getInterstitialAdAsync(
                    INTERSTITIAL_PLACEMENT_ID, // Your Ad Placement Id
                ).then(function(interstitial) {
                    // Load the Ad asynchronously
                    preloadedInterstitial = interstitial;
                    return preloadedInterstitial.loadAsync();
                }).then(function() {
                    //showElement('btn-interstitial');
                }).catch(function(err) {
                    console.log('Interstitial failed to preload: ' + err.message);
                });

                //
                // Preload Rewarded
                //
                FBInstant.getRewardedVideoAsync(
                    REWARDED_PLACEMENT_ID, // Your Ad Placement Id
                ).then(function(rewarded) {
                    // Load the Ad asynchronously
                    preloadedRewardedVideo = rewarded;
                    return preloadedRewardedVideo.loadAsync();

                }).then(function() {

                    //showElement('btn-rewarded-video');
                }).catch(function(err) {
                    console.log('Rewarded video failed to preload:' + err.message);
                });

            } else {
                console.log('Ads not supported in this session');
            }

           
        }

    console.log("ID" +playerId);
       //Login with playfab
  game.PlayFab.settings.titleId = "D47F";
  game.PlayFab.ClientApi.LoginWithCustomID({
      "CustomId": playerId+"_KEY",
      "CreateAccount": true
  }, function(result, error) {

      //Set user playfab id
      game.PlayFab.settings.PlayFabId = result.data.PlayFabId;

     

      // //Check if first play
      game.PlayFab.ClientApi.GetUserData({
          Keys: ['Data'],
      }, function(response, error) {
          if (error) {
              console.log("Got error retrieving user data:");
              console.log(error.GenerateErrorReport());
          } else {
              var isFirstPlay = (response.data.Data.Data) ?
                      JSON.parse(response.data.Data.Data.Value).isFirstPlay : null;
                  

              if (isFirstPlay === null) {

                  //Set default statistic for new Player
                  game.PlayFab.ClientApi.ExecuteCloudScript({
                      "FunctionName": "setDefaultPlayerStatistics",
                      "RevisionSelection": "Live",
                      "GeneratePlayStreamEvent": true
                  }, function(response, error) {
                      if (error) console.log(PlayFab.GenerateErrorReport(error));
                      else console.log("Create id [" + game.PlayFab.settings.PlayFabId + "] success");
                  });


                  //Init first play data
                  //Save data to Playfab


                  game.PlayFab.ClientApi.UpdateUserData({
                      "Data": JSON.stringify(localData),
                  }, function(response, error) {
                      if (response) {
                          
                           localData.gems =50000;
                           localData.coins =100000;
                           
                           
                          game.state.start("Level");
                      }
                  });
              } else {
                  //load data if not first play	
                  game.PlayFab.ClientApi.GetUserData({},
                      function(response, error) {
                          if (response)
                              localData = JSON.parse(response.data.Data.Data.Value);

                              if(localData.contextIDs ===null ||localData.contextIDs ===undefined){
                                  localData.contextIDs =new Array();
                                  localData.friendIDs =new Array();
                              }
                              

                              //Check Null
                              if(localData.starInStages ===null ||localData.starInStages ===undefined){
                                  localData.starInStages =new Array();
                              }
                             
                          game.state.start("Level");

                      });
              }
          }
      });

  });

      
    })
};

preLoad.prototype.loadPlayFab = function(playerId){
  
}






function FBshowRewardedVideo() {
	  if (game.device.desktop)  return;
	
	
    preloadedRewardedVideo.showAsync()
        .then(function() {
            // Perform post-ad success operation
            console.log('reward video ad finished successfully');
            
            //Loaded new ads
            var supportedAPIs = FBInstant.getSupportedAPIs();
            if (supportedAPIs.includes('getInterstitialAdAsync') && supportedAPIs.includes('getRewardedVideoAsync')) {
                FBInstant.getRewardedVideoAsync(
                    REWARDED_PLACEMENT_ID // Your Ad Placement Id
                ).then(function(rewarded) {
                    // Load the Ad asynchronously
                    preloadedRewardedVideo = rewarded;
                    isRewardVideoSuccess = true;
                    
                    if(level!=undefined){
	                    switch(level.caseWatchRewardVideo){
	                    case 1:
	                    	
                            level.f_grp_GameOver.doubleGemsWatchVideo();

                            break;
                            
                        case 2:
                        
                            level.f_grpMainMenuPrefab.addGems(30);
                            
                            break;
                    	
                        }
                    }
                    
                    
                    return preloadedRewardedVideo.loadAsync();
                }).then(function() {
                    if(level!=undefined){
	                    switch(level.caseWatchRewardVideo){
	                    case 1:
	                    	
                          

                            break;
                            
                        case 2:
                        
                            level.f_grpMainMenuPrefab.fTxt_nofti_show_reward_video_failed.text = level.language.noLoadVideo();
                            
                            break;
                    	
                        }
                    }
                }).catch(function(err) {
                    preloadedRewardedVideo = null;
                    console.error('Rewarded video failed to preload: ' + err.message);
                    isRewardVideoSuccess = false;
                });
            } else {
                console.log("not support ads");
                isRewardVideoSuccess = false;
            }
        })
        .catch(function(e) {
            preloadedRewardedVideo = null;
            console.error(e.message);
            isRewardVideoSuccess = false;
        });

}

function FBshowInterstitial() {
	if(preloadedInterstitial === null || preloadedInterstitial === undefined) return;
    preloadedInterstitial.showAsync()
        .then(function() {
            // Perform post-ad success operation
            // displayInterstitialAmount(++watchedInterstitials);   

            var supportedAPIs = FBInstant.getSupportedAPIs();
            if (supportedAPIs.includes('getInterstitialAdAsync') && supportedAPIs.includes('getRewardedVideoAsync')) {
                //
                // Preload Interstitial
                //
                FBInstant.getInterstitialAdAsync(
                ).then(function(interstitial) {
                    // Load the Ad asynchronously
                    preloadedInterstitial = interstitial;
                 
                    
                    return preloadedInterstitial.loadAsync();
                }).then(function() {
                    showElement('btn-interstitial');
                }).catch(function(err) {
                    console.log('Interstitial failed to preload: ' + err.message);
                });
            }
        })
        .catch(function(e) {
            console.log(e.message);
        });
}