class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene")
    }
    preload() {
        this.load.image("preload-scene-bg", "assets/splash-scene/bgsplash.png")
        this.load.image("preload-scene-title", "assets/splash-scene/title.png")
        this.load.image("ui-fillbar-top", "assets/preload-scene/fillbar-top.png")
        this.load.image("ui-fillbar-bottom", "assets/preload-scene/fillbar-bottom.png")
        this.load.audio("splash2",  "assets/sounds/splash.mp3")
    }
    create() {
        this.scene.start("PreloadScene")
        dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Start Game','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}','Vertical Traffic':'{{vertical traffic}}'})
        console.log("Start Game")
    }
}


class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene')
    }

    preload() {
        this.splash=this.sound.add("splash2", {loop:true})
        this.splash.play()
        let bg = this.add.image(gWidth/2, gHeight, "preload-scene-bg")
        let title = this.add.image(gWidth/2, gHeight *0.40, "preload-scene-title").setScale(0.80,0.80)
        this.tweens.add({
            targets: title,
            duration: 120,
            repeat: -1,
            repeatDelay: 2000,
            ease: "Circ",
            yoyo: 1,
            scale: 1
        })
         
        bg.setOrigin(0.5, 1)
        ScaleImageToWidth(bg, gWidth)

        // --- load bar ---
        let bar = new FillBar(this, gWidth/2, gHeight*0.75, gWidth*2, 600, 0)

        this.load.on("progress", (p) => {
            bar.update(p, 1)
        })
        this.load.on("complete", ()=> {
            this.time.delayedCall(200, ()=> {
                this.scene.start("SplashScene")
            })
        })


        // === SPRITE SHEETS ===

        /*this.load.spritesheet("gems", gameConfig.assetsPath + "game/gems.png", {
            frameWidth: 124.6,
            frameHeight: 125
        })*/


        // === SOUNDS ===
        this.load.audio("splash", gameConfig.assetsPath + "sounds/splash.mp3")
        this.load.audio("music1", gameConfig.assetsPath + "sounds/music1.mp3")
        this.load.audio("music2", gameConfig.assetsPath + "sounds/music2.mp3")
        this.load.audio("music3", gameConfig.assetsPath + "sounds/music3.mp3")
        this.load.audio("music4", gameConfig.assetsPath + "sounds/music4.mp3")
        this.load.audio("do", gameConfig.assetsPath + "sounds/do.mp3")
        this.load.audio("re", gameConfig.assetsPath + "sounds/re.mp3")
        this.load.audio("mi", gameConfig.assetsPath + "sounds/mi.mp3")
        this.load.audio("fa", gameConfig.assetsPath + "sounds/fa.mp3")
        this.load.audio("sol", gameConfig.assetsPath + "sounds/sol.mp3")
        this.load.audio("la", gameConfig.assetsPath + "sounds/la.mp3")
        this.load.audio("si", gameConfig.assetsPath + "sounds/si.mp3")
        this.load.audio("dos", gameConfig.assetsPath + "sounds/dos.mp3")
        this.load.audio("win", gameConfig.assetsPath + "sounds/win.mp3")
        this.load.audio("buttons", gameConfig.assetsPath + "sounds/buttons.mp3")
        this.load.audio("switch", gameConfig.assetsPath + "sounds/switch.mp3")
        this.load.audio("ganaste", gameConfig.assetsPath + "sounds/ganaste.mp3")
        this.load.audio("titulo", gameConfig.assetsPath + "sounds/titulo.mp3")
        this.load.audio("canciones-bonus", gameConfig.assetsPath + "sounds/canciones-bonus.mp3")
        this.load.audio("ayuda", gameConfig.assetsPath + "sounds/ayuda.mp3")

        // === UI ===
        this.loadElements([
            
        ], "ui", "image")

         // === BUTTONS ===
        this.loadElements([
            "play",
            "pause",
            "sound",
            "music",
            "home",
            "help",
            "close",
            "back",
            "sound-pause",
            "music-pause",
            "play-pause",
            "home-defeat",
            "songs",
        ], "buttons", "image")

        // === GAME SCENE ===
        this.loadElements([
            "bg1",
            "bg2",
            "bg3",
            "bg4",
            "ruleta",
            "diente",
            "contadores",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "line",
            "black",
        ], "game", "image")

        // === SPLASH SCENE ===
        this.loadElements([
            "bgsplash",
            "title",
            "1",
            "2",
            "3",
            "4",
        ], "splash-scene", "image")
            
        // === PAUSE SCENE ===
        this.loadElements([
            "pause",
            "bg-pause",
        ], "pause-scene", "image")

        // === HELP SCENE ===
        this.loadElements([
            "help",
            
        ], "help-scene", "image")

        // === VICTORY SCENE ===
        this.loadElements([
            "victory",
            "cats",
            "conters"

        ], "victory-scene", "image")

        // === DEFEAT SCENE ===
        this.loadElements([
            "defeat",
        ], "defeat-scene", "image")

        // === SONGS SCENE ===
        this.loadElements([
            "block1",
            "block2",
            "block3",
            "block4",
            "btn1",
            "btn2",
            "btn3",
            "btn4",
            "songs",
            "cat",
        ], "songs-scene", "image")

         // === FINISH SCENE ===
         this.loadElements([
            
        ], "finish-scene", "image")
    }

    loadElements(array, folder, type) {
        for (let elem of array) {
            switch(type) {
                case "image": {
                    this.load.image(folder + "-" + elem, gameConfig.assetsPath + folder + "/" + elem + ".png")
                    break
                }
            }
        }
    }
}


