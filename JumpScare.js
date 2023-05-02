class Jumpscare extends Phaser.Scene {
    constructor() {
        super('Jumpscare');
    }
    preload() {
        this.load.image("face", "assets/images/face.png");

        this.load.audio("scream", "assets/sound/scream.wav");
    }
    create() {
        let face = this.add.sprite((config.width / 2), (config.height / 2), "face");
        face.alpha = 0;
        face.scaleY = 0.3;
        face.scaleX = 0.3;

        let scream = this.sound.add("scream");
        this.add.tween({
            targets: [face, scream],
            volume: 0.1,
            delay: 1000,
            duration: 400,

            onStart: function()
            {
                scream.play()
            },
            alpha: 60,
            scale: 1.2,
        });
    }
}