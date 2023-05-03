var config = {
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  scene: [Start, Logo, Intro, Title, Loading, Jumpscare]
}

var game = new Phaser.Game(config);