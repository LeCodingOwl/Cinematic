class Intro extends Phaser.Scene {
    constructor() {
        super('Intro');
    }

    preload() {
        this.load.image("player", "assets/images/player.png");
        this.load.image("light", "assets/images/light.png");
        this.load.image("face", "assets/images/face.png");
        this.load.image("hand", "assets/images/hand.png");

        this.cameras.main.setBackgroundColor(0x000000);
    }

    create() {
        let player = this.add.sprite((config.width /2) + 500, (config.height / 2), "player");
        player.alpha = 0;
        player.scaleY = 0.3;
        player.scaleX = 0.3;

        let lighting = this.add.sprite((config.width / 2) + 200, (config.height / 2) + 40, "light");
        lighting.alpha = 0;
        lighting.scaleY = 0.3;
        lighting.scaleX = 0.3;

        let face = this.add.sprite((config.width / 2) - 300, (config.height / 2), "face");
        face.alpha = 0;
        face.scaleY = 0.3;
        face.scaleX = 0.3;

        let hand = this.add.sprite((config.width / 2) - 300, (config.height /2) + 40, "hand");
        hand.alpha = 0;
        hand.scaleY = 0.3;
        hand.scaleX = 0.3;

        let text1 = this.add.text((config.width /2) - 900, (config.height / 2) - 300, "What if...");
        text1.alpha = 0;
        let text2 = this.add.text((config.width /2) - 700, (config.height / 2) - 120, "someone...");
        text2.alpha = 0;
        let text3 = this.add.text((config.width /2) - 500, (config.height / 2) - 300, "something...");
        text3.alpha = 0;
        let text4 = this.add.text((config.width /2) - 100, (config.height / 2) + 190, "Has been watching you... This entire time...");
        text4.alpha = 0;

        //this.cameras.main.fadeIn(1000);
    
        this.add.tween({
          targets: player,
          delay: 1000,
          alpha: 1
        });

        this.add.tween({
            targets: text1,
            delay: 3000,
            alpha: 1
        });
        this.add.tween({
            targets: lighting,
            delay: 3500,
            alpha: 100
        });
        this.add.tween({
            targets: text2,
            delay: 5000,
            alpha: 1
        });
        this.add.tween({
            targets: lighting,
            delay: 5500,
            alpha: -100
        })
        this.add.tween({
            targets: text3,
            delay: 7000,
            alpha: 1
        });
        this.add.tween({
            targets: lighting,
            delay: 7500,
            alpha: 100
        });
        this.add.tween({
            targets: text4,
            delay: 9000,
            alpha: 1
        });
        
        this.add.tween({
            targets: face,
            delay: 9500,
            alpha: 2
        });

        this.add.tween({
            targets: hand,
            delay: 10500,
            alpha: 5,
            duration: 500,
            x: (config.width /2) + 100
        });
        
        this.time.delayedCall(14000, () => this.scene.start("Title"));
    }
}