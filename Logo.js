class Logo extends Phaser.Scene {
  constructor() {
    super("Logo");
  }

  preload() {
    this.load.image("logo", "assets/images/logo.jpg");

    this.load.audio("hootHoot", "assets/sound/hoothoot.wav");

    this.cameras.main.setBackgroundColor(0x000000);
  }
  create() {
    let logo = this.add.sprite(config.width /2, config.height / 2, "logo");
    logo.alpha = 0;
    logo.scaleY = 0.3;
    logo.scaleX = 0.3;

    this.cameras.main.fadeIn(1000);
    
    this.add.tween({
      targets: logo,
      delay: 700,
      alpha: 2
    });

    let hootHoot = this.sound.add("hootHoot") 
    this.add.tween({
      targets: hootHoot,
      volume: 1,
      delay: 900,
      alpha: 1,
      duration: 0,
      onStart: function()
      {
        hootHoot.play()
      }
    });

    this.add.tween({
      targets: logo,
      alpha: 0,
      delay: 1200,
    });

    this.time.delayedCall(2000, () => this.scene.start("intro"));
  }
}