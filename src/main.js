var gWidth  = 2380//1785 // 1080
var gHeight = 1080//810 // 2380
var gSound = 1
var gMusic = 1
var gLastScene
var gPoints = 0
var gBest = 0
var cont1=0
var cont2=0
var cont3=0
var cont4=0
var cont5=0
var cont6=0
var cont7=0
var cont8=0
var gNotes=0
var help=1
var bonus=0
var gSongsCompleted=0
var gLogin=false

var debugMode = DATA.debugMode
var games = debugMode
var gameConfig = {
    //type: Phaser.AUTO,
    type:Phaser.CANVAS,
    parent: 'gamediv',
    scale: {
        width: gWidth,
        height: gHeight,
        mode: DATA.isMobile ? Phaser.Scale.AUTO : Phaser.Scale.AUTO,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    input :{
        activePointers:3,
    },
    scene: [BootScene, PreloadScene, playGame, SplashScene, PauseScene, HelpScene, DefeatScene, SongsScene, VictoryScene],
    assetsPath: "./assets/"
}

game = new Phaser.Game(gameConfig)


let getOrientation = ()=> window.innerWidth > window.innerHeight ? "landscape" : "portrait"
let currentOrientation = getOrientation()

let checkOrientation = ()=> {
    currentOrientation = getOrientation()
    let correct = currentOrientation == DATA.gameOrientation

    orientationChangeDiv.style.display = correct ? "none" : "block"
    gamediv.style.display = correct ? "block" : "none"
}

checkOrientation()
window.onresize = checkOrientation