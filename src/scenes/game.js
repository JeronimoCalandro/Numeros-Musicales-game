class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }

    create(){
        let thisScene=this
        //var music1=this.sound.add("music1", {loop:false})
        this.musicNumber=0
        this.aux=0
        this.isClicking=true
        this.colision1=false
        this.colision2=false
        this.colision3=false
        this.colision4=false
        this.colision5=false
        this.colision6=false
        this.colision7=false
        this.colision8=false
        this.cont1=0
        this.cont2=0
        this.cont3=0
        this.cont4=0
        this.cont5=0
        this.cont6=0
        this.cont7=0
        this.cont8=0
        this.music1=this.sound.add("music1", {loop:false})
        this.music2=this.sound.add("music2", {loop:false})
        this.music3=this.sound.add("music3", {loop:false})
        this.music4=this.sound.add("music4", {loop:false})
        this.do=this.sound.add("do", {loop:false})
        this.re=this.sound.add("re", {loop:false})
        this.mi=this.sound.add("mi", {loop:false})
        this.fa=this.sound.add("fa", {loop:false})
        this.sol=this.sound.add("sol", {loop:false})
        this.la=this.sound.add("la", {loop:false})
        this.si=this.sound.add("si", {loop:false})
        this.dos=this.sound.add("dos", {loop:false})
        this.buttons=this.sound.add("buttons", {loop:false})
        this.switch=this.sound.add("switch", {loop:false})
        this.generalCont=0
        gLastScene="PlayGame"
        

        // ================================================== DIENTES ======================================================
        
        
        this.btn1=this.physics.add.image(gWidth*0.064, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn2=this.physics.add.image(gWidth*0.1885, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn3=this.physics.add.image(gWidth*0.313, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn4=this.physics.add.image(gWidth*0.438, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn5=this.physics.add.image(gWidth*0.563, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn6=this.physics.add.image(gWidth*0.688, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn7=this.physics.add.image(gWidth*0.812, gHeight * 0.67 , "game-diente").setInteractive()
        this.btn8=this.physics.add.image(gWidth*0.936, gHeight * 0.67 , "game-diente").setInteractive()
        this.circles=this.add.layer()
        this.line=this.physics.add.image(gWidth*0.50, gHeight*0.77, "game-line")

        this.btn1.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn1,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.do.play()
            this.colision1=true
        })
        this.btn1.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn1,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision1=false
        })
        this.btn2.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn2,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.re.play()
            this.colision2=true
        })
        this.btn2.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn2,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision2=false
        })
        this.btn3.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn3,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.mi.play()
            this.colision3=true
        })
        this.btn3.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn3,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision3=false
        })
        this.btn4.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn4,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.fa.play()
            this.colision4=true
        })
        this.btn4.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn4,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision4=false
        })
        this.btn5.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn5,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.sol.play()
            this.colision5=true
        })
        this.btn5.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn5,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision5=false
        })
        this.btn6.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn6,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.la.play()
            this.colision6=true
        })
        this.btn6.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn6,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision6=false
        })
        this.btn7.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn7,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.si.play()
            this.colision7=true
        })
        this.btn7.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn7,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision7=false
        })
        this.btn8.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.btn8,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 0.95
            }) 
            this.dos.play()
            this.colision8=true
        })
        this.btn8.on("pointerup", ()=> {
            this.tweens.add({
                targets: this.btn8,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                scale: 1
            }) 
            this.colision8=false
        })

        /*this.timer11=thisScene.time.addEvent({
            delay: 3000,
            loop: true,
            callback: () => {
                thisScene.MuteAll()
            }
        })*/

        this.black=this.physics.add.image(gWidth*0.50, gHeight * 1.20 , "game-black").setScale(1.50, 1)

        //===================================================================================================================
        
        this.group1=this.physics.add.group()
        this.group2=this.physics.add.group()
        this.group3=this.physics.add.group()
        this.group4=this.physics.add.group()
        this.group5=this.physics.add.group()
        this.group6=this.physics.add.group()
        this.group7=this.physics.add.group()
        this.group8=this.physics.add.group()

        // ================================================== HUD/FONDO ===========================================================
        this.bg1=this.add.image(gWidth/2, gHeight/2, "game-bg1").setVisible(false)
        this.bg2=this.add.image(gWidth/2, gHeight/2, "game-bg2").setVisible(false)
        this.bg3=this.add.image(gWidth/2, gHeight/2, "game-bg3").setVisible(false)
        this.bg4=this.add.image(gWidth/2, gHeight/2, "game-bg4").setVisible(false)
        this.ruleta=this.add.image(gWidth/2, gHeight*0.07-1000, "game-ruleta").setInteractive()
        this.conters=this.add.image(gWidth*0.50, gHeight*0.945+1000, "game-contadores")

        this.btnPause = new Button(this, gWidth*0.95, gHeight * 0.07-1000, "buttons-pause", {
            onClick: ()=> {
                //this.sound.stopAll()
                if(gSound==1){
                    this.buttons.play()
                }
                
                this.scene.pause()
                this.scene.launch("PauseScene")

            }
        })

        this.btnSongs = new Button(this, gWidth*0.88, gHeight * 0.07-1000, "buttons-songs", {
            onClick: ()=> {
                //this.sound.stopAll()
                if(gSound==1){
                    this.buttons.play()
                }
                
                this.scene.pause()
                this.scene.launch("SongsScene")
            }
        })

        this.tweens.add({
            targets: this.ruleta,
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: this.btnSongs,
            y: "+= 1000",
            ease: "Back",
            delay: 700,
            duration: 600
        })
        this.tweens.add({
            targets: this.btnPause,
            y: "+= 1000",
            ease: "Back",
            delay: 800,
            duration: 600
        })

        this.text1=this.add.text(gWidth*0.05, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text2=this.add.text(gWidth*0.177, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text3=this.add.text(gWidth*0.302, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text4=this.add.text(gWidth*0.432, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text5=this.add.text(gWidth*0.546, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text6=this.add.text(gWidth*0.675, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text7=this.add.text(gWidth*0.798, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })
        this.text8=this.add.text(gWidth*0.929, gHeight*0.90+1000, "0",{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Chewy",
            stroke: "#fff",
            strokeThickness: 5
        })

        this.tweens.add({
            targets: [this.conters, this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8],
            y: "-= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })

        this.input.setDraggable([ this.ruleta]);

        this.input.on('dragstart', function (pointer, gameObject) {
            if(gSound==1){
                thisScene.switch.play()
            }
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.setRotation(-pointer.x*0.01) 
            //gameObject.y = dragY
 
        })

        this.input.on('dragend', function (pointer, gameObject) {
            thisScene.isClicking=false
        })

        this.input.on("pointerup", function(pointer){
            
        })
        this.input.on("pointerdown", function(pointer){
            thisScene.isClicking=true
        })

        if(help==1){
            this.timer12=thisScene.time.addEvent({
                delay: 1500,
                callback: () => {
                    Help()
                }
            })
            function Help(){
                thisScene.scene.pause()
                thisScene.scene.launch("HelpScene")
            }
        }

        // =================================================== COLISIONES ==========================================================
        this.physics.add.overlap(this.line, this.group1, Destroy1)
        function Destroy1(btn, obj){
            if(thisScene.colision1){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont1++
                thisScene.text1.setText(thisScene.cont1)
            }
        }
        this.physics.add.overlap(this.line, this.group2, Destroy2)
        function Destroy2(btn, obj){
            if(thisScene.colision2){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont2++
                thisScene.text2.setText(thisScene.cont2)
            }
        }
        this.physics.add.overlap(this.line, this.group3, Destroy3)
        function Destroy3(btn, obj){
            if(thisScene.colision3){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont3++
                thisScene.text3.setText(thisScene.cont3)
            }
        }
        this.physics.add.overlap(this.line, this.group4, Destroy4)
        function Destroy4(btn, obj){
            if(thisScene.colision4){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont4++
                thisScene.text4.setText(thisScene.cont4)
            }
        }
        this.physics.add.overlap(this.line, this.group5, Destroy5)
        function Destroy5(btn, obj){
            if(thisScene.colision5){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont5++
                thisScene.text5.setText(thisScene.cont5)
            }
        }
        this.physics.add.overlap(this.line, this.group6, Destroy6)
        function Destroy6(btn, obj){
            if(thisScene.colision6){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont6++
                thisScene.text6.setText(thisScene.cont6)
            }
        }
        this.physics.add.overlap(this.line, this.group7, Destroy7)
        function Destroy7(btn, obj){
            if(thisScene.colision7){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont7++
                thisScene.text7.setText(thisScene.cont7)
            }
        }
        this.physics.add.overlap(this.line, this.group8, Destroy8)
        function Destroy8(btn, obj){
            if(thisScene.colision8){
                obj.destroy()
                thisScene.generalCont++
                thisScene.cont8++
                thisScene.text8.setText(thisScene.cont8)
            }
        }


        // =================================================== DESTRUCTOR ==========================================================
        this.physics.add.overlap( this.black, [this.group1, this.group2, this.group3, this.group4, this.group5, this.group6, this.group7, this.group8], Destroyer)
        function Destroyer (destroyer, obj){
            /*thisScene.obj5Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
    }

    update(){
        let thisScene=this
        
        // ========================================================= BONUS ==========================================================

        if(bonus!=0){
            this.tweens.add({
                targets: this.ruleta,
                y: "-= 1000",
                ease: "Back",
                delay: 500,
                duration: 600
            })

            if(bonus==1){
                this.musicNumber=5
            }
            if(bonus==2){
                this.musicNumber=6
            }
            if(bonus==3){
                this.musicNumber=7
            }
            if(bonus==4){
                this.musicNumber=8
            }

            this.ruleta.setInteractive(false)
            bonus=0
        }

        // ========================================================= RULETA ==========================================================
        /*this.ruleta.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.ruleta,
                duration: 2000,
                angle: Phaser.Math.Between(360,720),
                //angle: -130,
                ease: 'Quad.easeInOut',
                repeat: -0,
            });
        })*/


        if(this.ruleta.angle<45 && this.ruleta.angle>-45){
            this.bg1.setVisible(true)
            this.bg2.setVisible(false)
            this.bg3.setVisible(false)
            this.bg4.setVisible(false)
            if(this.isClicking==false){
                this.musicNumber=1
            }
        }
        else if(this.ruleta.angle>45 && this.ruleta.angle<135){
            this.bg2.setVisible(true)
            this.bg1.setVisible(false)
            this.bg3.setVisible(false)
            this.bg4.setVisible(false)
            if(this.isClicking==false){
                this.musicNumber=2
            }
        }
        else if(this.ruleta.angle>135){
            this.bg3.setVisible(true)
            this.bg2.setVisible(false)
            this.bg1.setVisible(false)
            this.bg4.setVisible(false)
            if(this.isClicking==false){
                this.musicNumber=3
            }
        }
        else if(this.ruleta.angle>-135 && this.ruleta.angle<-45){
            this.bg4.setVisible(true)
            this.bg2.setVisible(false)
            this.bg3.setVisible(false)
            this.bg1.setVisible(false)
            if(this.isClicking==false){
                this.musicNumber=4
            }
        }

        
        if(this.aux==0){
            if(this.musicNumber!=0){
                this.ruleta.setInteractive(false)
                this.timer10=this.time.addEvent({
                    delay: 0,
                    loop: false,
                    callback: () => {
                        this.Start()
                    }
                })
                    /*this.tweens.add({
                        targets: this.ruleta,
                        y: "-= 1000",
                        ease: "Back",
                        delay: 500,
                        duration: 600
                })*/
                this.aux=1
                console.log(this.musicNumber)
            }  
        }
        

        // ========================================================================================================================
        
        
        

        // =======================================================================================================================

        /*this.text1.setText(this.cont1)
        this.text2.setText(this.cont2)
        this.text3.setText(this.cont3)
        this.text4.setText(this.cont4)
        this.text5.setText(this.cont5)
        this.text6.setText(this.cont6)
        this.text7.setText(this.cont7)
        this.text8.setText(this.cont8)*/
        
        

        // ======================================================  VERSION LITE  =================================================================

        if(gSongsCompleted>=4){
            if(gLogin==false){
                thisScene.scene.pause()
                try {
                    document.getElementById("modalFrame").setAttribute("style", "display:block;")
                } catch {
                    console.log('modal')
                }

                (function(window) {
                    var el = document.getElementById('login-btn');
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        // Dispatch deep-link
                        document.location = 'dkids-latam://discoverykidsplus.com/login';
                        // Redirect to the parent if deep-link is not available
                        gLogin = true
                        setTimeout(function() {
                            if (window.location !== window.top.location) {
                                window.top.location = window.top.location.protocol + '//' + window.top.location.host + '/login';
                            }
                        }, 300);
                    }, false);
                    var el2 = document.getElementById('later-btn')
                    el2.addEventListener('click', (e) => {
                        e.preventDefault();
                        console.log("closeModal")
                        document.getElementById("modalFrame").setAttribute("style", "display:none;")
                        thisScene.sound.stopAll()
                        thisScene.scene.stop()
                        thisScene.scene.start("SplashScene")
                    }, false);
                })(this);
            }
        }
    } 

    // =======================================================  CANCIONES  ================================================================
    Start(){
        let thisScene=this
        console.log("ENTRO AL START")
        if(thisScene.musicNumber==1){

            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20800,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21100,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21600,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22100,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22600,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22900,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23200,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23700,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24200,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24700,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25200,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })

            thisScene.timer9=thisScene.time.addEvent({
                delay: 36000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        
        }
        //=================================================  CANCION 2  ==============================================================
        if(thisScene.musicNumber==2){

            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4800,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6100,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7100,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11800,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12600,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13100,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13600,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14100,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14600,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            //
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18800,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20100,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21100,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25800,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26600,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27100,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27600,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28100,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28600,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            

            thisScene.timer9=thisScene.time.addEvent({
                delay: 31000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }
        
        //=================================================  CANCION 3  ==============================================================
        if(thisScene.musicNumber==3){
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })


            thisScene.timer9=thisScene.time.addEvent({
                delay: 35000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }
        //=================================================  CANCION 4  ==============================================================
        if(thisScene.musicNumber==4){
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10300,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10600,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10900,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11200,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11700,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12200,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12800,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13100,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13400,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13900,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14400,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14900,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15400,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16400,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16900,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17400,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            

            thisScene.timer9=thisScene.time.addEvent({
                delay: 20000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }

        //=================================================  CANCION 5  ==============================================================

        if(thisScene.musicNumber==5){
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 16500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })

            thisScene.timer1=thisScene.time.addEvent({
                delay: 19000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26000,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26500,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 34000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })

            thisScene.timer9=thisScene.time.addEvent({
                delay: 37000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }

        //=================================================  CANCION 6  ==============================================================

        if(thisScene.musicNumber==6){

            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 31500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 32500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 33000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 34000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 36000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 37000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 37500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 38500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer9=thisScene.time.addEvent({
                delay: 40000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }

        //=================================================  CANCION 7  ==============================================================

        if(thisScene.musicNumber==7){

            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9500,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 14500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 15500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 17500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 18500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 19500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 20500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 21500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 22500,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 23000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 24500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25000,
                callback: () => {
                    thisScene.Spawner8()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 25500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 26500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 27000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28000,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 28500,
                callback: () => {
                    thisScene.Spawner7()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 29500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 30500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer9=thisScene.time.addEvent({
                delay: 33000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }

        //=================================================  CANCION 8  ==============================================================

        if(thisScene.musicNumber==8){

            thisScene.timer1=thisScene.time.addEvent({
                delay: 2000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 2500,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 3500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 4500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 5500,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 6500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7000,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 7500,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8000,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 8500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9000,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 9500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 10500,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11000,
                callback: () => {
                    thisScene.Spawner4()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 11500,
                callback: () => {
                    thisScene.Spawner5()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12000,
                callback: () => {
                    thisScene.Spawner2()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 12700,
                callback: () => {
                    thisScene.Spawner6()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13400,
                callback: () => {
                    thisScene.Spawner3()
                }
            })
            thisScene.timer1=thisScene.time.addEvent({
                delay: 13900,
                callback: () => {
                    thisScene.Spawner1()
                }
            })
            thisScene.timer9=thisScene.time.addEvent({
                delay: 17000,
                loop: false,
                callback: () => {
                    thisScene.Finish()
                }
            })
        }
    }

    Spawner1(){
        let thisScene=this
        thisScene.obj1=thisScene.physics.add.image(gWidth*0.064, gHeight*0.50, "game-1")
        thisScene.tweens.add({
            targets: thisScene.obj1,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group1.add(thisScene.obj1)
        thisScene.circles.add(thisScene.obj1)
    }
    Spawner2(){
        let thisScene=this
        thisScene.obj2=thisScene.physics.add.image(gWidth*0.1885, gHeight*0.50, "game-2")
        thisScene.tweens.add({
            targets: thisScene.obj2,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group2.add(thisScene.obj2)
        thisScene.circles.add(thisScene.obj2)
    }
    Spawner3(){
        let thisScene=this
        thisScene.obj3=thisScene.physics.add.image(gWidth*0.313, gHeight*0.50, "game-3")
        thisScene.tweens.add({
            targets: thisScene.obj3,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group3.add(thisScene.obj3)
        thisScene.circles.add(thisScene.obj3)
    }
    Spawner4(){
        let thisScene=this
        thisScene.obj4=thisScene.physics.add.image(gWidth*0.438, gHeight*0.50, "game-4")
        thisScene.tweens.add({
            targets: thisScene.obj4,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group4.add(thisScene.obj4)
        thisScene.circles.add(thisScene.obj4)
    }
    Spawner5(){
        let thisScene=this
        thisScene.obj5=thisScene.physics.add.image(gWidth*0.563, gHeight*0.50, "game-5")
        thisScene.tweens.add({
            targets: thisScene.obj5,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group5.add(thisScene.obj5)
        thisScene.circles.add(thisScene.obj5)
    }
    Spawner6(){
        let thisScene=this
        thisScene.obj6=thisScene.physics.add.image(gWidth*0.688, gHeight*0.50, "game-6")
        thisScene.tweens.add({
            targets: thisScene.obj6,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group6.add(thisScene.obj6)
        thisScene.circles.add(thisScene.obj6)
    }
    Spawner7(){
        let thisScene=this
        thisScene.obj7=thisScene.physics.add.image(gWidth*0.812, gHeight*0.50, "game-7")
        thisScene.tweens.add({
            targets: thisScene.obj7,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group7.add(thisScene.obj7)
        thisScene.circles.add(thisScene.obj7)
    }
    Spawner8(){
        let thisScene=this
        thisScene.obj8=thisScene.physics.add.image(gWidth*0.936, gHeight*0.50, "game-8")
        thisScene.tweens.add({
            targets: thisScene.obj8,
            y: "+= 600",
            ease: "Power3",
            duration: 5400,
            repeat: 0,
        })
        thisScene.group8.add(thisScene.obj8)
        thisScene.circles.add(thisScene.obj8)
    }

    Finish(){
        let thisScene=this
        cont1=this.cont1
        cont2=this.cont2
        cont3=this.cont3
        cont4=this.cont4
        cont5=this.cont5
        cont6=this.cont6
        cont7=this.cont7
        cont8=this.cont8
        thisScene.scene.pause()
        thisScene.scene.launch("VictoryScene")
    }

    MuteAll(){
        let thisScene=this
        thisScene.isClicking=false
        if(thisScene.isClicking==false){
            game.sound.mute=true
        }
    }
    
}