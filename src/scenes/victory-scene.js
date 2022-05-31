class VictoryScene extends Phaser.Scene {
    constructor() {
        super("VictoryScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.victory=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory")
        this.cats=this.add.image(gWidth*0.20, gHeight*0.70+1000, "victory-scene-cats")
        this.conters=this.add.image(gWidth/2, gHeight*0.65-1000, "victory-scene-conters")
        this.win=this.sound.add("win", {loop:true})
        this.buttons=this.sound.add("buttons", {loop:false})
        this.ganaste=this.sound.add("ganaste", {loop:false})
        help=0
        gSongsCompleted++
        this.notes=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8

        dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Successful - Level {Level}','label':'{{Numeros Musicales con los BuffyCats}}','GameCategory':'{{game}}','Show':'{{44 Gatos}}'})
        console.log("DKW - Successful Level")

        if(gSound==1){
            this.win.play() 
            this.ganaste.play()  
            this.win.volume=0.1     
        }

        gNotes+=this.notes

        this.text1=this.add.text(gWidth*0.41, gHeight*0.555-1000, cont1,{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text2=this.add.text(gWidth*0.465, gHeight*0.555-1000, cont2,{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text3=this.add.text(gWidth*0.519, gHeight*0.555-1000, cont3,{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text4=this.add.text(gWidth*0.571, gHeight*0.555-1000, cont4,{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text5=this.add.text(gWidth*0.41, gHeight*0.67-1000, "0",{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text6=this.add.text(gWidth*0.465, gHeight*0.67-1000, "0",{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text7=this.add.text(gWidth*0.519, gHeight*0.67-1000, "0",{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text8=this.add.text(gWidth*0.571, gHeight*0.67-1000, "0",{     
            fontSize:"60px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })

        this.btnPlay = new Button(this, gWidth*0.75, gHeight * 0.80-1000, "buttons-play", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnPlay,  this.victory, this.conters],
                    y: "-= 1000",
                    ease: "Back",
                    delay:300,
                    duration: 600
                })
                this.tweens.add({
                    targets: this.cats,
                    y: "+= 1000",
                    ease: "Back",
                    dealy:500,
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
                    this.win.stop() 
                    this.buttons.play()
                    this.ganaste.stop()                           
                }
            }
        })
        
        this.tweens.add({
            targets: [this.btnPlay, this.victory, this.conters, this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8],
            y: "+= 1000",
            ease: "Back",
            delay:300,
            duration: 600
        })
        this.tweens.add({
            targets: this.cats,
            y: "-= 1000",
            ease: "Back",
            dealy:500,
            duration: 600
        })
    }

    Back(){
        this.scene.stop()
        this.scene.start("PlayGame")
    }

    update(){
        this.text1.setText(cont1)
        this.text2.setText(cont2)
        this.text3.setText(cont3)
        this.text4.setText(cont4)
        this.text5.setText(cont5)
        this.text6.setText(cont6)
        this.text7.setText(cont7)
        this.text8.setText(cont8)
    }
}