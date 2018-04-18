let Fired = true;
let canFire = false;

class Player {
  constructor(x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = Sprite("player");
    this.fireRate = 5;  //  fireRateCap == FPS 
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
      active: true,
      x: bulletPosition.x,
      y: bulletPosition.y,
      speed: 15
    }));

  }
  explode() {
    this.active = false;
    life--;
    if (life <= 0) {
      alert('U LOOSE!' + '\n\n score: ' + score);
      location.reload();
    }
    $('.life').text(life);
  }
  shoot() {
    if (Fired) {
      player.spawnBullet();
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
}

var player = new Player(50, 270, 20, 30, Sprite('player'));
