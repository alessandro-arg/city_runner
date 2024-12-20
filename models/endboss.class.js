class Endboss extends MovableObject {
  height = 500;
  width = 500;
  y = 165;

  IDLE_BOSS = [
    "img/boss/idle/idle_boss_frame_1_mirrored.png",
    "img/boss/idle/idle_boss_frame_2_mirrored.png",
    "img/boss/idle/idle_boss_frame_3_mirrored.png",
    "img/boss/idle/idle_boss_frame_4_mirrored.png",
    "img/boss/idle/idle_boss_frame_5_mirrored.png",
  ];

  constructor() {
    super().loadImage("img/boss/idle/idle_boss_frame_1_mirrored.png");
    this.loadImages(this.IDLE_BOSS);
    this.x = 3200;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IDLE_BOSS);
    }, 150);
  }
}
