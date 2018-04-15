
class Player {
  constructor(x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = Sprite("player");
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
  shoot() {
    var bulletPosition = this.midpoint();

    playerBullets.push(new Bullet(
      true,
      bulletPosition.x,
      bulletPosition.y,
      5
    ));

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
                
        if (fireRateDelay < 0 || fireRateDelay == '') {
          fireRateDelay = defaultFireRateDelay;
          player.shoot();
        }
        fireRateDelay--;
      
      }
    }
  }
}

var player = new Player(50, 270, 20, 30, Sprite('player'));
