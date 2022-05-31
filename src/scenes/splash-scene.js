class SplashScene extends Phaser.Scene {
    constructor() {
        super("SplashScene")
    }

    create()
    {
        this.sound.stopAll()
        this.add.image(gWidth/2, gHeight/2, "splash-scene-bgsplash")
        this.splash=this.sound.add("splash", {loop:true})
        this.buttons=this.sound.add("buttons", {loop:false})
        this.titulo=this.sound.add("titulo", {loop:false})
        
        
        this.uno=this.add.image(gWidth*0.15, gHeight*0.70+1000, "splash-scene-1")
        this.dos=this.add.image(gWidth*0.30, gHeight*0.63+1000, "splash-scene-2")
        this.tres=this.add.image(gWidth*0.67, gHeight*0.60+1000, "splash-scene-3")
        this.cuatro=this.add.image(gWidth*0.83, gHeight*0.70+1000, "splash-scene-4")

        help=1

        if(gSound==1){
            this.splash.play() 
            this.titulo.play()
        }

        gLastScene="SplashScene"
        
        this.tweens.add({
            targets: this.title=this.add.image(gWidth/2, gHeight * 0.27-1000, "splash-scene-title"),
            duration: 120,
            repeat: -1,
            repeatDelay: 500,
            ease: "Circ",
            yoyo: 1,
            scale: 1.10
        })

        this.btnPlay = new Button(this, gWidth/2, gHeight * 0.60+1000 , "buttons-play", {
            onClick: ()=> {
                
                if(gSound==1){
                    this.buttons.play()
                    this.titulo.stop()
                }
                this.sound.stopAll()
                this.scene.start("PlayGame")
                //this.scene.start("VictoryScene")
                if(gMusic==1){
                    game.sound.mute=false
                }
                else{
                    game.sound.mute=true
                }
            }
        })
        this.btnMusic = new Button2(this, gWidth*0.90, gHeight * 0.07, "buttons-music-pause", {
            onClick: ()=> {
                
                gMusic=gMusic*-1

                if(gSound==1){
                    this.buttons.play()
                }
                if(gMusic==1){
                    console.log(gMusic)
                    game.sound.mute=false
                }
                else{
                    console.log(gMusic)
                    game.sound.mute=true
                }
            }
        })
        
        this.btnSound = new Button2(this, gWidth*0.96, gHeight * 0.07, "buttons-sound-pause", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Sound [Activate - Desactivate]','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}'})
                gSound=gSound*-1
                if(gSound==1){
                    this.buttons.play()
                }
                if(gSound==1){
                    game.sound.mute=false
                    console.log("Sound Activate")
                }
                else{
                    game.sound.mute=true
                    console.log("Sound Desactivate")
                }
            }
        })

        this.tweens.add({
            targets: this.title,
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnPlay],
            y: "-= 1000",
            ease: "Back",
            delay: 900,
            duration: 600
        })

        this.tweens.add({
            targets: this.uno,
            y: "-= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
        this.tweens.add({
            targets: this.dos,
            y: "-= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: this.tres,
            y: "-= 1000",
            ease: "Back",
            delay: 600,
            duration: 600
        })
        this.tweens.add({
            targets: this.cuatro,
            y: "-= 1000",
            ease: "Power3",
            delay: 700,
            duration: 600
        })



        // -- flash --
        this.tweens.add({
            targets: this.add.rectangle(0, 0, gWidth, gHeight, 0xffffff, 1).setOrigin(0, 0),
            alpha: 0,
            duration: 200,
            delay: 100
        })
    }

    update(){
        
    }
}