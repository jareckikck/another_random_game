class Enemy {
    constructor(en) {
        this.active = true;
        this.age = Math.floor(Math.random() * 128);
        this.color = "#A2B";
        this.x = CANVAS_WIDTH / 3 + Math.random() * CANVAS_WIDTH / 2;
        this.y = 0;
        this.xVelocity = 0
        this.yVelocity = 2;
        this.width = 32;
        this.height = 32;
        this.sprite = Sprite("enemy");
    }

    draw() {
        this.sprite.draw(canvas, this.x, this.y);
    }

    update() {
        var bounds = (this.x >= 0 && this.x <= CANVAS_WIDTH && this.y >= 0 && this.y <= CANVAS_HEIGHT); // is in screen
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.xVelocity = 10 * Math.sin(this.age * Math.PI / 64);
        this.age++;
        this.active = this.active && bounds;
        if(!bounds){
            // enemiesDead++;
            this.explode()
            console.log('wall');
        }
    };

    explode() {
        score++;
        enemiesDead++;
        this.active = false; 
        $('.lvl-kills').text(enemiesDead);      
        $('.lvl-limit').text(enemiesLimit);      
        $('.score').text(score);
        console.log('enemiesDead: '+ enemiesDead);
    };

};
