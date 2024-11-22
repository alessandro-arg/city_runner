class Enemie extends MovableObject {
  height = 250;
  width = 250;
  y = 415;
  ENEMIES_IMAGES = [
    "img/enemie/enemy_type_1/enemy1_run_frame_7.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_6.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_5.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_4.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_3.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_2.png",
    "img/enemie/enemy_type_1/enemy1_run_frame_1.png",
  ];

  constructor() {
    super().loadImage("img/enemie/enemy_type_1/enemy1_run_frame_7.png");
    this.loadImages(this.ENEMIES_IMAGES);
    this.x = 250 + Math.random() * 2500;
    this.animate(0.5);
    this.animateRun(100);
  }

  animateRun(time) {
    setInterval(() => {
      this.playAnimation(this.ENEMIES_IMAGES);
    }, time);
  }
}
