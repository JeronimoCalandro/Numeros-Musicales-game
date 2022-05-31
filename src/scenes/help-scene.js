class HelpScene extends Phaser.Scene {
    constructor() {
        super("HelpScene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.help=this.add.image(gWidth/2, gHeight/2-1000, "help-scene-help")
        this.buttons=this.sound.add("buttons", {loop:false})
        this.ayuda=this.sound.add("ayuda", {loop:false})
        
        if(gSound==1){
            this.ayuda.play()
        }

        this.btnClose = new Button(this, gWidth*0.85, gHeight * 0.13-1000, "buttons-close", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.help, this.btnClose],
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
                    this.ayuda.stop()
                }
            }
        })

        this.tweens.add({
            targets: [this.help, this.btnClose],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
    }

    update(){
       
    }

    Back(){
        if(gLastScene=="PlayGame"){
            this.scene.stop()
            this.scene.resume(gLastScene)
        }
        else if(gLastScene=="PauseScene"){
            this.scene.stop()
            this.scene.launch("PauseScene")
        }
        else{
            this.scene.stop()
            this.scene.resume("SplashScene")
        }
        
    }
}