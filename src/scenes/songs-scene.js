class SongsScene extends Phaser.Scene {
    constructor() {
        super("SongsScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.songs=this.add.image(gWidth/2, gHeight/2-1000, "songs-scene-songs")
        this.cat=this.add.image(gWidth*0.13, gHeight*0.75+1000, "songs-scene-cat")
        this.buttons=this.sound.add("buttons", {loop:false})
        this.locu=this.sound.add("canciones-bonus", {loop:false})

        if(gSound==1){
            this.locu.play()
        }

        this.btnClose = new Button(this, gWidth*0.81, gHeight * 0.16-1000, "buttons-close", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.songs, this.btnClose, this.block1, this.block2, this.block3, this.block4, this.text, this.btn1, this.btn2, this.btn3, this.btn4],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.tweens.add({
                    targets: this.cat,
                    y: "+= 1000",
                    ease: "Back",
                    daleay: 300,
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
                    this.locu.stop()
                }
            }
        })

        
        
        this.block1 = new Button(this, gWidth*0.25, gHeight * 0.55-1000, "songs-scene-block1", {
            onClick: ()=> {
            }
        })
        this.block2 = new Button(this, gWidth*0.42, gHeight * 0.55-1000, "songs-scene-block2", {
            onClick: ()=> {
            }
        })
        this.block3 = new Button(this, gWidth*0.58, gHeight * 0.55-1000, "songs-scene-block3", {
            onClick: ()=> {
            }
        })
        this.block4 = new Button(this, gWidth*0.75, gHeight * 0.55-1000, "songs-scene-block4", {
            onClick: ()=> {
            }
        })


        this.btn1 = new Button(this, gWidth*0.25, gHeight * 0.55-1000, "songs-scene-btn1", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.resume("PlayGame")
                bonus=1
                if(gSound==1){
                    this.buttons.play()
                    this.locu.stop()
                }
            }
        })
        this.btn2 = new Button(this, gWidth*0.42, gHeight * 0.55-1000, "songs-scene-btn2", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.resume("PlayGame")
                bonus=2
                if(gSound==1){
                    this.buttons.play()
                    this.locu.stop()
                }
            }
        })
        this.btn3 = new Button(this, gWidth*0.58, gHeight * 0.55-1000, "songs-scene-btn3", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.resume("PlayGame")
                bonus=3
                if(gSound==1){
                    this.buttons.play()
                    this.locu.stop()
                }
            }
        })
        this.btn4 = new Button(this, gWidth*0.75, gHeight * 0.55-1000, "songs-scene-btn4", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.resume("PlayGame")
                bonus=4
                if(gSound==1){
                    this.buttons.play()
                    this.locu.stop()
                }
            }
        })


        this.text=this.add.text(gWidth*0.54, gHeight*0.74-1000, gNotes,{      
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            /*stroke: "#fff",
            strokeThickness: 5*/
        })

        this.layer = this.add.layer()
        this.layer.add(this.cat)

        this.tweens.add({
            targets: [this.songs, this.btnClose,this.text],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
        this.tweens.add({
            targets: this.cat,
            y: "-= 1000",
            ease: "Back",
            daleay: 300,
            duration: 600
        })

        if(gNotes>=100){
            this.tweens.add({
                targets: this.btn1,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }
        else{
            this.tweens.add({
                targets: this.block1,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }

        if(gNotes>=200){
            this.tweens.add({
                targets: this.btn2,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }
        else{
            this.tweens.add({
                targets: this.block2,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }

        if(gNotes>=300){
            this.tweens.add({
                targets: this.btn3,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }
        else{
            this.tweens.add({
                targets: this.block3,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }

        if(gNotes>=400){
            this.tweens.add({
                targets: this.btn4,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }
        else{
            this.tweens.add({
                targets: this.block4,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            }) 
        }
        
    }

    Back(){
        this.scene.stop()
        this.scene.resume("PlayGame")
        
    }
}