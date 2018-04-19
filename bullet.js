class Bullet {
    constructor(b) {
        this.active = b.active || true;
        this.x = b.x || 0;
        this.y = b.y || 0;
        this.width = b.width || 4;
        this.height = b.height || 4;
        this.color = "#ff0000";
        this.speed = b.speed || 15;
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
