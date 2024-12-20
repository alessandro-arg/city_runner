class Ammo extends MovableObject {
  y = 550;
  width = 70;
  height = 70;

  AMMO_IMAGES = [
    "img/ammo/ammo_frame_1.png",
    "img/ammo/ammo_frame_2.png",
    "img/ammo/ammo_frame_3.png",
    "img/ammo/ammo_frame_4.png",
    "img/ammo/ammo_frame_5.png",
    "img/ammo/ammo_frame_6.png",
  ];

  constructor() {
    super().loadImage("img/ammo/ammo_frame_1.png");
    this.loadImages(this.AMMO_IMAGES);
    this.x = 250 + Math.random() * 3000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.AMMO_IMAGES);
    }, 130);
  }
}
