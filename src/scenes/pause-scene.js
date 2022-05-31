class PauseScene extends Phaser.Scene {
    constructor() {
        super("PauseScene")
    }

    create(data){
        this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.pause=this.add.image(gWidth/2, gHeight/2-1000, "pause-scene-pause")
        this.buttons=this.sound.add("buttons", {loop:false})
        gLastScene="PauseScene"
        gMusic=1

        this.btnClose = new Button(this, gWidth*0.37, gHeight * 0.43-1000, "buttons-back", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop()
                this.scene.start("PlayGame")
            }
        })

        this.btnMusic = new Button(this, gWidth*0.50, gHeight * 0.43-1000, "buttons-music-pause", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Sound [Activate - Desactivate]','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}'})
                console.log("DKW - Sound")
                gMusic=gMusic*-1

                if(gSound==1){
                    this.buttons.play()
                }
            }
        })
        
        this.btnSound = new Button(this, gWidth*0.63, gHeight * 0.43-1000, "buttons-sound-pause", {
            onClick: ()=> {
                gSound=gSound*-1
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })

        this.btnHelp = new Button(this, gWidth*0.63, gHeight * 0.63-1000, "buttons-help", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound, this.pause, this.btnRestart],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.BackHelp();
                    }
                })
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })

        this.btnHome = new Button(this, gWidth*0.37, gHeight *0.63-1000, "buttons-home", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - To Return','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}'})
                console.log("DKW - To Return")
                this.sound.stopAll()
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop()
                this.scene.start("SplashScene")
            }
        })

        this.btnRestart = new Button(this, gWidth*0.50, gHeight * 0.63-1000, "buttons-play-pause", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Start Over','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}'})
                console.log("DKW - Start Over")
                this.tweens.add({
                    targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound, this.pause, this.btnRestart],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.Back();
                    }
                })
                if(gSound==1){
                    this.buttons.play()
                }
                
            }
        })

        this.tweens.add({
            targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound,  this.btnRestart, this.pause],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
    }

    Back(){
        this.scene.stop()
        this.scene.resume("PlayGame")
    }

    BackHelp(){
        this.scene.stop()
        this.scene.launch("HelpScene")
    }

    update(){
        if(gMusic==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }

    }
}