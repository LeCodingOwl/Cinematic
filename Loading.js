class Loading extends Phaser.Scene {
    constructor() {
      super("Loading");
    }
    preload() {

    }

    create() {
        let tipTitle = this.add.text((config.width / 2) - 300, (config.height / 2) - 200, "Did you know?");
        tipTitle.setFontFamily("Merriweather");
        //tipTitle.setAlign("center");
        tipTitle.setFontSize(30);
        tipTitle.setOrigin(0.5, 0.5);
        tipTitle.setColor("White");

        let tipText = this.add.text((config.width / 2 ) - 175, (config.height / 2) - 100, "If you hold the shift key, you can run?\nYeah. You probably didn’t know that. Or maybe you \ndid. I don’t know. I’m just advice. You don’t have to \nlisten to me.");
        tipText.setFontFamily("Merriweather");
        tipText.setFontSize(20);
        tipText.setOrigin(0.5, 0.5);
        tipText.setColor("White");

        let loadingText = this.add.text((config.width / 2) - 900, (config.height / 2) + 300, "Loading");
        loadingText.setFontFamily("Merriweather");
        loadingText.setFontSize(30);
        //loadingText.setOrigin(0.5, 0.5);
        loadingText.setColor("White");

        let tinyCircle = this.add.circle((config.width / 2) - 780, (config.height / 2 + 320), 3, 0xFFFFFF);
        let tinyCircle2 = this.add.circle((config.width / 2) - 740, (config.height / 2 + 320), 3, 0xFFFFFF);
        let tinyCircle3 = this.add.circle((config.width / 2) - 700, (config.height / 2 + 320), 3, 0xFFFFFF);

        let triangle = this.add.triangle((config.width / 2) + 200, (config.height / 2) - 100, 10, 50, 100, 100, 100, 0, 0xFFFFFF);
        let rectangle = this.add.rectangle((config.width / 2) + 350, (config.height / 2) - 100, 150, 50, 0xFFFFFF);

        tinyCircle.alpha = tinyCircle2.alpha = tinyCircle3.alpha = 0;

        this.add.tween({
          targets: tinyCircle,
          alpha: 50,
          duration: 200,
          repeat: -1,
          repeatDelay: 300,
            yoyo: true
        }); 
        this.add.tween({
          targets: tinyCircle2,
          alpha: 50,
          duration: 200,
          delay: 100,
          repeat: -1,
          repeatDelay: 300,
            yoyo: true
        });
        this.add.tween({
          targets: tinyCircle3,
          alpha: 50,
          duration: 200,
          delay: 200,
          repeat: -1,
          repeatDelay: 300,
          yoyo: true
        });

        this.time.delayedCall(6500, () => this.scene.start("Jumpscare"));
      }
}