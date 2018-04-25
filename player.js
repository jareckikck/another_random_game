let Fired = true;
let canFire = false;

class Player {
  constructor(p) {
    this.x = p.x;
    this.y = p.y;
    this.width = p.width;
    this.height = p.height;
    this.sprite = p.sprite || Sprite("player");
    this.fireRate = p.fireRate || 5;  //  fireRateCap == FPS 
  }
  draw() {
    this.sprite.draw(canvas, this.x, this.y);
  }
  midpoint() {
    return {
      x: this.x + this.width / 0.85,
      y: this.y + this.height / 4.5
    };
  }
  spawnBullet() {
    var bulletPosition = this.midpoint();

    playerBullets.push(new Bullet({
      x: bulletPosition.x,
      y: bulletPosition.y,
    }));
  }
  
  shoot() {
    if (Fired) {
      this.spawnBullet();
      Fired = false;
      setTimeout(function () { canFire = true; }, 1000 / this.fireRate);
    }
    if (canFire) {
      canFire = !canFire;
      Fired = !Fired;
    }
  }
  move() {
    for (var direction in keys) {
      if (!keys.hasOwnProperty(direction)) continue;
      if (direction == 65) {
        player.x = (player.x >= 0) ? player.x -= 5 : player.x;
      }
      if (direction == 87) {
        player.y = (player.y >= 0) ? player.y -= 5 : player.y;
      }
      if (direction == 68) {
        player.x = (player.x <= borderRight) ? player.x += 5 : player.x;
      }
      if (direction == 83) {
        player.y = (player.y <= borderBottom) ? player.y += 5 : player.y;
      }
      if (direction == 69) {
        player.shoot();
      }
    }
  }
  explode() {
    life--;
    if (life <= 0) {
      alert('U LOOSE!' + '\n\n score: ' + score);
      location.reload();
    }
    $('.life').text(life);
  }
}

var player = new Player({
  x: 50,
  y: 270,
  width: 20,
  height: 30,
});
