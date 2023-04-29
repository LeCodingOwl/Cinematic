class Logo extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("logo", "assets/images/logo.jpg");
  }
  create() {
    this.logo = this.add.image(950, 550, "logo");
    this.logo.setScale(0.3);
    //this.scene.start("playGame");
  }
}