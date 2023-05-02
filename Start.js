class Start extends Phaser.Scene {
    constructor() {
      super("start");
    }
    preload() {
      this.cameras.main.setBackgroundColor(0);
    }
    create() {
      this.add.text(950, 550, "Click to begin");
      this.input.on('pointerdown', () => this.scene.start('Logo'));
    }
  }