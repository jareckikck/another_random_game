class Bullet {
    constructor(bullet) {
        this.active = bullet.active || true;
        this.x = bullet.x || 0;
        this.y = bullet.y || 0;
        this.width = bullet.width || 4;
        this.height = bullet.height || 4;
        this.color = "#ff0000";
        this.speed = bullet.speed;
    }
    update() {
        var bounds = (this.x >= 0 && this.x <= CANVAS_WIDTH && this.y >= 0 && this.y <= CANVAS_HEIGHT);
        this.y -= this.speed;
        this.active = this.active && bounds;
    }
    draw() {

        canvas.fillRect(this.x, this.y, this.width, this.height);

    }
    explode() {
        this.active = false;

    }
}
 