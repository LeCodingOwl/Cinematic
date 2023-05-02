class Title extends Phaser.Scene {
    constructor() {
      super("Title");
    }
    preload() {
        this.load.image("background", "assets/images/hallway.jpg");

        this.load.audio("ambience", "assets/sound/Horror Ambience (Free Background Music)edit.wav");
    }

    create() {
        let background = this.add.sprite(config.width / 2, config.height / 2, "background");
        //background.alpha = 0;
        background.scaleY = 0.5;
        background.scaleX = 0.7;

        let titleMusic = this.sound.add("ambience");

        titleMusic.setVolume(0.1);
        titleMusic.play();

        let titleText = this.add.text((config.width /2), (config.height / 2) - 300, "The Hallway");
        titleText.setFontFamily("Merriweather");
        titleText.setAlign("center");
        titleText.setFontSize(120);
        titleText.setOrigin(0.5, 0.5);
        titleText.setColor("Red");
        titleText.alpha = 0;

        let playText = this.add.text((config.width /2), (config.height / 2) - 90, "Play");
        playText.setFontFamily("Merriweather");
        playText.setAlign("center");
        playText.setFontSize(70);
        playText.setOrigin(0.5, 0.5);
        playText.setColor("Red");
        playText.alpha = 0;
        playText.setInteractive();
        playText.on(Phaser.Input.Events.POINTER_OVER, function() {
            playText.setColor("white");
        })
        playText.on(Phaser.Input.Events.POINTER_OUT, function() {
            playText.setColor("Red");
        })
        playText.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.add.tween({
                targets: playText,
                delay: 800,
                alpha: -2
            });
            this.add.tween({
                targets: optionText,
                delay: 1200,
                alpha: -2
            });
            this.add.tween({
                targets: quitText,
                delay: 1400,
                alpha: -2
            });
            this.add.tween({
                targets: titleText,
                delay: 1600,
                alpha: -1
            });

            this.time.delayedCall(2600, () => this.scene.start("Loading"));
            titleMusic.stop();
        })

        let optionText = this.add.text((config.width /2), (config.height / 2) + 10, "Option");
        optionText.setFontFamily("Merriweather");
        optionText.setAlign("center");
        optionText.setFontSize(70);
        optionText.setOrigin(0.5, 0.5);
        optionText.setColor("Red");
        optionText.alpha = 0;

        let quitText = this.add.text((config.width /2), (config.height / 2) + 120, "Quit");
        quitText.setFontFamily("Merriweather");
        quitText.setAlign("center");
        quitText.setFontSize(70);
        quitText.setOrigin(0.5, 0.5);
        quitText.setColor("Red");
        quitText.alpha = 0;

        this.add.tween({
            targets: titleText,
            delay: 800,
            alpha: 2
        });
        this.add.tween({
            targets: playText,
            delay: 1200,
            alpha: 2
        });
        this.add.tween({
            targets: optionText,
            delay: 1300,
            alpha: 2
        });
        this.add.tween({
            targets: quitText,
            delay: 1400,
            alpha: 2
        });
    }
}